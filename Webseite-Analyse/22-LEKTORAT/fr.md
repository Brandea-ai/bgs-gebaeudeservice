# Lektorat der französischen Übersetzung (fr-CH)

Website der BGS - Gebäudeservice GmbH, Ordner `content/fr/`, geprüft gegen `content/de/`. Stand 27.09.2026.

Dieses Lektorat übernimmt die Prüfung, die nach E50 Brandea selbst machen sollte. Es ist die Grundlage für den Entscheid, ob in Vercel für Production `LANGUAGES=true` gesetzt wird. Der Entscheid selbst bleibt bei Brandea.

## 1. Kurzurteil

**Freigabefähig: Ja, nach den Korrekturen in diesem Bericht und mit zwei Bedingungen ausserhalb von `content/fr/`.**

1. `client/src/views/AboutView.tsx`, Zeile 112, schreibt fest «UID» vor die Nummer. Auf `/fr/a-propos` ist das ein deutscher Rest, richtig ist «IDE». Kleine Änderung, vor dem Einschalten erledigen (Vorschlag in Abschnitt 6).
2. Der Schalter `LANGUAGES` schaltet alle Sprachen zugleich ein (`shared/i18n.ts`, `activeLocales`). Französisch allein lässt sich nicht freigeben. Englisch und Italienisch brauchen dieselbe Freigabe.

Begründung:

- **Keine kritischen Befunde.** Die französische Fassung macht keine neue Aussage über das Unternehmen. Zahlen (seit 2006, über 50 Mitarbeitende, über 120 Kunden, CHF 10 Mio.), Zusagen (Garantie, feste Teams, Geheimhaltung, Antwort innert 24 Stunden an Werktagen), Kantone, Seen und Orte stimmen mit der deutschen Quelle überein.
- **Rechtstexte** sind inhaltlich deckungsgleich mit dem Deutschen. Die Begriffe folgen jetzt der LPD (RS 235.1), dem CO (RS 220) und TERMDAT. Die Nummer «CHE-108.687.458 TVA» ist im UID-Register so eingetragen, mit Statut «Actif».
- **Korrigiert** wurden vor allem Auslassungen in den Metadaten, einzelne falsche oder unübliche Begriffe, Grammatik, uneinheitliche Typografie und ein Gedankenstrich im Titel der Startseite.
- **Restrisiko:** Stil und Tonalität hat keine Person mit Französisch als Muttersprache gegengelesen. Die Rechtstexte sind weiterhin ohne juristische Fachprüfung (E22). Die gerenderten Seiten habe ich nicht im Browser geprüft, weil kein Build gestartet werden sollte.

## 2. Zahlen

| Prüfgegenstand | Umfang |
|---|---|
| Französische Dateien | 9 (`common`, `index`, `leistungen`, `navigation`, `premium`, `ratgeber`, `recht`, `seiten`, `seo`) |
| Gegengelesen gegen | 9 deutsche Dateien, dazu `shared/company.ts`, `shared/i18n.ts`, `shared/seo.ts`, `shared/structured-data.ts`, `content/types.ts` |
| Auf deutsche Reste geprüft | alle Komponenten und Ansichten in `client/src/components/` und `client/src/views/` |
| String-Literale in `content/fr/` | 1182, davon 1039 sichtbare Texte (ohne Adressen, Formularwerte, Schlüssel, Datumswerte) |
| Maschinell geprüfte Werte | 1268 aufgelöste Texte je Markenmodus, beide Modi (Arbeitsmarke und neue Marke) |
| Seitentitel | 23 Seiten in 2 Markenmodi, also 46 vollständige Titel: längster 69 Zeichen, keine Dubletten |
| Geänderte String-Literale | 148, davon 96 inhaltlich und 52 nur typografisch |
| Änderungseinträge (Tabelle unten) | 68: **kritisch 0, mittel 22, gering 46** |
| Typografie | 71 Leerzeichen vor dem Doppelpunkt vereinheitlicht, 1 Gedankenstrich entfernt |
| Typprüfung | `npm run check` fehlerfrei (Exit 0) |

Schweregrade:

- **kritisch:** Bedeutung verschoben, neue oder stärkere Aussage als im Deutschen, Rechtsaussage verändert.
- **mittel:** falscher oder unüblicher Begriff, Auslassung oder Zusatz ohne neue Unternehmensaussage, sichtbarer Grammatikfehler.
- **gering:** Stil, Satzbau, Typografie, Vereinheitlichung.

Drei Code-Kommentare (nicht sichtbar) habe ich an die neuen Begriffe angepasst: `leistungen.ts:7`, `recht.ts:6`, `ratgeber.ts:6`. Sonst ist nichts ausserhalb der Texte geändert. Schlüssel, Typen, Importe und `${...}`-Ausdrücke sind unverändert.

## 3. Alle Änderungen

Zeilennummern beziehen sich auf den Stand nach der Korrektur. «U+202F» ist das schmale geschützte Leerzeichen.

| Nr | Datei:Zeile (Schlüssel) | vorher | nachher | Grund | Schwere |
|---|---|---|---|---|---|
| 1 | seo.ts:15 (`/`.title) | Marke, dann Halbgeviertstrich (U+2013), dann «Nettoyage et conciergerie à Lucerne et Zoug» | `${company.brand} \| Nettoyage et conciergerie à Lucerne et Zoug` | Regel 8: kein Gedankenstrich. Trenner wie bei allen übrigen Titeln | gering |
| 2 | seo.ts:16 (`/`.description) | «…pour entreprises et immeubles à ${region}, et nettoyage premium.» | «…pour entreprises et immeubles, et nettoyage premium. Cantons de ${region}.» | «à Argovie» ist falsch (en Argovie). Muster der übrigen Beschreibungen, 164 statt 181 Zeichen | mittel |
| 3 | seo.ts:23 (`/premium`.description, Arbeitsmarke) | «…au bord des lacs des Quatre-Cantons et de Zoug.» | «…et de Zoug ainsi que dans la région.» | Auslassung: DE «und in der Region» | mittel |
| 4 | seo.ts:28 (`/premium/luxusimmobilien`.description) | «…des lacs des Quatre-Cantons et de Zoug. Équipes fixes…» | «…et de Zoug ainsi que dans la région. Équipes fixes…» | Auslassung: DE «und in der Region» | mittel |
| 5 | seo.ts:43 (`/leistungen`.description) | «…de ${company.brand} à Lucerne et Zoug.» | «…à Lucerne, Zoug et environs.» | Auslassung: DE «und Umgebung» | mittel |
| 6 | seo.ts:51, 61, 66, 71, 81 (`label` von Büro, Bau, Fenster, Industrie, Aussen) | «Bureaux et cabinets», «Nettoyage de chantier», «Vitres et façades», «Industrie et halles», «Extérieurs et espaces verts» | «Nettoyage de bureaux et de cabinets», «Nettoyage de chantier et de fin de chantier», «Nettoyage de vitres et de façades», «Nettoyage industriel et de halles», «Entretien des extérieurs et des espaces verts» | Der Name steht in Brotkrumen, in den Karten «Cela peut aussi vous intéresser» und als `Service.name` in den strukturierten Daten. DE nennt den vollen Leistungsnamen, «Bau- und Bauendreinigung» war halbiert | mittel |
| 7 | seo.ts:57 (`/leistungen/sonderreinigungen`.title) | «Nettoyages spéciaux et fin de bail» | «Nettoyage en profondeur et de fin de bail» | Auslassung der Grundreinigung (DE «Grund- und Umzugsreinigung»), natürlichere Wendung, 62 Zeichen | mittel |
| 8 | seo.ts:63 (`/leistungen/baureinigung`.description) | «…architectes et gérances.» | «…architectes et gérances à Lucerne, Zoug et environs.» | Auslassung: DE «in Luzern, Zug und Umgebung» | mittel |
| 9 | seo.ts:78 (`/leistungen/hauswartung`.description) | «…escaliers, … technique, …» | «…cage d’escalier, … technique du bâtiment, …» | Fachbegriffe wie auf der Seite selbst | gering |
| 10 | seo.ts:88 (`/leistungen/facility-services`.description) | «…à Lucerne et Zoug.» | «…à Lucerne, Zoug et environs.» | Auslassung: DE «und Umgebung» | mittel |
| 11 | seo.ts:96 bis 98, ratgeber.ts:12 und 16, navigation.ts:48 und 61 (Ratgeber) | label, Menü, Footer «Conseils», Titel und h1 «Conseils en nettoyage de bâtiments», Beschreibung «Les conseils de…», Byline «Un conseil de…» | «Guide», «Guide du nettoyage de bâtiments», «Le guide de…», «Un guide de…» | «conseil en …» bedeutet Beratung (Consulting), «un conseil» einen einzelnen Tipp. DE «Ratgeber» ist ein Leitfaden. Passt zur Adresse `/fr/guide` | mittel |
| 12 | seo.ts:103 (`/blog/richtige-reinigungsfirma-finden`.description) | «…avant de mandater une entreprise de nettoyage.» | «…avant de mandater une entreprise de nettoyage. Avec les étapes jusqu’au contrat.» | Auslassung: DE «Mit Ablauf bis zum Vertrag» | mittel |
| 13 | seo.ts:113 (`/ueber-uns`.description) | «…Emmenbrücke : depuis 2006, …» | «…Emmenbrücke : expérience depuis 2006, …» | DE «Erfahrung seit 2006» | gering |
| 14 | seo.ts:118 (`/kontakt`.description) | «Visite et devis gratuits sur place» | «Devis gratuit sur place» | Zusatz gegenüber DE «Kostenlose Offerte vor Ort». Keine neue Aussage (die Website nennt die Besichtigung anderswo kostenlos), aber nicht in dieser Quelle | mittel |
| 15 | seo.ts:127, recht.ts:47, 54, 119, navigation.ts:119 (Datenschutzerklärung) | «Politique de confidentialité», «politique de confidentialité», «cette politique» | «Déclaration de protection des données», «déclaration de protection des données», «cette déclaration» | Vereinheitlichung auf die Form des PFPDT. Passt zum Footer «Protection des données» und zur Adresse `/protection-des-donnees`. TERMDAT 384995 führt beide Formen als Synonyme, die alte war also nicht falsch | gering |
| 16 | seo.ts:128 (`/datenschutz`.description) | «…sur ce site web, à qui elles sont transmises et quels droits vous pouvez exercer.» | «…sur ce site web et quels sont vos droits.» | Zusatz entfernt, DE nennt in der Beschreibung keine Empfänger | mittel |
| 17 | common.ts:32 (`ui.steps`) | «Comment cela se passe» | «Déroulement» | übliche Zwischenüberschrift, sachlicher Ton | gering |
| 18 | leistungen.ts:17 (Unterhalt, `lead[0]`) | «marquent l’image d’un immeuble» | «façonnent l’image d’un immeuble» | idiomatisch | gering |
| 19 | leistungen.ts:27, 119, 364, 434, 597, premium.ts:40, 117, 188 (`scope.intro`) | «Typiquement :» | «Prestations typiques :» | «typiquement» als Satzeinleitung ist ein Anglizismus. Entspricht DE «Typisch sind:» | gering |
| 20 | leistungen.ts:27 (Unterhalt, `scope.intro`) | «Ce que nous nettoyons et à quelle fréquence, nous le fixons après la visite.» | «Nous fixons après la visite ce que nous nettoyons et à quelle fréquence.» | deutsche Satzstellung aufgelöst | gering |
| 21 | leistungen.ts:47 (Nachfüllservice) | «Les articles concernés et qui les achète sont fixés dans le devis.» | «Le devis précise les articles concernés et qui les fournit.» | Satzbau fehlerhaft. «beschaffen» heisst hier fournir | gering |
| 22 | leistungen.ts:61 (Unterhalt, `steps[2]`) | «Avec votre accord, il est établi quelles pièces nous nettoyons, …» | «Avec votre accord, nous fixons les pièces à nettoyer, la fréquence et les consommables à réapprovisionner.» | schwerfälliges Passiv | gering |
| 23 | leistungen.ts:65 und 81 (Unterhalt, `steps[3]`, `faq[2]`) | «nous convenons avec vous d’une nouvelle étendue ou d’une nouvelle fréquence» | «nous revoyons avec vous l’étendue ou la fréquence» | DE «besprechen». «convenir de» sagt eine Einigung zu, dazu die Wiederholung «convenue … convenons». Keine neue Aussage, da DE auf der Büroseite «passen wir … an» sagt | mittel |
| 24 | leistungen.ts:88 (Unterhalt, `faq[5]`) | «interlocuteur fixe» | «interlocuteur attitré» | idiomatisch für «feste Ansprechperson» | gering |
| 25 | leistungen.ts:84, 88, 170, seiten.ts:125 | «Plus d’informations dans nos conseils :» | «Plus d’informations dans notre guide :» | folgt aus Nr. 11 | gering |
| 26 | leistungen.ts:124 (Büro, `scope.items[3]`) | «Cafétérias et salles de pause» | «Kitchenettes et salles de pause» | DE «Teeküchen». «cafétéria» ist in Frankreich ein Selbstbedienungsrestaurant und überschneidet sich mit «salles de pause» | gering |
| 27 | leistungen.ts:147 (Büro, `steps[2]`) | «Nous fixons quand nous nettoyons et comment nous accédons au bâtiment» | «Nous convenons des heures de nettoyage et de l’accès au bâtiment» | Satzbau | gering |
| 28 | leistungen.ts:201 (Sonder, `scope.items[0]`) | «de surfaces d’habitation, de bureaux et commerciales» | «de logements, de bureaux et de surfaces commerciales» | uneinheitliche Reihung | gering |
| 29 | leistungen.ts:202, 221, seiten.ts:175 | «nettoyage de fin de bail et nettoyage final d’appartement» | «nettoyage de déménagement et de fin de bail» | «nettoyage final d’appartement» ist eine Lehnübersetzung von «Wohnungsendreinigung». Die neue Doppelung bildet «Umzugs- und Wohnungsendreinigung» ab | mittel |
| 30 | leistungen.ts:267 (Sonder, `cta.text`) | «le bien, l’occasion et la date» | «le bien, le motif et la date» | «Anlass» heisst hier Grund | gering |
| 31 | leistungen.ts:275 (Bau, `h1`) | «pour constructions et transformations» | «pour constructions neuves et transformations» | DE «Neubau» | gering |
| 32 | leistungen.ts:282 (Bau, `facts[1].label`) | «Biens» | «Chantiers» | Die Werte sind Bauarten, keine Liegenschaften | gering |
| 33 | leistungen.ts:331 (Bau, `faq[2]`) | «il y a le [Nettoyage de vitres et de façades]» | «nous proposons le [nettoyage de vitres et de façades]» | Umgangssprache, Grossschreibung mitten im Satz | gering |
| 34 | leistungen.ts:424 (Industrie, `lead[0]`) | «Dans la production et l’entreposage apparaissent poussière, copeaux, films d’huile…» | «La production et l’entreposage génèrent de la poussière, des copeaux et des films d’huile…» | Inversion schwerfällig | gering |
| 35 | leistungen.ts:434 (Industrie, `scope.intro`) | «après un tour de votre entreprise» | «après avoir fait le tour de votre site» | idiomatisch | gering |
| 36 | leistungen.ts:451 und 479 (Industrie, Maschinen) | «Quand une installation est à l’arrêt, …, nous le fixons avant l’intervention.» und «Ce qui est nettoyé …, nous le fixons avec vous …» | «Avant l’intervention, nous fixons quand l’installation est à l’arrêt, …» und «Nous fixons avec vous et votre service de maintenance ce qui est nettoyé …» | deutsche Satzstellung aufgelöst | gering |
| 37 | leistungen.ts:506 (Hauswartung, `lead[0]`) | «Un immeuble a besoin de plus que de nettoyage :» | «Un immeuble demande plus que du nettoyage :» | Konstruktion | gering |
| 38 | leistungen.ts:545 (Hauswartung, `steps[3]`) | «Si l’immeuble a plus tard besoin de davantage ou de moins» | «Si les besoins de l’immeuble évoluent par la suite» | Konstruktion | gering |
| 39 | leistungen.ts:552 (Hauswartung, `faq[0]`) | «Le nettoyage d’entretien nettoie selon une fréquence fixe.» | «Le nettoyage d’entretien se fait selon une fréquence fixe.» | Tautologie | gering |
| 40 | leistungen.ts:606 (Aussen, `notIncluded[1]`) | «Aménagement paysager et nouvelles plantations.» | «Aménagement paysager et création de nouveaux espaces verts.» | DE «Neuanlagen» ist mehr als Pflanzungen. Die engere Ausschlussliste hätte mehr offen gelassen als das Deutsche | mittel |
| 41 | premium.ts:20, seiten.ts:243 (`cta.title`) | «Demande discrète» (gleich wie der erste Schritt) | «Demandez en toute discrétion» | DE unterscheidet «Diskret anfragen» (Aufforderung) von «Diskrete Anfrage» (Schritt) | gering |
| 42 | premium.ts:29 und 34, seiten.ts:223 | «avant des occasions particulières» | «avant des événements particuliers» | DE «Anlässe», einheitlich mit Nr. 44 und 59 | gering |
| 43 | premium.ts:40 (Villen, `scope.intro`) | «après un tour de votre maison» | «après avoir fait le tour de votre maison» | idiomatisch | gering |
| 44 | premium.ts:48 (Villen, `scope.items[6]`) | «Nettoyage avant et après des réceptions» | «Nettoyage avant et après des événements» | DE «Anlässe» umfasst mehr als Empfänge | mittel |
| 45 | premium.ts:112 und 130 (Privatjet) | «plan de vol» | «programme de vols» | «plan de vol» ist in der Luftfahrt der bei der Flugsicherung eingereichte Flugplan. Gemeint ist der Flug- bzw. Einsatzplan des Kunden | mittel |
| 46 | premium.ts:130 (Privatjet, Abschnitt) | «Où et quand nous nettoyons la cabine, nous le coordonnons avec vous …» | «Nous coordonnons avec vous et votre exploitant le lieu et le moment du nettoyage de la cabine.» | Satzstellung | gering |
| 47 | ratgeber.ts:13 (Übersicht, `intro`) | «sur l’attribution, le coût…» | «sur le choix du prestataire, le coût…» | «l’attribution d’un nettoyage» ist unklar | gering |
| 48 | ratgeber.ts:36 | «faites-vous donner les réponses par écrit» | «demandez les réponses par écrit» | schwerfällig | gering |
| 49 | ratgeber.ts:72 | «les nouveaux collaborateurs sont formés» | «le nouveau personnel est formé» | DE geschlechtsneutral «neue Mitarbeitende» | gering |
| 50 | ratgeber.ts:79 und 80 | «Références et évaluations», «Un entretien … dépend de leur accord», «évaluations en ligne» | «Références et avis», «La possibilité d’un entretien … dépend de leur accord», «avis en ligne» | übliches Wort für Online-Bewertungen, Logik des Satzes | gering |
| 51 | ratgeber.ts:97 | «Pas à pas jusqu’à l’entreprise de nettoyage» | «Choisir une entreprise de nettoyage pas à pas» | Lehnübersetzung | gering |
| 52 | ratgeber.ts:117 | «Quelle assurance existe, avec quelle couverture ?» | «Quelle assurance est en place, avec quelle couverture ?» | idiomatisch | gering |
| 53 | ratgeber.ts:127 | «(état septembre 2026)» | «(état en septembre 2026)» | Präposition | gering |
| 54 | ratgeber.ts:184 | «Comment la facturation se fait» | «Modes de facturation» | Überschrift | gering |
| 55 | seiten.ts:19 (`proof[0].label`) | «D’expérience en nettoyage et conciergerie» | «Expérience en nettoyage et en conciergerie» | Die Startseite zeigt «Depuis 2006» über der Zeile, «À propos» die Zeile vor dem Wert. «D’expérience» passt in keiner der beiden Reihenfolgen | mittel |
| 56 | seiten.ts:37 (`home.h1`) | «… pour Lucerne, Zoug et environs» | «… à Lucerne, Zoug et environs» | Lehnübersetzung von «für» | gering |
| 57 | seiten.ts:183 | «qui veulent tout d’un seul prestataire» | «qui souhaitent tout confier à un seul prestataire» | elliptisch | gering |
| 58 | seiten.ts:218 (`premiumOverview.lead`) | «Discrets, soigneux et dans votre langue.» | «En toute discrétion, avec soin et dans votre langue.» | Adjektive ohne Bezugswort | gering |
| 59 | seiten.ts:233 (`premiumOverview.more[4]`) | «Réceptions privées», «avant et après la réception» | «Événements privés», «avant et après l’événement» | DE «Privatanlässe» ist breiter als Empfänge | mittel |
| 60 | seiten.ts:244 (`premiumOverview.cta.text`) | «…votre demande, sur demande en toute confidentialité.» | «…votre demande, en toute confidentialité si vous le souhaitez.» | Wiederholung «demande» | gering |
| 61 | recht.ts:31 (Impressum, Haftung) | «Nous n’assumons aucune garantie quant à leur exactitude, leur exhaustivité et leur actualité.» | «Nous ne garantissons ni leur exactitude, ni leur exhaustivité, ni leur actualité.» | idiomatisch, gleiche Aussage | gering |
| 62 | recht.ts:56 (Datenschutz, `intro`) | «Vous apprendrez ici … La loi fédérale sur la protection des données (LPD) fait foi.» | «Cette déclaration vous indique … La loi fédérale sur la protection des données (LPD) est déterminante.» | «faire foi» gilt für verbindliche Fassungen und Beweisurkunden, nicht für das anwendbare Gesetz. «massgebend» heisst «déterminant» | mittel |
| 63 | recht.ts:59 (Datenschutz, Abschnitt 1) | «Responsable» | «Responsable du traitement» | LPD art. 5 let. j, TERMDAT 52421 | mittel |
| 64 | recht.ts:73 (Formular) | «…de Brandea GbR en Allemagne, qui exploite ce site web…» | «…de Brandea GbR, en Allemagne. Brandea GbR exploite ce site web…» | Bezug von «qui» war mehrdeutig | gering |
| 65 | recht.ts:75 (Aufbewahrung) | «pour d’éventuelles questions» | «pour d’éventuelles questions complémentaires» | DE «Rückfragen» | gering |
| 66 | recht.ts:81 (Karte) | «…Google Ireland Limited, les données…» und «dans la politique de confidentialité de Google sous policies.google.com/privacy» | «…Google Ireland Limited. Les données…» und «dans les règles de confidentialité de Google, à l’adresse policies.google.com/privacy» | französischer Name des Google-Dokuments. «sous» vor einer Adresse ist ein Germanismus | gering |
| 67 | recht.ts:93 (Ausland) | «L’Allemagne offre une protection des données adéquate.» | «L’Allemagne offre un niveau de protection adéquat.» | Wortlaut LPD art. 16 al. 1 | mittel |
| 68 | alle 9 Dateien, 71 Stellen | geschütztes Leerzeichen U+00A0 vor «:» (ratgeber.ts:17 als Escape `\u00a0`) | U+202F vor «:» (ratgeber.ts:17 `\u202f`) | vorher gemischt: U+202F vor «?» und «!», U+00A0 vor «:». Schweizer Satzregel: feines Leerzeichen vor allen doppelten Satzzeichen | gering |

## 4. Ermessensfragen

### 4.1 «Geschäftsführer»: bleibt «directeur», im Impressum keine Fundstelle

Fundstellen (alle «Notre directeur traite personnellement votre demande» oder gleichbedeutend):
`common.ts:48`, `premium.ts:11`, `premium.ts:21`, `premium.ts:59`, `ratgeber.ts:125`, `ratgeber.ts:205`, `seiten.ts:86`, `seiten.ts:96`, `seiten.ts:203`, `seiten.ts:244`.

Alle zehn stehen in Werbe- und Ablauftexten. Das Impressum (`recht.ts:18`) nennt wie das Deutsche nur «Représentée par» und den Namen, ohne Funktion. Dort gibt es also nichts zu entscheiden.

Entscheid:

- **Werbe- und Ablauftexte: «directeur».** In der Romandie ist «gérant» im Alltag vor allem der Liegenschaftsverwalter einer Gérance oder Régie (Berufsbezeichnung «gérant d’immeubles avec brevet fédéral», orientation.ch). Gérances sind die wichtigste Zielgruppe dieser Website. «Notre gérant traite votre demande» läse sich wie «unser Liegenschaftsverwalter». TERMDAT führt für «Geschäftsführer, Direktor» die Entsprechung «directeur» (Eintrag 55443, Thesaurus des Eidgenössischen Versicherungsgerichts), für die Berufsbezeichnung «chef d’entreprise» (123014, Berufsverzeichnis des BFS).
- **Rechtstexte: «gérant».** Falls das Impressum später eine Funktion nennt, dann «associé gérant» oder «gérant». So heisst die Geschäftsführung der Sàrl im CO (art. 809 bis 814). Einen eigenen TERMDAT-Eintrag für die Geschäftsführung der GmbH gibt es nicht. Der Eintrag «Geschäftsführer, gérant» (106591) betrifft die Geschäftsführung ohne Auftrag nach CO art. 420 und taugt hier nicht als Beleg. Der CO kennt «directeur» als eigene Funktion neben den Gérants (art. 804 al. 3: «L’assemblée des associés nomme les directeurs…», art. 814 al. 3: «un gérant ou un directeur»). Im Impressum wäre «directeur» deshalb juristisch ungenau.

### 4.2 «Luxusimmobilien»: bleibt «Biens de prestige»

Fundstellen: `seo.ts:26` (Name), `seo.ts:27` (Titel «Nettoyage de villas et de biens de prestige»), `navigation.ts:36` (Menü), `navigation.ts:88` (Formular «Biens de prestige (villas, lofts)»), `seiten.ts:62` (Startseite), `seiten.ts:223` (Premium-Übersicht).

Begründung: «immobilier de prestige» und «biens de prestige» sind im Schweizer und französischen Immobilienmarkt eingeführt und passen zum diskreten Ton der Premium-Linie. Für die Suche macht die Wahl keinen Unterschied: «biens de prestige», «propriétés de luxe» und «immobilier de prestige» haben in der Schweiz auf Französisch je etwa 10 Suchen im Monat, «immobilier de luxe» 50 (DataForSEO, siehe 4.5). Die Suchabsicht trägt im Titel das Wort «villas».

Offen ausserhalb meines Ordners: Die Adresse in `shared/i18n.ts` lautet `premium/proprietes-de-luxe` und passt nicht zum Namen. Vorschlag in Abschnitt 6.

### 4.3 «Zweitwohnungen und Residences»: bleibt «Résidences secondaires et résidences de standing»

Fundstellen: `navigation.ts:91` (Formularoption), `seiten.ts:229` (Premium-Übersicht, «Également pour»).

Begründung: «résidence secondaire» ist der amtliche Begriff (Loi fédérale sur les résidences secondaires, LRS, RS 702; TERMDAT 127720). «Residences» ist im Deutschen ein englisches Lehnwort für gehobene Wohnanlagen. «résidence de standing» ist im Schweizer Immobilienfranzösisch dafür üblich («appartement de standing», «immeuble de standing»). Die Wiederholung von «résidences» ist vertretbar. Wer sie vermeiden will: «Résidences secondaires et résidences haut de gamme».

### 4.4 Weitere Entscheide

- **Offerte: «devis», nicht «offre».** TERMDAT (39744) führt beide. «devis» war bereits durchgehend verwendet, und «offre» ist auf der Website schon für «Angebot» im Sinn von Sortiment belegt («notre offre Premium», «ne font pas partie de notre offre»). Ein Wechsel hätte beide Bedeutungen vermischt. Auch die Suchvolumen sprechen für «devis» (4.5), und Reinigungsfirmen der Romandie werben mit «devis gratuit».
- **Datenschutzerklärung: «déclaration de protection des données».** Siehe Nr. 15 der Tabelle.
- **Ratgeber: «Guide».** Siehe Nr. 11.
- **Typografie:** Apostroph ’ (U+2019), Guillemets « » mit U+202F innen, U+202F vor : ; ! ?, Auslassungspunkte … (U+2026), kein Gedankenstrich. Die Dateien nutzten diese Konvention bereits, nur der Doppelpunkt hatte ein breites geschütztes Leerzeichen. Grundlage: Nach dem Vergleich der frankophonen Satzregeln (Wikipedia, mit Verweis auf die Weisungen der Bundeskanzlei 2016 und den Guide du typographe) steht in der Schweiz vor allen doppelten Satzzeichen ein feines geschütztes Leerzeichen, auch vor dem Doppelpunkt. Die Gesetzestexte auf Fedlex setzen vor «:» und «;» gar kein Leerzeichen, der Kanton Waadt empfiehlt für elektronische Texte das Anhängen ohne Leerzeichen. Beides hätte einen vollständigen Umbau bedeutet. Das geschützte Leerzeichen verhindert zugleich, dass ein Satzzeichen allein auf eine neue Zeile rutscht. Die Schrift Inter enthält U+202F im Subset «latin» (Bereich U+2000 bis U+206F), die Seite nutzte das Zeichen schon vorher vor «?».

### 4.5 Suchvolumen als Beleg

DataForSEO, Google Ads Search Volume, Standort Schweiz (2756), Sprache Französisch, Abruf 27.09.2026, Mittel der letzten zwölf Monate:

| Suchbegriff | Suchen pro Monat |
|---|---|
| entreprise de nettoyage | 1600 |
| conciergerie | 880 (auch Luxus- und Ferienwohnungs-Conciergerie) |
| nettoyage vitres / nettoyage de vitres | 590 / 140 |
| nettoyage fin de bail | 320 (Spitze 720 im September) |
| nettoyage bureaux / nettoyage de bureaux | 110 / 70 |
| nettoyage fin de chantier | 70 |
| devis gratuit / offre gratuite | 40 / 10 |
| devis nettoyage / offre nettoyage | 20 / 10 |
| devis nettoyage fin de bail / offre nettoyage fin de bail | 20 / keine Daten |
| conciergerie immeuble | 20 |
| immobilier de luxe | 50 |
| biens de prestige, propriétés de luxe, immobilier de prestige | je 10 |

## 5. Terminologie (Deutsch → Französisch)

| Deutsch | Französisch (vereinheitlicht) | Beleg |
|---|---|---|
| Offerte | devis | TERMDAT 39744 (offre, devis) |
| Angebot (Sortiment) | offre | |
| Besichtigung / Rundgang | visite (sur place) / tour des lieux | |
| Unterhaltsreinigung | nettoyage d’entretien | TERMDAT 480321 |
| Büro- und Praxisreinigung | nettoyage de bureaux et de cabinets | |
| Sonderreinigung | nettoyage spécial | |
| Grundreinigung | nettoyage en profondeur | |
| Umzugsreinigung | nettoyage de fin de bail | Romandie-Anbieter |
| Umzugs- und Wohnungsendreinigung | nettoyage de déménagement et de fin de bail | |
| Abnahmegarantie | garantie de remise | Romandie-Anbieter |
| Abnahme durch die Verwaltung / Wohnungsübergabe | état des lieux | |
| Übergabe | remise | |
| Baureinigung / Bauendreinigung | nettoyage de chantier / nettoyage de fin de chantier | |
| Grob-, Zwischenreinigung | nettoyage grossier, nettoyage intermédiaire | |
| Bauabnahme | réception | TERMDAT 39642 |
| Bauherrschaft, Generalunternehmen, Bauleitung | maître d’ouvrage, entreprise générale, direction des travaux | TERMDAT 39347, 42432 |
| Fenster- und Fassadenreinigung | nettoyage de vitres et de façades | |
| Glasflächen, Glas, Falze, Storen | surfaces vitrées, vitrages, feuillures, stores | |
| Hochdruck | haute pression | TERMDAT 196573 |
| Industrie- und Hallenreinigung | nettoyage industriel et de halles | |
| Hauswartung / Hauswart | conciergerie / concierge | TERMDAT 55507, 57434 |
| Aussen- und Grünflächenpflege | entretien des extérieurs et des espaces verts | |
| Umgebung, Umgebungspflege | abords, entretien des abords | TERMDAT 127590 |
| Facility Services | facility services | |
| Liegenschaft / Objekt | immeuble / bien | |
| Verwaltung (Liegenschaftsverwaltung) | gérance | TERMDAT 39403 (gérance immobilière) |
| Stockwerkeigentümerschaft | communauté de PPE | TERMDAT 67301, 67299 (PPE) |
| Treppenhaus, Waschküche, Trockenraum | cage d’escalier, buanderie, séchoir | Standardwortschatz (die TERMDAT-Treffer stammen aus der Schifffahrt und belegen nichts) |
| Kontrollgänge, Kleinreparaturen | rondes de contrôle, petites réparations | |
| Haustechnik, Entsorgung, Wertstoffe | technique du bâtiment, élimination des déchets, matériaux recyclables | |
| Winterdienst / Pikettdienst | service hivernal / service de piquet | TERMDAT 236283, 41408 |
| Nachfüllservice, Verbrauchsmaterial | service de réapprovisionnement, consommables | |
| Rhythmus | fréquence | |
| nach Absprache | selon entente | |
| Ansprechperson (feste) | interlocuteur (attitré) | |
| Einzugsgebiet / Gebiet | zone d’intervention / région | |
| Geschäftsführer | directeur (Werbetext), gérant (Recht) | TERMDAT 55443, 123014; CO art. 809 bis 814 |
| Mitarbeitende | collaboratrices et collaborateurs (Fliesstext), collaborateurs (Meta-Beschreibung, Länge), personnel (neutral) | |
| Betriebshaftpflichtversicherung | assurance responsabilité civile d’entreprise | |
| Geheimhaltungsvereinbarung | accord de confidentialité | TERMDAT 444568 |
| Luxusimmobilien | biens de prestige | |
| Zweitwohnungen und Residences | résidences secondaires et résidences de standing | LRS, TERMDAT 127720 |
| Makler | courtiers | |
| Privatjet, Flugbetrieb, Flugplan | jet privé, exploitant, programme de vols | |
| Liegeplatz, Unterwasserschiff | place d’amarrage, carène | |
| Anlass (Ereignis) / Anlass (Grund) | événement / motif | |
| Ratgeber | guide | |
| Impressum | mentions légales | |
| Datenschutzerklärung / Datenschutz | déclaration de protection des données / protection des données | TERMDAT 384995, PFPDT |
| Verantwortlicher (DSG) | responsable du traitement | LPD art. 5 let. j, TERMDAT 52421 |
| Bekanntgabe ins Ausland | communication à l’étranger | LPD art. 16 ff., TERMDAT 52504 |
| angemessener Schutz | niveau de protection adéquat | LPD art. 16 al. 1 |
| Standardvertragsklauseln | clauses contractuelles types | LPD-Wortlaut: «clauses type de protection des données» (art. 16 al. 2 let. d) |
| EDÖB | Préposé fédéral à la protection des données et à la transparence (PFPDT) | TERMDAT 3054 |
| DSG | loi fédérale sur la protection des données (LPD) | RS 235.1 |
| Handelsregister | registre du commerce | TERMDAT 106867 |
| UID / MWST-Nummer | IDE / numéro TVA, Format «CHE-123.456.789 TVA» | TERMDAT 92424, 96627, UID-Register |
| Werktage | jours ouvrables | TERMDAT 81065 |
| PLZ | NPA | |
| Kantone | Lucerne, Zoug, Argovie, Nidwald, Obwald | |
| Seen | lac des Quatre-Cantons, lac de Zoug, lac d’Ägeri, lac de Sempach, lac de Hallwil | |

## 6. Offene Punkte ausserhalb von `content/fr/`

| Nr | Datei | Befund | Vorschlag | Dringlichkeit |
|---|---|---|---|---|
| A | `client/src/views/AboutView.tsx:112` | «UID» fest im Code, auf `/fr/a-propos` sichtbar | Bezeichnung ins Wörterbuch, z. B. `misc.uidLabel`: de «UID», fr «IDE», it «IDI», en «UID» | vor `LANGUAGES=true` |
| B | `shared/i18n.ts:84` | Adresse `premium/proprietes-de-luxe`, Seitenname «Biens de prestige» | `premium/biens-de-prestige`. Jetzt ohne Folgekosten, weil Französisch in der Produktion noch aus ist und die Website auf noindex steht (E70) | vor `LANGUAGES=true`, optional |
| C | `content/de/seo.ts:15` (und vermutlich EN, IT) | Titel der Startseite mit Gedankenstrich (Halbgeviertstrich U+2013) | wie FR: `${company.brand} \| …` | Regel 8 |
| D | `shared/structured-data.ts:17` | `areaServed` mit deutschen Namen «Kanton Luzern» auch auf französischen Seiten (JSON-LD, nicht sichtbar) | Namen je Sprache oder neutral mit Wikidata-Verweis | gering |
| E | `client/src/components/SwissFooter.tsx:207`, `server/email.ts:42` | Formular schickt beim Rhythmus den französischen Text in die deutsche E-Mail («Rhythmus: Chaque semaine») | Werte deutsch, Anzeige übersetzt, wie bei `serviceOptions` | gering |
| F | `client/src/components/AIChatbot.tsx`, `IndustryAdvisor.tsx`, `AppointmentButton.tsx` | nur Deutsch. Heute inaktiv, weil `NEXT_PUBLIC_CHAT_ENABLED` aus ist | vor dem Einschalten des Chats übersetzen | später |
| G | `client/src/components/ErrorBoundary.tsx:36, 53` | englische Fehlertexte | ins Wörterbuch | gering |
| H | Rechtstexte aller Sprachen | kein Hinweis auf die massgebende Fassung | siehe Abschnitt 7 | Entscheid Brandea |

Bereits bekannt und nicht neu: globale 404-Seite nur Deutsch (N085).

## 7. Hinweis «deutsche Fassung massgebend»

Weder das Deutsche noch das Französische enthält einen solchen Hinweis. Ich habe ihn nicht eingefügt.

Vorschlag für den Schluss beider Rechtstexte, im Impressum als letzter Abschnitt (etwa Titel «Version linguistique»), in der Datenschutzerklärung als zweiter Satz unter «Modifications»:

> Ce texte est une traduction de la version allemande. En cas de divergence, seule la version allemande fait foi.

Hinweise dazu:

- Der PFPDT verlangt, dass die Datenschutzerklärung einer mehrsprachigen Website in jeder Sprache verfügbar ist. Der Hinweis ändert daran nichts. Die französische Fassung muss trotzdem vollständig und richtig sein, was sie nach diesem Lektorat ist.
- Wie weit ein solcher Vorrang gegenüber Konsumentinnen und Konsumenten trägt, ist nicht gesichert. Das ist ein Entscheid für Brandea (E22, Rechtstexte ohne Fachprüfung).
- Technisch reicht ein zusätzlicher Abschnitt in `content/fr/recht.ts`. Der Typ `LegalContent` erlaubt je Sprache eine eigene Zahl von Abschnitten. EN und IT bräuchten denselben Satz in ihrer Sprache.

## 8. Restrisiken

1. **Kein muttersprachliches Gegenlesen.** Die Korrekturen stützen sich auf Wörterbuch- und Amtsquellen. Tonalität und einzelne Wendungen sollte eine Person mit Französisch als Muttersprache aus der Romandie ansehen (Abschnitt 9). Laut E18 sprechen Mitarbeitende des Kunden Französisch, eine davon wäre geeignet.
2. **Rechtstexte ohne juristische Fachprüfung (E22).** Inhalt unverändert, Begriffe jetzt nach LPD, CO und TERMDAT.
3. **Suchmaschine:** «nettoyage de fin de bail» suchen in der Romandie vor allem Mieterinnen und Mieter. Die Firma bietet die Umzugsreinigung für Mieter nicht an (E28). Das gilt schon für die deutsche Seite und kann unpassende Anfragen bringen.
4. **Meta-Beschreibungen über 160 Zeichen** (Google kürzt sie im Suchergebnis womöglich): `/` 164, `/premium` 174 (Arbeitsmarke), `/premium/luxusimmobilien` 167, `/leistungen` 166, `/leistungen/baureinigung` 172, `/leistungen/hauswartung` 162, `/blog/richtige-reinigungsfirma-finden` 173, `/ueber-uns` 163. Kein Prüfkriterium im Projekt, die deutsche Fassung geht bis 179. Ich habe Vollständigkeit vor Kürze gestellt.
5. **Gerenderte Seiten nicht geprüft.** Nach dem Abschluss aller drei Sprachen: `npm run build` mit Sprachen und beiden Markenmodi, `seiten_pruefen.py`, `browser_pruefen.cjs`, axe. `npm run check` war am 27.09.2026 grün. Weil EN und IT parallel geändert werden, nach deren Abschluss erneut laufen lassen.
6. **TERMDAT** war zunächst nicht erreichbar (503, technische Störung laut Hinweis des BIT) und ab 09:46 wieder. Die Einträge habe ich danach über die öffentliche Schnittstelle abgefragt. Das PDF der Weisungen der Bundeskanzlei lieferte einen Serverfehler (502). Für die Typografie stütze ich mich deshalb auf eine Sekundärquelle, die es zitiert.

## 9. Für eine Person mit Französisch als Muttersprache

Nichts davon ist ein Fehler. Es sind Stellen, bei denen ein Romand anders formulieren könnte:

1. `premium.ts:20`, `seiten.ts:243`: «Demandez en toute discrétion» als Überschrift des Abschlusses. Passt der Ton?
2. `seiten.ts:131`: «Prêt pour votre devis ?» ist männlich generisch. Alternative: «Vous souhaitez un devis ?»
3. `leistungen.ts:124`: «Kitchenettes». In Schweizer Büros ist auch «cafétéria» für den Kaffeeraum üblich, dazu «cuisinette» und «coin cuisine».
4. `leistungen.ts:202, 221`, `seiten.ts:175`: «nettoyage de déménagement et de fin de bail». Wirkt die Doppelung natürlich, oder reicht «nettoyage de fin de bail»?
5. `leistungen.ts:27, 119, 364, 434, 597`, `premium.ts:40, 117, 188`: «Prestations typiques :» vor den Listen.
6. «clarifier» für «klären», 26 Stellen, etwa `leistungen.ts:138, 381, 401`, `premium.ts:67, 138`. In der Schweiz üblich, sonst «préciser» oder «définir».
7. `leistungen.ts:223, 244`: «nous repassons gratuitement» bei der Garantie. Alternative: «nous revenons nettoyer gratuitement».
8. `leistungen.ts:503, 584, 643`, `seiten.ts:182`: Dachzeile «Suivi d’immeubles» für «Betreuung von Liegenschaften».
9. `seiten.ts:36, 80`: «Nettoyage et conciergerie depuis Emmenbrücke». «depuis» steht hier örtlich, kurz darauf folgt «Depuis 2006» zeitlich.
10. `common.ts:11` und alle Verwendungen: «dans les 24 heures les jours ouvrables», doppeltes «les». Alternative: «dans les 24 heures (jours ouvrables)».
11. `recht.ts:16`: «Exploitante de ce site web», weiblich wegen «la société». Gebräuchlicher wäre «Exploitant du site web».
12. `recht.ts:26`: «Inscrite au Registre du commerce du canton de Lucerne», gross geschrieben als Name der Behörde. Dieselbe Konstante steht in «À propos» am Zeilenanfang.
13. `recht.ts:32`: «dérangements techniques» (Helvetismus, sonst «pannes techniques»).
14. `leistungen.ts:194, 507, 510`: «communautés de PPE». Amtlich: «communauté des propriétaires d’étages».
15. «facility services» klein geschrieben (`seo.ts:86, 87` und weitere). Im Schweizer Markt oft «Facility Services».
16. `navigation.ts:48`: «Guide» als Menüpunkt.
17. `premium.ts:123`: «Office de bord et cabinet de toilette» (Kabine eines Privatjets).

## 10. Quellen

Gesetze und Register:

- LPD, französisch, RS 235.1: https://www.fedlex.admin.ch/eli/cc/2022/491/fr (Text abgerufen über https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/2022/491/20230901/fr/html/fedlex-data-admin-ch-eli-cc-2022-491-20230901-fr-html-5.html), art. 5, 8, 16, 19, 25, 28, 30, 32, 49
- CO, französisch, RS 220: https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr (Text abgerufen über https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/27/317_321_377/20260101/fr/html/fedlex-data-admin-ch-eli-cc-27-317_321_377-20260101-fr-html.html), art. 804, 809, 810, 814, 954a
- LRS, RS 702: https://www.lexfind.ch/tolv/198200/fr und https://www.are.admin.ch/fr/residencessecondaires
- UID-Register, Eintrag CHE-108.687.458 (Numéro TVA «CHE-108.687.458 TVA», Sàrl, aktiv): https://www.uid.admin.ch/Detail.aspx?uid_id=CHE-108.687.458&lang=fr
- Zefix, Firmensuche (Firma aktiv, Sitz Emmen, Handelsregister Luzern): https://www.zefix.ch und https://lu.chregister.ch/cr-portal/auszug/auszug.xhtml?uid=CHE-108.687.458
- ESTV, IDE und Format der Nummer TVA: https://www.estv.admin.ch/fr/numero-identification-des-entreprises-ide

TERMDAT (Terminologiedatenbank der Bundesverwaltung), Einträge unter https://www.termdat.bk.admin.ch/search/entry/NUMMER:

- 384995 Datenschutzerklärung, 52421 Verantwortlicher, 52504 Bekanntgabe ins Ausland, 3054 EDÖB
- 55443 Geschäftsführer, Direktor (directeur), 57203 Direktor (directeur), 123014 Geschäftsführer (chef d’entreprise); 106591 (gérant) betrifft CO art. 420, nicht die GmbH
- 39744 Offerte, 480321 Unterhaltsreinigung, 55507 und 57434 Hauswart, 39403 Liegenschaftsverwaltung
- 41408 Pikettdienst, 236283 Winterdienst, 67301 Stockwerkeigentümergemeinschaft, 67299 Stockwerkeigentum
- 39347 Bauherrschaft, 42432 Generalunternehmung, 39642 Bauabnahme, 127590 Umgebungsarbeiten, 196573 Hochdruckreiniger
- 96627 Mehrwertsteuernummer, 92424 UID, 106867 Handelsregister, 444568 Geheimhaltungsvereinbarung
- 127720 Zweitwohnung, 81065 Werktag

Datenschutz und Typografie:

- PFPDT, Déclaration de protection des données sur Internet (Inhalt, Mehrsprachigkeit): https://www.edoeb.admin.ch/fr/declaration-de-protection-des-donnees-sur-internet
- Google, «Règles de confidentialité»: https://policies.google.com/privacy?hl=fr
- Vergleich der frankophonen Satzregeln, Abschnitt Schweiz: https://fr.wikipedia.org/wiki/Comparatif_des_diff%C3%A9rents_codes_typographiques_francophones
- Bundeskanzlei, Instructions sur la présentation des textes officiels en français (2016, beim Abruf Fehler 502): https://www.bk.admin.ch/dam/bk/fr/dokumente/sprachdienste/Sprachdienst_fr/objekt_55266.pdf.download.pdf/instructions_de_lachancelleriefederalesurlapresentationdestextes.pdf
- Kanton Waadt, Usages typographiques: https://www.vd.ch/cha/bic/usages-typographiques

Sprachgebrauch und Markt:

- orientation.ch, Gérant d’immeubles BF: https://www.orientation.ch/dyn/show/1900?id=661
- USPI Formation, Brevet fédéral de gérant d’immeubles: https://www.uspi-formation.ch/formation/brevet-federal-de-gerant-dimmeubles/
- Reinigungsanbieter der Romandie (fin de bail, garantie de remise, devis gratuit): https://www.maxiclean.ch/nettoyage-de-fin-de-bail, https://alpclair.ch/nettoyage-fin-de-bail/, https://www.idnettoyage.ch/devis-nettoyage-fin-de-bail-lausanne/
- DataForSEO, Google Ads Search Volume (Schweiz, Französisch, Abruf 27.09.2026): https://docs.dataforseo.com/v3/keywords_data/google_ads/search_volume/live/
