# Inhalts-Audit BGS Gebäudeservice

**Stand 28.09.2026.** Geprüft wurde die Arbeitskopie unter `scratchpad/bgs-gebaeudeservice`, nur lesend. Im Repo wurde nichts geändert. Die offenen Änderungen im Arbeitsbaum (Hero, `content/de/hero.ts`, `IntroBand.tsx`) stammen aus der parallelen Hero-Session.

**Grundlage:** alle deutschen Texte in `content/de/*.ts`, der Seitenaufbau in `client/src/seiten/*` und `client/src/views/AreaView.tsx`, dazu `07` (E18, E28, E29, E30, E33, E34, E56), die Antwort-Runden `11` bis `20`, `23` und `24`. Die Maßstäbe von Google, Nielsen Norman Group und fünf Wettbewerbern wurden per Abruf gelesen, Kurzzitate stehen im Quellenteil am Ende.

**Zählung:** Es gibt **10 Leistungsseiten** unter `/leistungen/…` (nicht 11) und 3 Premium-Seiten. Das Objekt `leistungen` in `content/de/leistungen.ts` hat 10 Einträge, `seo.ts` ebenso. Der Dateikommentar spricht noch von «neun Leistungsseiten».

**Messwerkzeuge** (reproduzierbar, im selben Ordner):
- `dump.cjs` liest die TypeScript-Inhalte über `jiti` ohne Build und ohne Cache und schreibt `texte.json`.
- `aehnlichkeit.py` misst den Anteil identischer und fast identischer Sätze (Ergebnis in `aehnlichkeit.md`).
- `kreuz.py` prüft Kantonsseiten gegen den Rest der Website, dazu Titel- und FAQ-Muster (Ergebnis in `kreuz.md`).
- `hero.py` prüft die Länge der Hero-Kurzsätze.

**Schreibweise:** Die Analyse steht in deutscher Standardschreibung. Alle Textentwürfe stehen in Schweizer Rechtschreibung (ss, «»), ohne Gedankenstriche, und enthalten über das Unternehmen nur Aussagen, die nach E18, E41, E56 und E58 belegt sind.

---

## Kurzfazit

1. **Die Sätze sind nicht das Problem, die Schablone ist es.** Die Texte sind sauber und belegt. Sie sind konkreter als die Hauswartungsseiten von BiAg und Vierwald und bei den Grenzen offener als alle fünf geprüften Wettbewerber. Das «0815»-Gefühl entsteht, weil alle 13 Leistungs- und Premiumseiten dieselbe Abschnittsfolge, dieselben Titel und dieselben Standardantworten haben:
   - «Typische Objekte und Situationen» steht 7-mal da, «Woran Sie eine gute … erkennen» 6-mal, «Planung und Rhythmus» 5-mal.
   - «Kostenlos und unverbindlich» steht 37-mal in den deutschen Inhaltsdateien, «Geschäftsführer persönlich» 12-mal.
2. **Gemessener Doppelungsanteil:**
   - Auf den 13 Leistungs- und Premiumseiten stehen **29,0 % der Sätze** (283 von 976) identisch oder fast identisch auch auf einer anderen dieser Seiten. Nach Wörtern sind es 24,8 %.
   - Auf den 5 Kantonsseiten sind es **39,2 %** (71 von 181), gemessen gegen die anderen Kantone und den Rest der Website.
   - Wenn nur die Standardfragen (Regionen, Versicherung, allgemeine Kosten, Mittel, Sprachen), die zwei gleichen Ablaufschritte und der Abschlusstext wegfallen, sinkt der Wert auf den Leistungsseiten rechnerisch auf **14,0 %** der Sätze und 9,1 % der Wörter.
3. **Der Mehrwert, den Google verlangt, fehlt an einer bestimmten Stelle.** Die Seiten beschreiben gut, *was* gemacht wird. Sie liefern aber kaum etwas, das ein Entscheider nicht schon weiß oder nur hier findet: Vorlagen, Protokolle, Rechtspflichten, Materialkunde, Planungskalender.
   - Google fragt nach «original information» und Analyse «beyond the obvious» [G-HC].
   - Die Rater-Richtlinien messen den Hauptinhalt an «effort, originality, and talent or skill» [SQRG 3.2].
   - Jeder zehnte Satz verweist auf Besichtigung, Offerte oder Absprache (111 von 1'157 Sätzen auf Leistungs-, Premium- und Kantonsseiten).
4. **Die wertvollste Zielgruppe bekommt zu wenig Werkzeug.** Verwaltungen und Stockwerkeigentümer bringen den größten wiederkehrenden Auftragswert (E33, E34, R10b). Für ihre Arbeit fehlen Pflichtenheft als Vorlage, Mängelrüge bei der Abnahme, Nebenkosten und die Dokumentation von Kontrollgängen.
5. **Wenige sachliche Fehler, alle schnell behebbar** (Abschnitt «Sofortkorrekturen»):
   - Die Hecken-Antwort widerspricht der Vogelwarte Sempach.
   - Drei Kantonsseiten verlinken die Umzugsreinigung noch auf «Sonderreinigungen».
   - Die Premium-Übersicht übernimmt Ablauf und FAQ der Luxusimmobilien.
   - Die Datenschutzerklärung nennt die Karte nur auf der Kontaktseite, sie lädt aber auch auf `/einzugsgebiet`.
6. **Der Hauptinhalt ist der einzige Hebel, und genau dort sind die Wettbewerber schwach.** Ohne Preise, Bewertungen und Referenzen (E18) bleibt nur der Inhalt. Die Rater-Richtlinien werten fehlende Reputationsangaben bei kleinen Firmen ausdrücklich nicht als Mangel und schauen dann stärker auf den Inhalt [SQRG 3.3.5]. Ausschlüsse nennt kein geprüfter Wettbewerber vollständig, Regeln zu Schlüssel und Haftung nur mr. clean, einen Autor keiner [W-Tabelle].

---

## Messung: Doppelungen und Vertröstungen

**Methode:**
- Alle sichtbaren Texte je Seite aus den Inhaltsdateien, ohne SEO-Titel und Beschreibung.
- In Sätze zerlegt, Listenpunkte und Überschriften ab 4 Wörtern zählen als Satz.
- Zum Vergleich normalisiert: klein geschrieben, ohne Satzzeichen, Link-Ziele entfernt.
- «Identisch» heißt: gleicher Satz auf einer anderen Seite der Gruppe. «Fast identisch» heißt: Zeichenähnlichkeit (Python `difflib.SequenceMatcher`) von mindestens 0,8.
- Nicht mitgezählt sind die globalen Teile, die ohnehin auf jeder Seite stehen: Vertrauensleiste, Formular, Footer, Menü.

| Gruppe | Sätze | identisch | fast identisch | Anteil Sätze | Anteil Wörter |
|---|---|---|---|---|---|
| 10 Leistungsseiten | 792 | 151 | 64 | 27,1 % | 22,9 % |
| 3 Premium-Seiten | 184 | 53 | 4 | 31,0 % | 27,3 % |
| 13 Leistungs- und Premiumseiten zusammen | 976 | 210 | 73 | **29,0 %** | **24,8 %** |
| 5 Kantonsseiten untereinander | 181 | 31 | 14 | 24,9 % | 28,3 % |
| 5 Kantonsseiten gegen den Rest der Website | 181 | | | 29,3 % | |
| 5 Kantonsseiten gegen beides | 181 | | | **39,2 %** | |
| Projektion: 13 Seiten ohne Standard-FAQ, ohne die beiden gleichen Ablaufschritte, ohne Abschlusstext | 783 | 59 | 51 | 14,0 % | 9,1 % |

**Spitzenwerte je Seite:**
- Privatjet 40 %, Sonderreinigungen 38 %, Unterhaltsreinigung 36 %, Luxusimmobilien 35 %.
- Nidwalden 42 % und Obwalden 41 %, jeweils gegen beides gemessen.

**Häufigste identische Sätze:**
- «Ihre Anfrage bearbeitet der Geschäftsführer persönlich, Sie hören innerhalb von 24 Stunden an Werktagen von uns.» (15 Seiten)
- «Preise nennen wir deshalb erst in der Offerte …» (13)
- «Besichtigung und Offerte sind kostenlos und unverbindlich.» (13)
- «Das hängt vom Objekt und vom Aufwand ab.» (12)
- «In den ganzen Kantonen Luzern, Zug, Aargau, Nidwalden und Obwalden …» (11)
- «Wir haben eine Betriebshaftpflichtversicherung …» (11)
- Kantone: Die Kosten-Antwort `answers.kostenFaktoren` steht auf allen 5 Seiten wortgleich (4 Sätze).

**Vertröstungen:** 111 von 1'157 Sätzen (9,6 %) auf Leistungs-, Premium- und Kantonsseiten verweisen auf «bei der Besichtigung», «klären wir», «halten wir fest», «nach Absprache» oder «in der Offerte». Am häufigsten ist das bei Yacht (16 %), Büroreinigung (15 %), Fenster und Fassade (14 %) sowie Industrie (14 %). Einzeln ist das ehrlich. In dieser Häufung liest es sich wie «wir sagen es Ihnen später».

**Einordnung:**
- Ein Doppelungsanteil um 29 % ist kein Spam im Sinn von «scaled content abuse». Die Seiten haben eigenen Kern, eigene Leistungen und eigene Grenzen.
- Er macht die Seiten aber austauschbar im Sinn von [G-HC] («substantial value when compared to other pages») und [SQRG 3.2] (Originalität).
- Bei den Kantonsseiten liegt der Wert mit 39 % in der Nähe dessen, was die Spam-Richtlinie als «substantially similar pages» beschreibt [G-SPAM]. Deshalb stehen sie in den Maßnahmen weit oben, obwohl sie heute schon eigene Orte und Objekte haben.
- Die Messung ist eine Näherung: Kurze Listenpunkte unter 4 Wörtern zählen nicht, und die globale Vertrauensleiste ist nicht eingerechnet. Mit ihr wäre der Anteil höher.

---

## Die 10 wirksamsten Maßnahmen

Die Reihenfolge richtet sich nach den erwarteten **qualifizierten** Anfragen: Unterhaltsreinigung ab CHF 50'000 pro Jahr (E33), Verwaltungen und Unternehmen (E34), keine Mieter (E28). Dafür zählen Suchvolumen und Absicht aus `24`, Auftragswert und Passung zur Zielgruppe.

**Vorbehalt:** Es gibt noch keine Search-Console- und keine Anfragedaten (Seite `noindex`, R11a). Die Reihenfolge ist deshalb eine begründete Hypothese und nach 90 Tagen mit echten Daten zu prüfen.

| Rang | Maßnahme | Seiten | Warum mehr qualifizierte Anfragen | Beleg |
|---|---|---|---|---|
| 1 | **Hauswartung zur Werkzeugseite für Verwaltungen machen:** Pflichtenheft als Tabellenvorlage, Kontrollgang und Werkeigentümerhaftung, Abgrenzung «kleiner Unterhalt» | `/leistungen/hauswartung` | «hauswartung» hat 2'400 Suchen im Monat, zu 90 % informativ (24). Wer ein Pflichtenheft sucht, ist meist Verwaltung oder Stockwerkeigentümerschaft mit Vergabeabsicht. Der Auftrag ist wiederkehrend. Wettbewerber BiAg nennt die Leistungen in einem Satz, Vierwald ohne Ablauf und Vertrag | 24 (Long-Tail «pflichtenheft hauswartung» 4 × ~70), [W-BIAG], [W-VW], OR 58, OR 259, [BFU] |
| 2 | **Unterhaltsreinigung mit Muster-Leistungsverzeichnis und dem Abschnitt Nebenkosten** (Art. 256 und 257a OR) | `/leistungen/unterhaltsreinigung` | Kernleistung mit dem Richtwert E33. Verwaltungen müssen Reinigungskosten sauber in die Nebenkosten bringen. Das Verzeichnis macht Offerten vergleichbar und senkt die Hürde zur Anfrage | E33, 24 (unterhaltsreinigung 390, treppenhausreinigung 110), OR 256, OR 257a |
| 3 | **Formular qualifizieren:** Pflichtfeld «Sie sind» (Verwaltung, Stockwerkeigentümerschaft, Eigentümer, Unternehmen, Premium-Privatkunde) und «Grösse» (Fläche, Anzahl Wohnungen oder Liegenschaften) | Formular auf allen Seiten, `/kontakt` | Erhöht nicht die Menge, aber den Anteil einordenbarer Anfragen. Das ist die Voraussetzung für die Messung nach R10e (2 bis 3 Aufträge im Monat). Das Formular hat heute Leistung, Ort und Rhythmus, aber weder Rolle noch Größe | `navigation.ts › contactForm.fields`, W07, E33, 11 (3.10 Prüfplan Punkt 3) |
| 4 | **Standard-FAQ auf den 13 Leistungsseiten durch seitentypische Fragen ersetzen.** «In welchen Regionen sind Sie tätig?» und «Sind Sie versichert?» (je 10-mal) sowie die allgemeine Kostenantwort (11-mal) raus, stattdessen je Seite die Kostenfaktoren dieser Leistung und echte Nutzerfragen | alle Leistungs- und Premiumseiten | Senkt den Doppelungsanteil rechnerisch von 29 % auf 14 % und beantwortet die Fragen, die bei Google tatsächlich gestellt werden. Die Kostenfrage ist die häufigste Nutzerfrage (24, Befund 3) | [M-DUP], 24, [G-HC] |
| 5 | **Büroreinigung mit Leistungsverzeichnis nach Häufigkeit, Vertraulichkeit nach DSG und Offertvergleich** | `/leistungen/bueroreinigung` | Büros sind laut R3d und R10a die Hauptzielgruppe. mr. clean steht dort organisch auf Platz 1 (2'509 Wörter laut OnPage-Messung in 24) und behandelt Einflussfaktoren, Schlüssel und Offerte, nennt aber keine Ausschlüsse und keinen Autor | 24 (büroreinigung 320), [W-MRC], DSG Art. 8 |
| 6 | **Kantonsseiten entdoppeln:** kantonseigene Frage statt der wortgleichen Kostenantwort, Kasten «Kantonsdaten für die Planung» (ortsübliche Umzugstermine, Zufahrt, Zweitwohnungsanteil), keine Sätze mehr, die von Leistungsseiten kopiert sind, veraltete Links korrigieren | 5 Kantonsseiten, `/einzugsgebiet` | «reinigungsfirma luzern» 320, «aargau» 260, «zug» 170, dazu Aarau 140 und Baden 110. In der Stichprobe hat keine starke eigene Zielseite (24, Punkt 4). 39 % Doppelung ist das größte Risiko für den Doorway-Verdacht | [M-DUP], [G-SPAM], 24 |
| 7 | **Fenster und Fassade: Gewässerschutz beim Abwasser, Vorlage für die Mieterinformation, Planungskalender** | `/leistungen/fenster-und-fassadenreinigung` | «fensterreinigung» ist mit 1'600 Suchen die stärkste Einzelleistung. Die Fragen einer Verwaltung (Zugang zu Wohnungen, Abwasser, öffentlicher Grund) beantwortet heute kein geprüfter Wettbewerber | 24, GSchG Art. 6, [VSA] |
| 8 | **Umzugsreinigung auf Verwaltungen zuschneiden:** Abnahme und Mängelrüge nach Art. 267a OR, Kalender der Kündigungstermine, Abnahme-Checkliste Raum für Raum | `/leistungen/umzugsreinigung` | Das Volumen ist groß (Umzugsreinigung 720, mit Abnahmegarantie 170), die Suchenden sind aber überwiegend Mieter. Die sind nach E28 ausgeschlossen, deshalb Rang 8. Qualifiziert sind Verwaltungen zwischen zwei Mietverhältnissen und Eigentümer beim Verkauf. Für sie ist Art. 267a OR der eigentliche Engpass | E28, 24, OR 267a, [W-TIP], [W-CP] |
| 9 | **Ratgeber ausbauen und namentlich zeichnen:** drei neue Artikel entlang der Suchfragen von Verwaltungen, dazu Autor oder fachliche Prüfung mit Rolle und Stand, und die Lücke «Qualitätskontrolle und Vertretung» schließen | `/blog`, 2 Artikel | Informative Suchen führen über Ratgeber zur Firma (FIMI-Erkenntnis 4). Google fragt «Who»: «Do pages carry a byline» [G-HC]. Der Artikel «Reinigungsfirma finden» lässt Leser nach Qualitätskontrolle und Vertretung fragen, die eigene Antwortliste lässt genau diese beiden aus | [G-HC], FIMI `ERKENNTNISSE.md`, `ratgeber.ts` |
| 10 | **Premium: Materialkunde als Tabelle, eigene FAQ und eigener Ablauf auf der Übersicht, Kasten zur Geheimhaltungsvereinbarung** | `/premium`, 3 Premium-Seiten | Kaum Suchvolumen (villa reinigung 10). Premium verkauft über Vertrauen und Empfehlung (24, Befund 6). Doppelter Inhalt schwächt genau diesen Eindruck. Die Wirkung liegt in der Abschlussquote, nicht in der Reichweite | 24, [NNG-TRUST], `premium-uebersicht/06-ablauf.tsx`, `07-fragen.tsx` |

**Außerhalb der Website, aber mit größerer Wirkung als jede Textmaßnahme** (bereits in `24`, hier nur zur Einordnung): das Google-Unternehmensprofil korrigieren (Adresse, Kategorie «House cleaning service» widerspricht E28) und 301-Weiterleitungen von `bgs-service.ch` einrichten (Rank 87, 43 verweisende Domains).

---

## Sofortkorrekturen

| Nr. | Stelle | Befund | Korrektur | Beleg |
|---|---|---|---|---|
| K1 | `leistungen.ts › aussenUndGruen.faq` «Wann werden Hecken am besten geschnitten?» | Die Antwort «meist im Frühsommer und … im Spätsommer» liegt mitten in der Brutzeit. Die Schweizerische Vogelwarte in Sempach, also im eigenen Kanton, empfiehlt den Schnitt ausserhalb der Brutzeit, am besten im Winter | Entwurf in 3.9, Baustein 1 | [VOGELWARTE] |
| K2 | `kantone.ts › luzern.leistungen[2]`, `luzern.faq[3]`, `zug.leistungen[3]`, `obwalden.leistungen[1]` | Die Umzugsreinigung hat seit E81 eine eigene Seite. Diese Stellen verlinken noch auf `/leistungen/sonderreinigungen` und nennen die Umzugsreinigung dort als Teil der «Sonderreinigungen» | Links auf `/leistungen/umzugsreinigung`, Linktext «Umzugsreinigung mit Abnahmegarantie» | E81, `seo.ts` |
| K3 | `premium-uebersicht/06-ablauf.tsx`, `07-fragen.tsx` | Ablauf und FAQ der Premium-Übersicht sind die der Seite Luxusimmobilien (`dict.premium.luxusimmobilien.steps/faq`). Das ist doppelter Inhalt auf zwei Premium-Seiten | Eigene Einträge `premiumOverview.steps` und `premiumOverview.faq`, Entwurf in Abschnitt 5 | Code |
| K4 | `recht.ts › datenschutz`, Abschnitt «Karte» | «Auf der Kontaktseite zeigen wir eine Karte …». `ConsentMap` steht aber auch in `views/AreaView.tsx` (`/einzugsgebiet`) | Satz auf «Auf den Seiten Kontakt und Einzugsgebiet …» ändern. Das ist ein Rechtstext, also nach E70 Brandea vorlegen | Code |
| K5 | `kantone.ts › aargau.objekte[1]` | Zwei Sätze sind wörtlich von der Industrieseite übernommen («Maschinen reinigen wir nach Ihren Vorgaben …») | Durch einen Hinweis mit Link ersetzen, Entwurf in 7.3 | [M-DUP] (`kreuz.md`) |
| K6 | `seiten.ts › home.audiences` | Zwei der vier Karten meinen Premium («Private Eigentümer» und «Privatjets, Yachten und Hotels»). Hotels sind nach E28 B2B-Premium, stehen aber bei den Privatkunden | Zu drei Gruppen zusammenlegen, Entwurf in Abschnitt 1 | E28, E34 |

---

## Rückfragen vor der Umsetzung

Das sind neue Aussagen über das Unternehmen, also nach E18 und E70 als Fragebogen an Brandea, nicht vom Agenten zu entscheiden. Alle Textentwürfe unten kommen ohne diese Punkte aus. Wo eine Antwort den Text stärker machen würde, steht es beim Baustein.

| Nr. | Frage | Wofür | Warum wichtig |
|---|---|---|---|
| F1 | Wie kontrolliert BGS die Qualität (Kontrollgänge der Leitung, Rhythmus, Protokoll)? | Ratgeber «Reinigungsfirma finden», Unterhalt, Büro | Der eigene Ratgeber empfiehlt, genau danach zu fragen. Die Antwortliste «So beantwortet BGS diese Fragen» lässt es aus |
| F2 | Wie ist die Vertretung bei Ferien und Krankheit geregelt? | wie F1 | wie F1 |
| F3 | Hält BGS den GAV der Reinigungsbranche ein, und liegt eine Bestätigung der PK Reinigung vor? | Über uns, Ratgeber | BGS ist mit über 50 Mitarbeitenden unterstellt (Schwelle 6, S44). Die Einhaltung ist nicht geprüft (11, 3.7). Nur mr. clean nennt den GAV [W-MRC] |
| F4 | Wie wird das Abwasser bei der Fassadenreinigung aufgefangen und entsorgt? | Fenster und Fassade | Art. 6 GSchG. Ohne Antwort bleibt der Baustein reine Käuferinformation |
| F5 | Gibt es nach der Endreinigung oder der Grundreinigung ein schriftliches Übergabe- oder Rapportblatt, allenfalls mit Fotos? | Umzug, Bau, Grundreinigung | Hebt die Abnahmegarantie von TipTop und Clean Profis ab, die keine Grenzen und keinen Nachweis nennen |
| F6 | Darf der Name des Geschäftsführers (er steht bereits im Impressum, E62) auf Über uns und als «fachlich geprüft von» im Ratgeber stehen? | Über uns, Ratgeber | Google-Frage «Who» [G-HC], E-E-A-T [SQRG 3.4] |
| F7 | Gelten die Regeln für Schlüssel, Badges und Alarm (heute nur bei Premium bestätigt) auch im B2B, etwa mit einem Schlüsselprotokoll? | Büro, Hauswartung, Unterhalt | Schlüssel und Haftung sind für Verwaltungen kaufentscheidend. Nur mr. clean behandelt das («Nur mit Protokoll. Immer.») |
| F8 | Umzugsreinigung für Mieter bleibt ausgeschlossen (E28)? | Umzug | Offen aus E81. Das größte Suchvolumen liegt dort |

---

## Vorlage der Leistungs- und Premiumseiten

Alle 13 Seiten nutzen die Vorlage `client/src/seiten/leistung/`. Die Container V1 bis V9 sind deshalb gleich gebaut. Die Tabellen je Seite nennen die Vorlage-Container mit dem seitentypischen Befund und danach die eigenen Abschnitte.

| Nr. | Container (Datei) | Urteil | Grund | Beleg |
|---|---|---|---|---|
| V1 | Hero mit Anlass, H1, zwei Absätzen, zwei Knöpfen und Glasleiste der Eckdaten (`01-hero.tsx`) | **kürzen** (läuft in der Hero-Session) | Die Eckdaten wiederholen auf jeder Seite «Für», «Rhythmus» und «Gebiet». Entscheidungsrelevant wären seitentypische Eckdaten: «Nicht enthalten», «Garantie», «Einsatzzeiten», «Vorlauf» | [NNG-SCROLL] «Reserve the top of the page for high-priority content», `leistung/kontext.ts` hängt «Gebiet» an alle an |
| V2 | Vertrauensleiste mit 6 Punkten (`02-vertrauen.tsx`, `TrustStrip`) | **kürzen** auf 3 Punkte (Seit 2006, CHF 10 Mio., Offerte nach Besichtigung) | Identisch auf 13 Leistungs-, 5 Kantons- und 3 Übersichtsseiten. Die Punkte stehen auf derselben Seite nochmals in FAQ, Ablauf und Abschluss | `navigation.ts › chrome.trust`, [M-DUP] |
| V3 | Zickzack mit den Abschnitten 1 und 2 und Bild (`03-einsatz.tsx`) | **je Seite** | Der erste Abschnitt heißt auf 7 Seiten «Typische Objekte und Situationen». Diese prominente Stelle direkt unter dem Hero gehört dem stärksten Inhalt der Seite | [SQRG 5.2.2] «place the most helpful and essential MC near the top» |
| V4 | Umfang mit Checkliste und dunklem Kasten «Nicht Teil dieser Leistung» (`04-inhalt.tsx`) | **behalten** | Das stärkste Element der Vorlage. Kein geprüfter Wettbewerber nennt Ausschlüsse | [W-Tabelle], [NNG-TRUST] «Upfront Disclosure» |
| V5 | Weitere Abschnitte mit Verzeichnis und Offerte-Karte am Rand (`04-inhalt.tsx`) | **je Seite** | «Woran Sie eine gute … erkennen» steht 6-mal. Inhaltlich gut, als Titelmuster aber schablonenhaft. Besser als Abnahme-Checkliste zum Ausdrucken mit seitentypischem Titel | `kreuz.md` |
| V6 | Ablauf mit 3 bis 4 Schritten und Videos (`05-ablauf.tsx`) | **kürzen** | Die Schritte «Anfrage» und «Besichtigung und Offerte» sind auf 10 Seiten wortgleich. Die gleichen Schritte in einer Zeile nennen, dann nur die seitentypischen Schritte zeigen (Etappen, Abnahme, Pflegeplan) | `common.ts › steps`, [M-DUP] |
| V7 | Häufige Fragen (`06-fragen.tsx`) | **umschreiben** | 10-mal «In welchen Regionen …», 10-mal «Sind Sie versichert?», 11-mal allgemeine Kostenantwort. Ersetzen durch seitentypische Kostenfaktoren und Nutzerfragen (Maßnahme 4) | `kreuz.md`, 24 |
| V8 | Passt auch dazu, 3 Links (`07-verwandt.tsx`) | **behalten** | Die Texte sagen, *wann* die andere Leistung passt. Das ist gute Entscheidungsführung | [NNG-READ] |
| V9 | Abschluss mit Titel, Text und Formular (`PageFrame` › `ContactSection`) | **umschreiben** | Jeder Abschlusstext endet mit «kostenlos und unverbindlich». Besser ist ein konkreter Satz dazu, was für die Offerte gebraucht wird. Formular siehe Maßnahme 3 | `grep`: 37 Treffer in `content/de` |

---

## 1. Startseite `/`

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| 01 Hero: H1, Einleitung, 4 Kennzahlen, Sprachwahl | **kürzen** (Hero-Session) | Überladen. Die Kennzahlen stehen danach noch in Vertrauensleiste und Zusagen. «Vier Sprachen» steht 4-mal auf der Seite (Kennzahl, Sprachwahl, Vertrauensleiste, Zusagen) | `startseite/01-hero.tsx`, `02-vertrauen.tsx`, `06-zusagen.tsx` |
| 02 Vertrauensleiste (Register, Sprachen, 24 Stunden, kostenlos) | **zusammenlegen** mit den Kennzahlen zu einer Leiste direkt unter dem Hero | Zwei Leisten mit Kennzahlen hintereinander. «Kostenlos» steht 5-mal sichtbar (Leiste, Ablauf-Einleitung, Schritt 2, FAQ, Formular) | `07`, [NNG-READ] «Concise» |
| 03 Leistungen: 10 Karten und Premium-Karte | **behalten** | Klare Orientierung, kurze Texte, jede Karte verlinkt | `startseite/03-leistungen.tsx` |
| 04 Für wen wir arbeiten: 4 Gruppen mit je 3 Punkten | **umschreiben** | Zwei Karten meinen Premium, Hotels stehen falsch bei privat (K6). Die Punkte sind allgemein. Besser 3 Gruppen, jede mit einem Werkzeug-Link (Pflichtenheft, Leistungsverzeichnis Büro, Materialkunde) | E28, E34 |
| 05 Ablauf: 4 Schritte mit Videos | **kürzen** | Gleich wie auf Kontakt und fast gleich wie auf den Leistungsseiten. Auf der Startseite reicht eine kompakte Zeile | `seiten.ts › offerSteps` |
| 06 Zusagen: persönlich, versichert, Sprachen, umweltfreundlich | **ersetzen** durch Baustein 1.1 | Wiederholt die Vertrauensleiste. «Worauf Sie sich verlassen können» ist ein Versprechen, Baustein 1.1 ist eine prüfbare Information | [NNG-READ] «fact, not platitudes» |
| 07 Einzugsgebiet mit Karte | **behalten**, Kantonslinks mit Kurztext ergänzen | Führt zu den Kantonsseiten, die für «reinigungsfirma + Kanton» ranken sollen | 24 |
| 08 Häufige Fragen (6) | **umschreiben** | Behalten: Stundenpreis (Nutzerfrage), Unterhalt oder Hauswartung, Privathaushalte. Ersetzen: «kurzfristige Einsätze» (Antwort ohne Inhalt: «Rufen Sie uns an»), «umweltfreundliche Mittel» (steht auf 7 Seiten). Neu: «Was gehört nicht zu Ihrem Angebot?» | `seiten.ts › home.faq` |
| Abschluss: Titel, Text, Formular | **umschreiben** (Formular siehe Maßnahme 3) | Ohne Rolle und Größe lässt sich die Anfrage nicht nach E33 einordnen | W07 |
| **neu** | **hinzufügen**: 1.2 Grenzen auf einen Blick | Filtert unpassende Anfragen früh (Winterdienst, Mieter, normale Privathaushalte) und schafft Vertrauen durch Offenheit | [NNG-TRUST], E28, E29 |

### Baustein 1.1: Was Sie schriftlich erhalten (ersetzt Container 06)

> **Was Sie von uns schriftlich erhalten**
>
> Bevor wir zum ersten Mal bei Ihnen arbeiten, steht das Wichtige auf Papier. So wissen Verwaltung, Eigentümerschaft und unser Team, was gilt.
>
> - **Offerte:** nach der Besichtigung, schriftlich, kostenlos.
> - **Umfang:** welche Räume und Aufgaben dazugehören, wie oft und zu welchen Zeiten.
> - **Hauswartung:** wie oft wir vor Ort sind und wem wir Mängel melden.
> - **Nachfüllservice:** welche Artikel dazugehören und wer sie beschafft.
> - **Umzugsreinigung:** die Abnahmegarantie mit ihren Einzelheiten.
>
> Ändert sich die Nutzung, passen wir Umfang und Rhythmus mit Ihnen an und halten auch das fest.

Beleg: E56 (OFFERTE, NACHFUELL, ABNAHME), `leistungen.ts › hauswartung.lead`, `unterhaltsreinigung.steps`.

### Baustein 1.2: Grenzen auf einen Blick

> **Was wir nicht übernehmen**
>
> Damit Sie keine Zeit verlieren, sagen wir es gleich:
>
> - Winterdienst und Schneeräumung
> - Pikett- und Notfalldienst rund um die Uhr
> - Umzugsreinigungen im Auftrag von Mieterinnen und Mietern einzelner Wohnungen
> - Reinigung normaler Privathaushalte. Villen, Residenzen und Zweitwohnungen betreuen wir im [Premium-Bereich](/premium).
> - Wartung von Heizung, Lüftung, Lift und Brandschutz, grössere Reparaturen, Gartenbau und Neuanlagen

Beleg: E28, E29, E53, E56 (GARTEN), `leistungen.ts › hauswartung.scope.notIncluded`, `facilityServices.scope.notIncluded`.

---

## 2. Leistungsübersicht `/leistungen`

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| 01 Hero: H1 und Einleitung | **kürzen** | «Nicht sicher, was passt? Wir klären es bei der Besichtigung» steht 3-mal auf der Seite (Einleitung, Wegweiser, Abschluss) | `seiten.ts › servicesOverview` |
| 02 Vertrauensleiste | **kürzen** (V2) | wie V2 | [M-DUP] |
| 03 Abschnittsleiste | **behalten** | Orientierung auf einer langen Seite | [NNG-READ] |
| 04 Wegweiser «Welche Leistung passt?» (10 Situationen) | **behalten** und nach oben | Beste Entscheidungshilfe der Website: Situation, dann Leistung | [NNG-READ] |
| 05 Leistungen in 3 Gruppen | **behalten** | klar gegliedert |  |
| 06 «Bei jeder Leistung gleich» (6 Grundsätze) | **kürzen** auf «Umfang schriftlich» und «Klare Grenzen» | 4 von 6 wiederholen Vertrauensleiste und Zusagen (persönlich, Besichtigung, umweltfreundlich, Rhythmus) | `seiten.ts › servicesOverview.principles` |
| 07 Premium-Hinweis | **behalten** | trennt Premium sauber ab | E16 |
| 08 Häufige Fragen (5) | **umschreiben** | Die Kostenantwort ist allgemein. «Winterdienst» und «Privathaushalte» passen besser in Baustein 1.2. Ersetzen durch Baustein 2.1 | `answers.kosten` |
| Abschluss | **behalten** | Der Text «Nicht sicher, was Sie brauchen?» passt zur Übersicht |  |
| **neu** | **hinzufügen**: 2.1 Vergleichstabelle, 2.2 Jahreskalender | Entscheidungsinformation, die nur die Übersicht bündeln kann | [NNG-B2B] |

### Baustein 2.1: Vier Leistungen im Vergleich

> **Reinigung, Grundreinigung, Hauswartung oder alles zusammen?**
>
> | | Unterhaltsreinigung | Grundreinigung | Hauswartung | Facility Services |
> |---|---|---|---|---|
> | Was | Reinigung in einem festen Rhythmus | einmaliger, gründlicher Einsatz | Betreuung der Liegenschaft: Kontrollgänge, Kleinreparaturen, Meldungen | mehrere Leistungen in einem Vertrag |
> | Wie oft | mehrmals pro Woche | einmalig oder in grösseren Abständen | so oft wie vereinbart | je Leistung |
> | Typischer Anlass | Treppenhaus, Büro oder Gewerbefläche sollen laufend sauber sein | Kalk, Fett, alte Pflegeschichten, vor einer Neuvermietung | der bisherige Hauswart hört auf, eine Liegenschaft wird neu übernommen | mehrere Firmen sollen durch eine ersetzt werden |
> | Nicht enthalten | Grundreinigung, Fenster aussen | laufende Reinigung | Winterdienst, Pikett, grössere Reparaturen | technisches Facility Management, Winterdienst, Vermittlung von Handwerkern |
> | Mehr | [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) | [Grund- und Sonderreinigung](/leistungen/sonderreinigungen) | [Hauswartung](/leistungen/hauswartung) | [Facility Services](/leistungen/facility-services) |

Beleg: alle Werte aus `leistungen.ts` (facts, scope, notIncluded), R10c.

### Baustein 2.2: Das Jahr einer Liegenschaft

> **Welche Arbeit wann ansteht**
>
> Viele Arbeiten an einer Liegenschaft haben ihre Zeit. So verteilen sie sich typischerweise über das Jahr:
>
> - **Januar bis März:** Grundreinigung von Büro- und Gewerbeflächen in ruhigen Wochen. Hecken und Sträucher schneiden, solange keine Vögel brüten. Wohnungswechsel auf Ende März, wo das der ortsübliche Termin ist.
> - **April bis Juni:** Fenster und Glas nach dem Winter und nach dem Blütenstaub. Wege und Plätze vom Winterschmutz befreien, erster Rasenschnitt. Wohnungswechsel auf Ende Juni.
> - **Juli und August:** Grundreinigung in den Betriebsferien, Hallen und Maschinen bei geplanten Stillständen. Rasen und Unkraut in Fugen und auf Plätzen.
> - **September bis November:** Wohnungswechsel auf Ende September. Laub, Beete für den Winter, Fenster vor der dunklen Jahreszeit.
> - **Dezember:** Den Winterdienst bieten wir nicht an. Vergeben Sie Schneeräumung und Salzen rechtzeitig an eine Firma, die das übernimmt.

Beleg: Heckenschnitt [VOGELWARTE]; Termine [TERMINE] (Zug, Aargau, Nidwalden, Obwalden: Ende März, Juni, September; Luzern ohne ortsübliche Termine), E29, `aussenUndGruen.sections` (Jahreslauf). Vor der Veröffentlichung die Termine je Gemeinde bei mietrecht.ch nachprüfen, denn die Quellen sind Übersichten von Portalen.

---

## 3. Leistungsseiten

### 3.1 Unterhaltsreinigung `/leistungen/unterhaltsreinigung`

Doppelung 36 % der Sätze, 896 Wörter, 8 Fragen.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** | Eckdaten «Für», «Rhythmus», «Inbegriffen» sind gut. «Inbegriffen: Nachfüllservice» als stärkstes Merkmal nach vorne | `facts` |
| V2 Vertrauensleiste | **kürzen** | wie V2 |  |
| V3 Zickzack 1: «Typische Objekte und Situationen» | **umschreiben** zu «Wann eine Reinigungsfirma übernehmen sollte» | Der zweite Absatz nennt echte Auslöser (Mieterschaft reinigt nicht mehr, bisherige Firma hört auf, neue Liegenschaft). Er ist stärker als der erste und gehört nach vorne | `sections[0]` |
| V3 Zickzack 2: «Nachfüllservice» | **behalten** | Eigene, bestätigte Leistung (E56 NACHFUELL), Unterscheidungsmerkmal | E56 |
| V4 Umfang und Nicht enthalten | **behalten** | Klare Abgrenzung zu Büro, Grundreinigung, Fenster und Privathaushalten |  |
| V5 «Planung und Rhythmus» | **ersetzen** durch Baustein 3.1.1 | Die Liste nennt nur «häufiger» und «seltener». Ein Muster-Leistungsverzeichnis ist das, was Verwaltungen für den Offertvergleich brauchen | [W-MRC] empfiehlt «Basisleistungen, Zusatzleistungen und Ausschlüssen», keiner liefert sie |
| V5 «Woran Sie eine gute Unterhaltsreinigung erkennen» | **umschreiben** zum Rundgang-Protokoll (Baustein 3.1.3) | Inhalt gut, Titelmuster 6-mal | `kreuz.md` |
| V5 «Zusammenarbeit mit Verwaltung und Eigentümerschaft» | **behalten** und um Baustein 3.1.2 ergänzen | Aushang und Putzraum sind praxisnah |  |
| V6 Ablauf | **kürzen** | wie V6 |  |
| V7 Fragen | **umschreiben** | Behalten: Rhythmus, Unterschied zur Grundreinigung, Vorbereitung der Mieterschaft. Streichen: Mittel, Regionen, «Firma wählen» (steht im Ratgeber). Neu: «Können wir die Kosten über die Nebenkosten abrechnen?», «Wer stellt Reinigungsmittel und Geräte?» (Antwort nach E56: nach Absprache, in der Offerte festgehalten) | [M-DUP] |
| V8 Passt auch dazu | **behalten** |  |  |
| V9 Abschluss | **umschreiben** | «Beschreiben Sie uns Objekt, Fläche und gewünschten Rhythmus» ist gut. Ergänzen: «Haben Sie ein bestehendes Pflichtenheft? Schicken Sie es mit.» |  |

#### Baustein 3.1.1: Muster-Leistungsverzeichnis für Treppenhaus und Allgemeinflächen

> **Was in einem Leistungsverzeichnis steht**
>
> Ein Leistungsverzeichnis macht Offerten vergleichbar: Jede Firma rechnet mit denselben Flächen, Tätigkeiten und Häufigkeiten. Dieses Beispiel zeigt den Aufbau für ein Mehrfamilienhaus. Ihr Verzeichnis entsteht nach der Besichtigung und richtet sich nach der Nutzung Ihrer Liegenschaft.
>
> | Bereich | Tätigkeit | Wie oft (Beispiel) |
> |---|---|---|
> | Eingang und Windfang | Boden feucht reinigen, Schmutzmatte absaugen, Glastür beidseitig | bei jedem Einsatz |
> | Treppen und Podeste | wischen und feucht reinigen | bei jedem Einsatz oder wöchentlich, je nach Nutzung |
> | Handläufe, Lichtschalter, Liftknöpfe | feucht abwischen | bei jedem Einsatz |
> | Lift | Boden, Wände, Spiegel und Türen der Kabine | bei jedem Einsatz |
> | Briefkastenanlage, Türen und Zargen | abwischen | wöchentlich |
> | Waschküche und Trockenraum | Boden, Waschtrog, Ablagen | wöchentlich |
> | Keller- und Estrichgänge | wischen | monatlich oder nach Bedarf |
> | Fenster im Treppenhaus, innen | reinigen | nach Vereinbarung |
> | Verbrauchsmaterial | nachfüllen, soweit vereinbart | bei jedem Einsatz |
>
> Das Beispiel ist keine Offerte. Welche Bereiche wir bei Ihnen übernehmen und wie oft, halten wir nach der Besichtigung schriftlich fest.

Beleg: Tätigkeiten aus `unterhaltsreinigung.scope.items` und `sections`. Rhythmus «mehrmals pro Woche» (E56 RHYTHMUS). Die Häufigkeiten sind als Beispiel gekennzeichnet, keine Zusage.

#### Baustein 3.1.2: Reinigung der Allgemeinflächen und die Nebenkosten

> **Wer die Reinigung bezahlt**
>
> Die Vermieterin muss die Liegenschaft in einem Zustand erhalten, der zum vereinbarten Gebrauch taugt (Art. 256 OR). Dazu gehört die Reinigung von Treppenhaus, Eingang und Waschküche.
>
> Auf die Mieterschaft überwälzen lassen sich diese Kosten nur, wenn der Mietvertrag sie als Nebenkosten besonders vereinbart (Art. 257a Abs. 2 OR). Gerichte verlangen, dass die Posten klar und einzeln genannt sind. Für die Abrechnung hilft es deshalb, wenn Offerte und Rechnung die Reinigung je Liegenschaft ausweisen.
>
> Dieser Hinweis gibt einen Überblick und ersetzt keine Rechtsberatung.

Beleg: [OR-256], [OR-257a]. Keine Aussage über BGS, nur Käuferinformation.

#### Baustein 3.1.3: Rundgang-Protokoll zum Ausdrucken

> **Rundgang nach der Reinigung**
>
> Mit diesem Protokoll sehen Sie bei einem Rundgang in wenigen Minuten, wie gründlich gereinigt wird.
>
> | Punkt | in Ordnung | Bemerkung |
> |---|---|---|
> | Handläufe, Lichtschalter und Liftknöpfe sauber | ☐ | |
> | Ecken, Treppenkanten und Flächen hinter Türen ohne Schmutz | ☐ | |
> | Sanitärräume frisch, Seife und Papier aufgefüllt | ☐ | |
> | Glastüren im Eingang ohne Schlieren und Fingerabdrücke | ☐ | |
> | Vereinbarter Umfang schriftlich vorhanden | ☐ | |
>
> Fällt Ihnen etwas auf, melden Sie es uns mit dem Datum des Rundgangs.

Beleg: Punkte aus `unterhaltsreinigung.sections[3]` (heute «Woran Sie …»).

### 3.2 Büro- und Praxisreinigung `/leistungen/bueroreinigung`

Doppelung 24 %, 1'065 Wörter (die längste Leistungsseite), 10 Fragen.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** | Der Satz zu den vier Sprachen gehört in eine Eckdaten-Zeile, nicht in die Einleitung |  |
| V2 Vertrauensleiste | **kürzen** | wie V2 |  |
| V3 Zickzack 1: «Typische Objekte und Situationen» | **umschreiben** | «Morgens soll alles sauber und bereit sein, ohne dass jemand die Reinigung bemerkt» ist gut. Der Rest ist allgemein |  |
| V3 Zickzack 2: «Was bei einem Einsatz passiert» | **behalten** | Echtes Fachwissen: Reihenfolge von oben nach unten, von sauber nach schmutzig | [G-HC] «beyond the obvious» |
| V4 Umfang und Nicht enthalten | **behalten** | Die Abgrenzung zur Instrumentenaufbereitung in Praxen ist stark |  |
| V5 «Reinigung in Praxen» | **behalten** | wichtig für Praxen, sauber abgegrenzt (Hygieneplan) | R10a |
| V5 «Zeiten und Zugang» | **kürzen** und mit Baustein 3.2.2 verbinden | Überschneidet sich mit FAQ 4 (Schlüsselübergabe) |  |
| V5 «Was den Aufwand bestimmt» | **behalten** | Genau das fragen Nutzer («Was kostet …»). Ausbauen mit Baustein 3.2.3 | 24 |
| V5 «Welche Angaben in Ihre Offertanfrage gehören» | **kürzen** | Doppelt zu `/kontakt` (Abschnitt «Was Ihre Anfrage enthalten sollte»). Hier nur die bürotypischen Punkte behalten | `seiten.ts › contact.brief` |
| V5 «Woran Sie eine gute Büroreinigung erkennen» | **umschreiben** zur Checkliste | wie V5 |  |
| V6 Ablauf | **kürzen** | wie V6 |  |
| V7 Fragen (10) | **kürzen** auf 7 | Streichen: Mittel, Regionen, allgemeine Kostenantwort. Die Haftungsfrage ist gut. Neu: «Wie gehen Sie mit vertraulichen Unterlagen um?» (Antwort aus Baustein 3.2.2) | [M-DUP] |
| V8, V9 | **behalten** bzw. **umschreiben** | wie Vorlage |  |

#### Baustein 3.2.1: Leistungsverzeichnis Büro nach Häufigkeit

> **Was wie oft gereinigt wird (Beispiel)**
>
> | Bei jedem Einsatz | Wöchentlich | Nach Vereinbarung |
> |---|---|---|
> | Papierkörbe leeren, Säcke ersetzen | freie Arbeitsflächen feucht abwischen | Heizkörper, Türen und Zargen |
> | Teeküche: Spüle, Ablagen, Kaffeemaschine aussen | Türgriffe, Lichtschalter, Glastüren | Bildschirme, Tastaturen und Telefone |
> | Sanitärräume reinigen | Böden in Einzelbüros und Sitzungszimmern | Stuhlgestelle und Polster |
> | Verbrauchsmaterial nachfüllen | Empfang und Wartebereich gründlich | Pflanzen |
> | Böden in Gängen und im Empfang | | Innenseite von Fenstern |
>
> Welche Punkte bei Ihnen dazugehören und wie oft, halten wir nach der Besichtigung in der Offerte fest.

Beleg: Tätigkeiten aus `bueroreinigung.scope.items` und `sections[1]` («Ob auch Bildschirme, Tastaturen … dazugehören, klären wir»). Die Spalten sind als Beispiel gekennzeichnet.

#### Baustein 3.2.2: Vertrauliche Bereiche und Datenschutz

> **Vertrauliche Räume richtig regeln**
>
> Wer abends reinigt, kommt in Räume mit Personendaten und Geschäftsunterlagen. Nach dem Datenschutzgesetz muss Ihr Betrieb für eine Datensicherheit sorgen, die dem Risiko angemessen ist (Art. 8 DSG). Diese Punkte regeln Sie am besten vor dem ersten Einsatz:
>
> - welche Räume betreten werden dürfen und welche nur, wenn jemand aus Ihrem Team da ist
> - aufgeräumte Tische: Unterlagen versorgt, Bildschirme gesperrt
> - eigene, abschliessbare Behälter für vertrauliches Papier, die nicht mit dem Altpapier geleert werden
> - wer Schlüssel, Badges und Codes erhält und was bei Verlust gilt
> - in Praxen: Patientenunterlagen und Geräte bleiben ausserhalb der Reinigung
>
> Welche Regeln bei Ihnen gelten, besprechen wir bei der Besichtigung.

Beleg: [DSG-8]. Keine neue Unternehmensaussage. Stärker würde der Baustein mit einer Antwort auf F7 (Schlüsselprotokoll im B2B).

#### Baustein 3.2.3: Offerten vergleichen in sieben Zeilen

> **So vergleichen Sie Offerten für die Büroreinigung**
>
> Ein Stundensatz allein sagt wenig. Legen Sie die Offerten nebeneinander und prüfen Sie diese sieben Zeilen:
>
> 1. Wie viele Stunden pro Einsatz sind gerechnet?
> 2. Wie viele Einsätze pro Monat?
> 3. Welcher Betrag pro Monat ergibt sich, mit oder ohne Mehrwertsteuer?
> 4. Ist Verbrauchsmaterial enthalten, und wer beschafft es?
> 5. Gibt es Zuschläge für Einsätze am Abend, in der Nacht oder am Wochenende?
> 6. Wer vertritt das Team bei Ferien oder Krankheit?
> 7. Wie lange läuft der Vertrag, und mit welcher Frist ist er kündbar?
>
> Mehr dazu im Ratgeber: [Was kostet eine Unterhaltsreinigung?](/blog/reinigungskosten-schweiz)

Beleg: Fachwissen, deckt sich mit `ratgeber.ts › kosten.sections[3]`. Nachtzuschlag nach GAV siehe 11.2.

### 3.3 Grund- und Sonderreinigung `/leistungen/sonderreinigungen`

Doppelung 38 % (höchster Wert der B2B-Seiten), 758 Wörter.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** | Der zweite Absatz verweist schon auf die Umzugsreinigung. Das reicht im Umfang |  |
| V2 | **kürzen** | wie V2 |  |
| V3 Zickzack 1: «Was eine Grundreinigung ausmacht» | **behalten** | konkret: Kalk, Urinstein, Fett, Fugen, alte Pflegeschichten |  |
| V3 Zickzack 2: «Typische Anlässe» | **behalten** | Auslöser für die Entscheidung |  |
| V4 Umfang | **umschreiben** | 4 von 5 Punkten sind Links auf andere Seiten. Die Seite heißt «Grund- und Sonderreinigung», der Umfang sollte die Grundreinigung selbst aufschlüsseln (Böden, Fugen, Sanitär, Küchen, Sockelleisten, Türen) | `sonderreinigungen.scope` |
| V5 «Umzugs- und Wohnungsendreinigung» | **streichen** | wiederholt Einleitung, Umfang und FAQ 5 | [M-DUP] |
| V5 «Planung und Rhythmus» | **behalten** und um Baustein 3.3.2 ergänzen | Ankündigung an die Mieterschaft ist Praxiswissen |  |
| V5 «Woran Sie eine gute Grundreinigung erkennen» | **behalten** und als Checkliste betiteln | «Fugen wieder hell, nicht nur die Platten» ist ein guter Prüfpunkt |  |
| V6 Ablauf | **kürzen** | wie V6 |  |
| V7 Fragen (8) | **umschreiben** | «Was ist eine Grundreinigung?» wiederholt Zickzack 1. «Übernehmen Sie Umzugsreinigungen?» doppelt. Neu: «Welche Mittel für Naturstein?», «Wie lange sind die Räume gesperrt?», «Was, wenn der Boden beschädigt statt verschmutzt ist?» (Baustein 3.3.3) |  |
| V8, V9 | wie Vorlage |  |  |
| **neu** | **hinzufügen**: 3.3.1 Materialkunde Bodenbeläge | «grundreinigung» 170 Suchen, Absicht informativ (24). Materialwissen ist echter Mehrwert | 24 |

#### Baustein 3.3.1: Welcher Boden welche Reinigung verträgt

> **Materialkunde für die Grundreinigung**
>
> | Belag | Worauf es ankommt | Was schadet |
> |---|---|---|
> | Marmor, Kalkstein, Travertin | pH-neutrale Mittel, wenig Wasser auf offenen Poren | Säure, auch Essig und Kalklöser: Sie verätzen die Oberfläche |
> | Granit | robust, Rückstände alter Pflegemittel gründlich entfernen | scheuernde Pads auf poliertem Stein |
> | Keramische Plättli mit Zementfugen | Kalk an den Platten gezielt lösen | saure Reiniger, die länger auf den Fugen stehen |
> | Linoleum | milde Mittel, danach Pflegefilm | stark alkalische Mittel, stehendes Wasser |
> | Parkett, versiegelt oder geölt | nebelfeucht, geöltes Parkett braucht danach Pflegeöl | nasses Wischen, Dampf |
> | Kunststoff (PVC, Vinyl) | alte Pflegeschichten vollständig abtragen, bevor neu gepflegt wird | Lösungsmittel |
>
> Welche Beläge bei Ihnen verlegt sind und welches Vorgehen passt, klären wir vor Ort.

Beleg: Fachwissen. `sonderreinigungen.sections[0]` nennt schon «Naturstein, Plättli, Linoleum oder Parkett». Vor der Veröffentlichung fachlich durch den Kunden gegenlesen lassen (E56 LEKTORAT).

#### Baustein 3.3.2: Vorlage für den Aushang

> **Aushang für die Mieterschaft (Vorlage)**
>
> *Grundreinigung im Treppenhaus*
>
> Am [Datum] zwischen [Uhrzeit] und [Uhrzeit] reinigen wir das Treppenhaus [und die Waschküche] gründlich. In dieser Zeit sind die Böden nass und einzelne Bereiche kurz gesperrt. Bitte stellen Sie Schuhe, Velos und Kinderwagen bis am Vorabend in Ihre Wohnung oder in den Keller.
>
> Fragen beantwortet [Verwaltung, Telefon].

Beleg: `sonderreinigungen.sections[3]` («In Liegenschaften mit Mieterschaft braucht es eine Ankündigung»).

#### Baustein 3.3.3: Wann eine Reinigung nicht mehr reicht

> **Verschmutzt oder beschädigt?**
>
> Eine Grundreinigung entfernt Schmutz, keine Schäden. Stumpfe Flecken in Marmor sind oft verätzt, nicht verschmutzt. Abgelaufenes Parkett braucht Schleifen und Versiegeln, gerissene Fugen braucht jemand, der Plättli verlegt. Was wir bei der Besichtigung sehen, sprechen wir offen an, damit Sie die richtige Arbeit vergeben.

Beleg: Fachwissen. «offen ansprechen» entspricht `about.work` («Was nicht dazugehört, sagen wir offen»).

### 3.4 Umzugsreinigung `/leistungen/umzugsreinigung`

Doppelung 25 %, 910 Wörter. Die Seite ist inhaltlich gut und die einzige, die schon eine echte Nutzerfrage mit Rechtsbezug beantwortet.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** | Die Abnahmegarantie gehört in den Kurzsatz (Hero-Session hat das) |  |
| V2 | **kürzen** | wie V2 |  |
| V3 Zickzack 1: «Die Abnahmegarantie» | **behalten** | Die Grenze der Garantie (Schäden, Abnutzung) ist ehrlicher als bei TipTop, das keine Grenzen nennt | [W-TIP] «ABSENT» |
| V3 Zickzack 2: «Wie sauber muss eine Wohnung bei der Übergabe sein?» | **umschreiben** | Beantwortet die Nutzerfrage (24) aus Sicht der Mieter. Die Zielgruppe ist nach E28 die Verwaltung. Ersetzen durch Baustein 3.4.1 und den Mieterteil kürzen | E28, 24 |
| V4 Umfang | **behalten** | vollständig, mit klaren Ausschlüssen |  |
| V5 «Planung und Termin» | **ersetzen** durch Baustein 3.4.2 | «zu den ortsüblichen Umzugsterminen» bleibt vage, die Termine sind bekannt | [TERMINE] |
| V5 «Für wen wir die Umzugsreinigung übernehmen» | **kürzen** | Der Ausschluss der Mieter steht schon im Umfang und in FAQ 6 |  |
| V5 «Woran Sie eine gute Endreinigung erkennen» | **ersetzen** durch Baustein 3.4.3 | 5 Punkte, eine Verwaltung prüft rund 25 |  |
| V6 Ablauf | **behalten** | Die Schritte sind hier seitentypisch (Endreinigung, Abnahme) |  |
| V7 Fragen (8) | **umschreiben** | Kostenfrage mit echten Faktoren ist gut, behalten. Regionen und Versicherung streichen. Neu: «Was muss die Verwaltung bei der Abnahme beachten?» (kurz, mit Link auf Baustein 3.4.1) |  |
| V8, V9 | wie Vorlage |  |  |

#### Baustein 3.4.1: Für Verwaltungen: Abnahme und Mängelrüge

> **Abnahme: erst prüfen und rügen, dann reinigen**
>
> Bei der Rückgabe muss die Vermieterin den Zustand der Wohnung prüfen und Mängel, für die die Mieterschaft einzustehen hat, sofort melden (Art. 267a OR). Wer das versäumt, verliert diese Ansprüche. Ausgenommen sind nur Mängel, die bei üblicher Prüfung nicht erkennbar waren.
>
> Für die Praxis heisst das:
>
> - Ist die Wohnung bei der Rückgabe nicht sauber, halten Sie das im Protokoll fest, bevor eine Reinigung den Zustand verändert.
> - Mängel einzeln und genau beschreiben. «Küche schmutzig» genügt nicht, «Backofen und Dampfabzug mit Fettfilm» schon.
> - Verschmutzung, normale Abnutzung und Schäden getrennt aufführen.
> - Das Protokoll der Mieterschaft gleich aushändigen oder umgehend zustellen.
>
> Danach reinigen wir die Wohnung für die nächste Vermietung, zum vereinbarten Termin.
>
> Dieser Hinweis gibt einen Überblick und ersetzt keine Rechtsberatung.

Beleg: [OR-267a], [RÜGE] (Anforderungen an die Mängelrüge, Protokoll als Rüge nur bei Aushändigung, Beginn mit der Rückgabe aller Schlüssel, Trennung von Abnutzung und Schaden). Mit einer Antwort auf F5 (Rapport mit Fotos) wird der Baustein deutlich stärker.

#### Baustein 3.4.2: Kalender der Wohnungswechsel

> **Wann Wohnungswechsel anstehen**
>
> Ohne andere Abmachung im Mietvertrag gelten ortsübliche Kündigungstermine. Nach den gängigen Übersichten sind das:
>
> | Kanton | Ortsübliche Termine |
> |---|---|
> | Zug, Aargau, Nidwalden, Obwalden | Ende März, Ende Juni, Ende September |
> | Luzern | keine ortsüblichen Termine, massgebend ist der Mietvertrag |
>
> Um diese Stichtage häufen sich Abnahmen und Endreinigungen. So planen Sie:
>
> - Die Reinigung anfragen, sobald die Kündigung eingegangen ist.
> - Die Reinigung zwischen Auszug und Abnahme legen, mit möglichst wenig Zeit dazwischen.
> - Strom und Wasser angeschlossen lassen, Schlüssel für Wohnung, Keller, Estrich und Briefkasten bereitlegen.
>
> Die Termine für Ihre Gemeinde nennt die zuständige Schlichtungsbehörde.

Beleg: [TERMINE] (comparis 2021, homegate, ImmoScout24, K-Tipp). Vor der Veröffentlichung je Kanton bei mietrecht.ch prüfen, weil die Quellen Portale sind und Gemeinden abweichen können.

#### Baustein 3.4.3: Abnahme-Checkliste Raum für Raum

> **Checkliste für die Abnahme**
>
> **Küche:** Backofen mit Blechen und Gittern · Kochfeld · Dampfabzug mit Fettfilter · Kühlschrank mit Dichtungen und Gemüsefach · Geschirrspüler mit Sieb · Schränke innen, auch oben · Spüle und Armatur ohne Kalk
>
> **Bad und WC:** Armaturen, Duschglas und Plättli ohne Kalkränder · Fugen · Spiegel und Spiegelschrank · Abläufe · Lüftungsgitter
>
> **Fenster:** Glas innen und aussen · Rahmen und Falze · Fensterbänke · Storen oder Fensterläden, soweit vereinbart
>
> **Alle Räume:** Böden und Sockelleisten · Einbauschränke · Türen und Zargen · Lichtschalter und Steckdosen · Heizkörper
>
> **Nebenräume:** Balkon oder Sitzplatz · Keller- und Estrichabteil · Briefkasten
>
> Den genauen Umfang halten wir nach der Besichtigung in der Offerte fest.

Beleg: erweitert aus `umzugsreinigung.scope.items` und `sections[4]`. Die Punkte Geschirrspüler, Heizkörper, Lüftungsgitter und Abläufe sind neu. Vor der Veröffentlichung klären, ob sie zum Umfang gehören. Sonst als «prüft die Verwaltung» markieren.

### 3.5 Bau- und Bauendreinigung `/leistungen/baureinigung`

Doppelung 24 %, 770 Wörter.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** | Zielgruppe (Bauherrschaften, Architekturbüros, Generalunternehmen) steht doppelt in Einleitung und Eckdaten |  |
| V2 | **kürzen** | wie V2 |  |
| V3 Zickzack 1: «Typische Objekte und Situationen» | **kürzen** | Der zweite Absatz («früh in den Terminplan aufnehmen») ist der Nutzen. Er gehört in Baustein 3.5.1 |  |
| V3 Zickzack 2: «Was bei der Bauendreinigung passiert» | **behalten** | Fachwissen: feiner Baustaub, mehrere Durchgänge, Mittel passend zur Oberfläche |  |
| V4 Umfang | **behalten** | Etappen klar |  |
| V5 «Die Etappen im Überblick» | **ersetzen** durch Baustein 3.5.1 (Tabelle mit Zeitpunkt und Freigabe) | heute nur eine Liste |  |
| V5 «Zusammenarbeit mit der Bauleitung» | **behalten** | Zutritt, Strom, Wasser, Abfall: praxisnah |  |
| V5 «Woran Sie eine gute Bauendreinigung erkennen» | **ersetzen** durch Baustein 3.5.2 | als Übergabe-Checkliste deutlich nützlicher |  |
| V6 Ablauf | **behalten** | seitentypisch (Etappen, Übergabe) |  |
| V7 Fragen (7) | **umschreiben** | Kosten, Regionen, Versicherung streichen. Neu: «Was gehört in die Ausschreibung der Bauendreinigung?» (Baustein 3.5.3) |  |
| V8, V9 | wie Vorlage |  |  |

#### Baustein 3.5.1: Die Reinigung im Bauablauf

> | Etappe | Wann | Was | Wer gibt frei |
> |---|---|---|---|
> | Grobreinigung | nach dem Rohbau, vor dem Innenausbau | groben Schmutz und Staub entfernen, damit die nächsten Arbeiten auf sauberem Grund beginnen | Bauleitung |
> | Zwischenreinigung | bevor Böden verlegt oder Küchen montiert werden | Staub von Flächen, Fenstern und Installationen | Bauleitung |
> | Bauendreinigung | nach den letzten Handwerksarbeiten, vor der Abnahme | alles bezugsbereit, von oben nach unten, oft in mehr als einem Durchgang | Bauleitung oder Bauherrschaft |
>
> Arbeiten nach der Bauendreinigung noch Handwerker in den Räumen, entsteht neuer Staub. Nehmen Sie die Endreinigung deshalb früh in den Terminplan auf und planen Sie sie nach den letzten Arbeiten ein.

Beleg: `baureinigung.sections[0]`, `sections[2]`.

#### Baustein 3.5.2: Übergabe-Checkliste Bauendreinigung

> **Vor der Übergabe prüfen**
>
> - Schutzfolien an Fenstern, Türen, Geräten und Armaturen entfernt
> - Etiketten und Klebereste auf Glas, Plättli und Geräten entfernt
> - Farb- und Mörtelspritzer auf Glas, Rahmen und Sanitärapparaten entfernt
> - kein Staubfilm auf Fensterbänken, Türrahmen, in Schubladen und Schränken
> - Fensterfalze, Storenführungen und Lüftungsgitter ohne Baustaub
> - Böden sauber, auch in Ecken und entlang der Sockelleisten
> - Glas ohne Schlieren und Kratzer

Beleg: erweitert aus `baureinigung.scope.items` und `sections[4]`. Storenführungen und Lüftungsgitter sind neu, bitte mit dem Umfang abgleichen.

#### Baustein 3.5.3: Was in die Ausschreibung gehört

> **Bauendreinigung ausschreiben**
>
> Damit Offerten vergleichbar sind, sollten alle Anbieter dieselben Angaben erhalten:
>
> - Objekt, Geschosse und Nutzfläche, dazu Anzahl Wohnungen oder Einheiten
> - Anzahl und Art der Fenster und Glasflächen
> - Bodenbeläge, besonders empfindliche wie Naturstein oder Parkett
> - gewünschte Etappen mit Terminen und dem Übergabedatum
> - Strom, Wasser, Platz für Geräte und Entsorgung des Abfalls
> - Zutritt, Sicherheitsregeln und Ansprechperson auf der Baustelle

Beleg: Fachwissen, deckt sich mit `baureinigung.faq[3]` und `sections[3]`.

### 3.6 Fenster- und Fassadenreinigung `/leistungen/fenster-und-fassadenreinigung`

Doppelung 27 %, 745 Wörter. Gemessen an den Suchen die stärkste Einzelleistung (fensterreinigung 1'600).

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** |  |  |
| V2 | **kürzen** | wie V2 |  |
| V3 Zickzack 1: «Typische Objekte und Situationen» | **kürzen** | Der Satz zum Gegenlicht und die Anlässe (Frühling, Vermietung, Verkauf) sind gut, der Rest allgemein |  |
| V3 Zickzack 2: «Wie Glas und Fassade gereinigt werden» | **behalten** | Echtes Fachwissen (Reinwasser, Material entscheidet über Hochdruck) |  |
| V4 Umfang | **behalten** |  |  |
| V5 «Planung und Rhythmus» | **umschreiben** zu Baustein 3.6.3 |  |  |
| V5 «Was wir bei der Besichtigung klären» | **behalten** und ergänzen (Abwasser, öffentlicher Grund) | Gute Fragenliste für Verwaltungen |  |
| V5 «Woran Sie eine gute Fensterreinigung erkennen» | **behalten** als Checkliste | kurz, prüfbar |  |
| V6 Ablauf | **kürzen** | nur 3 Schritte, 2 davon gleich wie überall |  |
| V7 Fragen (7) | **umschreiben** | Mieterschaft zu Hause ist eine gute Frage. Kosten, Regionen, Versicherung streichen. Neu: «Wohin fliesst das Wasser bei der Fassadenreinigung?» (Antwort erst nach F4) |  |
| V8, V9 | wie Vorlage |  |  |

#### Baustein 3.6.1: Abwasser und Gewässerschutz

> **Wohin das Wasser fliesst**
>
> Wasser aus der Fassadenreinigung nimmt Schmutz, Algen und Reste von Reinigungsmitteln mit. Stoffe, die Wasser verunreinigen können, dürfen weder direkt noch indirekt in ein Gewässer gelangen oder versickern (Art. 6 GSchG). Das betrifft auch Regenwasserleitungen, die in einen Bach oder See führen. Die Kantone regeln die Einzelheiten in Merkblättern.
>
> Fragen Sie deshalb bei jeder Offerte für eine Fassadenreinigung: Wie wird das Abwasser aufgefangen, und wohin wird es geleitet?

Beleg: [GSCHG-6], [VSA]. Ohne Antwort auf F4 bleibt der Baustein Käuferinformation. Mit Antwort kommt ein Satz zum eigenen Vorgehen dazu.

#### Baustein 3.6.2: Mieterinformation (Vorlage)

> *Fensterreinigung in Ihrer Wohnung*
>
> Am [Datum] zwischen [Uhrzeit] und [Uhrzeit] reinigen wir die Fenster der Liegenschaft. Einige Fenster lassen sich nur von innen reinigen. Bitte sind Sie zu Hause oder hinterlegen Sie den Schlüssel bis [Datum] bei [Verwaltung, Hauswartung]. Stellen Sie Pflanzen und Gegenstände von den Fensterbänken weg.
>
> Fragen beantwortet [Verwaltung, Telefon].

Beleg: `fensterUndFassade.faq[3]` und `sections[3]` (Mieterschaft informieren).

#### Baustein 3.6.3: Planung übers Jahr

> **Wann Glas und Fassade am besten gereinigt werden**
>
> - **Frühling:** nach dem Winter, besser nach dem ersten starken Blütenstaub, sonst ist das Glas nach wenigen Tagen wieder gelb
> - **Herbst:** nach dem Laubfall und vor der dunklen Jahreszeit, wenn Schlieren im tiefen Licht auffallen
> - **Frost, Sturm, starker Regen:** Aussenarbeiten verschieben, deshalb etwas Spielraum im Termin einplanen
> - **Hebebühne oder Gerüst auf Trottoir oder Strasse:** Dafür braucht es in der Regel eine Bewilligung der Gemeinde. Klären Sie das früh.

Beleg: `fensterUndFassade.sections[0]` und `[2]`. Die Bewilligung für öffentlichen Grund ist allgemeine Praxis in Schweizer Gemeinden, vor der Veröffentlichung für Luzern und Zug nachprüfen.

### 3.7 Industrie- und Hallenreinigung `/leistungen/industrie-und-hallenreinigung`

Doppelung 25 %, 696 Wörter.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** |  |  |
| V2 | **kürzen** | wie V2 |  |
| V3 Zickzack 1: «Maschinen und Anlagen» | **behalten** | Ein guter Einstieg, weil das Thema einzigartig ist |  |
| V3 Zickzack 2: «Hallenböden und Verkehrswege» | **behalten** | Fachwissen (Scheuersaugmaschine, Beläge) |  |
| V4 Umfang | **behalten** |  |  |
| V5 «Typische Objekte und Situationen» | **kürzen** auf die Anlässe (Audit, Kundenbesuch, Betriebsferien) |  |  |
| V5 «Sicherheit im Betrieb» | **ersetzen** durch Baustein 3.7.1 (Checkliste) | Der Text sagt «klären wir», die Checkliste sagt, was genau |  |
| V5 «Planung und Rhythmus» | **ersetzen** durch Baustein 3.7.2 |  |  |
| V6 Ablauf | **behalten** | seitentypisch (Rundgang, Einsatzplanung) |  |
| V7 Fragen (7) | **umschreiben** | FAQ 3 wiederholt «Sicherheit im Betrieb» wörtlich. Kosten, Regionen, Versicherung streichen. Neu: «Wie bereiten wir ein Audit vor?» (Baustein 3.7.3) | [M-DUP] |
| V8, V9 | wie Vorlage |  |  |

#### Baustein 3.7.1: Sicherheits-Übergabe vor der Maschinenreinigung

> **Bevor an einer Maschine gereinigt wird**
>
> - Wer schaltet die Anlage ab und sichert sie gegen Wiedereinschalten?
> - Sind Druck, Wärme und bewegte Teile abgebaut oder gesichert?
> - Welche Mittel hat der Hersteller für die Oberflächen freigegeben?
> - Welche Schutzausrüstung ist in diesem Bereich Pflicht?
> - Wo fahren Stapler, welche Bereiche sind gesperrt?
> - Wer gibt die Anlage nach der Reinigung wieder frei?
>
> Diese Punkte legen wir vor dem ersten Einsatz mit Ihrer Instandhaltung fest.

Beleg: `industrieUndHallen.sections[3]` («wer sie abschaltet und sichert und wer sie … wieder freigibt»).

#### Baustein 3.7.2: Reinigungsplan nach Zonen (Beispiel)

> | Zone | Typische Verschmutzung | Rhythmus (Beispiel) | Zeitfenster |
> |---|---|---|---|
> | Verkehrswege | Staub, Reifenabrieb | häufig | zwischen Schichten |
> | Produktion | Späne, Öl- und Fettfilme | nach Anfall | Pausen, Stillstände |
> | Lager und Regale | Staub | in grösseren Abständen | ruhige Zeiten |
> | Sozialräume, Garderoben, Sanitär | Hygiene | häufig | ausserhalb der Pausen |
> | Maschinen und Anlagen | Ablagerungen | nach Vorgabe der Instandhaltung | geplante Stillstände, Betriebsferien |

Beleg: `industrieUndHallen.sections[1]` und `[4]`.

#### Baustein 3.7.3: Vor einem Audit oder Kundenbesuch

> **Checkliste vor einem Audit**
>
> - Verkehrswege und Markierungen frei und gut sichtbar
> - keine Öl- oder Fettfilme auf Böden, auf denen Personen gehen
> - Sozialräume und Sanitärräume gereinigt, Verbrauchsmaterial aufgefüllt
> - Regale und Ablagen ohne Staubschicht
> - Termin der Reinigung mit genügend Abstand zum Audit, damit Böden trocken sind

Beleg: Anlass «Audit oder Kundenbesuch» aus `sections[2]`, Rest Fachwissen.

### 3.8 Hauswartung `/leistungen/hauswartung`

Doppelung 23 % (niedrigster Wert), 1'011 Wörter. Schon heute die stärkste Leistungsseite, mit dem höchsten Suchvolumen. Sie verdient den Ausbau zur Werkzeugseite.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** | Der zweite Absatz («schriftlich festgehalten») ist das Kernversprechen und gehört in den Kurzsatz |  |
| V2 | **kürzen** | wie V2 |  |
| V3 Zickzack 1: «Typische Objekte und Situationen» | **umschreiben** | Die Auslöser (Hauswart hört auf, neue Liegenschaft, Stockwerkeigentum ohne Freiwillige) sind gut. Titel «Wann Sie eine Hauswartung vergeben» |  |
| V3 Zickzack 2: «Was beim Kontrollgang passiert» | **behalten** und mit Baustein 3.8.2 ergänzen | konkrete Prüfpunkte | [BFU] «periodisch Inspektionen durchzuführen und zu dokumentieren» |
| V4 Umfang (8 Aufgaben) und Nicht enthalten | **behalten** | Deckt sich genau mit R3c. Der Ausschluss von Winterdienst und Pikett ist ehrlich. BiAg wirbt mit «Schnee Räumen» | [W-BIAG] |
| V5 «Haustechnik im Blick» | **behalten** | klare Grenze zur Wartung | E56 HAUSTECHNIK |
| V5 «Wohnungsübergaben» | **behalten** | klare Rollen (Abnahme bleibt bei der Verwaltung) |  |
| V5 «Zusammenarbeit mit Verwaltung und Eigentümerschaft» | **kürzen** | überschneidet sich mit dem Pflichtenheft |  |
| V5 «Pflichtenheft für die Hauswartung» | **ersetzen** durch Baustein 3.8.1 (Tabelle zum Ausfüllen) | Die Liste ist gut. Als Vorlage wird sie zum Grund, die Seite zu besuchen und zu teilen | 24 (pflichtenheft hauswartung) |
| V6 Ablauf | **behalten** | seitentypisch (Aufgaben festlegen) |  |
| V7 Fragen (9) | **umschreiben** | Versicherung, Kosten, Regionen streichen. Neu: «Was darf die Mieterschaft selbst beheben?» (Baustein 3.8.3), «Wie werden Kontrollgänge festgehalten?» (Baustein 3.8.2) |  |
| V8, V9 | wie Vorlage |  |  |

#### Baustein 3.8.1: Pflichtenheft Hauswartung (Vorlage)

> **Pflichtenheft zum Ausfüllen**
>
> Ein Pflichtenheft hält fest, was die Hauswartung übernimmt, wie oft und wer wofür zuständig ist. Es macht Offerten vergleichbar und schafft Klarheit für Verwaltung, Eigentümerschaft, Mieterschaft und Hauswartung.
>
> | Bereich | Aufgabe | Wie oft | Meldung an |
> |---|---|---|---|
> | Kontrollgang | Beleuchtung, Türen, Schlösser, Briefkästen, Waschküche, Keller, Heizraum auf sichtbare Störungen, Abfallplatz | [ ] | [ ] |
> | Treppenhaus und Eingang | reinigen und in Ordnung halten | [ ] | |
> | Waschküche und Trockenräume | sauber halten | [ ] | |
> | Kleinreparaturen | etwa Leuchtmittel ersetzen. Bis zu welchem Aufwand ohne Rückfrage? [ ] | nach Bedarf | [ ] |
> | Haustechnik | im Blick behalten, Störungen melden | bei jedem Kontrollgang | [ ] |
> | Wohnungsübergaben | öffnen, Schlüssel übergeben, Zählerstände notieren (nach Absprache) | nach Bedarf | Verwaltung |
> | Entsorgung | Abfall und Wertstoffe organisieren | [ ] | |
> | Umgebung | Rasen, Hecken, Beete, Wege, Plätze | nach Pflegeplan | |
> | Schlüssel und Zugang | welche Schlüssel, Badges, Codes, wo aufbewahrt | | |
> | Material | wer stellt Reinigungsmittel, Verbrauchsmaterial, Geräte | | |
> | Fachbetriebe | Heizung, Lift, Brandschutz, grössere Reparaturen: wer beauftragt | | Verwaltung |
> | Ansprechperson der Mieterschaft | Name, Telefon, Erreichbarkeit | | |
> | Nicht enthalten | Winterdienst, Pikett- und Notfalldienst | | |
>
> Bei uns entsteht diese Aufstellung nach dem Rundgang und wird Teil der Offerte.

Beleg: `hauswartung.scope.items`, `sections[1]` und `[5]`, E29, E53, E56 HAUSTECHNIK. Umsetzung als druckbare HTML-Tabelle auf der Seite. Eine Tabelle im Seitentext ist für Suchmaschinen besser auffindbar als eine Datei zum Herunterladen.

#### Baustein 3.8.2: Kontrollgang und Haftung der Eigentümerschaft

> **Warum Kontrollgänge festgehalten werden**
>
> Die Eigentümerin eines Gebäudes haftet für Schäden, die es wegen mangelhafter Unterhaltung verursacht, auch ohne eigenes Verschulden (Art. 58 OR). Die Beratungsstelle für Unfallverhütung rät Werkeigentümern deshalb, periodisch Kontrollen durchzuführen und zu dokumentieren.
>
> Regelmässige Kontrollgänge helfen, Mängel früh zu sehen: eine lose Treppenkante, eine defekte Leuchte im Keller, ein Tor, das nicht mehr schliesst. Wichtig ist, dass jede Auffälligkeit an die vereinbarte Stelle geht und dort erledigt wird. Wem wir melden, halten wir mit Ihnen schriftlich fest.
>
> Dieser Hinweis ersetzt keine Rechtsberatung.

Beleg: [OR-58], [BFU], `hauswartung.lead` («wem wir Mängel melden, halten wir schriftlich fest»).

#### Baustein 3.8.3: Kleiner Unterhalt: wer macht was

> **Mieterschaft, Hauswartung oder Fachbetrieb?**
>
> | Wer | Was | Grundlage |
> |---|---|---|
> | Mieterschaft | kleine Reinigungen und Ausbesserungen in der eigenen Wohnung, die ohne Fachperson gehen, etwa eine Glühbirne ersetzen | Art. 259 OR, nach Ortsgebrauch |
> | Hauswartung | Allgemeinflächen: reinigen, Leuchtmittel ersetzen, Kleinreparaturen, Störungen melden | Pflichtenheft |
> | Fachbetrieb | Heizung, Lüftung, Lift, Brandschutz, grössere Reparaturen | Auftrag der Verwaltung |
>
> Wo die Grenze beim kleinen Unterhalt liegt, bestimmen Mietvertrag und Ortsgebrauch. Die Gerichte fragen heute vor allem, ob es eine Fachperson braucht.

Beleg: [OR-259] (Mieterverband, Gerichte Zürich), `hauswartung.sections[2]`.

### 3.9 Aussen- und Grünflächenpflege `/leistungen/aussen-und-gruenflaechenpflege`

Doppelung 25 %, 612 Wörter.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** | Der erste Satz steht fast gleich in Zickzack 1 («Die Umgebung ist das Erste, was …») | [M-DUP] |
| V2 | **kürzen** | wie V2 |  |
| V3 Zickzack 1: «Typische Objekte und Situationen» | **kürzen** | wiederholt den Hero |  |
| V3 Zickzack 2: «Pflege im Jahreslauf» | **umschreiben** (K1) | Die Jahreszeiten sind gut, aber der Heckenschnitt im Sommer widerspricht der Empfehlung der Vogelwarte | [VOGELWARTE] |
| V4 Umfang | **behalten** |  |  |
| V5 «Planung und Rhythmus» | **behalten** | Die Verbindung mit Kontrollgängen ist ein echtes Argument |  |
| V5 «Woran Sie eine gepflegte Umgebung erkennen» | **behalten** als Checkliste |  |  |
| V6 Ablauf | **kürzen** |  |  |
| V7 Fragen (6) | **umschreiben** | Hecken korrigieren (Baustein 3.9.1). Neu: «Dürfen Sie Unkraut spritzen?» (Baustein 3.9.2). Kosten und Regionen streichen |  |
| V8, V9 | wie Vorlage |  |  |

#### Baustein 3.9.1: Hecken und Sträucher (ersetzt FAQ und Jahreslauf-Punkt)

> **Wann werden Hecken am besten geschnitten?**
>
> Ausserhalb der Brutzeit, die bei vielen Arten vom Frühling bis in den Spätsommer reicht. Die Schweizerische Vogelwarte in Sempach empfiehlt den Gehölzschnitt am besten im Winter. Wachsen Durchgänge oder Sichtfelder im Sommer zu, genügt meist ein leichter Formschnitt mit Blick auf Nester. Den Zeitpunkt für Ihre Hecken halten wir im Pflegeplan fest.

Jahreslauf neu: Sommer ohne «Hecken schneiden», dafür Winter: «Hecken und Sträucher schneiden, ausserhalb der Brutzeit». Beleg: [VOGELWARTE].

#### Baustein 3.9.2: Unkraut ohne Gift

> **Unkraut auf Wegen und Plätzen**
>
> Auf Wegen, Plätzen, Parkflächen, Dächern und Terrassen sind Unkrautvertilgungsmittel in der Schweiz verboten, für Private ebenso wie für Firmen, und auch auf einem Streifen daneben. Unkraut in Fugen und auf Kiesflächen wird deshalb mechanisch entfernt, etwa von Hand oder mit Bürsten. Das braucht in der Wachstumszeit mehrere Durchgänge. Planen Sie sie im Pflegeplan ein.

Beleg: [CHEMRRV] (Anhang 2.5 Ziff. 1.1 Abs. 2, BAFU: 50-cm-Streifen, seit 2001 auch für Private).

#### Baustein 3.9.3: Den Winter separat regeln

> **Winterdienst: was Sie trotzdem regeln sollten**
>
> Winterdienst bieten wir nicht an. Vergeben Sie Schneeräumung und Salzen vor dem ersten Schnee an eine Firma, die das übernimmt, und halten Sie schriftlich fest, wer ab wann für welche Flächen zuständig ist. Dann gibt es keine Lücke zwischen Umgebungspflege und Winterdienst.

Beleg: E29.

### 3.10 Facility Services `/leistungen/facility-services`

Doppelung 25 %, 622 Wörter.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **behalten**, kürzen | Das Problem (mehrere Verträge, mehrere Ansprechpersonen) ist gut benannt |  |
| V2 | **kürzen** | wie V2 |  |
| V3 Zickzack 1: «Typische Situationen» | **behalten** | drei klare Situationen |  |
| V3 Zickzack 2: «Wie aus einzelnen Leistungen ein Vertrag wird» | **behalten** |  |  |
| V4 Umfang | **behalten** | nur eigene Leistungen, klare Ausschlüsse (E53) | E53 |
| V5 «Was Sie davon haben» | **ersetzen** durch Baustein 3.10.1 | Die Vorteile sind Behauptungen, eine Zuständigkeitstabelle zeigt sie | [NNG-READ] |
| V5 «Grenzen und Zusammenarbeit» | **kürzen** | wiederholt «Nicht enthalten» und FAQ 1 |  |
| V6 Ablauf | **behalten** | seitentypisch |  |
| V7 Fragen (7) | **umschreiben** | FAQ 4 wiederholt Schritt 4 wörtlich. Kosten, Regionen, Versicherung streichen. Neu: «Wie wechseln wir von mehreren Firmen zu einer?» (Baustein 3.10.2) | [M-DUP] |
| V8, V9 | wie Vorlage |  |  |

#### Baustein 3.10.1: Wer macht was

> **Zuständigkeiten in einem Vertrag**
>
> | Aufgabe | Wir | Ihre Verwaltung | Fachbetrieb |
> |---|---|---|---|
> | Reinigung innen und Glas | ausführen | Umfang vereinbaren | |
> | Hauswartung, Kontrollgänge | ausführen, Störungen melden | Meldungen empfangen, entscheiden | |
> | Umgebungspflege | ausführen nach Pflegeplan | Pflegeplan freigeben | |
> | Heizung, Lüftung, Lift, Brandschutz | Störungen melden | Fachbetrieb beauftragen | warten, reparieren |
> | Winterdienst | nicht im Angebot | separat vergeben | Winterdienst-Firma |
> | Änderungen am Umfang | mit Ihnen anpassen | an einer Stelle besprechen | |

Beleg: `facilityServices.scope`, `sections[3]`, E29, E53.

#### Baustein 3.10.2: Von mehreren Verträgen zu einem

> **So gelingt der Wechsel**
>
> 1. Laufende Verträge sammeln und Kündigungsfristen notieren.
> 2. Beim Rundgang festhalten, was heute wer macht und wo es Lücken gibt.
> 3. Den Start auf das Ende der kürzesten Frist legen und die übrigen Leistungen nachziehen.
> 4. Schlüssel, Badges und Material der bisherigen Firmen zurücknehmen und dokumentieren.
> 5. Die Mieterschaft informieren, wer ab wann Ansprechperson ist.

Beleg: Fachwissen. `facilityServices.faq[1]` («mit einer Leistung beginnen und später weitere dazunehmen»).

---

## 4. Premium-Seiten

Gemeinsamer Befund: Die drei Seiten teilen 31 % ihrer Sätze. Dazu gehören «Ihr Team» als letzter Ablaufschritt (3-mal wortgleich), «Wer bei Ihnen arbeitet, ist von uns überprüft» (5-mal auf den Premium-Seiten und der Übersicht) und die Standard-FAQ zu Versicherung, Kosten und Sprachen. Die Zusagen sind bestätigt (E41). Wiederholt man sie auf jeder Seite, verlieren sie aber an Gewicht. Premium sucht kaum jemand bei Google (24, Befund 6). Diese Seiten werden über Empfehlung aufgerufen und müssen im Gespräch mit Maklern, Verwaltungen und Werften als Beleg für Sorgfalt dienen.

### 4.1 Luxusimmobilien `/premium/luxusimmobilien`

Doppelung 35 %, 684 Wörter.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** | Vier Eckdaten, zwei davon (Team, Diskretion) stehen später noch 3-mal |  |
| V2 Vertrauensleiste (dunkel) | **streichen** auf Premium-Seiten | Handelsregister und «24 Stunden» wirken hier nüchtern und wiederholen den Abschluss | `TrustStrip tone="dark"` |
| V3 Zickzack 1: «Materialien mit Sorgfalt» | **ersetzen** durch Baustein 4.1.1 (Tabelle) | Der Absatz ist gut, als Tabelle ist er prüfbar und einzigartig | E41 Materialkenntnis |
| V3 Zickzack 2: «Schlüssel, Alarm und Diskretion» | **umschreiben** zu Baustein 4.1.2 | heute zwei allgemeine Sätze | E41 |
| V4 Umfang (9 Punkte) | **kürzen** | Die Punkte «Kunst», «Makler» und «Anlässe» stehen fast gleich in «Typische Situationen» | [M-DUP] |
| V5 «Typische Situationen» | **streichen** oder mit dem Umfang zusammenlegen | doppelt |  |
| V5 «Während Ihrer Abwesenheit» | **behalten** | konkret, bestätigte Arbeitsweise | E41 |
| V6 Ablauf | **behalten** | Schritt «Feste Regeln» ist seitentypisch |  |
| V7 Fragen (8) | **kürzen** | Kosten, Wo tätig, Versicherung streichen. Die Frage zu Naturstein und Parkett doppelt den Zickzack, ersetzen durch «Was brauchen Sie von uns vor dem ersten Einsatz?» |  |
| V8, V9 | wie Vorlage |  |  |

#### Baustein 4.1.1: Materialkunde für Wohnräume

> **Welche Pflege welches Material braucht**
>
> | Material | Worauf es ankommt | Was schadet |
> |---|---|---|
> | Marmor, Kalkstein, Travertin | pH-neutrale Mittel, weiche Tücher | Säure, auch Essig, Zitrone und viele Kalklöser |
> | Parkett, lackiert oder geölt | nebelfeucht, geöltes Holz nach Pflegehinweis | stehendes Wasser, Dampf |
> | Hochglanzflächen | weiche Mikrofaser, wenig Druck | Scheuermittel, harte Schwämme, trockenes Reiben von Staub |
> | Messing und Armaturen | milde Mittel | scharfe Reiniger, die die Oberfläche angreifen |
> | Polster und feine Textilien | Hinweise des Herstellers | zu viel Feuchtigkeit, falsche Mittel |
>
> Haben Sie Pflegehinweise von Hersteller oder Innenarchitektur, richten wir uns danach.

Beleg: `luxusimmobilien.sections[0]`, E41 (Naturstein, Parkett, Hochglanz, Polster).

#### Baustein 4.1.2: Was wir beim ersten Rundgang mit Ihnen festhalten

> **Vor dem ersten Einsatz**
>
> - welche Räume wir reinigen und welche nicht betreten werden
> - welche Materialien verbaut sind und welche Pflegehinweise gelten
> - welche Kunstwerke und Antiquitäten wir nur nach Ihrer Freigabe berühren
> - wie Schlüssel übergeben und aufbewahrt werden und wie wir mit der Alarmanlage umgehen
> - zu welchen Zeiten wir kommen, auch abends, am Wochenende oder während Ihrer Abwesenheit
> - wem wir melden, was uns bei Kontrollgängen auffällt
> - ob Sie eine Geheimhaltungsvereinbarung wünschen

Beleg: E41 (Schlüssel und Alarm, Einsätze abends und am Wochenende, Materialkenntnis, NDA auf Wunsch), `luxusimmobilien.faq[1]` (Kunst nur nach Freigabe), `sections[3]` (Meldung bei Abwesenheit).

### 4.2 Privatjet `/premium/privatjet`

Doppelung 40 % (höchster Wert aller Seiten), 558 Wörter.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** |  |  |
| V2 | **streichen** | wie 4.1 |  |
| V3 Zickzack 1: «Materialien in der Kabine» | **ersetzen** durch Baustein 4.2.1 | Heute allgemein («ein eigenes Mittel und ein eigenes Tuch») |  |
| V3 Zickzack 2: «Planung rund um Ihre Flüge» | **behalten** |  |  |
| V4 Umfang | **behalten**, «Nicht enthalten: Aussenreinigung» ergänzen | Der Ausschluss (E56 JET) steht heute nur in der FAQ | E56 |
| V5 «Was vor dem Einsatz feststehen muss» | **behalten** | gute, konkrete Liste |  |
| V5 «Diskretion an Bord» | **kürzen** auf den ersten Satz | Der Rest steht 5-mal auf Premium-Seiten | [M-DUP] |
| V6 Ablauf | **kürzen** | Schritte 1 und 4 sind wortgleich mit Luxus und Yacht |  |
| V7 Fragen (7) | **kürzen** | FAQ 4 wiederholt «Diskretion an Bord». Standardfragen streichen |  |
| V8, V9 | wie Vorlage |  |  |

#### Baustein 4.2.1: Materialien in der Kabine

> **Was eine Kabine besonders macht**
>
> | Material | Worauf es ankommt |
> |---|---|
> | Kabinenfenster aus Acrylglas | nur vom Hersteller freigegebene Mittel. Übliche Glasreiniger mit Ammoniak oder Alkohol können feine Risse verursachen |
> | Leder, besonders Anilinleder | nimmt Wasser und Fett schnell auf, deshalb wenig Feuchtigkeit und passende Pflege |
> | Lackiertes Holz und Furnier | weiche Tücher, keine scheuernden Mittel |
> | Teppiche und feine Textilien | Mittel und Feuchtigkeit nach Herstellerangabe |
>
> Welche Mittel für Ihre Kabine freigegeben sind, klären wir vorab mit Ihnen und Ihrem Flugbetrieb.

Beleg: Fachwissen. Kabinenfenster aus Acryl reagieren empfindlich auf ammoniak- und alkoholhaltige Reiniger, das steht in den Pflegeanleitungen der Hersteller. Vor der Veröffentlichung vom Kunden fachlich gegenlesen lassen (E56 LEKTORAT). Die Freigabe mit dem Flugbetrieb stammt aus `privatjet.sections[0]`.

#### Baustein 4.2.2: Übergabe an die Crew

> **Nach der Reinigung**
>
> Die Kabine übernimmt die Person, die Sie festlegen. Sie erhält eine kurze Notiz: welche Bereiche gereinigt wurden, welche Mittel verwendet wurden und was uns aufgefallen ist. Persönliche Gegenstände und Unterlagen bleiben dort, wo sie lagen.

Beleg: `privatjet.sections[2]` («Wer die Kabine nach der Reinigung übernimmt»). **Die Notiz ist eine neue Zusage und braucht vor der Veröffentlichung die Bestätigung des Kunden** (wie F5).

### 4.3 Yacht `/premium/yacht`

Doppelung 33 %, 603 Wörter.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| V1 Hero | **kürzen** |  |  |
| V2 | **streichen** | wie 4.1 |  |
| V3 Zickzack 1: «Materialien an Bord» | **behalten** und mit Baustein 4.3.1 ergänzen | Die Erklärung zu Teak (weiche Fasern, kein Hochdruck) ist echtes Fachwissen |  |
| V3 Zickzack 2: «Am See ist vieles anders» | **behalten** | einzigartiger Bezug zu den Seen der Region (Süsswasser, Blütenstaub) | [G-HC] «beyond the obvious» |
| V4 Umfang | **behalten** | klare Ausschlüsse (Antifouling, Motor) |  |
| V5 «Typische Anlässe» | **ersetzen** durch Baustein 4.3.2 | Die Liste nennt die Saison, der Kalender macht sie planbar |  |
| V5 «Zugang zum Liegeplatz» | **behalten** |  |  |
| V6 Ablauf | **kürzen** |  |  |
| V7 Fragen (7) | **kürzen** | Standardfragen streichen |  |
| V8, V9 | wie Vorlage |  |  |

#### Baustein 4.3.1: Teak, Gelcoat und Edelstahl

> **So bleibt das Material schön**
>
> - **Teak:** quer zur Faser mit einer weichen Bürste reinigen, nie mit Hochdruck. Sonst lösen sich die weichen Fasern, und das Holz wird rau.
> - **Gelcoat:** Wasserflecken früh entfernen, bevor sie einbrennen. Sonne lässt die Oberfläche mit der Zeit matt werden.
> - **Edelstahl:** Flugrost früh entfernen, bevor er sich festsetzt.
> - **Polster:** gut trocknen lassen, damit sich keine Feuchtigkeit hält.
> - **Mittel:** Was vom Deck läuft, landet im See. Stoffe, die Wasser verunreinigen können, dürfen nicht ins Gewässer gelangen (Art. 6 GSchG). Auf Wunsch reinigen wir mit umweltfreundlichen Mitteln.

Beleg: `yacht.sections[0]` und `[1]`, [GSCHG-6], E18 (umweltfreundliche Mittel auf Wunsch). «Quer zur Faser» ist gängige Pflegeregel für Teak. Vor der Veröffentlichung vom Kunden gegenlesen lassen.

#### Baustein 4.3.2: Saisonkalender auf dem See

> - **Vor dem ersten Ausfahren:** Innenraum lüften und reinigen, Deck und Polster für die Saison bereit
> - **Frühling und Frühsommer:** Blütenstaub und Vogelkot häufiger entfernen, besonders unter Bäumen
> - **Während der Saison:** regelmässig und vor Gästen an Bord
> - **Saisonende:** gründlich reinigen und trocknen, bevor das Boot eingewintert wird

Beleg: `yacht.sections[1]` und `[2]`.

---

## 5. Premium-Übersicht `/premium`

358 Wörter eigener Text. Ablauf und FAQ kommen von der Seite Luxusimmobilien (K3).

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| 01 Hero | **kürzen** (Hero-Session) | Die Aufzählung «Villen, Zweitwohnungen, Hotels, Family Offices, Privatjets, Yachten» steht danach nochmals in «Bereiche» und «Ausserdem» | `premiumOverview.lead` |
| Abschnittsleiste | **behalten** |  |  |
| 02 Bereiche: 3 Karten | **behalten** |  |  |
| 03 Ausserdem: 6 Karten | **behalten** | Die Nischen aus E40 sind konkret und belegt | E40 |
| 04 Diskretion: 3 Absätze | **kürzen** | Absatz 2 und 3 stehen fast gleich in «Zusagen» | [M-DUP] |
| 05 Zusagen: 10 Punkte | **kürzen** auf 6 | Persönlich, Diskret, Teams, Personal und Schlüssel wiederholen den Diskretions-Abschnitt. Versichert und Offerte stehen in jedem Abschluss |  |
| 06 Ablauf (von Luxusimmobilien übernommen) | **ersetzen** durch einen eigenen Ablauf für alle Premium-Anfragen | doppelter Inhalt (K3) | Code |
| 07 Fragen (von Luxusimmobilien übernommen) | **ersetzen** durch Baustein 5.1 | doppelter Inhalt (K3) | Code |
| 08 Orte | **behalten** | nennt die Seeufer (E42) und bindet Premium an die Region | E42 |
| Abschluss | **behalten** | «auf Wunsch unter Geheimhaltung» passt |  |
| **neu** | **hinzufügen**: 5.2 Geheimhaltungsvereinbarung | Premium-Kunden wollen wissen, was «Diskretion» konkret heisst | [NNG-TRUST] |

### Baustein 5.1: Eigene Fragen der Premium-Übersicht

> **Wie bleibt meine Anfrage vertraulich?**
> Ihre Anfrage bearbeitet der Geschäftsführer persönlich. Auf Wunsch unterzeichnen wir vor dem ersten Gespräch vor Ort eine Geheimhaltungsvereinbarung.
>
> **Können Makler oder Verwaltungen für Eigentümer anfragen?**
> Ja. Für Makler und Verwaltungen reinigen wir auch kurzfristig vor einem Verkauf, einem Fototermin oder einer Übergabe.
>
> **Arbeiten Sie auch, wenn wir nicht da sind?**
> Ja, auch abends, am Wochenende und während Ihrer Abwesenheit. Für Schlüssel und Alarm vereinbaren wir mit Ihnen feste Regeln.
>
> **Betreuen Sie auch Zweitwohnungen?**
> Ja. Wir reinigen vor Ihrer Ankunft und nach Ihrer Abreise und sehen dazwischen nach dem Rechten, so oft wie vereinbart.
>
> **In welcher Sprache können wir uns verständigen?**
> Auf Deutsch, Englisch, Französisch oder Italienisch.

Beleg: E41, E40 (Makler und Verwaltungen, Zweitwohnungen), R5d, R6k. Die Frist «vor dem ersten Gespräch vor Ort» ist eine Präzisierung. Wenn der Kunde sie nicht bestätigt, streichen.

### Baustein 5.2: Was eine Geheimhaltungsvereinbarung regeln sollte

> **Geheimhaltung schriftlich**
>
> Eine Geheimhaltungsvereinbarung mit einer Reinigungsfirma regelt typischerweise:
>
> - wer gebunden ist: die Firma und alle Personen, die bei Ihnen arbeiten
> - was vertraulich ist: Ihre Adresse, Ihre Abwesenheiten, Ihre Gäste, Räume, Einrichtung und Unterlagen
> - dass keine Fotos gemacht und keine Angaben in sozialen Medien geteilt werden
> - wie lange die Pflicht gilt, auch über das Ende des Auftrags hinaus
> - wie Schlüssel, Badges und Codes am Ende zurückgegeben werden
>
> Auf Wunsch unterzeichnen wir eine solche Vereinbarung.

Beleg: Fachwissen. E41 (NDA auf Wunsch). Die Inhalte beschreiben, was eine Vereinbarung *regeln sollte*, nicht was die Vereinbarung von BGS enthält.

---

## 6. Einzugsgebiet `/einzugsgebiet`

169 Wörter eigener Text. Die Seite lebt von Karte, Kantonskarten und Ortslisten. Das ist richtig, denn sie ist die Übersicht zu den fünf Kantonsseiten.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| PageHero mit Karte und Vertrauensleiste | **kürzen** (Hero-Session) |  | `AreaView.tsx` |
| Abschnittsleiste | **behalten** |  |  |
| Kantone: Karte und 5 Kantonskarten mit Orten | **behalten**, Kasten 6.1 ergänzen | Die Kantonskarten nennen nur Orte, keinen Unterschied zwischen den Kantonen |  |
| Seeufer und Ferienorte | **behalten** | E42 | E42 |
| Sitz und Karte nach Klick | **behalten** | Datenschutzhinweis anpassen (K4) |  |
| Abschluss | **behalten** | «Liegt Ihr Objekt im Gebiet?» ist die richtige Frage |  |
| **neu** | **hinzufügen**: 6.1 Kantone im Vergleich, 6.2 Seeufer und Ferienorte | Unterschiede, die nur diese Seite zeigen kann |  |

### Baustein 6.1: Die fünf Kantone im Vergleich

> | Kanton | Anfahrt ab Emmenbrücke | Typische Objekte | Ortsübliche Umzugstermine |
> |---|---|---|---|
> | [Luzern](/einzugsgebiet/luzern) | Sitz im Kanton | Mehrfamilienhäuser, Büros, Praxen, Villen am See | keine, der Mietvertrag gilt |
> | [Zug](/einzugsgebiet/zug) | über die A14 | Büros und Firmensitze, Family Offices, Wohnen am See | Ende März, Juni, September |
> | [Aargau](/einzugsgebiet/aargau) | je nach Region | Hallen, Lager, Werkstätten, Wohnliegenschaften | Ende März, Juni, September |
> | [Nidwalden](/einzugsgebiet/nidwalden) | über die A2 | Seeliegenschaften, Zweitwohnungen, Stockwerkeigentum, Boote | Ende März, Juni, September |
> | [Obwalden](/einzugsgebiet/obwalden) | über die A8, Engelberg durch Nidwalden | Liegenschaften im Sarneraatal, Zweitwohnungen und Hotels in Engelberg | Ende März, Juni, September |
>
> Alle Leistungen bieten wir im ganzen Gebiet zu denselben Bedingungen an.

Beleg: `kantone.ts › planung` (A14, A2, A8), `objekte`, [TERMINE], E30, E44.

### Baustein 6.2: Seeufer und Ferienorte: was dort anders ist

> In Ferienorten wird ein grosser Teil der Wohnungen nur zeitweise bewohnt. In Engelberg ist laut Wohnungsinventar des Bundes mehr als die Hälfte der Wohnungen eine Zweitwohnung, in Emmetten rund ein Drittel. Dort zählt weniger der feste Wochenrhythmus als die Reinigung vor der Ankunft und nach der Abreise, dazu Kontrollgänge in der Zwischenzeit. Für diese Objekte gibt es unseren [Premium-Bereich](/premium).

Beleg: `kantone.ts › nidwalden.objekte[0]`, `obwalden.objekte[0]` (ARE, S59), E40.

---

## 7. Kantonsseiten

Gemeinsamer Befund:
- 39,2 % der Sätze stehen identisch oder fast identisch auf anderen Kantonsseiten oder sonst auf der Website.
- Die Kostenantwort ist auf allen fünf Seiten wortgleich (4 Sätze).
- Aargau übernimmt zwei Sätze der Industrieseite wörtlich (K5).
- Luzern, Zug und Obwalden verlinken die Umzugsreinigung noch auf «Sonderreinigungen» (K2).

Stark sind die eigenen Orte, die Objekte je Kanton und die Planung (Anfahrt).

**Doorway-Maßstab:** Google nennt «substantially similar pages … closer to search results than a clearly defined, browseable hierarchy» [G-SPAM]. Jede Kantonsseite braucht deshalb Information, die es nur für diesen Kanton gibt.

**Gemeinsame Container der Vorlage `client/src/seiten/kanton/`:**

| Nr. | Container | Urteil | Grund |
|---|---|---|---|
| K-01 | Hero (H1, Einleitung, Eckdaten) | **kürzen** (Hero-Session) | Die Eckdaten «Hauptort», «Seen», «Gemeinden» sind Wikipedia-Wissen. Nützlicher: «Ortsübliche Umzugstermine», «Anfahrt», «Schwerpunkt» |
| K-02 | Vertrauensleiste und Abschnittsleiste | **kürzen** (V2) | wie V2 |
| K-03 | Regionen und Orte | **behalten** | eigene Orte je Kanton, für Long-Tail-Suchen (Aarau, Baden, Sursee) |
| K-04 | Typische Objekte (4 Karten) | **behalten**, Kopien entfernen | Kern der Eigenständigkeit |
| K-05 | Gefragte Leistungen (5 Links) | **behalten**, Links korrigieren (K2) |  |
| K-06 | Anreise und Planung | **behalten** | eigene Anfahrtswege |
| K-07 | Fragen (4 bis 5) | **umschreiben** | Die Kostenfrage ist wortgleich. Ersetzen durch eine kantonseigene Frage (Bausteine unten), die Kostenfrage auf einen Satz mit Link zum Ratgeber kürzen |
| K-08 | Weitere Kantone | **behalten** | Hierarchie für Google und Nutzer |

### 7.1 Luzern `/einzugsgebiet/luzern`

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| K-01 Hero | **kürzen** | «Seit 2006 arbeiten wir …» steht wörtlich auch auf Über uns | [M-DUP] |
| K-03 Regionen | **behalten** | 5 Regionen, 22 Orte |  |
| K-04 Objekte | **behalten** | «Wohnungswechsel» nach E28 auf Verwaltungen zuspitzen («Bei einem Mieterwechsel im Auftrag der Verwaltung …») | E28 |
| K-05 Leistungen | **korrigieren** (K2) | Link auf Umzugsreinigung | E81 |
| K-06 Planung | **behalten** | Hinweis zum Parkieren in der Innenstadt ist praxisnah |  |
| K-07 Fragen | **umschreiben** | FAQ 4 auf die Umzugsseite verlinken, Kostenfrage kürzen, Baustein 7.1.1 neu |  |

#### Baustein 7.1.1: Umzugstermine im Kanton Luzern

> **Gibt es im Kanton Luzern feste Umzugstermine?**
>
> Nein. Der Kanton Luzern kennt keine ortsüblichen Kündigungstermine, massgebend ist der Mietvertrag. In der Praxis nennen die Verträge meist entweder Ende März, Juni und September oder jedes Monatsende ausser Dezember. Wann eine Wohnung frei wird, steht also im einzelnen Vertrag. Für Verwaltungen heisst das: Die Reinigung vor der Neuvermietung am besten anfragen, sobald die Kündigung eingeht. Mehr zur [Umzugsreinigung mit Abnahmegarantie](/leistungen/umzugsreinigung).

Beleg: [TERMINE] (Aussage einer Luzerner Rechtsanwältin laut Suchauszug, K-Tipp). Der Satz zur Praxis ist nur sekundär belegt: vor der Veröffentlichung prüfen oder streichen.

#### Baustein 7.1.2: Umgebungspflege mit Rücksicht auf Vögel

> **Hecken in Luzerner Liegenschaften**
>
> Die Schweizerische Vogelwarte hat ihren Sitz in Sempach. Sie empfiehlt, Hecken und Sträucher ausserhalb der Brutzeit zu schneiden, am besten im Winter. So planen wir auch die [Aussen- und Grünflächenpflege](/leistungen/aussen-und-gruenflaechenpflege) Ihrer Liegenschaft.

Beleg: [VOGELWARTE]. «So planen wir» ist eine Praxisaussage, nach Korrektur K1 aber mit der Leistungsseite deckungsgleich. Ohne Bestätigung stattdessen: «Den Zeitpunkt halten wir im Pflegeplan fest.»

### 7.2 Zug `/einzugsgebiet/zug`

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| K-01 Hero | **kürzen** | Die Einleitung zu den Sprachen steht auch in FAQ 1 |  |
| K-03 Regionen | **behalten** | alle 11 Gemeinden in 3 Gruppen |  |
| K-04 Objekte | **behalten** | Family Offices und Glas sind zugtypisch | E40 |
| K-05 Leistungen | **korrigieren** (K2) | «Sonderreinigungen» mit Umzug |  |
| K-06 Planung | **behalten** | Zutrittskarten, mehrere Standorte |  |
| K-07 Fragen | **umschreiben** | Versicherung und Kosten raus, Baustein 7.2.1 neu |  |

#### Baustein 7.2.1: Mehrere Standorte, eine Ansprechperson

> **Betreuen Sie auch mehrere Standorte, etwa in Zug und Luzern?**
>
> Ja. Wir arbeiten in den ganzen Kantonen Zug, Luzern, Aargau, Nidwalden und Obwalden, mit allen Leistungen und zu denselben Bedingungen. Mit [Facility Services](/leistungen/facility-services) kommen Reinigung, Hauswartung und Umgebung für alle Standorte in einen Vertrag, mit einer Ansprechperson bei uns. Nennen Sie uns bei der Anfrage alle Adressen, dann planen wir die Besichtigungen zusammen.

Beleg: E30, E44, `facilityServices.lead`, `zug.planung` («nennen Sie uns alle bei der Anfrage»).

#### Baustein 7.2.2: Büros mit Empfang und Zutrittskontrolle

> **Was vor dem ersten Einsatz in einem Geschäftshaus geklärt wird**
>
> - ob das Team über den Empfang, eine Zutrittskarte oder einen Schlüssel ins Gebäude kommt
> - welche Etagen und Räume dazugehören und welche gesperrt bleiben
> - wie Alarmanlage, Licht und Abschliessen geregelt sind
> - in welcher Sprache Absprachen mit Ihrem Team laufen: Deutsch, Englisch, Französisch oder Italienisch
> - wer bei Ihnen Ansprechperson ist, wenn etwas auffällt

Beleg: `zug.planung`, `bueroreinigung.sections[3]`, E18 (Sprachen). Überschneidet sich mit Baustein 3.2.2, deshalb hier nur die Punkte für Geschäftshäuser.

### 7.3 Aargau `/einzugsgebiet/aargau`

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| K-01 Hero | **behalten**, kürzen | Der Industrie-Schwerpunkt ist ein klares Profil |  |
| K-03 Regionen | **behalten** und um Baustein 7.3.1 ergänzen | Aarau (140), Baden (110), Zofingen (70), Lenzburg, Brugg, Wettingen (je 50) sind Long-Tail-Suchen | 24 |
| K-04 Objekte | **umschreiben** Karte 2 (K5) | wörtliche Kopie der Industrieseite | `kreuz.md` |
| K-05, K-06 | **behalten** |  |  |
| K-07 Fragen | **umschreiben** | FAQ 3 (Wartung) steht fast gleich auf der Industrieseite. Mittel und Kosten raus, 7.3.1 neu | [M-DUP] |

**Entwurf für K5 (Objekte, Karte 2):**

> **Maschinen und Anlagen**
> Reinigung von Maschinen im Schichtbetrieb, in Pausen, zwischen Schichten oder bei geplanten Stillständen. Wie wir das mit Ihrer Instandhaltung abstimmen, steht unter [Industrie- und Hallenreinigung](/leistungen/industrie-und-hallenreinigung).

#### Baustein 7.3.1: Städte im Aargau

> **Arbeiten Sie auch in Aarau, Baden oder Lenzburg?**
>
> Ja, im ganzen Kanton: in Aarau, Lenzburg und Zofingen, in Baden und Wettingen, in Brugg und im Fricktal, im Freiamt und am Hallwilersee. Überall gelten dieselben Bedingungen wie in Luzern. Weil die Wege je nach Region unterschiedlich lang sind, legen wir Rhythmus und Einsatzzeiten bei der Besichtigung fest.

Beleg: `aargau.regionen`, `aargau.planung`, E30, E44, 24 (Long-Tail).

### 7.4 Nidwalden `/einzugsgebiet/nidwalden`

Doppelung 42 %, höchster Kantonswert. Die Objekte (Zweitwohnungen, Villen, Boote) sind fast wörtlich aus den Premium-Seiten übernommen.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| K-01 Hero | **behalten** | Der Satz «manche werden nur zeitweise bewohnt» ist ein eigener Befund |  |
| K-03 Regionen | **behalten** |  |  |
| K-04 Objekte | **kürzen** | Die Karten «Villen» und «Boote» sind Premium-Texte, auf je einen Satz mit Link kürzen. «Stockwerkeigentum, wenn die Eigentümer nicht alle vor Ort wohnen» ist eigenständig und stark | [M-DUP] |
| K-05, K-06 | **behalten** |  |  |
| K-07 Fragen | **umschreiben** | FAQ 1 und 2 verweisen korrekt auf Premium. Kosten und Versicherung raus, 7.4.1 neu |  |

#### Baustein 7.4.1: Stockwerkeigentum mit auswärtigen Eigentümern

> **Wer schaut nach der Liegenschaft, wenn die Eigentümer nicht vor Ort wohnen?**
>
> In Seegemeinden gehören viele Wohnungen Eigentümern, die nur zeitweise da sind. Dann fehlt oft jemand, der regelmässig vorbeikommt. Die [Hauswartung](/leistungen/hauswartung) übernimmt Kontrollgänge, Waschküche, Entsorgung und Wohnungsübergaben und meldet Mängel an die Stelle, die die Stockwerkeigentümerschaft bestimmt, etwa an die Verwaltung. Welche Aufgaben dazugehören und wie oft wir vor Ort sind, halten wir schriftlich fest.

Beleg: `nidwalden.objekte[2]`, `hauswartung.lead`, R3c.

### 7.5 Obwalden `/einzugsgebiet/obwalden`

Doppelung 41 %.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| K-01 Hero | **behalten** | «zwei Teile, Engelberg erreicht man über Nidwalden» ist eigenständig |  |
| K-01 Eckdaten «Nicht im Angebot: Winterdienst» | **behalten** | In Obwalden besonders wichtig und ehrlich | E29 |
| K-03 Regionen | **behalten** |  |  |
| K-04 Objekte | **behalten**, Umzugskarte auf Verwaltungen zuspitzen | «Hotels» ist ein E40-Nischenangebot | E40 |
| K-05 | **korrigieren** (K2) |  |  |
| K-06 Planung | **behalten** | Saison, Zufahrt, Winterdienst separat |  |
| K-07 Fragen | **umschreiben** | FAQ 3 (Winterdienst) wiederholt die Eckdaten, Kosten raus. 7.5.1 neu |  |

#### Baustein 7.5.1: Hotels in der Zwischensaison

> **Wann ist der beste Zeitpunkt für eine Grundreinigung im Hotel?**
>
> Dann, wenn wenige Gäste im Haus sind: in der Zwischensaison, vor einer Eröffnung oder nach einer Renovation. Planen Sie den Termin früh, denn in dieser Zeit laufen oft auch Handwerksarbeiten. Die Reinigung gehört ans Ende, damit kein neuer Staub entsteht. Mehr unter [Grund- und Sonderreinigung](/leistungen/sonderreinigungen) und [Bau- und Bauendreinigung](/leistungen/baureinigung).

Beleg: `obwalden.objekte[1]`, `baureinigung.sections[2]`, E40.

---

## 8. Über uns `/ueber-uns`

694 Wörter. Die Seite hält sich streng an E18. Genau deshalb fehlt, was Google unter «Who» versteht: eine erkennbare Person mit Erfahrung [G-HC], [SQRG 3.4].

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| 01 Hero: H1, Einleitung, 4 Kennzahlen | **kürzen** (Hero-Session) | Die Kennzahlen stehen auch auf der Startseite. Hier gehören sie hin, auf der Startseite reicht die Leiste |  |
| 02 So arbeiten wir (4 Grundsätze, Zickzack) | **behalten** | Konkrete Arbeitsweise statt Werte. «Was nicht dazugehört, sagen wir offen» ist stark |  |
| 03 Seit 2006 in der Region (3 Stationen) | **kürzen** | Station «2006» wiederholt die H1, «Heute» die Kennzahlen. Nur «Sitz und Register» ist neu | [M-DUP] |
| 04 Vier Sprachen und fünf Kantone | **behalten** | Der Hinweis zur Mieterschaft in ihrer Sprache ist ein echter Nutzen für Verwaltungen |  |
| 05 Werte im Alltag (6 Punkte) | **kürzen** auf 3 | «Ehrlich beim Preis», «Klar im Umfang» und «Wir stehen dafür ein» sind stark. «Versichert», «Diskret» und «Umwelt» stehen auf derselben Seite schon in Zusagen, Kennzahlen und Arbeitsweise | [M-DUP] |
| 06 Ansprechperson und Registerdaten | **umschreiben** | «Geht direkt an den Geschäftsführer» ohne Namen, obwohl der Name im Impressum steht (E62). Mit Name und Rolle wäre das die stärkste E-E-A-T-Stelle der Website (F6) | E62, [SQRG 3.4] |
| 07 Fragen (3) | **ersetzen** | alle drei stehen wortgleich auf der Startseite oder auf Kontakt | [M-DUP] |
| Abschluss | **behalten** |  |  |
| **neu** | **hinzufügen**: 8.1 Prüfen Sie uns, 8.2 Für wen wir passen | Vertrauen durch prüfbare Angaben ohne neue Behauptungen | [NNG-TRUST] «Connected to the Rest of the Web» |

### Baustein 8.1: Prüfen Sie uns selbst

> **Unsere Angaben zum Nachprüfen**
>
> - **Handelsregister:** Die BGS - Gebäudeservice GmbH ist im Handelsregister des Kantons Luzern eingetragen. Den Auszug finden Sie über [zefix.ch](https://www.zefix.ch) unter unserer Firmennummer.
> - **UID-Register:** Die Unternehmens-Identifikationsnummer [UID] können Sie im [UID-Register des Bundes](https://www.uid.admin.ch) prüfen.
> - **Mehrwertsteuer:** Unsere Mehrwertsteuernummer steht im [Impressum](/impressum).
> - **Versicherung:** Betriebshaftpflicht mit einer Deckung von CHF 10 Mio.

Beleg: `company.ts` (register, uid, vat), N033, E18. Die Links auf Zefix und das UID-Register machen die Angaben prüfbar. Die Rater-Richtlinien raten ausdrücklich zur Skepsis gegenüber Selbstaussagen [SQRG 3.3.1]. Ob die Police auf Anfrage vorgelegt wird, ist nicht bestätigt, deshalb steht dazu nichts im Entwurf.

### Baustein 8.2: Für wen wir der richtige Partner sind

> **Wann wir gut passen, und wann nicht**
>
> Gut passen wir, wenn Sie
> - als Verwaltung, Eigentümerschaft oder Stockwerkeigentümerschaft eine Liegenschaft reinigen oder betreuen lassen,
> - als Unternehmen Büros, Praxen, Gewerbeflächen oder Hallen regelmässig reinigen lassen, meist mehrmals pro Woche,
> - Reinigung, Hauswartung und Umgebung aus einer Hand möchten,
> - als Privatkunde eine Villa, Residenz oder Zweitwohnung mit besonderen Ansprüchen haben.
>
> Nicht passen wir für Winterdienst, für Pikett rund um die Uhr, für die Umzugsreinigung einzelner Mietwohnungen im Auftrag der Mieterschaft und für normale Privathaushalte.

Beleg: E28, E29, E34, R10c, E56 RHYTHMUS, E53. Filtert unpassende Anfragen und passt zu R10c.

---

## 9. Kontakt `/kontakt`

472 Wörter. Die Seite ist gut aufgebaut (Kanäle mit Zweck, Anfrage-Inhalt, Ablauf).

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| 01 Hero | **behalten**, kurz |  |  |
| 02 Kanäle (Telefon, Mobil, E-Mail, Formular, Adresse) mit Zweck | **behalten** | Jeder Weg sagt, wofür er sich eignet. Das haben die Wettbewerber nicht | [W-BIAG], [W-VW] (nur Name, E-Mail, Nachricht) |
| 03 Was Ihre Anfrage enthalten sollte (7 Punkte) | **behalten**, um «Ihre Rolle» ergänzen | Der Punkt deckt sich mit dem neuen Formularfeld (Maßnahme 3) | E33 |
| 04 Ablauf (4 Schritte) | **kürzen** | gleich wie auf der Startseite | `offerSteps` |
| 05 Karte nach Klick | **behalten** | E20 | E20 |
| 06 Fragen (5) | **kürzen** | Alle 5 stehen auch auf Startseite oder Über uns. Behalten: «Wie schnell erhalte ich eine Offerte?» Neu: Baustein 9.1 als Frage | [M-DUP] |
| Abschluss mit Formular | **umschreiben** | Maßnahme 3: Felder «Sie sind» und «Grösse». Den Hinweis «Pläne, Flächenlisten oder Fotos per E-Mail» direkt am Formular zeigen | `navigation.ts › contactForm` |
| **neu** | **hinzufügen**: 9.1 Besichtigung vorbereiten, 9.2 Formularfelder |  |  |

### Baustein 9.1: Die Besichtigung vorbereiten

> **Was Sie für die Besichtigung bereithalten**
>
> - Zugang zu allen Räumen, die gereinigt oder betreut werden sollen, auch zu Keller, Estrich, Waschküche und Technikräumen
> - Pläne oder eine Flächenliste, falls vorhanden
> - das bisherige Pflichtenheft oder Leistungsverzeichnis, wenn schon eine Firma arbeitet
> - die gewünschten Zeiten und den Starttermin
> - eine Ansprechperson, die Fragen zu Nutzung und Zugang beantworten kann
>
> Die Besichtigung ist kostenlos. Danach erhalten Sie die Offerte schriftlich.

Beleg: `contact.brief`, E56 OFFERTE.

### Baustein 9.2: Zwei zusätzliche Formularfelder

> **Sie sind** (Auswahl, Pflicht): Verwaltung · Stockwerkeigentümerschaft · Eigentümerin oder Eigentümer · Unternehmen · Privatkunde mit Villa, Residenz oder Zweitwohnung
>
> **Grösse** (Text, freiwillig): «zum Beispiel 12 Wohnungen, 800 m² Büro oder 3 Liegenschaften»

Beleg: W07, E33, E34, 11 (3.10 Prüfplan: «Im Formular die Zielgruppe … erfassen»). Datenschutzerklärung beim Feld «Sie sind» nachführen, weil ein neues Datenfeld dazukommt (Rechtstext, E70).

---

## 10. Ratgeber `/blog`

Zwei Artikel. Für einen Ratgeber-Bereich ist das zu wenig Tiefe. Die Suchfragen von Verwaltungen (Pflichtenheft, Wohnungsabgabe, Kosten) bedient der Bereich heute nur teilweise.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| 01 Hero | **behalten** |  |  |
| 02 Vertrauensleiste | **streichen** | Ein Ratgeber gewinnt Vertrauen durch Inhalt und Autor, nicht durch eine Leiste | [G-HC] «Who» |
| 03 Artikel (2 Karten) | **behalten**, erweitern (Baustein 10.1) |  |  |
| 04 Direkt zu den Leistungen | **behalten** |  |  |
| **neu** | **hinzufügen**: 10.1 Themenplan, 10.2 Autor und Stand |  | FIMI `ERKENNTNISSE.md` Punkt 4 |

### Baustein 10.1: Themenplan (drei neue Artikel)

| Titel (Entwurf) | Suchfrage | Zielgruppe | Kern aus diesem Audit |
|---|---|---|---|
| «Pflichtenheft Hauswartung: Vorlage und Erklärung» | pflichtenheft hauswartung (4 Varianten je ~70), hauswartung aufgaben (40) | Verwaltungen, Stockwerkeigentümerschaften | Bausteine 3.8.1 bis 3.8.3 |
| «Wohnungsabgabe: Was Verwaltungen bei Abnahme und Endreinigung beachten» | wie sauber muss eine Wohnung bei der Übergabe sein (Nutzerfrage), wohnungsabgabe reinigung (140) | Verwaltungen, Eigentümer | Bausteine 3.4.1 bis 3.4.3 |
| «Welcher Boden welche Reinigung verträgt» | grundreinigung (170, informativ) | Verwaltungen, Unternehmen | Baustein 3.3.1 |

Beleg: 24. Nach [G-HC] kein Artikel nur wegen des Suchvolumens: Jeder Artikel hat einen Kern, den es in dieser Form bei den geprüften Wettbewerbern nicht gibt.

### Baustein 10.2: Autor und Stand

> Ein Ratgeber von [Marke]. Fachlich geprüft von [Name], Geschäftsführer. Stand: [Datum].

Beleg: [G-HC] «Do pages carry a byline, where one might be expected?», F6. Solange F6 offen ist: «Fachlich geprüft von der Geschäftsführung der BGS - Gebäudeservice GmbH», aber nur, wenn diese Prüfung tatsächlich stattfindet.

---

## 11. Artikel

### 11.1 Wie finde ich die richtige Reinigungsfirma? `/blog/richtige-reinigungsfirma-finden`

668 Wörter. Ein solider Leitfaden.

**Hauptbefund:** Der Artikel empfiehlt, nach Qualitätskontrolle, Vertretung bei Ferien und Krankheit, Referenzen und einer Probezeit zu fragen. Die Liste «So beantwortet BGS diese Fragen» beantwortet genau diese Punkte nicht. Ein aufmerksamer Leser bemerkt die Lücke (F1, F2).

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| 01 Kopf: H1, Untertitel, Stand, «Ein Ratgeber von …» | **umschreiben** | Byline mit Person oder Rolle (10.2) | [G-HC] |
| Einleitung | **kürzen** | «Saubere und gepflegte Räume schaffen eine angenehme Arbeitsatmosphäre …» ist ein Füllsatz | [NNG-READ] «marketese» |
| Kurz gesagt | **behalten** | gute Zusammenfassung für Scanner | [NNG-READ] «79 percent … scanned» |
| Zuerst den Bedarf klären | **behalten** |  |  |
| Worauf Sie achten sollten (8 Unterpunkte) | **behalten**, «Arbeitsbedingungen» als neuen Punkt ergänzen (Baustein 11.1.2) |  | S44, S45 |
| Schritt für Schritt | **behalten** |  |  |
| Fragen für die Besichtigung | **behalten** |  |  |
| So beantwortet BGS diese Fragen | **ergänzen** nach F1 und F2, bis dahin **kürzen** auf die belegten Punkte und die Lücke nicht betonen | Die Liste lässt Qualitätskontrolle und Vertretung aus | `ratgeber.ts` |
| **neu** | **hinzufügen**: 11.1.1 Typische Fehler, 11.1.2 Arbeitsbedingungen, 11.1.3 Vergleichsraster |  |  |

#### Baustein 11.1.1: Typische Fehler bei der Vergabe

> **Sieben Fehler, die später teuer werden**
>
> 1. **Offerte ohne Besichtigung annehmen.** Der Preis stimmt dann oft nicht mit dem Aufwand überein, und es kommt zu Nachträgen oder zu Abstrichen bei der Reinigung.
> 2. **Nur den Stundensatz vergleichen.** Entscheidend sind Stunden pro Einsatz, Einsätze pro Monat und was enthalten ist.
> 3. **Den Umfang nicht schriftlich festhalten.** Ohne Leistungsverzeichnis gibt es bei Beanstandungen keinen Massstab.
> 4. **Schlüssel ohne Liste übergeben.** Halten Sie fest, wer welche Schlüssel, Badges und Codes erhält und wie Verlust und Rückgabe geregelt sind.
> 5. **Die Vertretung nicht regeln.** Fragen Sie, wer bei Ferien oder Krankheit reinigt.
> 6. **Lange Mindestlaufzeit ohne Probezeit.** Klären Sie Laufzeit und Kündigungsfrist vor der Unterschrift.
> 7. **Arbeitsbedingungen nicht prüfen.** Für die meisten Reinigungsfirmen gilt ein allgemeinverbindlicher Gesamtarbeitsvertrag (siehe unten).

Beleg: Fachwissen, deckt sich mit den Fragen des Artikels. Keine Aussage über BGS.

#### Baustein 11.1.2: Arbeitsbedingungen prüfen

> **Gesamtarbeitsvertrag der Reinigungsbranche**
>
> In der Deutschschweiz gilt ein allgemeinverbindlich erklärter Gesamtarbeitsvertrag für Betriebe, die Unterhalts- oder Spezialreinigung an, in und um Gebäude ausführen und mindestens sechs Arbeitnehmende beschäftigen. Er legt unter anderem Mindestlöhne fest. Unterstellte Firmen können bei der paritätischen Kommission eine Bestätigung beziehen, etwa für Ausschreibungen. Fragen Sie danach, besonders bei auffallend günstigen Offerten.

Beleg: [S44] SECO, [S45] ZPK Reinigung. Keine Aussage über BGS. Mit einer Antwort auf F3 kommt ein Satz zu BGS dazu.

#### Baustein 11.1.3: Vergleichsraster für Offerten

> | | Firma A | Firma B | Firma C |
> |---|---|---|---|
> | Besichtigung erfolgt | | | |
> | Stunden pro Einsatz | | | |
> | Einsätze pro Monat | | | |
> | Betrag pro Monat, mit Mehrwertsteuer | | | |
> | Material und Mittel enthalten | | | |
> | Zuschläge (Abend, Nacht, Wochenende) | | | |
> | Vertretung bei Ferien und Krankheit | | | |
> | Haftpflicht, Deckungssumme | | | |
> | Laufzeit und Kündigungsfrist | | | |
> | Bestätigung Gesamtarbeitsvertrag | | | |

Beleg: Fachwissen.

### 11.2 Was kostet eine Unterhaltsreinigung? `/blog/reinigungskosten-schweiz`

409 Wörter. Kürzester Text, aber die Seite zur häufigsten Nutzerfrage (24, Befund 3: Kosten). NN/g: Wer Preise versteckt, gilt als «evasive and untrustworthy», und B2B-Käufer brauchen einen Rahmen für die Budgetfreigabe [NNG-PRICE], [NNG-B2B]. Ohne eigene Preise (E18, R3e) kann der Artikel diesen Rahmen über öffentliche Größen geben.

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| Kopf | **umschreiben** | Byline (10.2) | [G-HC] |
| Einleitung | **behalten** | klare Eingrenzung auf die Unterhaltsreinigung |  |
| Kurz gesagt | **behalten** |  |  |
| Kostenfaktoren (5) | **behalten**, «Arbeitsbedingungen» ergänzen (Baustein 11.2.1) |  |  |
| Warum wir keine Preise nennen | **behalten** | ehrlich, begründet | R3e |
| Wie abgerechnet wird | **ersetzen** durch Baustein 11.2.2 | Nur zwei Sätze. Ein Rechenweg ohne Zahlen ist konkreter |  |
| Offerten vergleichen | **behalten**, mit 11.1.3 verlinken |  |  |
| So kommen Sie zu Ihrer Offerte | **behalten** |  |  |
| **neu** | **hinzufügen**: 11.2.1, 11.2.2, 11.2.3 |  |  |

#### Baustein 11.2.1: Was die Untergrenze bestimmt

> **Die Löhne als Untergrenze**
>
> Der grösste Teil der Kosten einer Unterhaltsreinigung sind Löhne. Für die Deutschschweiz legt der allgemeinverbindliche Gesamtarbeitsvertrag der Reinigungsbranche Mindestlöhne fest. 2026 betragen sie in der Unterhaltsreinigung CHF 21.95 und CHF 23.45 pro Stunde, in der Spezialreinigung CHF 23.95 und CHF 25.45, je nach Lohnkategorie. Vorübergehende Nachtarbeit zwischen 23 und 6 Uhr wird mit einem Zuschlag von 25 Prozent vergütet.
>
> Dazu kommen Sozialversicherungen, Ferien, Anfahrt, Material, Geräte und die Leitung der Einsätze. Eine Offerte, die pro Stunde kaum über dem Mindestlohn liegt, geht deshalb nicht auf. Fragen Sie in diesem Fall nach, wie sie zustande kommt.

Beleg: [ZPK-LOHN] (Abruf 28.09.2026, GAV gültig bis 31.12.2029). Das sind Branchenzahlen, keine Preise von BGS. **Brandea entscheidet**, ob Zahlen der Branche nach R3e erlaubt sind. Ohne Zahlen: «legt Mindestlöhne je Lohnkategorie fest (Übersicht bei der ZPK Reinigung)».

#### Baustein 11.2.2: So entsteht der Monatsbetrag

> **Der Rechenweg einer Offerte**
>
> Stunden pro Einsatz × Einsätze pro Monat × Stundenansatz
> \+ Material und Mittel, soweit vereinbart
> \+ allfällige Zuschläge für Randzeiten
> \+ Mehrwertsteuer (8,1 %)
> = Betrag pro Monat
>
> Die Stunden pro Einsatz ergeben sich aus Fläche, Raumarten, Bodenbelägen und Nutzung. Deshalb sehen wir das Objekt an, bevor wir rechnen.

Beleg: Normalsatz der MWST 8,1 % seit 01.01.2024 (ESTV). Keine Preisangabe von BGS.

#### Baustein 11.2.3: Für Verwaltungen: Kosten in der Nebenkostenabrechnung

> Reinigungskosten für Treppenhaus und Allgemeinflächen lassen sich nur dann auf die Mieterschaft überwälzen, wenn der Mietvertrag sie als Nebenkosten besonders vereinbart (Art. 257a Abs. 2 OR). Achten Sie darauf, dass Offerte und Rechnung die Reinigung je Liegenschaft ausweisen. Mehr unter [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).

Beleg: [OR-257a].

---

## 12. Rechtliches `/impressum`, `/datenschutz`

| Container | Urteil | Grund | Beleg |
|---|---|---|---|
| Impressum: Betreiberin, Kontakt, Register, Haftung, Links, Urheberrecht, Datenschutz, Stand | **behalten** | vollständig nach Art. 954a OR, sachlich | E22, E62 |
| Datenschutz: Verantwortlich bis Änderungen (11 Abschnitte) | **behalten**, Abschnitt «Karte» korrigieren (K4) | Die Karte lädt auch auf `/einzugsgebiet` | `AreaView.tsx` |
| Datenschutz: Formularfelder | **nachführen**, wenn Maßnahme 3 umgesetzt wird | neues Feld «Sie sind» | E70 (Rechtstext: Brandea fragen) |

Mehrwert-Bausteine sind hier nicht sinnvoll. Rechtstexte sollen vollständig und richtig sein, nicht werben.

---

## Hero-Kurzsätze

Höchstens 110 Zeichen, geprüft mit `hero.py`. Jeder Satz nennt einen Nutzen und einen Ort oder eine Zielgruppe. Zum Vergleich: Die Entwürfe der Hero-Session in `content/de/hero.ts` nennen bei 16 von 24 Seiten weder einen Ort noch ausdrücklich eine Zielgruppe (Objektarten wie «Büros und Praxen» nicht mitgezählt). Beispiele sind `/leistungen/hauswartung`, `/leistungen/sonderreinigungen` und sogar `/einzugsgebiet/zug` und `/einzugsgebiet/aargau`, deren Satz den Kanton nicht nennt.

| Pfad | Kurzsatz | Zeichen |
|---|---|---|
| `/` | Gepflegte Liegenschaften, Büros und Hallen für Verwaltungen und Unternehmen in Luzern, Zug und Umgebung. | 104 |
| `/leistungen` | Laufende Reinigung, einmalige Einsätze und Hauswartung für Liegenschaften und Betriebe in fünf Kantonen. | 104 |
| `/leistungen/unterhaltsreinigung` | Treppenhaus, Eingang und Waschküche mehrmals pro Woche sauber, für Verwaltungen und Eigentümer in Luzern. | 105 |
| `/leistungen/bueroreinigung` | Saubere Büros und Praxen zu Zeiten, die Ihren Betrieb nicht stören. In Luzern, Zug und Umgebung. | 96 |
| `/leistungen/sonderreinigungen` | Grundreinigung gegen Kalk, Fett und alte Pflegeschichten, für Verwaltungen und Betriebe in Luzern und Zug. | 106 |
| `/leistungen/umzugsreinigung` | Endreinigung auf den Abgabetermin, mit Abnahmegarantie. Für Verwaltungen und Eigentümer in Luzern und Zug. | 106 |
| `/leistungen/baureinigung` | Bezugsbereit zum Übergabetermin: Bauendreinigung für Bauherrschaften und Generalunternehmen in Luzern und Zug. | 110 |
| `/leistungen/fenster-und-fassadenreinigung` | Klare Fenster und gepflegte Fassaden, gereinigt mit der Methode, die zum Material passt. In Luzern und Zug. | 107 |
| `/leistungen/industrie-und-hallenreinigung` | Saubere, sichere Hallenböden und Anlagen, geplant nach Ihren Schichten. Für Betriebe in Luzern und Aargau. | 106 |
| `/leistungen/hauswartung` | Jemand sieht regelmässig nach dem Rechten und meldet Mängel. Für Verwaltungen und Stockwerkeigentümer. | 102 |
| `/leistungen/aussen-und-gruenflaechenpflege` | Rasen, Hecken, Wege und Plätze im Rhythmus der Jahreszeiten gepflegt, für Liegenschaften in Luzern und Zug. | 107 |
| `/leistungen/facility-services` | Reinigung, Hauswartung und Umgebung in einem Vertrag mit einer Ansprechperson, für Verwaltungen und Firmen. | 107 |
| `/premium` | Diskrete Pflege von Villen, Zweitwohnungen, Jets und Yachten am Vierwaldstätter- und Zugersee. | 94 |
| `/premium/luxusimmobilien` | Naturstein, Parkett und Hochglanz materialgerecht gepflegt, immer vom selben Team, am Vierwaldstättersee. | 105 |
| `/premium/privatjet` | Kabinenpflege für Leder, Holz und feine Textilien, geplant nach Ihren Flügen. Für Eigentümer und Betreiber. | 107 |
| `/premium/yacht` | Teak, Gelcoat und Polster richtig gepflegt, direkt am Liegeplatz am Vierwaldstättersee und am Zugersee. | 103 |
| `/einzugsgebiet` | Von Emmenbrücke aus in Luzern, Zug, Aargau, Nidwalden und Obwalden, überall mit allen Leistungen. | 97 |
| `/einzugsgebiet/luzern` | Vom Sitz in Emmenbrücke aus für Liegenschaften, Büros und Betriebe im ganzen Kanton Luzern. | 91 |
| `/einzugsgebiet/zug` | Büroreinigung und Hauswartung im Kanton Zug, abgestimmt auf Ihren Geschäftsbetrieb, in vier Sprachen. | 101 |
| `/einzugsgebiet/aargau` | Hallen-, Bau- und Unterhaltsreinigung für Betriebe und Liegenschaften im Aargau, geplant nach Ihren Schichten. | 110 |
| `/einzugsgebiet/nidwalden` | Liegenschaften und Zweitwohnungen in Nidwalden betreut, vom Seeufer in Hergiswil bis ins Engelbergertal. | 104 |
| `/einzugsgebiet/obwalden` | Reinigung für Liegenschaften im Sarneraatal, für Zweitwohnungen und Hotels in Engelberg. | 88 |
| `/ueber-uns` | Seit 2006 in Reinigung und Hauswartung: über 50 Mitarbeitende für über 120 Kunden in fünf Kantonen. | 99 |
| `/kontakt` | Wir melden uns an Werktagen innerhalb von 24 Stunden und sehen uns Ihr Objekt kostenlos an. | 91 |
| `/blog` | Wissen für Verwaltungen und Unternehmen: Vergabe, Kosten und Ablauf einer Gebäudereinigung in der Schweiz. | 106 |
| `/blog/richtige-reinigungsfirma-finden` | Was Verwaltungen und Unternehmen vor der Vergabe klären: Umfang, Versicherung, Offerte und Vertrag. | 99 |
| `/blog/reinigungskosten-schweiz` | Wovon der Preis einer Unterhaltsreinigung abhängt und wie Sie Offerten in der Schweiz fair vergleichen. | 103 |
| `/impressum` (optional) | Wer hinter dieser Website steht: Firma, Vertretung, Handelsregister und Kontakt in Emmenbrücke. | 95 |
| `/datenschutz` (optional) | Welche Daten diese Website bearbeitet und welche Rechte Sie nach dem Schweizer Datenschutzgesetz haben. | 103 |

Hinweis: `/kontakt`, `/impressum`, `/datenschutz` und die Artikel sind in `hero.ts` bewusst ausgenommen (`HeroPath`). Die Sätze dafür sind optional, etwa für Untertitel oder die Meta-Beschreibung.

---

## Quellen

**Maßstäbe** (abgerufen am 28.09.2026, Zitate aus dem Abruf)
- [G-HC] Google Search Central, «Creating helpful, reliable, people-first content»: «Does the content provide original information, reporting, research, or analysis?», «… insightful analysis or interesting information beyond the obvious?», «substantial value when compared to other pages in search results», «Do pages carry a byline, where one might be expected?». https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- [G-SPAM] Google Spam Policies, Doorway abuse: «Creating substantially similar pages that are closer to search results than a clearly defined, browseable hierarchy». https://developers.google.com/search/docs/essentials/spam-policies
- [SQRG] Search Quality Rater Guidelines, Fassung 11.09.2025. §3.2: «effort, originality, and talent or skill». §3.3.1: «Be skeptical of claims that websites make about themselves». §3.3.5: «small websites may have little or no reputation information. This is not indicative of high or low quality.» §3.4: «The most important member … is Trust.» §5.2.2: «place the most helpful and essential MC near the top of the page». https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf
- [NNG-READ] Nielsen Norman Group, «How Users Read on the Web»: «79 percent … always scanned … only 16 percent read word-by-word». «Concise, SCANNABLE, and Objective»: Marketese mit «exaggeration, subjective claims, and boasting», Nutzer wollen «fact, not platitudes». https://www.nngroup.com/articles/how-users-read-on-the-web/ · https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/
- [NNG-PRICE] NN/g «Show Price»: «People view companies that hide costs as being evasive and untrustworthy». Als Ausweg «showing prices for typical scenarios, price range». https://www.nngroup.com/articles/show-price/
- [NNG-B2B] NN/g «B2B vs. B2C»: «B2B customers will need a price range so they can begin getting budget approval.» https://www.nngroup.com/articles/b2b-vs-b2c/
- [NNG-TRUST] NN/g «Trustworthiness in Web Design»: Upfront Disclosure, Connected to the Rest of the Web. https://www.nngroup.com/articles/trustworthy-design/
- [NNG-SCROLL] NN/g «Scrolling and Attention»: «57% of their page-viewing time above the fold», «Reserve the top of the page for high-priority content». https://www.nngroup.com/articles/scrolling-and-attention/

**Wettbewerber** (abgerufen am 28.09.2026)
- [W-MRC] mr. clean, Büroreinigung Luzern (organisch Platz 1, 2'509 Wörter laut 24, Einflussfaktoren, «Nur mit Protokoll. Immer.» zu Schlüsseln, GAV-Mindestlöhne, ohne Autor und Datum) und Hauswartung Luzern («Basisleistungen, Zusatzleistungen und Ausschlüssen» als Empfehlung). https://www.mrclean.ch/buroreinigung-luzern/ · https://www.mrclean.ch/hauswartung-luzern/
- [W-TIP] TipTop Cleaners, Umzugsreinigung Luzern: Festpreise ab CHF 559, Abnahmegarantie ohne Grenzen, Versicherung und Schlüssel fehlen. https://tiptopcleaners.ch/dienstleistungen/umzugsreinigung/luzern
- [W-CP] Clean Profis, Umzugsreinigung Luzern: Garantie «bei normalen Verschmutzungen», detailliertes Formular, keine FAQ. https://cleanprofis.ch/umzugsreinigung/luzern/
- [W-BIAG] BiAg Facility Services, Hauswartung Luzern: Leistungen in einem Satz, auch «Schnee Räumen», Formular mit 4 Feldern. https://biagclean.ch/hauswartung-luzern/
- [W-VW] Vierwald, Hauswartungen: Rubriken ohne Ablauf, Vertrag, Haftung, Floskeln. https://vierwald.ch/hauswartungen/
- [W-Tabelle] Vergleich «Entscheidungsinformation × Wettbewerber» (Recherche-Auszug): Ausschlüsse nirgends vollständig, Haftung und Schlüssel nur bei mr. clean, Autor und Datum bei keinem der geprüften.

**Recht und Fachwissen**
- [OR-267a] Art. 267a OR, Wortlaut nach justement.ch (Stand 01.01.2026). https://justement.ch/de/doc/act/ch/220/part_2/tit_8/chap_1/lvl_p/lvl_ii/art_267_a
- [RÜGE] Anforderungen an die Mängelrüge und das Rückgabeprotokoll: https://www.bnlawyers.ch/2021/08/mietrecht-rueckgabe-der-mietsache-maengelruege-obliegenheit-8133 · https://www.grell-law.ch/blogitems/2020/07/21/rckgabe-mietobjekt-zeitliche-und-inhaltliche-anforderungen-an-vermieterseitige-prfung-und-meldung-an-die-mieterschaft-art-267a-or
- [OR-58] Art. 58 OR, Werkeigentümerhaftung. https://www.droit-bilingue.ch/rs/lex/1911/00/19110009-a58-de-fr.html
- [BFU] BFU, «Was bedeutet Werkeigentümerhaftung?»: «periodisch Inspektionen durchzuführen und zu dokumentieren». https://www.bfu.ch/de/services/rechtsfragen/was-bedeutet-werkeigentuemerhaftung
- [OR-256], [OR-257a] Art. 256 OR (tauglicher Zustand) und Art. 257a Abs. 2 OR (Nebenkosten nur bei besonderer Vereinbarung). https://justement.ch/de/doc/act/ch/220/part_2/tit_8/chap_1/lvl_E/lvl_I/lvl_2/lvl_a/art_257_a · https://www.weka.ch/themen/bau-immobilien/immobilien/mietzins-und-nebenkosten/article/mietnebenkosten-muss-der-mieter-diese-zusaetzlich-zum-mietzins-bezahlen/
- [OR-259] Art. 259 OR, kleiner Unterhalt: https://www.mieterverband.ch/mietrecht/waehrend-der-miete/kleiner-unterhalt/ · https://www.gerichte-zh.ch/themen/miete/rechte-und-pflichten/maengel-an-der-mietsache/kleiner-unterhalt.html
- [TERMINE] Ortsübliche Kündigungstermine (Portal-Übersichten, sekundär): https://www.comparis.ch/-/media/files/documents/immobilien/kuendigungstermine/ortsuebliche_kuendigungstermine_20210812_de.pdf · https://www.homegate.ch/c/de/ratgeber/mieten/mietrecht/mieter/ortsuebliche-kuendigungstermine · https://www.ktipp.ch/artikel/d/mietrecht-ist-die-wohnung-auf-jedes-monatsende-kuendbar/. Vor der Veröffentlichung je Gemeinde bei mietrecht.ch prüfen.
- [GSCHG-6] Art. 6 GSchG: «Es ist untersagt, Stoffe, die Wasser verunreinigen können, mittelbar oder unmittelbar in ein Gewässer einzubringen oder sie versickern zu lassen.» Zitiert im Merkblatt Gewässerverschmutzung (AFU SG, Kanton Thurgau). https://umwelt.tg.ch/public/upload/assets/12818/Merkblatt_Gewaesserverschmutzung.pdf?fp=2
- [VSA] VSA, Projektbeschrieb Fassadenreinigung (interkantonales Merkblatt). https://vsa.ch/Mediathek/projektbeschrieb-fassadenreinigung/
- [CHEMRRV] Herbizidverbot auf Wegen und Plätzen, ChemRRV Anhang 2.5 Ziff. 1.1 Abs. 2 (BAFU, «Pflanzenschutz in der Gemeinde»). https://www.bafu.admin.ch/de/pflanzenschutz-in-der-gemeinde · https://www.bafu.admin.ch/bafu/de/home/themen/chemikalien/dossiers/pflanzenschutzmittel/pflanzenschutzmittel-im-hausgarten-und-liegenschaftsunterhalt.html
- [VOGELWARTE] Schweizerische Vogelwarte Sempach, «Schnitt von Sträuchern und Hecken in Siedlungen»: Schnitt ausserhalb der Brutzeit, am besten im Winter. https://www.vogelwarte.ch/modx/de/voegel/ratgeber/vogelfreundlicher-garten/schnitt-von-straeuchern-und-hecken-in-siedlungen
- [DSG-8] Art. 8 DSG (SR 235.1), Datensicherheit. https://www.fedlex.admin.ch/eli/cc/2022/491/de. Wortlaut nicht abgerufen (Fedlex lädt nur mit JavaScript), vor der Veröffentlichung prüfen.
- [S44], [S45], [ZPK-LOHN] SECO, GAV Reinigungsbranche Deutschschweiz; ZPK Reinigung, GAV-Inhalte (Mindestlöhne 2026, Nachtzuschlag, Gültigkeit bis 31.12.2029). https://zpk-reinigung.ch/recht-lohn/gav-inhalte

**Projektintern:** `07` (E18 bis E81), `11` (3.7, 3.9, 3.10), `12`, `14` (Abschnitt 6), `16` bis `20`, `23`, `24`. FIMI-Hausstandard: `FIMI-STANDARDS.md` (Kundensicht statt Firmensicht, Problem und Lösung, keine Floskeln) und `_ki-suche-optimierung/ERKENNTNISSE.md` (Fakten werden in KI-Antworten zitiert, How-to-Fragen gewinnen Ratgeber).
