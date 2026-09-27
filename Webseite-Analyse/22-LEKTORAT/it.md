# Lektorat Italienisch (it-CH): Website BGS - Gebäudeservice GmbH

Stand: 27.09.2026. Geprüft: alle Texte in `content/it/` gegen die deutsche Quelle in `content/de/`. Auftrag: Prüfung der Übersetzung anstelle von Brandea (E50), als Grundlage für `LANGUAGES=true` in der Produktion.

> **Nachtrag 27.09.2026 (N088):** Behoben sind die technischen Punkte ohne Entscheid: `areaServed` mit Kantonsnamen je Sprache, Rhythmus kommt als deutscher Wert in die E-Mail, Fehlerseite (ErrorBoundary) in der Sprache der Seite. Offen bleiben der Hinweis «deutsche Fassung massgebend» (Rechtstext, Brandea), die 404-Seite nur auf Deutsch (bekannt, N085) und die Stilpunkte für Muttersprachler (E72).

## 1. Kurzurteil

**Ja, das Italienische ist nach meinen Korrekturen freigabefähig.** Begründung:

- **Keine neuen Aussagen über das Unternehmen (E18).** Alle Zahlen, Zusagen und Grenzen stimmen mit der Quelle überein: seit 2006, über 50 Mitarbeitende, über 120 Kunden, Deckung CHF 10 Mio., Rückmeldung innerhalb von 24 Stunden an Werktagen, fünf Kantone, dieselben Orte und Seen, Garantie nur als Nachreinigung gemäss Offerte, kein Winterdienst und kein Pikettdienst.
- **Drei Auslassungen und zwei Sinnfehler sind behoben** (Tabelle, Schwere «kritisch»). Die Beschreibungen von «Servizi» und «Pulizia di cantiere» hatten das Gebiet auf «Lucerna e Zugo» verkürzt, beim Ratgeber fehlte ein Satz. «Lavori di giardinaggio» als ausgeschlossene Leistung widersprach der angebotenen Pflege. In der Datenschutzerklärung verschob «se» statt «nella misura in cui» das Löschrecht.
- **Rechtstexte in amtlicher Schweizer Terminologie**, geprüft am italienischen Wortlaut des DSG (LPD, SR 235.1, Stand 1.9.2023), des OR (CO, SR 220), an TERMDAT und an den Seiten des EDÖB (IFPDT).
- **Begriffe sind vereinheitlicht** (Abschnitt 5), die Typografie ist einheitlich, alle Titel liegen bei höchstens 70 Zeichen.
- **Technisch geprüft:** `npm run check` ohne Fehler. Alle 1268 Schlüssel, alle `${...}`-Ausdrücke, Importe und Exporte sind unverändert.

Zwei Bedingungen, die ausserhalb des Italienischen liegen:

1. **Der Schalter `LANGUAGES` schaltet Englisch, Französisch und Italienisch nur gemeinsam frei** (`shared/i18n.ts`, `activeLocales`). Italienisch allein geht nicht live, Englisch und Französisch müssen ebenfalls freigegeben sein.
2. **Empfohlen, aber nicht blockierend:** ein Satz, dass bei Abweichungen die deutsche Fassung massgebend ist (Vorschlag in Abschnitt 6, Punkt 3), und die Durchsicht der in Abschnitt 7 genannten Stellen durch eine Person mit Italienisch als Muttersprache.

## 2. Zahlen

| Grösse | Wert |
|---|---|
| Geprüfte Dateien | 9 in `content/it/` (common, index, leistungen, navigation, premium, ratgeber, recht, seiten, seo), jeweils gegen die 9 deutschen Dateien |
| Zusätzlich gelesen | `CLAUDE.md`, `shared/company.ts`, `shared/i18n.ts`, `shared/seo.ts`, `shared/structured-data.ts`, `content/types.ts`, `content/index.ts`, Komponenten und Routen für italienische Seiten (nur lesend) |
| Geprüfte Zeichenketten | 1269 Schlüssel (1268 je Marken-Modus, dazu 1 Text nur mit neuer Marke), davon 1130 sichtbare Texte (866 verschiedene) und 139 technische Werte (Adressen, Schlüssel, Datumswerte, Formularwerte für die E-Mail) |
| Beide Marken-Modi geprüft | ja: Arbeitsmarke «BGS Gebäudeservice» und neue Marke «Mantena» mit «Clavea», einschliesslich der markenabhängigen Texte |
| Änderungen | 176 Einträge an 213 Fundstellen im Quelltext. Über gemeinsam genutzte Texte ändern sie 251 angezeigte Schlüssel |
| davon kritisch (Bedeutung, Recht, neue Aussage) | 5 Einträge, 5 Fundstellen |
| davon mittel (falscher oder unüblicher Begriff) | 59 Einträge, 78 Fundstellen |
| davon gering (Stil, Typografie, Grammatik) | 112 Einträge, 130 Fundstellen |
| Titel, längster Wert | 70 Zeichen mit Arbeitsmarke (`Scegliere l’impresa di pulizie: criteri e domande \| BGS Gebäudeservice`), 61 mit neuer Marke, keine doppelten Titel |

Werkzeuge zum Nachprüfen liegen im Scratchpad unter `it-pruefung/`: `flatten.cjs` legt alle Texte je Schlüssel deutsch und italienisch nebeneinander, `titles.cjs` berechnet die vollständigen Titel wie `metaFor()`, `edits.py` enthält jede Änderung mit Trefferzahl, `protokoll.json` das Ergebnis.

**Typografie (festgestellt und beibehalten):** typografischer Apostroph ’ (über 300 Stellen, kein gerades '), Anführungszeichen «», Höflichkeitsform durchgehend gross (Lei, La, Le, Sua, Suo, auch angehängt wie «interessarLe», «allestirLe»; 198 Formen, keine abweichende), Titeltrenner « | », drei Punkte «...» wie in der Quelle, keine Gedankenstriche mehr.

## 3. Alle Änderungen

Sortiert nach Schwere (kritisch, mittel, gering), dann nach Datei. «vorher» und «nachher» zeigen den geänderten Ausschnitt aus dem Quelltext ohne die Anführungszeichen des Codes. Bei mehreren Fundstellen wurde derselbe Ausschnitt überall in der Datei ersetzt; die Spalte «Schlüssel» nennt dann alle betroffenen Stellen.

| Nr. | Datei | Schlüssel oder Zeile | vorher | nachher | Grund | Schwere |
|---|---|---|---|---|---|---|
| 1 | `content/it/seo.ts` | pages['/leistungen'].description | Pulizia di manutenzione, di uffici, speciale, di cantiere, di finestre e industriale, custodia e facility services di ${company.brand} a Lucerna e Zugo. | Pulizia di manutenzione, di uffici, di cantiere, di vetri e industriale, pulizie speciali, custodia e facility services di ${company.brand} a Lucerna, Zugo e dintorni. | «und Umgebung» fehlte (Gebiet verkürzt); «speciale» im Singular falsch | kritisch |
| 2 | `content/it/seo.ts` | pages['/leistungen/baureinigung'].description | Per committenti, architetti e amministrazioni a Lucerna e Zugo. | Per committenti, architetti e amministrazioni immobiliari a Lucerna, Zugo e dintorni. | «und Umgebung» fehlte (Gebiet verkürzt) | kritisch |
| 3 | `content/it/seo.ts` | pages['/blog/richtige-reinigungsfirma-finden'].description | i punti da chiarire prima di affidare l’incarico a un’impresa di pulizie. | i punti da chiarire prima di affidare l’incarico a un’impresa di pulizie. Con le fasi fino al contratto. | Satz «Mit Ablauf bis zum Vertrag» fehlte | kritisch |
| 4 | `content/it/leistungen.ts` | aussenUndGruen.scope.notIncluded[1] | Lavori di giardinaggio e nuove sistemazioni. | Costruzione di giardini e nuove sistemazioni a verde. | «giardinaggio» umfasst die angebotene Pflege; gemeint ist Gartenbau und Neuanlagen | kritisch |
| 5 | `content/it/recht.ts` | datenschutz.sections[6].items[2] | chiedere la cancellazione dei Suoi dati, se non sussiste un obbligo di conservazione | chiedere la cancellazione dei Suoi dati, nella misura in cui non sussista un obbligo di conservazione | «soweit» heisst «nella misura in cui»; «se» verschiebt die Aussage (Löschung ganz oder gar nicht) | kritisch |
| 6 | `content/it/seo.ts` | pages['/premium'].description (beide Marken-Varianten) (2 Fundstellen) | residenze secondarie | abitazioni secondarie | Ermessensfrage Zweitwohnungen: amtlich «abitazioni secondarie» (LASec) | mittel |
| 7 | `content/it/seo.ts` | pages['/leistungen/sonderreinigungen'].description | Pulizia a fondo e pulizia di fine locazione con garanzia di riconsegna per amministrazioni, proprietari e aziende a Lucerna, Zugo e dintorni. | Pulizia a fondo, pulizia di fine locazione e pulizia finale con garanzia di consegna per amministrazioni immobiliari, proprietari e aziende a Lucerna, Zugo e dintorni. | Abnahmegarantie = «garanzia di consegna» (Mobiliare, comparis); «pulizia finale» für Wohnungsendreinigung | mittel |
| 8 | `content/it/seo.ts` | pages['/leistungen/fenster-und-fassadenreinigung'].label und .title (2 Fundstellen) | Pulizia di finestre e facciate | Pulizia di vetri e facciate | Fachbegriff, passt zur Adresse | mittel |
| 9 | `content/it/seo.ts` | pages['/leistungen/hauswartung'].description | Custodia per il Suo stabile: giri di controllo, vano scale, lavanderia, piccole riparazioni, impiantistica, riconsegne, smaltimento e aree esterne. | Custodia del Suo stabile: giri di controllo, vano scale, lavanderia, piccole riparazioni, impiantistica, consegne e riconsegne degli appartamenti, smaltimento e aree esterne. | «riconsegne» allein unklar; Wohnungsübergaben = Ein- und Auszug | mittel |
| 10 | `content/it/seo.ts` | pages['/leistungen/aussen-und-gruenflaechenpflege'].label | label: Aree esterne e verdi | label: Manutenzione delle aree esterne e verdi | Vollständiger Leistungsname mit Fachbegriff | mittel |
| 11 | `content/it/seo.ts` | pages['/leistungen/aussen-und-gruenflaechenpflege'].title | title: Cura delle aree esterne e verdi | title: Manutenzione delle aree esterne e verdi | Fachbegriff «manutenzione» (Suchbegriff «manutenzione aree verdi») | mittel |
| 12 | `content/it/seo.ts` | pages['/leistungen/aussen-und-gruenflaechenpflege'].description | Cura delle aree esterne e verdi del Suo stabile, singolarmente o nell’ambito della custodia. Nei Cantoni ${region}. | Manutenzione delle aree esterne e verdi del Suo stabile, singolarmente o nell’ambito del servizio di custodia. Nei Cantoni di ${region}. | Fachbegriff; «di» vor Kantonen | mittel |
| 13 | `content/it/seo.ts` | pages['/leistungen/facility-services'].description | Pulizia, custodia e cura delle aree esterne in un unico contratto con un solo interlocutore. Per amministrazioni e aziende a Lucerna, Zugo e dintorni. | Pulizia, custodia e manutenzione delle aree esterne in un unico contratto con un solo interlocutore. Per amministrazioni immobiliari e aziende a Lucerna, Zugo e dintorni. | Fachbegriff; Verwaltungen = amministrazioni immobiliari | mittel |
| 14 | `content/it/common.ts` | steps.anfrage.text (auf allen Leistungsseiten, Start und Kontakt) | è trattata personalmente dal direttore; riceverà | è trattata personalmente dal gerente; riceverà | Ermessensfrage Geschäftsführer: «gerente» (Art. 809 ff. OR, Handelsregister); «direttore» ist in der GmbH eine andere Funktion (Art. 804 Abs. 3 OR) | mittel |
| 15 | `content/it/navigation.ts` | serviceGroups[0].links[4].label | label: Finestre e facciate | label: Vetri e facciate | Fachbegriff «pulizia di vetri e facciate», passt zur Adresse /servizi/pulizia-di-vetri-e-facciate | mittel |
| 16 | `content/it/navigation.ts` | serviceGroups[1].title | title: Custodia e cura | title: Custodia e manutenzione | «cura» allein ist vage; Fachbegriff «manutenzione» | mittel |
| 17 | `content/it/navigation.ts` | serviceGroups[1].links[1].label, contactForm.serviceOptions[1].options[7].label (2 Fundstellen) | Cura delle aree esterne e verdi | Manutenzione delle aree esterne e verdi | Fachbegriff «manutenzione del verde / delle aree verdi», passt zur Adresse /servizi/manutenzione-del-verde | mittel |
| 18 | `content/it/navigation.ts` | contactForm.serviceOptions[0].options[3].label | label: Residenze secondarie e residences | label: Abitazioni secondarie e residence | Ermessensfrage Zweitwohnungen: amtlich «abitazioni secondarie» (LASec); Fremdwort im Plural ohne «s» | mittel |
| 19 | `content/it/navigation.ts` | contactForm.serviceOptions[1].options[4].label | label: Pulizia di finestre e facciate | label: Pulizia di vetri e facciate | Einheitlicher Leistungsname | mittel |
| 20 | `content/it/navigation.ts` | contactForm.consentLink | consentLink: informativa sulla protezione dei dati | consentLink: dichiarazione sulla protezione dei dati | Schweizer Begriff (IFPDT, admin.ch) und einheitlich mit der Seite; behebt zudem «della informativa» ohne Elision; TERMDAT DSCHU24 führt beide Formen, gewählt ist die Form der Bundesseiten | mittel |
| 21 | `content/it/leistungen.ts` | unterhaltsreinigung.scope.items[3] | Servizi igienici, cucine e locali di soggiorno | Servizi igienici, cucine e locali pausa | «locali di soggiorno» klingt nach Wohnzimmer; Aufenthaltsräume = locali pausa | mittel |
| 22 | `content/it/leistungen.ts` | bueroreinigung.scope.items[3] | Angoli cucina e locali di soggiorno | Angoli cucina e locali pausa | Aufenthaltsräume im Büro = locali pausa | mittel |
| 23 | `content/it/leistungen.ts` | bueroreinigung.sections[0].paragraphs[0] | e che cosa assume il team dello studio lo chiariamo | e di che cosa si occupa il team del Suo studio lo chiariamo | «assumere» hier falsch (einstellen, einnehmen); «Ihr Praxisteam» | mittel |
| 24 | `content/it/leistungen.ts` | bueroreinigung.faq[1].answer | quali locali e superfici assumiamo. | di quali locali e superfici ci occupiamo. | «assumere locali» falsch | mittel |
| 25 | `content/it/leistungen.ts` | sonderreinigungen.scope.items[1] | Pulizia di fine locazione e di riconsegna dell’appartamento con garanzia di riconsegna | Pulizia di fine locazione e pulizia finale dell’appartamento con garanzia di consegna | Doppeltes «riconsegna»; Wohnungsendreinigung = pulizia finale; Abnahmegarantie = garanzia di consegna | mittel |
| 26 | `content/it/leistungen.ts` | sonderreinigungen.sections[1].title | title: Pulizia di fine locazione con garanzia di riconsegna | title: Pulizia di fine locazione e pulizia finale con garanzia di consegna | Wohnungsendreinigung fehlte; Fachbegriff Garantie | mittel |
| 27 | `content/it/leistungen.ts` | sonderreinigungen.steps[3].text | vale la garanzia di riconsegna secondo l’offerta. | vale la garanzia di consegna prevista nell’offerta. | Fachbegriff Garantie; «gemäss Offerte» idiomatisch | mittel |
| 28 | `content/it/leistungen.ts` | baureinigung.scope.intro | Quali tappe assumiamo lo stabiliamo con Lei. | Di quali tappe ci occupiamo lo stabiliamo con Lei. | «assumere tappe» falsch | mittel |
| 29 | `content/it/leistungen.ts` | fensterUndFassade.h1 | h1: Pulizia di finestre e facciate per aziende e stabili | h1: Pulizia di vetri e facciate per aziende e stabili | Einheitlicher Leistungsname | mittel |
| 30 | `content/it/leistungen.ts` | hauswartung.lead[0] | essere presente alle riconsegne degli appartamenti. | essere presente alle consegne e riconsegne degli appartamenti. | Wohnungsübergaben umfassen Ein- und Auszug | mittel |
| 31 | `content/it/leistungen.ts` | hauswartung.scope.title | Che cosa assume il servizio di custodia | Che cosa comprende il servizio di custodia | «assumere» hier falsch | mittel |
| 32 | `content/it/leistungen.ts` | hauswartung.scope.items[5] | Collaborare alle riconsegne degli appartamenti | Collaborare alle consegne e riconsegne degli appartamenti | Wohnungsübergaben umfassen Ein- und Auszug | mittel |
| 33 | `content/it/leistungen.ts` | hauswartung.scope.items[7] | Cura delle aree esterne, maggiori informazioni alla pagina \[ | Manutenzione delle aree esterne, maggiori informazioni alla pagina \[ | Fachbegriff «manutenzione» | mittel |
| 34 | `content/it/leistungen.ts` | hauswartung.faq[0].answer | La pulizia di manutenzione pulisce con una cadenza fissa. Il servizio di custodia va oltre: giri di controllo, piccole riparazioni, impiantistica, smaltimento, riconsegne degli appartamenti e cura delle aree esterne. | La pulizia di manutenzione si svolge con una cadenza fissa. Il servizio di custodia va oltre: giri di controllo, piccole riparazioni, impiantistica, smaltimento, consegne e riconsegne degli appartamenti e manutenzione delle aree esterne. | «la pulizia pulisce»; Übergaben; Fachbegriff | mittel |
| 35 | `content/it/leistungen.ts` | aussenUndGruen.h1 | h1: Cura delle aree esterne e verdi per stabili | h1: Manutenzione delle aree esterne e verdi per stabili | Fachbegriff «manutenzione» | mittel |
| 36 | `content/it/leistungen.ts` | aussenUndGruen.steps[2].title | title: Piano di cura | title: Piano di manutenzione | Fachbegriff | mittel |
| 37 | `content/it/leistungen.ts` | aussenUndGruen.steps[3].title | title: Cura | title: Manutenzione | Fachbegriff | mittel |
| 38 | `content/it/leistungen.ts` | aussenUndGruen.faq[1].question | Posso affidare la cura delle aree esterne senza il servizio di custodia? | Posso affidare la manutenzione delle aree esterne senza il servizio di custodia? | Fachbegriff | mittel |
| 39 | `content/it/leistungen.ts` | aussenUndGruen.faq[1].answer | Sì. La cura delle aree esterne e verdi è disponibile | Sì. La manutenzione delle aree esterne e verdi è disponibile | Fachbegriff | mittel |
| 40 | `content/it/leistungen.ts` | aussenUndGruen.faq[2].question | Quanto costa la cura delle aree esterne? | Quanto costa la manutenzione delle aree esterne? | Fachbegriff | mittel |
| 41 | `content/it/leistungen.ts` | aussenUndGruen.cta.title | Offerta per la cura delle Sue aree esterne | Offerta per la manutenzione delle Sue aree esterne | Fachbegriff | mittel |
| 42 | `content/it/leistungen.ts` | facilityServices.lead[0] | Chi affida pulizia, custodia e cura delle aree esterne a imprese diverse | Chi affida pulizia, custodia e manutenzione delle aree esterne a imprese diverse | Fachbegriff | mittel |
| 43 | `content/it/leistungen.ts` | facilityServices.faq[0].answer | Pulizia, custodia e cura delle aree esterne da un unico fornitore | Pulizia, custodia e manutenzione delle aree esterne da un unico fornitore | Fachbegriff | mittel |
| 44 | `content/it/leistungen.ts` | facilityServices.related[0].text | Giri di controllo, piccole riparazioni, impiantistica, smaltimento e riconsegne degli appartamenti. | Giri di controllo, piccole riparazioni, impiantistica, smaltimento, consegne e riconsegne degli appartamenti. | Wohnungsübergaben umfassen Ein- und Auszug | mittel |
| 45 | `content/it/leistungen.ts` | facilityServices.related[2].text | Cura delle aree esterne e delle aree verdi. | Manutenzione delle aree esterne e delle aree verdi. | Fachbegriff | mittel |
| 46 | `content/it/leistungen.ts` | unterhaltsreinigung.related[2], sonderreinigungen.facts[2].value, .sections[1].paragraphs[0], .faq[0].question, baureinigung.related[0] (5 Fundstellen) | garanzia di riconsegna | garanzia di consegna | Abnahmegarantie = «garanzia di consegna» (Mobiliare, comparis) | mittel |
| 47 | `content/it/leistungen.ts` | Linktexte: unterhaltsreinigung.notIncluded[2], baureinigung.notIncluded[1], facilityServices.scope.items[4] (3 Fundstellen) | \[Pulizia di finestre e facciate\] | \[Pulizia di vetri e facciate\] | Einheitlicher Leistungsname | mittel |
| 48 | `content/it/leistungen.ts` | baureinigung.faq[2].answer (Linktext) | \[pulizia di finestre e facciate\] | \[pulizia di vetri e facciate\] | Einheitlicher Leistungsname | mittel |
| 49 | `content/it/leistungen.ts` | Linktexte: hauswartung.scope.items[7], facilityServices.scope.items[3] (2 Fundstellen) | \[Cura delle aree esterne e verdi\] | \[Manutenzione delle aree esterne e verdi\] | Fachbegriff | mittel |
| 50 | `content/it/premium.ts` | anfrage.text, cta.text, luxusimmobilien.sections[0].paragraphs[1] (3 Fundstellen) | dal direttore | dal gerente | Ermessensfrage Geschäftsführer: «gerente» | mittel |
| 51 | `content/it/premium.ts` | luxusimmobilien.facts[0].value, privatjet.related[0], yacht.related[0] (3 Fundstellen) | residenze secondarie | abitazioni secondarie | Ermessensfrage Zweitwohnungen: amtlich «abitazioni secondarie» | mittel |
| 52 | `content/it/ratgeber.ts` | reinigungsfirmaFinden.sections[4].items[1], kosten.sections[4].items[0] (2 Fundstellen) | dal direttore | dal gerente | Ermessensfrage Geschäftsführer: «gerente» | mittel |
| 53 | `content/it/seiten.ts` | home.services.groups[0].items[2] | Finestre e facciate | Vetri e facciate | Einheitlicher Leistungsname | mittel |
| 54 | `content/it/seiten.ts` | home.services.groups[1].title | Custodia e cura | Custodia e manutenzione | wie Menü | mittel |
| 55 | `content/it/seiten.ts` | home.services.groups[1].items[1], servicesOverview.groups[2].items[1].title (2 Fundstellen) | Cura delle aree esterne e verdi | Manutenzione delle aree esterne e verdi | Fachbegriff | mittel |
| 56 | `content/it/seiten.ts` | servicesOverview.groups[2].items[1].text | Cura delle aree esterne e delle aree verdi del Suo stabile. | Manutenzione delle aree esterne e delle aree verdi del Suo stabile. | Fachbegriff | mittel |
| 57 | `content/it/seiten.ts` | about.promises[0], about.contact.text, premiumOverview.promises[0], premiumOverview.cta.text (4 Fundstellen) | dal direttore | dal gerente | Ermessensfrage Geschäftsführer: «gerente» | mittel |
| 58 | `content/it/seiten.ts` | area.places.text | ad esempio per ville, residenze secondarie e alberghi. | ad esempio per ville, abitazioni secondarie e alberghi. | Ermessensfrage Zweitwohnungen | mittel |
| 59 | `content/it/seiten.ts` | servicesOverview.groups[1].items[0].text | Pulizia a fondo e pulizia di fine locazione con garanzia di riconsegna. | Pulizia a fondo, pulizia di fine locazione e pulizia finale con garanzia di consegna. | Wohnungsendreinigung fehlte; Fachbegriff Garantie | mittel |
| 60 | `content/it/seiten.ts` | servicesOverview.groups[1].items[2].title | Pulizia di finestre e facciate | Pulizia di vetri e facciate | Einheitlicher Leistungsname | mittel |
| 61 | `content/it/seiten.ts` | servicesOverview.groups[2].items[0].text | impiantistica, riconsegne degli appartamenti, smaltimento e aree esterne. | impiantistica, consegne e riconsegne degli appartamenti, smaltimento e aree esterne. | Wohnungsübergaben umfassen Ein- und Auszug | mittel |
| 62 | `content/it/seiten.ts` | premiumOverview.lead | Per ville e residenze, residenze secondarie, alberghi con esigenze particolari, family office, jet privati e yacht. Discreti, accurati e nella Sua lingua. | Per ville e residenze, abitazioni secondarie, alberghi con esigenze particolari, family office, jet privati e yacht. Con discrezione, cura e nella Sua lingua. | Ermessensfrage Zweitwohnungen; «Discreti, accurati» ohne Bezug | mittel |
| 63 | `content/it/seiten.ts` | premiumOverview.more[0].title | Residenze secondarie e residences | Abitazioni secondarie e residence | Ermessensfrage Zweitwohnungen und Residences | mittel |
| 64 | `content/it/recht.ts` | datenschutz.sections[5].paragraphs[0] | o sulle clausole contrattuali standard. | o sulle clausole contrattuali tipo. | Amtlicher Begriff (EU-Beschluss 2021/914, IFPDT) | mittel |
| 65 | `content/it/seo.ts` | pages['/'].title | title: ${company.brand} (Halbgeviertstrich) Pulizie e custodia di stabili a Lucerna e Zugo | title: ${company.brand} \| Pulizie e custodia di stabili a Lucerna e Zugo | Gedankenstrich entfernt (Projektregel), Trenner wie bei allen Titeln | gering |
| 66 | `content/it/seo.ts` | pages['/'].description | per aziende e stabili nei Cantoni ${region}, e pulizie premium. | per aziende e immobili nei Cantoni di ${region}, oltre a pulizie premium. | Doppeltes «stabili», holpriger Schluss | gering |
| 67 | `content/it/seo.ts` | pages['/premium/privatjet'].description | Un servizio discreto, secondo accordi con Lei e con team fissi. | Servizio discreto, previo accordo e con team fissi. | «nach Absprache» = «previo accordo»; Zusatz «con Lei» ohne Quelle entfernt | gering |
| 68 | `content/it/seo.ts` | pages['/premium/yacht'].description | Discreta e secondo accordi. | Servizio discreto, previo accordo. | «nach Absprache» = «previo accordo» | gering |
| 69 | `content/it/seo.ts` | pages['/leistungen/baureinigung'].label | label: Pulizia di cantiere | label: Pulizia di cantiere e di fine cantiere | Name wie im Deutschen vollständig (Brotkrumen, strukturierte Daten) | gering |
| 70 | `content/it/seo.ts` | pages['/leistungen/industrie-und-hallenreinigung'].label | label: Pulizia industriale | label: Pulizia industriale e di capannoni | Name wie Titel und Deutsch vollständig | gering |
| 71 | `content/it/seo.ts` | pages: unterhaltsreinigung, bueroreinigung, fenster, industrie, einzugsgebiet (.description) (5 Fundstellen) | Cantoni ${region | Cantoni di ${region | Kantonsnamen mit «di» | gering |
| 72 | `content/it/seo.ts` | pages['/einzugsgebiet'].description | Da ${company.address.city} nei Cantoni di ${region}, anche sulle rive dei laghi e a Engelberg. Tutti i servizi nell’intera zona. | Da ${company.address.city} operiamo nei Cantoni di ${region}, anche sulle rive dei laghi e a Engelberg. Tutti i servizi in tutta la zona. | Satz ohne Verb | gering |
| 73 | `content/it/seo.ts` | pages['/datenschutz'].title | title: Informativa sulla protezione dei dati | title: Dichiarazione sulla protezione dei dati | Schweizer Begriff (IFPDT, admin.ch); «informativa» ist Italien (DSGVO); TERMDAT DSCHU24 führt beide Formen, gewählt ist die Form der Bundesseiten | gering |
| 74 | `content/it/seo.ts` | pages['/datenschutz'].description | e quali diritti Le spettano in base alla legge sulla protezione dei dati. | e quali diritti Le spettano. | Zusatz ohne Entsprechung im Deutschen entfernt (inhaltlich zutreffend) | gering |
| 75 | `content/it/common.ts` | Kommentar zu steps | richiesta al direttore | richiesta al gerente | Kommentar an die Entscheidung «gerente» angeglichen (nicht sichtbar) | gering |
| 76 | `content/it/common.ts` | ui.factAreaValue | factAreaValue: Cantoni ${cantonListIt | factAreaValue: Cantoni di ${cantonListIt | Kantonsnamen mit «di» wie «Cantone di Lucerna» in derselben Datei | gering |
| 77 | `content/it/common.ts` | steps.besichtigung.text | Visitiamo l’oggetto sul posto e chiariamo con Lei entità del lavoro e orari. | Visitiamo l’immobile e chiariamo con Lei l’entità del lavoro e gli orari. | «oggetto» für Objekt ist ein Germanismus; Artikel ergänzt | gering |
| 78 | `content/it/common.ts` | answers.kosten (auch Premium Jet und Yacht) | Dipende dall’oggetto e dall’impegno richiesto. Per questo indichiamo i prezzi solo nell’offerta, dopo aver visto l’oggetto. | Dipende da ciò che va pulito e dall’impegno richiesto. Per questo indichiamo i prezzi solo nell’offerta, dopo aver visto tutto sul posto. | «oggetto» ersetzt, neutral formuliert, weil die Antwort auch für Jet und Yacht gilt | gering |
| 79 | `content/it/common.ts` | answers.gebiet | Nell’intero territorio dei Cantoni ${cantonListIt | Nell’intero territorio dei Cantoni di ${cantonListIt | Kantonsnamen mit «di» | gering |
| 80 | `content/it/index.ts` | misc.map.notice | In tal caso vengono trasmessi dati a Google. | Durante il caricamento vengono trasmessi dati a Google. | «Dabei» präziser wiedergegeben | gering |
| 81 | `content/it/navigation.ts` | contactForm.fields.location.label | label: Località o NPA dell’oggetto | label: Luogo dell’intervento (località o NPA) | «oggetto» ersetzt; neutral, weil das Formular auch für Jet und Yacht dient | gering |
| 82 | `content/it/navigation.ts` | contactForm.serviceOptions[2].options[1].label | value: Andere, label: Altro | value: Andere, label: Altra richiesta | Gruppe und Option hiessen beide «Altro» | gering |
| 83 | `content/it/navigation.ts` | contactForm.consentBefore | consentBefore: Ho preso conoscenza della | consentBefore: Ho preso atto della | Feste Wendung «prendere atto» | gering |
| 84 | `content/it/navigation.ts` | contactForm.consentAfter | e acconsento che i miei dati siano utilizzati per il trattamento della mia richiesta. * | e acconsento che i miei dati siano utilizzati per evadere la mia richiesta. * | «trattamento» ist im Datenschutz der Fachbegriff für Bearbeitung von Daten; hier geht es um die Anfrage | gering |
| 85 | `content/it/navigation.ts` | contactForm.error | o di scrivere a ${company.email}. | o di scriverci all’indirizzo ${company.email}. | Vermeidet «a admin@…» (euphonisches «ad») und passt für jede künftige Adresse | gering |
| 86 | `content/it/leistungen.ts` | unterhaltsreinigung.scope.items[5] | Svuotare i rifiuti e rifornire il materiale di consumo | Svuotare i cestini e rifornire il materiale di consumo | Man leert Behälter, nicht Abfall | gering |
| 87 | `content/it/leistungen.ts` | unterhaltsreinigung.sections[0].items[2] | Altro materiale di consumo secondo accordi | Altro materiale di consumo previo accordo | «nach Absprache» einheitlich «previo accordo» | gering |
| 88 | `content/it/leistungen.ts` | unterhaltsreinigung.faq[0].answer | per oggetti che vengono puliti più volte alla settimana. | per immobili che vengono puliti più volte alla settimana. | «oggetti» Germanismus | gering |
| 89 | `content/it/leistungen.ts` | unterhaltsreinigung.cta.text | Ci descriva oggetto, superficie e cadenza desiderata. Veniamo per il sopralluogo e | Ci descriva l’immobile, la superficie e la cadenza desiderata. Veniamo da Lei per il sopralluogo e | «oggetto» Germanismus, Artikel ergänzt | gering |
| 90 | `content/it/leistungen.ts` | bueroreinigung.facts[1].value | Su accordo, in funzione dei Suoi orari di lavoro e di apertura | Previo accordo, in funzione dei Suoi orari di lavoro e di apertura | «Su accordo» unüblich | gering |
| 91 | `content/it/leistungen.ts` | bueroreinigung.steps[3].text | adeguiamo con Lei entità e cadenza. | adeguiamo con Lei il volume di lavoro e la cadenza. | «entità» ohne Ergänzung missverständlich | gering |
| 92 | `content/it/leistungen.ts` | sonderreinigungen.lead[0] | quando lo sporco si è depositato a lungo o quando | quando lo sporco si è incrostato nel tempo o quando | «festgesetzt» natürlicher wiedergegeben | gering |
| 93 | `content/it/leistungen.ts` | sonderreinigungen.sections[0].paragraphs[0] | Rimuove lo sporco che si è depositato a lungo su pavimenti | Rimuove lo sporco incrostato nel tempo su pavimenti | wie oben | gering |
| 94 | `content/it/leistungen.ts` | sonderreinigungen.steps[2].text | Fissiamo l’intervento alla data che si accorda con la Sua riconsegna o con la Sua attività. | Fissiamo l’intervento alla data più adatta alla Sua riconsegna o alla Sua attività. | Ungelenke Wendung | gering |
| 95 | `content/it/leistungen.ts` | sonderreinigungen.cta.text | Ci descriva oggetto, occasione e data. | Ci descriva l’immobile, il motivo della pulizia e la data. | «oggetto» Germanismus; «Anlass» hier Grund, nicht Gelegenheit | gering |
| 96 | `content/it/leistungen.ts` | baureinigung.lead[0] | Dopo lavori di costruzione e di ristrutturazione polvere, residui di malta e pellicole protettive sono ovunque. | Dopo lavori di costruzione e di ristrutturazione, polvere, residui di malta e pellicole protettive si trovano ovunque. | Komma fehlte, Satz war missverständlich | gering |
| 97 | `content/it/leistungen.ts` | baureinigung.facts[1].label | label: Oggetti, value: Nuove costruzioni, trasformazioni e rinnovi | label: Cantieri, value: Nuove costruzioni, trasformazioni e rinnovi | «Oggetti» Germanismus | gering |
| 98 | `content/it/leistungen.ts` | baureinigung.steps[2].text | con la direzione lavori e il programma, affinché | con la direzione lavori e il cronoprogramma, affinché | Terminplan = cronoprogramma | gering |
| 99 | `content/it/leistungen.ts` | baureinigung.steps[3].text | La data si orienta alla Sua data di consegna o d’insediamento. | Fissiamo la data in base alla Sua data di consegna o d’insediamento. | «si orienta alla» ist ein Germanismus (sich richten nach) | gering |
| 100 | `content/it/leistungen.ts` | baureinigung.cta.text | Ci indichi oggetto, superficie e data di consegna. | Ci indichi l’edificio, la superficie e la data di consegna. | «oggetto» Germanismus | gering |
| 101 | `content/it/leistungen.ts` | fensterUndFassade.scope.intro | L’entità la stabiliamo dopo il sopralluogo. Di norma: | L’entità del servizio la stabiliamo dopo il sopralluogo. Di norma: | «entità» ohne Ergänzung | gering |
| 102 | `content/it/leistungen.ts` | fensterUndFassade.scope.items[3] | Davanzali e tende da sole e lamelle secondo accordi | Davanzali, lamelle e tende da sole, previo accordo | Doppeltes «e»; «previo accordo» | gering |
| 103 | `content/it/leistungen.ts` | fensterUndFassade.cta.text | Visitiamo tutto sul posto e Le allestiamo | Esaminiamo tutto sul posto e Le allestiamo | «visitare tutto» ungelenk | gering |
| 104 | `content/it/leistungen.ts` | industrieUndHallen.scope.intro | L’entità la stabiliamo dopo un giro della Sua azienda. Di norma: | L’entità del servizio la stabiliamo dopo una visita della Sua azienda. Di norma: | «giro» umgangssprachlich für Rundgang | gering |
| 105 | `content/it/leistungen.ts` | industrieUndHallen.sections[0].paragraphs[0] | Quando un impianto è fermo, che cosa viene pulito e quali prodotti sono adatti lo stabiliamo | Quando fermare un impianto, che cosa pulire e quali prodotti sono adatti lo stabiliamo | Gemeint ist der geplante Stillstand | gering |
| 106 | `content/it/leistungen.ts` | industrieUndHallen.steps[1].title | title: Giro dell’azienda e offerta | title: Visita dell’azienda e offerta | «giro» umgangssprachlich | gering |
| 107 | `content/it/leistungen.ts` | industrieUndHallen.faq[0].answer | Lo chiariamo durante il giro dell’azienda. | Lo chiariamo durante la visita dell’azienda. | wie oben | gering |
| 108 | `content/it/leistungen.ts` | industrieUndHallen.cta.text | Facciamo un giro dell’azienda e Le allestiamo | Visitiamo la Sua azienda e Le allestiamo | wie oben | gering |
| 109 | `content/it/leistungen.ts` | hauswartung.lead[1] | Quali compiti assumiamo lo stabiliamo per iscritto. | I compiti che svolgiamo li stabiliamo per iscritto. | Flüssiger | gering |
| 110 | `content/it/leistungen.ts` | hauswartung.facts[1].label | label: Oggetti, value: Stabili abitativi e commerciali | label: Immobili, value: Stabili abitativi e commerciali | «Oggetti» Germanismus | gering |
| 111 | `content/it/leistungen.ts` | hauswartung.steps[1].title | title: Giro dello stabile e offerta | title: Visita dello stabile e offerta | «giro» umgangssprachlich | gering |
| 112 | `content/it/leistungen.ts` | hauswartung.steps[1].text | chiariamo con Lei quali compiti si presentano. | chiariamo con Lei quali compiti sono necessari. | «anfallen» idiomatisch | gering |
| 113 | `content/it/leistungen.ts` | hauswartung.steps[2].text | Stabiliamo quali compiti assumiamo, con quale frequenza | Stabiliamo quali compiti svolgiamo, con quale frequenza | Flüssiger | gering |
| 114 | `content/it/leistungen.ts` | hauswartung.faq[1].answer | I danni che constatiamo durante i giri di controllo glieli segnaliamo. | Le segnaliamo i danni che constatiamo durante i giri di controllo. | «glieli» passt nicht zur grossen Höflichkeitsform | gering |
| 115 | `content/it/leistungen.ts` | hauswartung.faq[2].answer | No. Servizio invernale e servizio di picchetto non fanno parte della nostra offerta. | No. Il servizio invernale e il servizio di picchetto non fanno parte della nostra offerta. | Artikel fehlten | gering |
| 116 | `content/it/leistungen.ts` | hauswartung.cta.text | Ci indichi oggetto, numero di appartamenti o superfici e i compiti che desidera affidare. Facciamo un giro dello stabile e | Ci indichi lo stabile, il numero di appartamenti o le superfici e i compiti che desidera affidarci. Visitiamo lo stabile e | «oggetto», «giro» | gering |
| 117 | `content/it/leistungen.ts` | aussenUndGruen.lead[0] | fanno quindi parte della cura quanto il vano scale. | fanno quindi parte della manutenzione tanto quanto il vano scale. | Fachbegriff; Vergleich vollständig | gering |
| 118 | `content/it/leistungen.ts` | aussenUndGruen.scope.intro | Quali lavori assumiamo lo stabiliamo dopo il sopralluogo. Di norma: | Quali lavori svolgiamo lo stabiliamo dopo il sopralluogo. Di norma: | Flüssiger | gering |
| 119 | `content/it/leistungen.ts` | aussenUndGruen.scope.items[4] | Rimuovere le erbacce su piazzali e nelle fughe | Rimuovere le erbacce da piazzali e fughe | Präposition | gering |
| 120 | `content/it/leistungen.ts` | aussenUndGruen.steps[2].text | Stabiliamo quali lavori assumiamo e con quale frequenza | Stabiliamo quali lavori svolgiamo e con quale frequenza | Flüssiger | gering |
| 121 | `content/it/leistungen.ts` | facilityServices.lead[1] | Lei ha un solo contratto e un solo interlocutore. | Avrà un solo contratto e un solo interlocutore. | Flüssiger | gering |
| 122 | `content/it/leistungen.ts` | facilityServices.facts[1] | label: Entità, value: Composta secondo le esigenze a partire dai nostri servizi | label: Prestazioni, value: Combinate secondo le esigenze a partire dai nostri servizi | «Entità» als Etikett unverständlich | gering |
| 123 | `content/it/leistungen.ts` | facilityServices.steps[1].title | title: Giro degli stabili e offerta | title: Visita degli stabili e offerta | «giro» umgangssprachlich | gering |
| 124 | `content/it/leistungen.ts` | facilityServices.steps[2].text | I servizi di cui il Suo oggetto ha bisogno li stabiliamo in un unico contratto. | I servizi di cui il Suo immobile ha bisogno li fissiamo in un unico contratto. | «oggetto» Germanismus | gering |
| 125 | `content/it/leistungen.ts` | facilityServices.steps[3].text | Le modifiche le discute in un unico punto. | Per le modifiche si rivolge sempre alla stessa persona. | «in un unico punto» wörtlich und unklar | gering |
| 126 | `content/it/leistungen.ts` | facilityServices.cta.text | Facciamo un giro degli stabili e Le allestiamo | Visitiamo gli stabili e Le allestiamo | «giro» umgangssprachlich | gering |
| 127 | `content/it/leistungen.ts` | sonderreinigungen.facts[0].value, hauswartung.lead[1], hauswartung.facts[0].value (3 Fundstellen) | comunioni di proprietari per piani | comunioni dei proprietari per piani | TERMDAT GRF19 (validiert) und ZPO Art. 29 Abs. 1 lit. b: «comunione dei proprietari per piani» | gering |
| 128 | `content/it/leistungen.ts` | unterhaltsreinigung.steps[3].text, .faq[2].answer (2 Fundstellen) | una nuova entità o una nuova cadenza | un nuovo volume di lavoro o una nuova cadenza | «una nuova entità» missverständlich | gering |
| 129 | `content/it/leistungen.ts` | fensterUndFassade.lead[1], .faq[1].answer (2 Fundstellen) | durante il sopralluogo sull’oggetto. | durante il sopralluogo. | «sopralluogo» heisst schon Besichtigung vor Ort; «oggetto» Germanismus | gering |
| 130 | `content/it/leistungen.ts` | hauswartung.facts[2].label, aussenUndGruen.facts[2].label (2 Fundstellen) | label: Non offerto | label: Non offriamo | Etikett natürlicher | gering |
| 131 | `content/it/premium.ts` | luxusimmobilien.scope.intro | L’entità la stabiliamo dopo un giro della Sua casa. Di norma: | L’entità del servizio la stabiliamo dopo una visita della Sua casa. Di norma: | «giro» umgangssprachlich; «entità» ohne Ergänzung | gering |
| 132 | `content/it/premium.ts` | privatjet.lead[1], .sections[0].paragraphs[0], .steps[1].text, .faq[0].answer (4 Fundstellen) | operatore di volo | operatore aereo | Fachbegriff der Luftfahrt «operatore aereo» | gering |
| 133 | `content/it/premium.ts` | privatjet.facts[1].label | label: Entità, value: Pulizia della cabina | label: Prestazioni, value: Pulizia della cabina | «Entità» als Etikett unverständlich | gering |
| 134 | `content/it/premium.ts` | privatjet.facts[2].value | Su accordo, in funzione del Suo piano di volo | Previo accordo, in funzione del Suo piano di volo | «Su accordo» unüblich | gering |
| 135 | `content/it/premium.ts` | privatjet.scope.intro | L’entità la stabiliamo con Lei in anticipo. Di norma: | L’entità del servizio la stabiliamo con Lei in anticipo. Di norma: | «entità» ohne Ergänzung | gering |
| 136 | `content/it/premium.ts` | yacht.facts[3].value | Su accordo, una tantum o regolarmente | Previo accordo, una tantum o regolarmente | «Su accordo» unüblich | gering |
| 137 | `content/it/premium.ts` | yacht.scope.intro | L’entità la stabiliamo dopo un sopralluogo all’ormeggio. Di norma: | L’entità del servizio la stabiliamo dopo un sopralluogo all’ormeggio. Di norma: | «entità» ohne Ergänzung | gering |
| 138 | `content/it/ratgeber.ts` | overview.intro | della pulizia di edifici. Di ${company.brand}, per aziende, amministrazioni immobiliari e proprietari nei Cantoni ${cantonListIt}. | della pulizia di edifici. A cura di ${company.brand}, per aziende, amministrazioni immobiliari e proprietari nei Cantoni di ${cantonListIt}. | Satzanfang «Di …» ungelenk; «di» vor Kantonen | gering |
| 139 | `content/it/ratgeber.ts` | reinigungsfirmaFinden.sections[1].subsections[4].text | Chieda referenze relative a oggetti comparabili. | Chieda referenze relative a immobili comparabili. | «oggetti» Germanismus | gering |
| 140 | `content/it/ratgeber.ts` | reinigungsfirmaFinden.sections[1].subsections[6].text | Durata, termine di disdetta e la sostituzione in caso di vacanze o malattia devono figurare nel contratto. | La durata, il termine di disdetta e la sostituzione in caso di vacanze o malattia devono figurare nel contratto. | Artikel uneinheitlich | gering |
| 141 | `content/it/ratgeber.ts` | reinigungsfirmaFinden.sections[1].subsections[7].title | Vicinanza e raggiungibilità | Vicinanza e reperibilità | Erreichbarkeit einer Person = reperibilità | gering |
| 142 | `content/it/ratgeber.ts` | reinigungsfirmaFinden.sections[2].items[6] | Concludere il contratto e fissare l’interlocutore. | Concludere il contratto e indicarvi l’interlocutore. | «fissare l’interlocutore» falsch | gering |
| 143 | `content/it/ratgeber.ts` | reinigungsfirmaFinden.sections[4].items[3] | (stato a settembre 2026) | (dati di settembre 2026) | «stato a» wörtlich; Zahlen unverändert | gering |
| 144 | `content/it/ratgeber.ts` | reinigungsfirmaFinden.sections[4].items[5] | Zona: i Cantoni ${cantonListIt | Zona: i Cantoni di ${cantonListIt | Kantonsnamen mit «di» | gering |
| 145 | `content/it/ratgeber.ts` | reinigungsfirmaFinden.cta.text, kosten.cta.text (2 Fundstellen) | Ci descriva oggetto, superficie e cadenza desiderata. | Ci descriva l’immobile, la superficie e la cadenza desiderata. | «oggetto» Germanismus | gering |
| 146 | `content/it/ratgeber.ts` | kosten.cta.text | Veniamo per il sopralluogo e Le allestiamo | Veniamo da Lei per il sopralluogo e Le allestiamo | Flüssiger | gering |
| 147 | `content/it/ratgeber.ts` | kosten.sections[1].paragraphs[0] | Due oggetti con la stessa superficie possono richiedere un impegno molto diverso, a seconda del rivestimento del pavimento, dell’utilizzo e dell’accesso. Un prezzo senza sopralluogo sarebbe quindi o troppo alto o non corrisponderebbe in seguito. Indichiamo i prezzi solo nell’offerta, dopo aver visto l’oggetto. | Due immobili con la stessa superficie possono richiedere un impegno molto diverso, a seconda del rivestimento del pavimento, dell’utilizzo e dell’accesso. Un prezzo indicato senza sopralluogo sarebbe quindi troppo alto oppure si rivelerebbe inesatto in seguito. Indichiamo i prezzi solo nell’offerta, dopo aver visto l’immobile. | «oggetti»; Satzbau «o … o» ungelenk | gering |
| 148 | `content/it/ratgeber.ts` | kosten.summary.items[3] | Veniamo per il sopralluogo gratuitamente e senza impegno. | Veniamo da Lei per il sopralluogo, gratuitamente e senza impegno. | Flüssiger | gering |
| 149 | `content/it/ratgeber.ts` | kosten.sections[4].items[1] | Visitiamo l’oggetto sul posto e chiariamo entità, cadenza e orari. | Visitiamo l’immobile e chiariamo l’entità del lavoro, la cadenza e gli orari. | «oggetto» Germanismus; Artikel | gering |
| 150 | `content/it/ratgeber.ts` | kosten.sections[4].note | nell’intero territorio dei Cantoni ${cantonListIt}. | nell’intero territorio dei Cantoni di ${cantonListIt}. | Kantonsnamen mit «di» | gering |
| 151 | `content/it/ratgeber.ts` | kosten.cta.title | Offerta per il Suo oggetto | Offerta per il Suo immobile | «oggetto» Germanismus | gering |
| 152 | `content/it/seiten.ts` | home.services.intro | Pulizia di edifici e custodia di stabili per aziende e stabili, oltre a pulizie per esigenze particolari. | Pulizia di edifici e custodia di stabili per aziende e immobili, oltre a pulizie per esigenze particolari. | Doppeltes «stabili» | gering |
| 153 | `content/it/seiten.ts` | home.area.text, about.lead, about.promises[2], contact.map.text, servicesOverview.lead, premiumOverview.places.text (6 Fundstellen) | Cantoni ${cantonListIt | Cantoni di ${cantonListIt | Kantonsnamen mit «di» | gering |
| 154 | `content/it/seiten.ts` | home.cta.title | Offerta per il Suo oggetto | Offerta per il Suo immobile | «oggetto» Germanismus | gering |
| 155 | `content/it/seiten.ts` | home.cta.text | Ci descriva brevemente oggetto e richiesta. La contattiamo ${responseTime} e veniamo per il sopralluogo. | Ci descriva brevemente l’immobile e la Sua richiesta. La contattiamo ${responseTime} e veniamo da Lei per il sopralluogo. | «oggetto» Germanismus | gering |
| 156 | `content/it/seiten.ts` | about.promises[1].text | Indichiamo un prezzo solo dopo aver visto il Suo oggetto. | Indichiamo un prezzo solo dopo aver visto il Suo immobile. | «oggetto» Germanismus | gering |
| 157 | `content/it/seiten.ts` | about.cta.text | Durante il sopralluogo visitiamo il Suo oggetto e chiariamo entità del lavoro e orari. | Durante il sopralluogo esaminiamo il Suo immobile e chiariamo l’entità del lavoro e gli orari. | «oggetto»; Artikel | gering |
| 158 | `content/it/seiten.ts` | contact.cta.title | Pronto per la Sua offerta? | Desidera un’offerta? | «Pronto» nur männlich; neutral formuliert | gering |
| 159 | `content/it/seiten.ts` | area.places.groups[3].title | Regione di Baden e Mutschellen | Regione di Baden e del Mutschellen | Mutschellen ist ein Gebiet (mit Artikel) | gering |
| 160 | `content/it/seiten.ts` | area.cta.title | Il Suo oggetto si trova nella nostra zona? | Il Suo immobile si trova nella nostra zona? | «oggetto» Germanismus | gering |
| 161 | `content/it/seiten.ts` | area.cta.text | Ci descriva oggetto e località. | Ci descriva l’immobile e la località. | «oggetto» Germanismus | gering |
| 162 | `content/it/seiten.ts` | servicesOverview.lead | Scelga in base all’occasione. | Scelga in base alla Sua situazione. | «occasione» passt nicht (Anlass = Grund) | gering |
| 163 | `content/it/seiten.ts` | servicesOverview.cta.title | Non è sicuro di che cosa ha bisogno? | Non sa esattamente di che cosa ha bisogno? | «sicuro» nur männlich; neutral formuliert | gering |
| 164 | `content/it/seiten.ts` | servicesOverview.cta.text | Ci descriva oggetto e richiesta. Veniamo da Lei, chiariamo con Lei l’entità del lavoro | Ci descriva l’immobile e la Sua richiesta. Veniamo da Lei, chiariamo insieme l’entità del lavoro | «oggetto»; doppeltes «con Lei» | gering |
| 165 | `content/it/seiten.ts` | premiumOverview.offers[1].text | secondo accordi con Lei. | previo accordo con Lei. | «nach Absprache» einheitlich | gering |
| 166 | `content/it/recht.ts` | Kommentar Dateikopf | Note legali e informativa sulla protezione dei dati in italiano | Note legali e dichiarazione sulla protezione dei dati in italiano | An den Seitennamen angeglichen (nicht sichtbar); TERMDAT DSCHU24 führt beide Formen, gewählt ist die Form der Bundesseiten | gering |
| 167 | `content/it/recht.ts` | impressum.sections[4].paragraphs[0] | Dei contenuti di siti web di terzi a cui rimandiamo sono responsabili i rispettivi gestori. | I gestori dei siti web di terzi a cui rimandiamo sono responsabili dei rispettivi contenuti. | Satzbau vereinfacht, Aussage unverändert | gering |
| 168 | `content/it/recht.ts` | impressum.sections[6].paragraphs[0] | Come trattiamo i dati personali è descritto nell’\[Informativa sulla protezione dei dati\](/datenschutz). | Come trattiamo i dati personali è descritto nella \[dichiarazione sulla protezione dei dati\](/datenschutz). | Schweizer Begriff, einheitlich; TERMDAT DSCHU24 führt beide Formen, gewählt ist die Form der Bundesseiten | gering |
| 169 | `content/it/recht.ts` | datenschutz.h1 | h1: Informativa sulla protezione dei dati | h1: Dichiarazione sulla protezione dei dati | Schweizer Begriff (IFPDT: «Dichiarazione sulla protezione dei dati»); TERMDAT DSCHU24 führt beide Formen, gewählt ist die Form der Bundesseiten | gering |
| 170 | `content/it/recht.ts` | datenschutz.intro | Determinante è la legge federale sulla protezione dei dati (LPD). | Fa stato la legge federale sulla protezione dei dati (LPD). | «massgebend» = «fa stato» (Schweizer Rechtssprache, wie am Ende des Textes) | gering |
| 171 | `content/it/recht.ts` | datenschutz.sections[2].paragraphs[0] | servizio desiderato, luogo dell’oggetto e cadenza. | servizio desiderato, luogo dell’intervento e cadenza. | Gleich wie das Formularfeld | gering |
| 172 | `content/it/recht.ts` | datenschutz.sections[2].paragraphs[2] | Per proteggersi da abusi, il server mantiene brevemente il Suo indirizzo IP | A protezione dagli abusi, il server conserva brevemente il Suo indirizzo IP | Subjektbezug von «proteggersi» unklar | gering |
| 173 | `content/it/recht.ts` | datenschutz.sections[2].paragraphs[3] | Conserviamo la Sua richiesta per il tempo necessario al trattamento e a eventuali domande. | Conserviamo la Sua richiesta per il tempo necessario a evaderla e per eventuali domande di chiarimento. | «Rückfragen» genauer; «trattamento» hier mehrdeutig | gering |
| 174 | `content/it/recht.ts` | datenschutz.sections[3].paragraphs[0] | Maggiori informazioni nell’informativa sulla privacy di Google | Maggiori informazioni nelle norme sulla privacy di Google | Titel des Google-Dokuments auf Italienisch | gering |
| 175 | `content/it/recht.ts` | datenschutz.sections[6].items[0] | chiedere informazioni su quali dati personali che La riguardano trattiamo | chiedere informazioni sui dati personali che La riguardano e che trattiamo | Satzbau fehlerhaft | gering |
| 176 | `content/it/recht.ts` | datenschutz.sections[9].paragraphs[0] | Adeguiamo la presente informativa quando | Adeguiamo la presente dichiarazione quando | Einheitlicher Name; TERMDAT DSCHU24 führt beide Formen, gewählt ist die Form der Bundesseiten | gering |

## 4. Entscheide zu den Ermessensfragen

### 4.1 «Geschäftsführer»: jetzt «gerente» (10 Fundstellen, alle geändert)

**Fundstellen:** `common.ts` `steps.anfrage.text` (erscheint auf allen neun Leistungsseiten, der Startseite und der Kontaktseite), `premium.ts` `anfrage.text`, `cta.text` (je auf allen drei Premiumseiten) und `luxusimmobilien.sections[0].paragraphs[1]`, `seiten.ts` `about.promises[0]`, `about.contact.text`, `premiumOverview.promises[0]`, `premiumOverview.cta.text`, `ratgeber.ts` `reinigungsfirmaFinden.sections[4].items[1]` und `kosten.sections[4].items[0]`. Dazu ein Code-Kommentar in `common.ts`.

**Impressum:** Dort steht keine Funktion. Die Quelle sagt «Vertreten durch …», die Übersetzung «Rappresentata da …». Das ist korrekt und bleibt unverändert, es braucht dort kein «gerente».

**Entscheid und Begründung:** Alle zehn Stellen sind Werbe- und Ablauftexte. Ich habe trotzdem «gerente» gewählt, weil es in der Schweiz zugleich das natürliche und das juristisch genaue Wort ist:

- Im OR heissen die Geschäftsführer einer GmbH «gerenti» (Art. 809 und 810 CO, Fedlex: «Il presidente dei gerenti o il gerente unico …»). «Direttori» sind in der GmbH eine andere Funktion: «L’assemblea dei soci nomina i direttori, i procuratori e i mandatari» (Art. 804 Abs. 3 CO). «Direttore» hätte also eine andere Organfunktion genannt als der deutsche «Geschäftsführer», das wäre eine unbelegte Aussage über das Unternehmen (E18). Den Registereintrag der Firma selbst habe ich nicht abgerufen.
- Im Tessiner Handelsregister lautet die Funktion «socio e gerente» (SHAB-Einträge von Reinigungs-GmbH, Belege in Abschnitt 9).
- Tessiner Firmen verwenden «gerente» auch auf Kundenseiten (Belege in Abschnitt 9).
- TERMDAT führt «gerente» neben «direttore» als Entsprechung von «Geschäftsführer» (Sammlung ANG00); einen eigenen Eintrag für den Geschäftsführer der GmbH gibt es nicht, massgebend ist daher der OR-Wortlaut.

Restrisiko: Leserinnen aus Italien verbinden «gerente» eher mit der Leitung eines Geschäfts oder Lokals. Für die Zielgruppe it-CH ist das kein Problem.

### 4.2 «Luxusimmobilien»: «immobili di pregio» bleibt (6 Fundstellen, unverändert)

**Fundstellen:** `navigation.ts` Menü (`serviceGroups[2].links[1]`) und Formularoption (`contactForm.serviceOptions[0].options[0]`, «Immobili di pregio (ville, loft)»), `seo.ts` `pages['/premium/luxusimmobilien'].label` und `.title` («Pulizia di ville e immobili di pregio»), `seiten.ts` `home.services.groups[2].items[0]` und `premiumOverview.offers[0].title`. Der Formularwert für die E-Mail bleibt absichtlich deutsch.

**Begründung:** «Immobili di pregio» ist der eingeführte Ausdruck des Tessiner Premium-Immobilienmarkts (Fontana Sotheby’s International Realty, Fidinam) und passt zur diskreten Tonalität der Premium-Linie (E40, E41). «Di lusso» wirkt plakativer. Der Suchbegriff «ville» steht im Titel.

**Hinweis:** Die italienische Adresse lautet noch `premium/immobili-di-lusso` (`shared/i18n.ts`). Vorschlag in Abschnitt 6.

### 4.3 «Zweitwohnungen und Residences»: jetzt «abitazioni secondarie» und «residence» (9 Fundstellen, alle geändert)

**Fundstellen:** `navigation.ts` Formularoption «Abitazioni secondarie e residence», `seo.ts` `pages['/premium'].description` (beide Marken-Varianten), `premium.ts` `luxusimmobilien.facts[0].value`, `privatjet.related[0].text`, `yacht.related[0].text`, `seiten.ts` `area.places.text`, `premiumOverview.lead`, `premiumOverview.more[0].title`.

**Begründung:** Der amtliche Schweizer Begriff ist «abitazioni secondarie» (Legge federale sulle abitazioni secondarie, LASec, SR 702; so auch ARE und Kanton Graubünden). «Residenze secondarie» ist italienischer Sprachgebrauch. «Residence» ist im Italienischen ein Fremdwort ohne Plural-s und bezeichnet Apartmenthäuser mit Service, das trifft die Absicht von «Residences». Nebeneffekt: «residenze e residenze secondarie» war eine Doppelung.

### 4.4 Weitere Entscheide mit Beleg

- **Abnahmegarantie:** «garanzia di consegna» (Mobiliare, comparis). Die Übergabe selbst bleibt «riconsegna», wie im Tessiner Mietrecht («verbali di consegna rispettivamente di riconsegna»). Wohnungsendreinigung: «pulizia finale» (Mobiliare).
- **Datenschutzerklärung:** «Dichiarazione sulla protezione dei dati», wie auf den Seiten des EDÖB (IFPDT) und der Bundesverwaltung. TERMDAT (Sammlung DSCHU24, validiert) führt auch «informativa sulla privacy» und «dichiarazione relativa alla protezione dei dati». Die alte Form war also nicht falsch; ich habe auf die Form der Bundesseiten vereinheitlicht und darum nur «gering» eingestuft. Im Formular behebt die Änderung zugleich den Fehler «della informativa» ohne Elision.
- **Stockwerkeigentümergemeinschaft:** «comunione dei proprietari per piani», so in TERMDAT (Grundbuch-Terminologie GRF19, validiert) nach ZPO Art. 29 Abs. 1 lit. b. Vorher stand «comunioni di proprietari per piani».
- **Standardvertragsklauseln:** «clausole contrattuali tipo», der Begriff des EU-Beschlusses 2021/914, auf den das EDÖB verweist. Das DSG selbst nennt die Schweizer Variante «clausole tipo di protezione dei dati» (Art. 16 Abs. 2 lit. d LPD).
- **UID und MWST-Nummer:** «IDI CHE-108.687.458» und «Numero IVA CHE-108.687.458 IVA» sind korrekt (TERMDAT EGOV19: «numero d’identificazione delle imprese, IDI»). Der eingetragene Firmenname bleibt unverändert.
- **Hauswart:** «custode», «custodia di stabili» (TERMDAT: amtlicher Berufstitel «custode con attestato professionale federale»).

## 5. Terminologie (deutsch → italienisch, jetzt einheitlich)

| Deutsch | Italienisch |
|---|---|
| Offerte | offerta (nie «preventivo»); Offerte erstellen: allestire un’offerta |
| Besichtigung | sopralluogo |
| Rundgang | visita (dell’azienda, dello stabile, della Sua casa) |
| Objekt | immobile, stabile, edificio oder locali je nach Zusammenhang; neutral umschrieben, wo auch Jet oder Yacht gemeint sein können («ciò che va pulito», «luogo dell’intervento»). Nie «oggetto» |
| Liegenschaft | stabile (Gebäude), immobile (allgemein) |
| Hauswartung | custodia di stabili, servizio di custodia |
| Unterhaltsreinigung | pulizia di manutenzione |
| Büro- und Praxisreinigung | pulizia di uffici e studi |
| Grundreinigung | pulizia a fondo |
| Sonderreinigungen | pulizie speciali |
| Umzugsreinigung | pulizia di fine locazione |
| Wohnungsendreinigung | pulizia finale |
| Abnahmegarantie | garanzia di consegna |
| Übergabe einer Wohnung (Auszug) | riconsegna |
| Wohnungsübergaben | consegne e riconsegne degli appartamenti |
| Bau- und Bauendreinigung | pulizia di cantiere e di fine cantiere |
| Fenster- und Fassadenreinigung | pulizia di vetri e facciate (Fenster als Gegenstand: finestre) |
| Industrie- und Hallenreinigung | pulizia industriale e di capannoni |
| Aussen- und Grünflächenpflege | manutenzione delle aree esterne e verdi |
| Umgebungspflege, Umgebung | manutenzione delle aree esterne, aree esterne |
| Pflegeplan | piano di manutenzione |
| Gartenbau und Neuanlagen | costruzione di giardini e nuove sistemazioni a verde |
| Facility Services | facility services |
| Treppenhaus, Waschküche | vano scale, lavanderia |
| Kontrollgänge, Kleinreparaturen, Haustechnik | giri di controllo, piccole riparazioni, impiantistica |
| Winterdienst, Pikettdienst | servizio invernale, servizio di picchetto |
| Aufenthaltsräume, Sozialräume | locali pausa, locali per il personale |
| Verwaltungen (Liegenschaften) | amministrazioni immobiliari |
| Stockwerkeigentümerschaft | comunione dei proprietari per piani |
| Bauherrschaft, Generalunternehmen | committente, impresa generale |
| Terminplan (Bau) | cronoprogramma |
| Rhythmus | cadenza |
| nach Absprache | previo accordo |
| Umfang | entità del servizio oder del lavoro; als Etikett «Prestazioni»; Änderung des Umfangs: volume di lavoro |
| Geschäftsführer | gerente |
| Luxusimmobilien | immobili di pregio |
| Zweitwohnungen, Residences | abitazioni secondarie, residence |
| Flugbetrieb | operatore aereo |
| Ansprechperson | interlocutore |
| Mitarbeitende | collaboratrici e collaboratori |
| Einzugsgebiet | zona d’intervento |
| Ratgeber | guida |
| Kantone Luzern, Zug, Aargau, Nidwalden, Obwalden | Cantoni di Lucerna, Zugo, Argovia, Nidvaldo e Obvaldo |
| Vierwaldstättersee, Zugersee, Ägerisee, Sempachersee, Hallwilersee | lago dei Quattro Cantoni, lago di Zugo, lago di Ägeri, lago di Sempach, lago di Hallwil |
| PLZ, Werktage | NPA, giorni feriali |
| Betriebshaftpflichtversicherung | assicurazione di responsabilità civile aziendale |
| Impressum | note legali |
| Datenschutzerklärung | dichiarazione sulla protezione dei dati |
| Datenschutzgesetz (DSG) | legge federale sulla protezione dei dati (LPD) |
| EDÖB | Incaricato federale della protezione dei dati e della trasparenza (IFPDT) |
| Verantwortlicher (Datenschutz) | titolare del trattamento |
| Bekanntgabe ins Ausland | comunicazione all’estero |
| Standardvertragsklauseln | clausole contrattuali tipo |
| massgebend | fa stato |
| UID, MWST-Nummer | IDI, numero IVA (CHE-… IVA) |
| Handelsregister des Kantons Luzern | Registro di commercio del Cantone di Lucerna (als Name gross, im Fliesstext «registro di commercio») |
| OR | CO (Codice delle obbligazioni) |

## 6. Offene Punkte ausserhalb von `content/it/` (nur gemeldet, nicht geändert)

1. **Gemeinsamer Sprachschalter.** `shared/i18n.ts` schaltet mit `LANGUAGES=true` alle drei Übersetzungen gleichzeitig frei. Freigabe also erst, wenn auch Englisch und Französisch geprüft sind.
2. **Gedankenstrich im deutschen Startseitentitel.** `content/de/seo.ts`, `pages['/'].title`: «BGS Gebäudeservice (Halbgeviertstrich) Reinigung und Hauswartung in Luzern und Zug». Vorschlag wie im Italienischen: `${company.brand} | Reinigung und Hauswartung in Luzern und Zug`. In Englisch und Französisch ebenfalls prüfen.
3. **Hinweis «deutsche Fassung massgebend» fehlt** in allen Sprachen. Vorschlag als letzter Abschnitt von Note legali und Dichiarazione sulla protezione dei dati in `content/it/recht.ts`:
   - Titel: «Versioni linguistiche»
   - Text: «Il presente testo è una traduzione dal tedesco. In caso di divergenze tra le versioni linguistiche fa stato la versione tedesca.»
4. **Italienische Adressen** in `shared/i18n.ts`, optional und nur vor der Freischaltung sinnvoll (danach wären Weiterleitungen nötig): `premium/immobili-di-lusso` → `premium/immobili-di-pregio` (passt zum Seitennamen), `zona-di-servizio` → `zona-d-intervento` (passt zum Seitennamen, analog zu französisch `zone-d-intervention`). Die übrigen Adressen passen zu den Begriffen, auch `pulizia-di-vetri-e-facciate` und `manutenzione-del-verde`.
5. **404-Seite nur deutsch.** Unbekannte Adressen unter `/it/…` zeigen `app/global-not-found.tsx` mit deutschem Text. Die italienischen Texte in `nav.notFound` werden derzeit nie angezeigt. Entweder bewusst so lassen oder die Sprache aus dem Pfad ableiten.
6. **Strukturierte Daten.** `shared/structured-data.ts` setzt `areaServed` in allen Sprachen als «Kanton Luzern» usw. Nicht sichtbar und unkritisch; optional die Kantonsnamen je Sprache ausgeben.
7. **Chat und Berater nur deutsch** (`client/src/components/AIChatbot.tsx`, `IndustryAdvisor.tsx`, `server/gemini.ts`). Heute über `NEXT_PUBLIC_CHAT_ENABLED` abgeschaltet. Vor dem Einschalten auf `/it` übersetzen.
8. **`client/src/components/PremiumParallax.tsx`** enthält fest «Bild folgt». Die Komponente wird derzeit nirgends verwendet. Falls sie zurückkommt: `misc.imagePlaceholder` verwenden.
9. **Formularfehler.** Die Server-Meldungen in `app/api/contact/route.ts` sind deutsch, auf `/it` erscheint aber korrekt der italienische Ersatztext aus `nav.contactForm.error`. Keine Massnahme nötig.
10. **`misc.registerCourt`** wird nirgends verwendet. Keine Massnahme nötig.

## 7. Restrisiken und was eine Person mit Italienisch als Muttersprache ansehen sollte

Das Lektorat stützt sich auf die Quelle, amtliche Texte und belegten Sprachgebrauch, nicht auf ein muttersprachliches Sprachgefühl. Die folgenden Stellen sind korrekt, aber Geschmacks- oder Tonfragen. Eine kurze Durchsicht (etwa 30 Minuten) genügt:

1. **Ton von «gerente»** in Werbetexten: `common.ts` `steps.anfrage.text`, `seiten.ts` `about.promises[0]`. Passt es für die Leserschaft, oder lieber «il nostro gerente»?
2. **«garanzia di consegna» neben «riconsegna»:** `leistungen.ts` `sonderreinigungen.sections[1].paragraphs[0]` liest sich wegen viermal «consegna/riconsegna» dicht.
3. **Formularfeld** «Luogo dell’intervento (località o NPA)»: `navigation.ts` `contactForm.fields.location.label`.
4. **«locali pausa»** für Aufenthaltsräume in Wohnhäusern: `leistungen.ts` `unterhaltsreinigung.scope.items[3]`. Für reine Wohnliegenschaften wäre «locali comuni» denkbar, die Quelle ist aber allgemein.
5. **«lamelle e tende da sole»** für Storen: `leistungen.ts` `fensterUndFassade.scope.items[3]`.
6. **«servizio invernale»** (Winterdienst) an neun Stellen in `leistungen.ts` (Hauswartung, Aussenpflege, Facility Services). Amtlich korrekt, für Private wäre «sgombero neve» anschaulicher. Nicht geändert, weil es den Inhalt erweitern würde.
7. **«Economie domestiche private»** (Privathaushalte): `leistungen.ts` `unterhaltsreinigung.scope.notIncluded[3]`. Schweizer Statistiksprache, auf einer Website etwas amtlich.
8. **«Ricezione»** für Empfang: `leistungen.ts` `bueroreinigung.scope.items[2]`. Schweizerisch üblich, in Italien eher «reception».
9. **Titel und Suchbegriffe:** `seo.ts` `pages['/leistungen/baureinigung'].title` «Pulizia di cantiere a Lucerna e Zugo» (mit «fine cantiere» würde die 70-Zeichen-Grenze überschritten), `pages['/leistungen/fenster-und-fassadenreinigung'].title` «Pulizia di vetri e facciate» (Private suchen auch «pulizia finestre», das steht in der Beschreibung), `pages['/'].title` ohne «impresa di pulizie», weil der Titel sonst 78 Zeichen hätte.
10. **«Premium: pulizie per esigenze particolari»** (`seo.ts` `pages['/premium'].title`, `seiten.ts` `premiumOverview.h1`): wörtlich richtig, für eine Premium-Linie wäre «esigenze elevate» eine Stilfrage.
11. **Handlungsaufforderungen im Infinitiv** «Richiedere un’offerta» (`common.ts` `ui.offerCta`, `navigation.ts` `menu.cta`) statt Imperativ «Richieda». Beides üblich, gewählt ist der neutrale Infinitiv.
12. **Rechtstexte** (`recht.ts`): sprachlich und terminologisch geprüft, fachlich wie die deutsche Fassung ohne juristische Prüfung (E22). Besonders ansehen: `datenschutz.sections[5]` (Comunicazione all’estero), `sections[6]` (Diritti), `sections[8]` («nella misura ragionevolmente esigibile»), `impressum.sections[3]` (Haftungsausschluss).

Weitere Restrisiken:

- **Parallele Arbeit:** Englisch und Französisch wurden während meiner Arbeit von anderen Agenten geändert. Meine letzte Typprüfung (`npx tsc --noEmit`, Exit 0) lief danach fehlerfrei. Nach deren Abschluss erneut laufen lassen.
- **Kein Build:** Wie vorgegeben habe ich keinen Build gestartet. Die Seitenprüfskripte (`seiten_pruefen.py`, `browser_pruefen.cjs`) laufen erst mit Build und Server, sie sind vor dem Push nach `main` Pflicht (CLAUDE.md, E70).
- **TERMDAT** ist eine JavaScript-Anwendung. Die Einträge habe ich im Browser gelesen (Datenschutzerklärung, Geschäftsführer, gerente, Stockwerkeigentümergemeinschaft, UID, Hauswart). Einen eigenen TERMDAT-Eintrag «Geschäftsführer (GmbH)» gibt es nicht, dort gilt der OR-Wortlaut.

## 8. Prüfung, Test-Anleitung und Rückweg

**Kompatibilität geprüft:** nur Dateien in `content/it/` geändert. Schlüssel, Typen, Importe, Exporte und `${...}`-Ausdrücke unverändert (Vergleich mit `git show HEAD`). `npm run check` fehlerfrei. Keine Änderung an Adressen, Formularwerten für die E-Mail (`value` bleibt deutsch) oder Markenschalter.

**Test:**

1. `npm run check`
2. `NEW_BRAND=false npm run build` und `npm run build`, dann `npm start`
3. `python3 Webseite-Analyse/werkzeuge/seiten_pruefen.py http://localhost:3000` und `node Webseite-Analyse/werkzeuge/browser_pruefen.cjs http://localhost:3000`
4. Sichtprüfung: `/it`, `/it/servizi/pulizia-di-vetri-e-facciate`, `/it/servizi/manutenzione-del-verde`, `/it/servizi/pulizie-speciali`, `/it/protezione-dei-dati`, `/it/note-legali`, Formular im Footer (Feld «Luogo dell’intervento», Einwilligung mit Link «dichiarazione sulla protezione dei dati»).

**Rückweg:** `git checkout -- content/it` stellt den vorherigen Stand her. Einzelne Änderungen lassen sich über die Tabelle in Abschnitt 3 gezielt zurücknehmen.

## 9. Quellen

Recht und amtliche Terminologie:

- Legge federale sulla protezione dei dati (LPD), RS 235.1, Stato 1° settembre 2023: https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/2022/491/20230901/it/pdf-a/fedlex-data-admin-ch-eli-cc-2022-491-20230901-it-pdf-a-3.pdf
- Codice delle obbligazioni (CO), RS 220, konsolidierte Fassung, Art. 804, 809 und 810 im Browser gelesen am 27.09.2026: https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_804 und https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_809
- Zur Kontrolle: italienischer Wortlaut der GmbH-Revision (WIPO Lex): https://www.wipo.int/wipolex/en/text/482637 und Art. 804 CO zweisprachig: https://www.droit-bilingue.ch/it-de/2/22/220-804-1155.html
- Statuto tipo Sagl, annotato, Registro di commercio del Cantone Ticino: https://www4.ti.ch/fileadmin/DI/DG/RC/Documentazione/Statuti_SAGL_annotati.pdf
- IFPDT, Dichiarazione sulla protezione dei dati e basi legali: https://www.edoeb.admin.ch/it/dichiarazione-sulla-protezione-dei-dati-e-basi-legali
- IFPDT, Comunicazione di dati personali all’estero: https://www.edoeb.admin.ch/it/comunicazione-di-dati-personali-allestero
- Bundesverwaltung, Basi legali (Dichiarazione sulla protezione dei dati): https://www.admin.ch/it/basi-legali
- TERMDAT, Datenschutzerklärung (DSCHU24): https://www.termdat.bk.admin.ch/search/entry/384995
- TERMDAT, Stockwerkeigentümergemeinschaft (GRF19): https://www.termdat.bk.admin.ch/search/entry/67301
- TERMDAT, Unternehmens-Identifikationsnummer (EGOV19): https://www.termdat.bk.admin.ch/search/entry/92424
- TERMDAT, Suche «Geschäftsführer» und «Hauswart»: https://www.termdat.bk.admin.ch/search/entries?s=Gesch%C3%A4ftsf%C3%BChrer und https://www.termdat.bk.admin.ch/search/entries?s=Hauswart
- Legge federale sulle abitazioni secondarie (LASec), RS 702: https://www.lexfind.ch/tolv/198200/it
- ARE, Abitazioni secondarie: https://www.are.admin.ch/it/abitazionisecondarie
- Kanton Tessin, Verbali di consegna e riconsegna del bene locato: https://www3.ti.ch/CAN/RLeggi/public/locazione/htm/loc/sloc1124.htm

Sprachgebrauch in der Schweiz und im Tessin:

- Mobiliare, Pulizia finale e garanzia di consegna: https://www.mobiliare.ch/guida/pulire-appartamento-transloco
- comparis, «Pulizia dell’appartamento con garanzia di consegna» (Titel laut Suchergebnis, Seite verweigert den automatischen Abruf): https://en.comparis.ch/immobilien/umzug/endreinigung/putzinstitute-schweiz
- AB Pulizie, Fine locazione con garanzia di presa in consegna: https://www.abpulizie.ch/servizi/pulizie-catef/
- SHAB-Einträge «socio e gerente» bei Tessiner Reinigungs-GmbH: https://www.moneyhouse.ch/en/company/fy-impresa-di-pulizia-sagl-3289061371 und https://www.moneyhouse.ch/en/company/impresa-di-pulizie-3m-sagl-7121248061
- Tessiner Firmenseiten mit «gerente»: https://cama-gesso.ch/chi-siamo/ und https://www.ticino-politica.ch/spazio-imprese/stella-ponteggi-sagl-ad-ogni-problema-la-soluzione/
- «Immobili di pregio» im Tessin: https://www.fsir.ch/homepage und https://www.fidinam.com/it/gpm/vendita/due-immobili-pregio-luganese-bellinzonese
- Bundesgericht, BGE 111 II 458 (comunione dei comproprietari per piani): https://entscheide.weblaw.ch/cache.php?link=BGE-111-II-458&q=&sel_lang=it
