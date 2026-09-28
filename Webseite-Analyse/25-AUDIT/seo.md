# SEO-Audit BGS Gebäudeservice

**Stand:** 28.09.2026, Commit `99727a8` (Zweig `claude/funny-einstein-5acss7`), nur geprüft, nichts im Repo geändert.
**Gebaut:** eigene Arbeitskopie `.worktrees/audit-seo-20260928`, `LANGUAGES=true npm run build` (Exit 0, 128 statische Seiten), `next start -p 3103`. Ohne `NEW_BRAND` zeigt ein lokaler Build die Marke **Mantena** und die Premium-Linie **Clavea**. Die Produktion zeigt derzeit die Arbeitsmarke «BGS Gebäudeservice» (Live-Abruf 28.09.2026: Titel der Startseite «BGS Gebäudeservice | Reinigung und Hauswartung Luzern, Zug», 116 URLs in der Sitemap, `x-robots-tag: noindex, nofollow`). Titellängen sind deshalb für beide Marken gemessen.
**Umfang:** alle 116 URLs der Sitemap (29 Seiten × 4 Sprachen) per Skript, dazu jeder Seitentyp im gebauten HTML einzeln. Alle 116 antworten mit 200, alle tragen bewusst `noindex, nofollow` (E12).
**Werkzeuge:** `audit/extract.py` (BeautifulSoup, liest Titel, Beschreibung, Canonical, hreflang, OG, X, H1 bis H6, JSON-LD, Bilder, Links), Ergebnis `audit/pages.json`. JSON-LD geprüft mit dem Schema.org-Validator (validator.schema.org, 15 Seiten, jeder Seitentyp, alle Sprachen). Titelbreite geschätzt mit Arial 20 px (Näherung für die Desktop-Suche, Google nennt keine feste Grenze). DataForSEO für SERP und Wettbewerbsvergleich.

## Kurzfazit

Die technische Basis ist sauber: je Seite genau eine H1, keine Sprünge in der Gliederung, eindeutige Titel und Beschreibungen in allen 116 Seiten, selbstreferenzierende Canonicals, vollständige und gegenseitige hreflang-Gruppen mit x-default, vollständige OG- und X-Tags mit echten 1200 × 630-JPEGs, JSON-LD ohne Fehler.

Die grössten Hebel liegen im Inhalt und in der Verknüpfung. Die wichtigsten deutschen Suchbegriffe stehen wegen der Ergänzungsstriche («Fenster- und Fassadenreinigung») nicht wörtlich in Titel und H1. Die Kantonsseiten schicken die Umzugsabsicht noch auf die alte Seite «Sonderreinigungen». Die Umzugsseite zielt auf ein Suchvolumen, das laut SERP fast nur aus Mietern besteht, die E28 ausschliesst. Vor dem Markenwechsel fehlt die Verbindung von «Mantena» zu «BGS Gebäudeservice» im Markup.

Ranking-Wirkungen sind nicht garantierbar. Die Schwere richtet sich nach Checkliste und Google-Doku, nicht nach erwarteten Positionen.

## Befundtabelle

Schwere: Blocker, hoch, mittel, niedrig. «Gate» heisst: vor dem Launch Pflicht, heute bewusst offen und bereits bekannt.

| ID | Seite(n) | Befund | Beleg | Schwere | Konkrete Korrektur |
|---|---|---|---|---|---|
| G1 | Alle 116 | Google-Unternehmensprofil weicht ab: Adresse Rothenburgstrasse 41 statt Tannhof 10, Kategorie «House cleaning service», keine Website verknüpft, 2 Bewertungen. Das Profil ist Teil der NAP-Pflicht und Voraussetzung für das Local Pack. | `Webseite-Analyse/24-SEO-KEYWORDS.md:50`, `:57`; Checkliste `WEB-GO-LIVE-CHECKLISTE.md:112` und `:116` (beide 🔴); Google: «Use a precise, accurate address and/or service area» (support.google.com/business/answer/3038177) | Blocker (Gate, bekannt) | Wie in 24, Zeile 57: Adresse Tannhof 10, 6020 Emmenbrücke, Hauptkategorie Gebäudereinigung, weitere Kategorie Hauswartung, Website verknüpfen, danach die Profil-URL in `company.sameAs` (`shared/company.ts:49`) ergänzen. Nur Brandea und Kundin. |
| G2 | Alle 116 | Alle Canonicals, hreflang, Sitemap, `robots.txt` und JSON-LD-`@id` zeigen auf `bgs-gebaeudeservice.vercel.app`, weil `NEXT_PUBLIC_SITE_URL` nicht gesetzt ist. Beim Launch auf eigener Domain wäre das eine falsche Domain in allen Signalen. | `shared/seo.ts:10`; `.env.example:22`; Web Factory `quality/standard.md:33` (Q05, Sperrgrund «falsche Domain»); `05-DEPLOY-FREIGABE.md:23` (G01) | Blocker (Gate, bekannt) | Mit dem Launch `NEXT_PUBLIC_SITE_URL` auf die Zieldomain setzen, neu bauen, dann 301 von allen alten Adressen von `bgs-service.ch` (24, Zeile 58; 03, Abschnitt 2b). Danach Sitemap in der Search Console einreichen (Checkliste `:32`, heute kein Zugang laut B11). |
| G3 | Alle 116 | Sichtbare E-Mail ist `admin@brandea.de` (Agenturadresse) in Kopf, Kontakt, Footer und Impressum. Für NAP und Vertrauen muss vor dem Launch die Kundenadresse stehen. | `shared/company.ts:41`; E31 (`07-BRIEFING-UND-ENTSCHEIDUNGEN.md:115`); Checkliste `:112` | Blocker (Gate, bekannt) | Wie geplant (M58) auf die Kundenadresse umstellen, dann `email` auch ins LocalBusiness-Markup aufnehmen. |
| G4 | Alle 116 | `noindex, nofollow` per Meta und `X-Robots-Tag`. Heute richtig (E12), beim Launch Pflicht zum Umschalten, und erst nach G1 bis G3. | Gebautes HTML aller 116 Seiten; `client/src/components/RootShell.tsx:38` und `:64`; `next.config.ts:147`; Checkliste `:25` | Gate (heute kein Mangel) | `SITE_INDEXABLE=true` nur zusammen mit G1 bis G3. Der indexierbare Zweig setzt schon `max-image-preview: large` und `max-snippet: -1`, das passt. |
| H1 | `/leistungen/umzugsreinigung` (4 Sprachen) | Suchabsicht und Zielgruppe passen nicht zusammen. Die Seite zielt auf «umzugsreinigung» (720), «… mit abnahmegarantie» (170), «umzugsreinigung luzern» (140), sagt aber in der FAQ «Nein» zu Mieterinnen und Mietern (E28). Alle neun organischen Treffer zu «umzugsreinigung luzern» richten sich an Haushalte («für Wohnung & Haus», movu.ch «5 Offerten»). Wer als Mieter klickt, findet kein Angebot. | SERP DataForSEO, Luzern (1003056), Desktop, 28.09.2026 09:34 UTC; FAQ in `content/de/leistungen.ts:562`; E28 (`07-…:112`), offene Frage in E81 (`07-…:165`); Google: «The 'why' should be that you're creating content primarily to help people» (developers.google.com/search/docs/fundamentals/creating-helpful-content) | hoch (Entscheid Brandea) | Entscheid zu E28 herbeiführen, dann Titel und H1 nach **T1** setzen. Variante A (E28 bleibt): Titel nennt die Zielgruppe, damit der Klick ehrlich ist. Variante B (Mieter zugelassen): Titel wie die Wettbewerber. Nur B deckt das Volumen ab. Eine Garantie für Anfragen gibt es in keiner Variante. |
| H2 | `/einzugsgebiet/luzern`, `/zug`, `/obwalden` und die FAQ Luzern, je 4 Sprachen | Kantonsseiten schicken die Umzugsabsicht auf die falsche Seite: Karte «Sonderreinigungen: Umzugs- und Wohnungsendreinigung mit Abnahmegarantie» verlinkt `/leistungen/sonderreinigungen`, die FAQ Luzern sagt, die Umzugsreinigung «gehört zu unseren Sonderreinigungen». Das ist Stand vor E81. Dazu hat die Grundreinigungsseite ein eigenes H2 «Umzugs- und Wohnungsendreinigung». Folge: Umzugsseite 5 Links aus dem Hauptinhalt (DE), Sonderreinigungen 13. Kannibalisierungsrisiko für den grössten kommerziellen Hebel. | `content/de/kantone.ts:90`, `:110`, `:164`, `:392`; `content/en/kantone.ts:65`, `:85`, `:138`, `:363`; `content/fr/kantone.ts:66`, `:86`, `:139`, `:364`; `content/it/kantone.ts:66`, `:86`, `:139`, `:364`; H2 in `content/de/leistungen.ts:364`; Linkzählung `pages.json`; Checkliste `:43` (🔴 «pro Haupt-Keyword genau eine Seite»), `24-SEO-KEYWORDS.md:18` | hoch | Texte nach **T3**: Kartenziel auf `/leistungen/umzugsreinigung`, Kartentitel der Grundreinigung auf den heutigen Namen, FAQ-Link umstellen. Auf der Grundreinigungsseite das H2 «Umzugs- und Wohnungsendreinigung» zu einem kurzen Verweisabsatz ohne eigene Überschrift kürzen oder als H3 unter «Abgrenzung» führen. |
| H3 | 6 deutsche Leistungsseiten | Ergänzungsstriche verstecken die Hauptbegriffe. Wörtlich in Titel und H1 stehen nicht: «Fensterreinigung» (1'600, Titel 0, H1 0, Text 2×), «Baureinigung» (390, Titel 0, H1 0), «Büroreinigung» (320, Titel 0, H1 0), «Grundreinigung» (170, Titel 0, H1 0), «Umzugsreinigung» (720, H1 0), «Industriereinigung» (Titel 0, H1 0, ohne Volumendaten). Ob Google «Fenster- und Fassadenreinigung» als «Fensterreinigung» wertet, ist nicht dokumentiert, darum hier als Risiko und nicht als bewiesener Fehler. EN, FR und IT sind nicht betroffen («Nettoyage de vitres», «Pulizia di vetri» stehen zusammenhängend). | Titel `content/de/seo.ts:53`, `:58`, `:63`, `:68`, `:73`, `:78`; H1 `content/de/leistungen.ts:154`, `:319`, `:446`, `:585`, `:712`, `:835`; Zählung aus dem gebauten HTML; Google: «place those words in prominent locations on the page, such as the title and main heading» (developers.google.com/search/docs/essentials); Checkliste `:37` (🔴), `:39`; Volumen `24-SEO-KEYWORDS.md:20` bis `:29` | hoch | Titel und H1 nach **T2** mit ausgeschriebenen Begriffen. Die kurzen Namen in Menü und Brotkrumen können bleiben. |
| H4 | Alle 116 (LocalBusiness im Layout) | LocalBusiness ohne `geo` (Koordinaten). Die Checkliste führt das als 🔴, Google als empfohlen. | `shared/structured-data.ts:22` bis `:48`; Checkliste `:114`; Google LocalBusiness, Recommended: «geo» (developers.google.com/search/docs/appearance/structured-data/local-business) | hoch | Koordinaten für Tannhof 10, 6020 Emmenbrücke aus map.geo.admin.ch oder dem GWR ablesen (nicht schätzen), in `company.ts` ablegen und als `geo: { '@type': 'GeoCoordinates', latitude, longitude }` ausgeben, mit 5 Nachkommastellen. |
| H5 | Alle 116, Startseite | Markenwechsel ohne Brücke im Markup: Mit `NEW_BRAND` heisst die Entität nur «Mantena». Alle Fremdquellen (`sameAs`: local.ch, search.ch, Facebook; später das Google-Profil) führen «BGS Gebäudeservice GmbH». `alternateName` fehlt, `WebSite`-Markup für den Seitennamen fehlt ganz. `NEW_BRAND` soll ab 29.09.2026 gesetzt werden. | `shared/structured-data.ts:26` bis `:27`; `shared/company.ts:14` bis `:16`, `:49` bis `:53`; E76 (`07-…:160`); Google Organization, empfohlen u. a. `alternateName` (developers.google.com/search/docs/appearance/structured-data/organization); Google Site Names: «The WebSite structured data must be on the home page of the site» (developers.google.com/search/docs/appearance/site-names, Stand 10.12.2025); Checkliste `:52` | hoch (ab dem Markenwechsel) | Siehe **T7**: `alternateName: 'BGS Gebäudeservice'` im LocalBusiness, sobald `newBrandActive`; `WebSite`-Knoten nur auf der Startseite mit `name`, `alternateName`, `url`, `publisher: {'@id': …#organization}`. |
| M1 | `/leistungen/aussen-und-gruenflaechenpflege`, `/leistungen/unterhaltsreinigung` | «Gartenpflege» (390) kommt auf der ganzen Website nicht vor, obwohl die Seite Rasen, Hecken und Beete beschreibt. «Treppenhausreinigung» (110) fehlt wörtlich, «Treppenhaus» steht 4×. | Zählung im gebauten HTML; Zielzuordnung `24-SEO-KEYWORDS.md:28`, `:29`; Titel `content/de/seo.ts:88` | mittel | Titel «Gartenpflege und Umgebungspflege Luzern, Zug», H1 «Gartenpflege und Grünflächenpflege für Liegenschaften», Beschreibung nach **T4**. Auf der Unterhaltsreinigung einen Satz im Umfang: «Zur Unterhaltsreinigung gehört auf Wunsch die Treppenhausreinigung: Stufen, Geländer, Handläufe, Eingänge und Lift.» Nur wenn der Umfang so stimmt (E18), die Begriffe stehen heute schon einzeln auf der Seite. |
| M2 | Sitemap, alle 116 | Ein einziges `lastmod` 2026-09-28 für alle URLs (globaler Wert). Die Ratgeber melden im Markup `dateModified` 2026-09-26, sichtbar «Stand: 26. September 2026». Google nutzt `lastmod` nur, wenn es «consistently and verifiably accurate» ist. | `shared/seo.ts:13`, `app/sitemap.ts:13`; `content/de/ratgeber.ts:41`, `:160`; Google Sitemaps (developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap); Checkliste `:24` | mittel | `lastmod` je Seite: für Ratgeber und Recht das vorhandene `updated`, für alle übrigen ein Feld `updated` je Eintrag in `content/<sprache>/seo.ts` oder das Datum des letzten Commits der Inhaltsdatei zur Build-Zeit. Den globalen Wert nur bei echten, seitenweiten Änderungen anheben. |
| M3 | 84 von 116 Beschreibungen | Beschreibungen ohne Handlungsaufruf (nur 32 von 116 nennen Offerte oder Anruf), 15 enden mit der vollen Liste der fünf Kantone. Das ist Platz ohne Nutzen, und das Ende wird am ehesten abgeschnitten. Google nennt kein Längenlimit, empfiehlt aber eigene, informative Texte. | `pages.json` (Auswertung); Checkliste `:40`; Google Snippets: «Create unique descriptions for each page on your site.» (developers.google.com/search/docs/appearance/snippet) | mittel | Muster nach **T4**: Kantonsliste auf «Luzern, Zug und Umgebung» kürzen, dafür den belegten Schluss «Kostenlose Offerte nach Besichtigung.» in der Sprache der Seite. Fertige deutsche Texte für die sechs Leistungsseiten und das Schlussmuster in allen vier Sprachen in T4. |
| M4 | Startseite, 4 Sprachen | Kein zitierfähiger Satz, der die Firma benennt. Im Hauptinhalt der Startseite kommen weder «Mantena» noch «BGS - Gebäudeservice GmbH» vor. Die Kennzahlen stehen nur als Kacheln («Kunden / Über 120»). Die belegte Kurzfassung steht bereits auf «Über uns». | Hauptinhalt `/` im gebauten HTML; `content/de/seiten.ts:35` bis `:40` (Kacheln) und `:177` (Satz auf Über uns); FIMI `_ki-suche-optimierung/ERKENNTNISSE.md:153` («Fakten werden zitiert»); Checkliste `:118` | mittel | Satz aus **T5** unter die Kacheln «Auf einen Blick» der Startseite setzen. Er verwendet nur Angaben aus E18 und E58 und die schon freigegebenen Übersetzungen der Über-uns-Seite. |
| M5 | EN, FR, IT (87 Seiten) | Für Englisch, Französisch und Italienisch gibt es keine Keyword-Daten. 24 umfasst nur Deutsch. Titel wie «Conciergerie à Lucerne et Zoug», «Custodia di stabili a Lucerna e Zugo», «Pulizia di fine locazione con garanzia» beruhen auf Übersetzung, nicht auf Suchdaten. Beleg für die Wortwahl fehlt. | `24-SEO-KEYWORDS.md:3` (nur Deutsch, 168 Keywords); `content/fr/seo.ts`, `content/it/seo.ts` | mittel | Vor `SITE_INDEXABLE` einen Abruf Google Ads Suchvolumen, Schweiz, Sprachen fr, it, en, für rund 30 Begriffe (Varianten wie «conciergerie» und «nettoyage de fin de bail», «custodia» und «pulizia finale», «end of tenancy cleaning» und «move out cleaning»), geschätzt unter 0,10 USD. Danach Titel und H1 anpassen, Lektorat durch Muttersprachler bleibt Abnahme (E72). |
| M6 | Alle 116 | LocalBusiness ohne `logo`, `image`, `vatID` und `description`. Google führt `logo`, `vatID` und `description` für Organisationen als empfohlen. Die UID steht schon sichtbar im Impressum. | `shared/structured-data.ts:22` bis `:48`; `shared/company.ts:23` bis `:24`; Google Organization (developers.google.com/search/docs/appearance/structured-data/organization) | mittel | Siehe **T7**: `vatID: 'CHE-108.687.458 MWST'`; `description` aus belegten Angaben; `logo` erst mit `NEW_BRAND` als quadratische Rasterfassung (mindestens 112 × 112 px laut Google-Doku); `image` = Vorschaubild der Startseite. Kein `foundingDate`: Die GmbH ist seit 1997 eingetragen, «seit 2006» ist Erfahrung (E18, N037). |
| N1 | Alle Service-Seiten (13 × 4 = 52) | `inLanguage` steht im `Service`-Knoten. Schema.org kennt die Eigenschaft für `Service` nicht, der Validator meldet eine Warnung (keinen Fehler). | Schema.org-Validator 28.09.2026: `UNKNOWN_FIELD inLanguage, Service` auf `/leistungen/umzugsreinigung`, `/premium/yacht`, `/fr/prestations/conciergerie`; `shared/structured-data.ts:62` | niedrig | Zeile 62 streichen. Die Sprache steht schon in `<html lang>` und in hreflang. |
| N2 | 6 Ratgeber-Seiten | `BlogPosting` ohne `image`, Autor nur als `@id`-Verweis ohne `name` und `url`. `datePublished` fehlt bewusst bis zum Launch (M19). | `shared/structured-data.ts:84` bis `:101`; Google Article, empfohlen: «author, author.name, author.url, dateModified, datePublished, headline, image» (developers.google.com/search/docs/appearance/structured-data/article) | niedrig | `image` = absolute URL des vorhandenen Vorschaubilds (`previewImage(path, lang).url`); `author: { '@type': 'Organization', '@id': …, name: company.brand, url: absolute('/') }`; `datePublished` am Launchtag setzen. |
| N3 | 11 Titel in der Produktion (Arbeitsmarke) | Mit «BGS Gebäudeservice» statt «Mantena» sind 11 Titel breiter als rund 580 px, etwa «Umzugsreinigung mit Abnahmegarantie, Luzern \| BGS Gebäudeservice» (64 Zeichen, rund 633 px). Mit Mantena sind es 0. Google kürzt nur, es gibt kein Limit. | Messung `pages.json` mit Arial 20 px; Google Title Links: «there's no limit on how long a &lt;title&gt; element can be» (developers.google.com/search/docs/appearance/title-link) | niedrig | Nur relevant, falls der Markenwechsel (E76) sich verzögert und die Seite vorher indexiert wird. Dann in `metaFor()` (`shared/seo.ts:39`) für die Arbeitsmarke die Kurzform «BGS» anhängen. |
| N4 | 5 Kantonsseiten | Einzelne Kantonstitel lesen sich holprig: DE «Reinigungsfirma Nidwalden: Hauswartung», EN «Cleaning company Lucerne and caretaking», IT «Impresa di pulizie Lucerna e custodia». | `content/de/kantone.ts:276`; `content/en/kantone.ts`, `content/it/kantone.ts` (Feld `seo.title`); Google: «Write descriptive and concise text» (title-link) | niedrig | Vorschläge in **T6** (DE, EN, IT; FR ist sauber). |
| N5 | 5 Kantonsseiten | Doorway-Prüfung bestanden, aber mit dünner Belegdecke. Eigener Anteil je Seite 41 bis 48 % (5-Wort-Folgen, die auf keiner anderen deutschen Seite vorkommen), mit eigenen Orten, Objekten und Fragen. Google nennt als Beispiel für Doorways «pages targeted at specific regions or cities that funnel users to one page». Lokale Belege fehlen noch (etwa betreute Objekte im Kanton), weil E18 nur Belegtes erlaubt. | Ähnlichkeitsmessung `pages.json`; Google Spam Policies (developers.google.com/search/docs/essentials/spam-policies, Stand 28.08.2026) | niedrig | Beibehalten. Sobald die Kundin belegte kantonsbezogene Angaben liefert (Zahl der Objekte, typische Anfahrt ab Emmenbrücke), je Kanton einen Absatz ergänzen. Keine weiteren Ortsseiten anlegen. |
| N6 | Leistungsseiten, Kantonsseiten | Leistungsseiten verlinken im Hauptinhalt keine Kantonsseite. Die Kantonsseiten bekommen je nur 5 Links aus dem Hauptinhalt (Übersicht und Geschwister), die Startseite verlinkt sie nur im Menü. | Linkauswertung `pages.json` | niedrig | Im Abschnitt «Einsatzgebiet» der Leistungsvorlage die fünf Kantone als Links ausgeben («Kanton Luzern», «Kanton Zug» usw.), Ankertext = Kantonsname. |
| N7 | `/premium` in 4 Sprachen | Karten-Links mit allgemeinem Ankertext: «Zur Leistung», «View service», «Voir la prestation», «Vai al servizio» (je 3). | `content/de/common.ts:10` (`toService`); `client/src/seiten/premium-uebersicht/02-bereiche.tsx:34`; Checkliste `:42` | niedrig | Linktext um den Namen ergänzen, z. B. «Zur Leistung: Yachtreinigung» oder den Namen per `aria-label` und visuell versteckt anhängen. |
| N8 | Premium-Seiten | Leistungsnamen im Markup und in den Brotkrumen sind knapp: `Service.name` «Yacht», «Privatjet», «Luxusimmobilien». Die Übersicht trägt den vagen Titel «Premium: Reinigung für hohe Ansprüche» und die H1 «Reinigung für besondere Ansprüche». Suchvolumen ist laut 24 sehr klein, darum niedrig. | `shared/structured-data.ts:58` bis `:59` (Name = Label); `content/de/seo.ts:21`; `24-SEO-KEYWORDS.md:12` | niedrig | `Service.name` aus einem eigenen Feld (DE «Yacht- und Bootsreinigung», «Privatjet-Reinigung», «Villen- und Luxusimmobilienreinigung»). Titel der Übersicht: DE «Premium-Reinigung: Villen, Jets, Yachten», EN «Premium cleaning: villas, jets, yachts», FR «Nettoyage premium : villas, jets, yachts», IT «Pulizie premium: ville, jet, yacht». |
| N9 | 39 Symbolbilder | KI-Bilder ohne Herkunftsangabe in den Metadaten (weder IPTC `DigitalSourceType` noch C2PA gefunden). Einzelne Alt-Texte nennen reale Orte für generierte Motive, etwa «Dorf am Sarnersee in Obwalden mit Kirche». | Byte-Prüfung `public/bilder/hero-kanton-obwalden.jpg`, `hero-start.jpg`, `public/og/hero-start.jpg`; Commit `99727a8` («gpt-image-2.5»); Google Image Metadata nennt DigitalSourceType für algorithmisch erzeugte Bilder (developers.google.com/search/docs/appearance/structured-data/image-license-metadata) | niedrig (Entscheid Brandea, E80) | IPTC `DigitalSourceType = trainedAlgorithmicMedia` beim Export der Bilder setzen. Ortsnamen in Alt-Texten nur, wenn das Motiv den Ort tatsächlich zeigt, sonst «Dorf am See in der Zentralschweiz». Kein sichtbarer Hinweis nötig, wenn E80 so bleibt. |
| N10 | Umzugs- und Grundreinigungsseite | Bilddateinamen passen nicht zur Seite: Die Umzugsseite nutzt `hero-sonderreinigungen.jpg`, die Grundreinigung `hero-grundreinigung.jpg`. Das Motiv stimmt (Endreinigung in leerer Mietwohnung), nur der Name nicht. | `og:image` im gebauten HTML; Google Images: «Use filenames that are short, but descriptive.» (developers.google.com/search/docs/appearance/google-images) | niedrig | Datei in `hero-umzugsreinigung.jpg` umbenennen, Schlüssel in `shared/hero-images.ts` und `shared/images.ts` nachziehen. |
| N11 | `robots.txt` | KI-Crawler sind über `User-Agent: *` erlaubt, aber nicht als bewusste Regel dokumentiert. | `app/robots.ts:8`; Checkliste `:33` (🟢) | niedrig | Entscheidung in `robots.ts` kommentieren oder für GPTBot, ClaudeBot, Claude-SearchBot, PerplexityBot und Google-Extended eigene `allow`-Gruppen ausgeben, wie bei FIMI (`_ki-suche-optimierung/reports/R0001.md`). |
| N12 | Alle 116 | `og:locale:alternate` fehlt. Optional nach ogp.me, nützlich für Plattformen, die Sprachfassungen anbieten. | Gebautes HTML; ogp.me: «og:locale:alternate: An array of other locales this page is available in.» | niedrig | In `metaFor()` (`shared/seo.ts:43`) `alternateLocale` mit den übrigen drei `ogLocale`-Werten ausgeben. |

## Textvorschläge

Alle Vorschläge nutzen nur Angaben, die schon auf der Website stehen oder in E18, E56 und E58 belegt sind. Übersetzungen brauchen das Lektorat nach E72. Titel ohne Marke, `metaFor()` hängt sie an.

### T1 Umzugsreinigung (H1)

H1 in beiden Varianten (nur DE ändert sich, EN, FR und IT enthalten den Begriff schon):
- DE: «Umzugsreinigung und Endreinigung mit Abnahmegarantie»

Titel, **Variante A** (E28 bleibt, keine Mieter):

| Sprache | Titel | Mit «Mantena» |
|---|---|---|
| DE | Umzugsreinigung Luzern für Verwaltungen, Eigentümer | 61 Zeichen, rund 587 px |
| EN | End-of-tenancy cleaning in Lucerne for landlords | 58 Zeichen |
| FR | Nettoyage de fin de bail à Lucerne pour gérances | 58 Zeichen, rund 534 px |
| IT | Pulizia di fine locazione a Lucerna per amministrazioni | 65 Zeichen, rund 574 px |

Beschreibung DE (A): «Umzugsreinigung in Luzern und Zug mit Abnahmegarantie: Endreinigung vor der Wohnungsabgabe für Verwaltungen, Eigentümer und Unternehmen. Kostenlose Offerte nach Besichtigung.»

Titel, **Variante B** (Mieter zugelassen, E28 geändert):

| Sprache | Titel | Mit «Mantena» |
|---|---|---|
| DE | Umzugsreinigung Luzern mit Abnahmegarantie | 52 Zeichen, rund 512 px |
| EN | End-of-tenancy cleaning Lucerne, handover guarantee | 61 Zeichen, rund 579 px |
| FR | Nettoyage de fin de bail à Lucerne avec garantie | 58 Zeichen, rund 526 px |
| IT | Pulizia di fine locazione a Lucerna con garanzia | 58 Zeichen, rund 515 px |

Bei B zusätzlich die FAQ «Übernehmen Sie die Umzugsreinigung auch für Mieterinnen und Mieter?» (`content/de/leistungen.ts:562`) und «Für wen wir die Umzugsreinigung übernehmen» anpassen.

### T2 Deutsche Titel und H1 ohne Ergänzungsstrich

Nur Deutsch betroffen. Menü- und Brotkrumennamen (`label`) können bleiben.

| Seite | Titel neu | Zeichen mit «\| Mantena» | H1 neu |
|---|---|---|---|
| `/leistungen/bueroreinigung` | Büroreinigung und Praxisreinigung Luzern, Zug | 55 | Büroreinigung und Praxisreinigung |
| `/leistungen/sonderreinigungen` | Grundreinigung und Sonderreinigung Luzern, Zug | 56 | Grundreinigung und Sonderreinigung für Liegenschaften und Gewerbe |
| `/leistungen/baureinigung` | Baureinigung und Bauendreinigung Luzern, Zug | 54 | Baureinigung und Bauendreinigung für Neubau und Umbau |
| `/leistungen/fenster-und-fassadenreinigung` | Fensterreinigung und Fassadenreinigung Luzern | 55 | Fensterreinigung und Fassadenreinigung für Unternehmen und Liegenschaften |
| `/leistungen/industrie-und-hallenreinigung` | Industriereinigung und Hallenreinigung | 48 | Industriereinigung und Hallenreinigung für Produktion und Lager |
| `/leistungen/aussen-und-gruenflaechenpflege` | Gartenpflege und Umgebungspflege Luzern, Zug | 54 | Gartenpflege und Grünflächenpflege für Liegenschaften |
| `/leistungen/umzugsreinigung` | siehe T1 | | siehe T1 |

Optional und nur vor dem Launch günstig: Adresse `/leistungen/sonderreinigungen` auf `/leistungen/grundreinigung` mit 308 umstellen. Vorher die Zuordnung der alten Kundenadressen (03, Abschnitt 2b) prüfen.

### T3 Kantonsseiten: Umzugsabsicht auf die richtige Seite

Kartenziel in `kantone.ts` (DE `:90`, EN `:65`, FR `:66`, IT `:66`) von `/leistungen/sonderreinigungen` auf `/leistungen/umzugsreinigung`:

| Sprache | `title` | `text` |
|---|---|---|
| DE | Umzugsreinigung | Endreinigung vor der Wohnungsabgabe, mit Abnahmegarantie. |
| EN | End-of-tenancy cleaning | Cleaning before the flat handover, with a handover guarantee. |
| FR | Nettoyage de fin de bail | Nettoyage avant la remise du logement, avec garantie de remise. |
| IT | Pulizia di fine locazione | Pulizia prima della riconsegna dell’appartamento, con garanzia di consegna. |

FAQ Luzern (DE `:110`, EN `:85`, FR `:86`, IT `:86`):
- DE: «Ja. Die Umzugs- und Wohnungsendreinigung mit Abnahmegarantie bieten wir als eigene Leistung an: [Umzugsreinigung](/leistungen/umzugsreinigung).»
- EN: «Yes. We offer move-out and end-of-tenancy cleaning with a handover guarantee as a separate service: [end-of-tenancy cleaning](/leistungen/umzugsreinigung).»
- FR: «Oui. Le nettoyage de déménagement et de fin de bail avec garantie de remise est une prestation à part entière : [nettoyage de fin de bail](/leistungen/umzugsreinigung).»
- IT: «Sì. La pulizia di fine locazione con garanzia di consegna è un servizio a sé: [pulizia di fine locazione](/leistungen/umzugsreinigung).»

Karten Zug und Obwalden (DE `:164`, `:392`, EN `:138`, `:363`, FR und IT `:139`, `:364`): Titel auf den heutigen Seitennamen (DE «Grund- und Sonderreinigung», EN «Deep and special cleaning», FR «Nettoyages en profondeur et spéciaux», IT «Pulizie a fondo e speciali») und den Umzugsteil aus dem Text nehmen, z. B. DE «Grundreinigung beim Bürowechsel.» und «Grundreinigung für Hotels und Wohnungen.». Wo die Umzugsreinigung zur Region passt, eine eigene Karte wie oben ergänzen.

### T4 Beschreibungen mit Nutzen und Handlungsaufruf

Schlussmuster je Sprache (alle Formulierungen stehen heute schon auf der Website):
- DE: «… in Luzern, Zug und Umgebung. Kostenlose Offerte nach Besichtigung.»
- EN: «… in Lucerne, Zug and beyond. Free quote after a site visit.»
- FR: «… à Lucerne, Zoug et environs. Devis gratuit après une visite.»
- IT: «… a Lucerna, Zugo e dintorni. Offerta gratuita dopo il sopralluogo.»

Fertige deutsche Texte:
- Unterhaltsreinigung: «Unterhaltsreinigung und Treppenhausreinigung für Liegenschaften und Gewerbeflächen, mit Nachfüllservice. In Luzern, Zug und Umgebung, kostenlose Offerte nach Besichtigung.» (nur mit dem Satz aus M1)
- Büroreinigung: «Büroreinigung und Praxisreinigung, abgestimmt auf Ihre Arbeitszeiten, in Luzern, Zug und Umgebung. Kostenlose Offerte nach Besichtigung vor Ort.»
- Fensterreinigung: «Fensterreinigung und Fassadenreinigung für Unternehmen und Liegenschaften, auch mit Hochdruck, in Luzern, Zug und Umgebung. Kostenlose Offerte nach Besichtigung.»
- Industrie: «Industriereinigung und Hallenreinigung für Produktion und Lager, Maschinen und Anlagen, abgestimmt auf Ihren Betrieb. Kostenlose Offerte nach Besichtigung.»
- Gartenpflege: «Gartenpflege und Umgebungspflege für Liegenschaften: Rasen, Hecken, Beete und Plätze, einzeln oder mit der Hauswartung. Kostenlose Offerte nach Besichtigung.»
- Hauswartung: «Hauswartung in Luzern, Zug und Umgebung: Kontrollgänge, Treppenhaus, Waschküche, Haustechnik und Wohnungsübergaben. Kostenlose Offerte nach Besichtigung.»

EN, FR und IT: dieselben sechs Seiten mit dem jeweiligen Schlussmuster, die heutige Kantonsliste am Ende entfällt (betrifft 15 Beschreibungen, 6 davon Französisch).

### T5 Zitierfähiger Profilsatz für die Startseite

Unter «Auf einen Blick». Der zweite Satz ist wörtlich der freigegebene Einstieg der Über-uns-Seite (`content/<sprache>/seiten.ts`, DE `:177`). Der erste Satz erscheint nur mit `NEW_BRAND`, sonst entfällt er.
- DE: «Mantena ist die Marke der BGS - Gebäudeservice GmbH mit Sitz in Emmenbrücke LU. Seit 2006 sind wir in der Reinigung und Hauswartung tätig. Heute betreuen über 50 Mitarbeitende mehr als 120 Kunden in den Kantonen Luzern, Zug, Aargau, Nidwalden und Obwalden, auf Deutsch, Englisch, Französisch und Italienisch.»
- EN: «Mantena is the brand of BGS - Gebäudeservice GmbH, based in Emmenbrücke (canton of Lucerne). We have been working in cleaning and caretaking since 2006. Today, over 50 employees look after more than 120 clients in the cantons of Lucerne, Zug, Aargau, Nidwalden and Obwalden, in German, English, French and Italian.»
- FR: «Mantena est la marque de BGS - Gebäudeservice GmbH, dont le siège est à Emmenbrücke (LU). Depuis 2006, nous sommes actifs dans le nettoyage et la conciergerie. Aujourd’hui, plus de 50 collaboratrices et collaborateurs s’occupent de plus de 120 clients dans les cantons de Lucerne, Zoug, Argovie, Nidwald et Obwald, en allemand, anglais, français et italien.»
- IT: «Mantena è il marchio della BGS - Gebäudeservice GmbH con sede a Emmenbrücke (LU). Dal 2006 operiamo nella pulizia e nella custodia di stabili. Oggi oltre 50 collaboratrici e collaboratori seguono più di 120 clienti nei Cantoni di Lucerna, Zugo, Argovia, Nidvaldo e Obvaldo, in tedesco, inglese, francese e italiano.»

### T6 Kantonstitel

| Seite | DE | EN | IT |
|---|---|---|---|
| Luzern | bleibt | Cleaning and caretaking company in Lucerne | Impresa di pulizie nel Cantone di Lucerna |
| Zug | bleibt | Office cleaning company in Zug | Impresa di pulizie nel Cantone di Zugo |
| Aargau | bleibt | Cleaning and caretaking company in Aargau | Impresa di pulizie nel Cantone di Argovia |
| Nidwalden | Reinigungsfirma Nidwalden und Hauswartung | Cleaning and caretaking company in Nidwalden | Impresa di pulizie nel Cantone di Nidvaldo |
| Obwalden | bleibt | Cleaning company in Obwalden and Engelberg | Impresa di pulizie a Obvaldo ed Engelberg |

Alle Vorschläge liegen mit «| Mantena» bei 40 bis 54 Zeichen.

### T7 Markup-Ergänzungen (Code-Skizze)

In `shared/structured-data.ts`, `organizationJsonLd`:
```ts
...(company.premiumBrand ? { alternateName: 'BGS Gebäudeservice' } : {}), // nur mit NEW_BRAND
vatID: company.vat,                                    // 'CHE-108.687.458 MWST', sichtbar im Impressum
description: getDict(lang).pages['/'].description,     // belegter Text der Startseite
image: absolute(previewImage('/', lang).url),
geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng }, // Werte aus map.geo.admin.ch
// logo: erst mit NEW_BRAND, quadratische PNG-Fassung, mindestens 112 × 112 px
```
Neuer Knoten nur auf der Startseite je Sprache:
```ts
{ '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${siteUrl}/#website`,
  name: company.brand, ...(company.premiumBrand ? { alternateName: 'BGS Gebäudeservice' } : {}),
  url: absolute('/'), publisher: { '@id': organizationId } }
```
In `serviceJsonLd` Zeile 62 (`inLanguage`) streichen.

## Was schon Goldstandard ist

- **Eine H1 je Seite, saubere Gliederung:** 116 von 116 Seiten haben genau eine H1 als erste Überschrift, kein Sprung von H2 auf H4 (Skriptprüfung).
- **Titel und Beschreibungen eindeutig:** 0 doppelte Titel, 0 doppelte Beschreibungen, 0 doppelte H1 über alle 116 Seiten und Sprachen. Titel 18 bis 58 Zeichen mit Mantena, Beschreibungen 117 bis 158 Zeichen. Marke steht am Ende, auf der Startseite vorne, beides entspricht der Title-Link-Doku.
- **Canonical und hreflang:** jede Seite hat genau ein absolutes, selbstreferenzierendes Canonical. hreflang mit `de-CH`, `en`, `fr-CH`, `it-CH` und `x-default` auf Deutsch, auf allen 116 Seiten vollständig und gegenseitig (Skript: 0 fehlende Rückverweise). Dieselben Gruppen stehen konsistent in der Sitemap. Übersetzte Adressen, keine Umleitung nach Browsersprache (`shared/i18n.ts:7`), wie von Google empfohlen («Avoid automatically redirecting users», managing-multi-regional-sites).
- **Open Graph und X:** auf allen 116 Seiten `og:title`, `og:description`, `og:url` (= Canonical), `og:type` (Artikel als `article`), `og:site_name`, `og:locale` im Format `de_CH`, `og:image` mit Breite, Höhe und Alt-Text in der Seitensprache; X mit `summary_large_image`. 28 eigene Vorschaubilder, alle 200, JPEG, 1200 × 630, 78 bis 166 KB (Checkliste `:63` erfüllt, kein AVIF).
- **JSON-LD:** LocalBusiness einmal je Seite mit `@id`, vollständiger Adresse, Telefon im E.164-Format, `openingHoursSpecification` (deckt sich mit der sichtbaren Angabe «Mo bis Fr 8 bis 19 Uhr»), `areaServed` mit den fünf Kantonen in der Seitensprache, `knowsLanguage`, `sameAs` nur mit geprüfter NAP. Service, BreadcrumbList, BlogPosting, ItemList, AboutPage und ContactPage verweisen per `@id` auf das Unternehmen. Schema.org-Validator: 0 Fehler auf 15 Seiten aller Typen und Sprachen. Keine Bewertungen, keine Preise, keine erfundenen Personen (Checkliste `:56` erfüllt).
- **Richtiger Typ:** `LocalBusiness` statt eines erfundenen Untertyps. Das bei FIMI genutzte `CleaningService` gibt es auf schema.org nicht (schema.org/CleaningService liefert 404, Abruf 28.09.2026), nicht übernehmen.
- **Kein FAQPage- und kein HowTo-Markup:** richtig so. Google zeigt FAQ-Rich-Results seit dem 07.05.2026 nicht mehr («This feature will no longer appear in Google Search starting May 7, 2026», developers.google.com/search/updates, Eintrag vom 8. Mai 2026), HowTo seit September 2023 nicht mehr. Die FIMI-Massnahme HowTo-Schema (R0002) ist dadurch überholt.
- **FAQ im initialen HTML:** Antworten stehen in `<details>`, also ohne Klick im Quelltext (Checkliste `:28` erfüllt).
- **Bilder:** 0 Bilder ohne `alt`. Alt-Texte sind konkret, beschreibend und in allen vier Sprachen übersetzt (35 je Sprache, keine deutschen Reste). Das Hero-Bild steht als Hintergrund mit leerem Alt, dasselbe Motiv weiter unten mit Beschreibung. `next/image` mit `fill` und AVIF/WebP.
- **Crawlbarkeit:** `robots.txt` erlaubt alles und nennt die Sitemap, gesperrt wird nur per Meta und Header (richtig, damit Google das noindex sieht). Sitemap mit 116 kanonischen 200-URLs. Echte 404 für unbekannte Adressen, 410 für den gestrichenen Winterdienst, einstufige 308 für den zurückgestellten Artikel und den Schrägstrich am Ende. 0 interne Links auf Nicht-200-Ziele.
- **Keyword-Arbeit:** Hauswartung (Titel und H1 wörtlich, 23× im Text, eigener Abschnitt Pflichtenheft), Unterhaltsreinigung, Kantonsseiten mit «Reinigungsfirma» vorne im Titel und in der H1, Long-Tail-Orte aus 24 (Aarau, Baden, Zofingen, Lenzburg, Brugg, Wettingen, Baar, Sursee, Triengen, Ruswil) auf den passenden Kantonsseiten. Im Vergleich: Die Umzugsseite hat rund 1'240 Wörter im Hauptinhalt (tiptopcleaners.ch 954, mrcleaner.ch 1'883), die Hauswartung rund 1'330 (biagclean.ch 391).
- **KI-Suche:** Ratgeber mit Kasten «Kurz gesagt», sichtbarem «Stand: 26. September 2026» und passendem `dateModified`; Kennzahlen auf fast jeder Seite (seit 2006, CHF 10 Mio. Haftpflicht); KI-Crawler nicht gesperrt. Ein `llms.txt` fehlt (404), ist für Google aber ausdrücklich nicht nötig: «You don't need to create new machine readable files, AI text files, or markup» (developers.google.com/search/docs/appearance/ai-features). Kein Handlungsbedarf.
- **NAP auf der Website:** Firma, Tannhof 10, 6020 Emmenbrücke, 041 320 56 10 identisch in Footer, Kontakt, Impressum und Markup.

## Grenzen dieser Prüfung

- Der Google Rich Results Test lief nicht: Der lokale Build ist von aussen nicht erreichbar, die Produktion steht auf einem anderen Commit. Geprüft wurde mit dem Schema.org-Validator und gegen die Google-Doku. Vor dem Launch den Rich Results Test auf der Produktions-URL nachholen.
- Keine Search-Console-Daten (B11), keine Felddaten zu Core Web Vitals, keine Keyword-Daten für EN, FR und IT (M5).
- Titelbreiten sind Näherungen mit Arial 20 px. Google kürzt nach Gerätebreite.
- Die Aussage, dass Ergänzungsstriche die Zuordnung schwächen (H3), ist eine begründete Annahme, keine von Google dokumentierte Regel.
- Die X-Card-Spezifikation war nicht offiziell abrufbar (developer.x.com antwortet mit 402, docs.x.com mit 404). Geprüft wurden nur die Pflicht-Tags.
- Die Google-Zitate stammen aus WebFetch-Abrufen vom 28.09.2026 (Hilfsmodell fasst zusammen). Vor einer Veröffentlichung stichprobenartig im Browser gegenlesen.

## Kosten

DataForSEO, 28.09.2026, nacheinander: SERP «umzugsreinigung luzern» (Luzern 1003056, Desktop, Tiefe 10) 0,002 USD; OnPage Instant Pages für tiptopcleaners.ch/dienstleistungen/umzugsreinigung/luzern 0,00015 USD, mrcleaner.ch/umzugsreinigung-luzern 0,00015 USD (Antwort im Kurzformat ohne Kostenfeld, gleicher Endpunkt und Preis angenommen), biagclean.ch/hauswartung-luzern 0,00015 USD. **Summe rund 0,0025 USD.** Schema.org-Validator und Google-Doku kostenlos.
