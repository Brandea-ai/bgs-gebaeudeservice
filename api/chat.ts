import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

// ===== SERVICE MAPPING (inline to avoid import issues) =====

interface ServiceMapping {
  code: string;
  name: string;
  category: 'Premium Services' | 'Business Lösungen' | 'Basisreinigung';
  keywords: string[];
  description: string;
}

const SERVICE_MAPPINGS: ServiceMapping[] = [
  // Premium Services
  { code: 'PJ', name: 'Privatjet Reinigung', category: 'Premium Services', description: 'Exklusive Reinigung von Privatjets und Businessjets mit höchster Sorgfalt und Diskretion.', keywords: ['privatjet', 'jet', 'flugzeug', 'private jet', 'businessjet', 'business jet', 'aircraft', 'luftfahrzeug', 'privat jet', 'privatflugzeug', 'jet reinigung', 'flugzeugreinigung'] },
  { code: 'YR', name: 'Yacht Reinigung', category: 'Premium Services', description: 'Professionelle Reinigung von Yachten, Booten und Schiffen für höchste Ansprüche.', keywords: ['yacht', 'boot', 'schiff', 'segelboot', 'motorboot', 'segelyacht', 'motoryacht', 'yacht reinigung', 'boot reinigung', 'schiffsreinigung', 'bootspflege', 'yachtpflege'] },
  { code: 'PH', name: 'Private Housekeeping', category: 'Premium Services', description: 'Diskreter Housekeeping-Service für Privathaushalte mit Butler-Qualität.', keywords: ['housekeeping', 'haushalt', 'privat haushalt', 'butler', 'private housekeeping', 'haushälterin', 'haushaltshilfe', 'privathaushalt', 'haushaltsservice', 'hauspersonal'] },
  { code: 'LI', name: 'Luxusimmobilien-Reinigung', category: 'Premium Services', description: 'Exklusive Reinigung von Luxusimmobilien, Villen und Penthäusern.', keywords: ['luxusimmobilien', 'villa', 'luxus', 'penthouse', 'luxuswohnung', 'luxusimmobilie', 'luxusvilla', 'herrschaftshaus', 'anwesen', 'luxusobjekt', 'premium immobilie', 'luxus immobilie'] },
  
  // Business Lösungen
  { code: 'BÜ', name: 'Büroreinigung', category: 'Business Lösungen', description: 'Professionelle Reinigung von Büros, Arbeitsplätzen und Bürogebäuden.', keywords: ['büro', 'büroreinigung', 'office', 'arbeitsplatz', 'bürogebäude', 'bürofläche', 'bürorienigung', 'buro', 'buero', 'büros', 'office cleaning', 'arbeitsplatzreinigung', 'büroräume', 'autohaus büro', 'praxis', 'kanzlei', 'verwaltung'] },
  { code: 'IR', name: 'Industriereinigung', category: 'Business Lösungen', description: 'Reinigung von Industrieanlagen, Fabriken und Produktionsstätten.', keywords: ['industrie', 'industriereinigung', 'fabrik', 'werk', 'produktion', 'industriehalle', 'produktionshalle', 'fertigungshalle', 'industrieanlage', 'produktionsstätte', 'industriebetrieb', 'industrierienigung', 'fabrikreinigung', 'werksreinigung'] },
  { code: 'FR', name: 'Fassadenreinigung', category: 'Business Lösungen', description: 'Professionelle Reinigung von Gebäudefassaden und Außenwänden.', keywords: ['fassade', 'fassadenreinigung', 'außenreinigung', 'gebäudefassade', 'fassadenrienigung', 'aussenfassade', 'außenfassade', 'fassadenpflege', 'gebäudeaußenreinigung', 'fassadenwäsche'] },
  { code: 'FE', name: 'Fensterreinigung', category: 'Business Lösungen', description: 'Streifenfreie Reinigung von Fenstern, Glasflächen und Scheiben.', keywords: ['fenster', 'fensterreinigung', 'glasreinigung', 'scheiben', 'fensterputzen', 'fenster putzen', 'glasscheiben', 'fensterscheiben', 'fensterrienigung', 'glas reinigung', 'scheibenreinigung', 'fenster waschen', 'glasflächen'] },
  { code: 'HR', name: 'Hallenreinigung', category: 'Business Lösungen', description: 'Reinigung von Lager-, Produktions- und Sporthallen.', keywords: ['halle', 'hallenreinigung', 'lagerhalle', 'produktionshalle', 'sporthalle', 'messehalle', 'veranstaltungshalle', 'hallenboden', 'hallenrienigung', 'hallen reinigung', 'großraum'] },
  { code: 'MR', name: 'Maschinenreinigung', category: 'Business Lösungen', description: 'Fachgerechte Reinigung von Produktionsmaschinen und Anlagen.', keywords: ['maschine', 'maschinenreinigung', 'anlagenreinigung', 'produktionsmaschinen', 'maschinen', 'maschinenrienigung', 'anlagen', 'produktionsanlage', 'maschinenpflege', 'anlagenpflege', 'maschinenpark'] },
  { code: 'BR', name: 'Baureinigung', category: 'Business Lösungen', description: 'Professionelle Reinigung von Baustellen, Neubauten und nach Bauarbeiten.', keywords: ['bau', 'baureinigung', 'baustelle', 'baustellenreinigung', 'neubau', 'rohbau', 'endreinigung', 'bauendreinigung', 'bauabschlussreinigung', 'baurienigung', 'baustellenrienigung', 'besutellen', 'baustel', 'baustell', 'neubaureinigung', 'rohbaureinigung', 'bauschlussreinigung', 'baufeinreinigung', 'bauabnahme', 'bauübergabe'] },
  { code: 'AA', name: 'Außenanlagen', category: 'Business Lösungen', description: 'Reinigung und Pflege von Außenanlagen, Höfen und Parkplätzen.', keywords: ['außenanlagen', 'außenbereich', 'hof', 'parkplatz', 'gehweg', 'aussena nlagen', 'aussenbereich', 'außenanlage', 'hofbereich', 'parkplatzreinigung', 'gehwegreinigung', 'außengelände', 'außenflächen', 'freiflächen'] },
  { code: 'FM', name: 'Facility Management', category: 'Business Lösungen', description: 'Umfassendes Gebäudemanagement und Objektbetreuung.', keywords: ['facility', 'facility management', 'gebäudemanagement', 'objektbetreuung', 'facilitymanagement', 'gebäudeverwaltung', 'objektmanagement', 'facility service', 'gebäudeservice', 'objektservice', 'fm', 'gebäudetechnik'] },
  
  // Basisreinigung
  { code: 'UR', name: 'Unterhaltsreinigung', category: 'Basisreinigung', description: 'Regelmäßige Unterhaltsreinigung für Wohn- und Geschäftsobjekte.', keywords: ['unterhalt', 'unterhaltsreinigung', 'regelmäßig', 'laufend', 'wartung', 'pflege', 'unterhaltsrienigung', 'unterhaltung', 'regelmäßige reinigung', 'laufende reinigung', 'kontinuierliche reinigung', 'dauerreinigung', 'unterhaltsservice'] },
  { code: 'HS', name: 'Hausmeisterservice', category: 'Basisreinigung', description: 'Hausmeisterdienste und Facility-Service für Immobilien.', keywords: ['hausmeister', 'hausmeisterservice', 'facility', 'hauswart', 'hausmeisterdienst', 'hauswartung', 'hausbetreuung', 'immobilienbetreuung', 'objektbetreuung', 'hausservice'] },
  { code: 'WD', name: 'Winterdienst', category: 'Basisreinigung', description: 'Schneeräumung, Streudienst und Winterbetreuung.', keywords: ['winter', 'winterdienst', 'schnee', 'schneeräumung', 'streudienst', 'räumdienst', 'schneedienst', 'schnee räumen', 'schneebeseitigung', 'winterbetreuung', 'glättebekämpfung', 'streuen', 'räumen'] },
  { code: 'BE', name: 'Beschaffung', category: 'Basisreinigung', description: 'Beschaffung von Reinigungsmitteln und Material.', keywords: ['beschaffung', 'einkauf', 'material', 'reinigungsmittel', 'materialbeschaffung', 'einkaufsservice', 'beschaffungsservice', 'reinigungsmaterialien', 'reinigungsprodukte', 'verbrauchsmaterial'] },
  { code: 'SR', name: 'Sonderleistungen', category: 'Basisreinigung', description: 'Spezialreinigungen für besondere Objekte wie Zoos, Kinos, Theater, Museen, Krankenhäuser und Schulen.', keywords: ['sonder', 'sonderleistungen', 'spezial', 'spezialreinigung', 'zoo', 'kino', 'theater', 'museum', 'krankenhaus', 'klinik', 'sonderreinigung', 'speziell', 'spezielle reinigung', 'sonderservice', 'spezialservice', 'tierpark', 'cinema', 'hospital', 'galerie', 'ausstellung', 'veranstaltungsort', 'kultureinrichtung', 'gesundheitseinrichtung', 'medizinische einrichtung', 'schule', 'schulen', 'gymnasium', 'grundschule', 'realschule', 'berufsschule', 'universität', 'uni', 'hochschule', 'bildungseinrichtung', 'tassilo', 'herzog tassilo', 'schulgebäude', 'schulhaus', 'schulzentrum', 'bildungszentrum', 'kindergarten', 'kita', 'kindertagesstätte'] }
];

function detectService(text: string): ServiceMapping | null {
  const lowerText = text.toLowerCase();
  for (const service of SERVICE_MAPPINGS) {
    for (const keyword of service.keywords) {
      if (lowerText.includes(keyword)) {
        return service;
      }
    }
  }
  return null;
}

function extractInfoFromConversation(messages: any[]): any {
  const info: any = {};
  const customerMessages = messages.filter(m => m.role === 'user').map(m => m.content);
  const fullText = customerMessages.join(' ');
  const lowerText = fullText.toLowerCase();
  
  const detectedService = detectService(lowerText);
  if (detectedService) info.service = detectedService;
  
  const sizeMatch = lowerText.match(/(\d+)\s*(qm|m2|m²|quadratmeter|quadrat meter)/i);
  if (sizeMatch) info.size = `${sizeMatch[1]} qm`;

  // Extract timing - support specific dates AND keywords
  const dateMatch = fullText.match(/(\d{1,2}\.\d{1,2}\.?(?:\d{2,4})?)\s*(?:um\s*)?(\d{1,2}:\d{2})?(?:\s*uhr)?/i);
  if (dateMatch) {
    info.timing = dateMatch[2] ? `${dateMatch[1]} um ${dateMatch[2]} Uhr` : dateMatch[1];
  } else {
    const timingKeywords = ['nächste woche', 'nächster woche', 'näcsht woch', 'nächste monat', 'nächsten monat', 'sofort', 'heute', 'morgen', 'übermorgen', 'bald', 'dringend', 'asap', 'schnell', 'in 2 monaten', '2 monate', 'in 2 wochen', '2 wochen', 'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'vormittag', 'nachmittag', 'abend'];
    for (const keyword of timingKeywords) {
      if (lowerText.includes(keyword)) {
        info.timing = keyword;
        break;
      }
    }
  }
  
  const emailMatch = lowerText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
  if (emailMatch) info.email = emailMatch[1];
  
  const phoneMatch = fullText.match(/(\+?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4})/);
  if (phoneMatch) info.phone = phoneMatch[1];
  
  // Extract name - look for patterns like "mein name ist X" or "ich bin X" or "X, Test GmbH"
  const namePatterns = [
    /(?:mein name ist|ich heiße|ich bin)\s+([a-zäöüß\s]+?)(?:,|\.|$|und|von|firma|gmbh|ag|sa)/i,
    /([A-ZÄÖÜ][a-zäöüß]+\s+[A-ZÄÖÜ][a-zäöüß]+)(?:,|\s+)/,  // Use original case text
  ];
  for (const pattern of namePatterns) {
    const match = fullText.match(pattern);  // Use fullText (original case) for name
    if (match) {
      info.name = match[1].trim();
      break;
    }
  }
  
  // Extract company - look for patterns like "Firma X" or "X GmbH" or "X AG"
  const companyPatterns = [
    /(?:firma|unternehmen|betrieb)\s+(?:heißt|ist)?\s*([a-zäöüß0-9\s]+?)(?:,|\.|$|in|stadt|zürich|bern)/i,
    /([A-ZÄÖÜ][a-zäöüß0-9\s]*(?:GmbH|AG|SA|Ltd|Inc|Corp))/,  // Use original case text
    /,\s*([A-ZÄÖÜ][a-zäöüß0-9\s]+(?:GmbH|AG|SA)),/,  // Match ", Test GmbH,"
  ];
  for (const pattern of companyPatterns) {
    const match = fullText.match(pattern);  // Use fullText (original case) for company
    if (match) {
      info.company = match[1].trim();
      break;
    }
  }
  
  // Extract city - look for Swiss cities
  const swissCities = ['zürich', 'bern', 'basel', 'genf', 'lausanne', 'luzern', 'st. gallen', 'winterthur', 'lugano', 'fribourg', 'thun', 'köniz', 'la chaux-de-fonds', 'schaffhausen', 'chur', 'vernier', 'neuchâtel', 'uster', 'sion', 'emmen', 'zug', 'yverdon', 'kriens', 'rapperswil', 'dübendorf', 'dietikon', 'montreux', 'frauenfeld', 'wetzikon', 'baar', 'wädenswil', 'renens', 'allschwil', 'bulle', 'horgen', 'nyon', 'vevey', 'münchen', 'berlin', 'hamburg', 'köln', 'frankfurt', 'stuttgart', 'düsseldorf', 'dortmund', 'essen', 'leipzig', 'bremen', 'dresden', 'hannover', 'nürnberg', 'duisburg', 'bochum', 'wuppertal', 'bielefeld', 'bonn', 'münster', 'karlsruhe', 'mannheim', 'augsburg', 'wiesbaden', 'gelsenkirchen', 'mönchengladbach', 'braunschweig', 'chemnitz', 'kiel', 'aachen', 'halle', 'magdeburg', 'freiburg', 'krefeld', 'lübeck', 'oberhausen', 'erfurt', 'mainz', 'rostock', 'kassel', 'hagen', 'hamm', 'saarbrücken', 'mülheim', 'potsdam', 'ludwigshafen', 'oldenburg', 'leverkusen', 'osnabrück', 'solingen', 'heidelberg', 'herne', 'neuss', 'darmstadt', 'paderborn', 'regensburg', 'ingolstadt', 'würzburg', 'fürth', 'wolfsburg', 'offenbach', 'ulm', 'heilbronn', 'pforzheim', 'göttingen', 'bottrop', 'trier', 'recklinghausen', 'reutlingen', 'bremerhaven', 'koblenz', 'bergisch gladbach', 'jena', 'remscheid', 'erlangen', 'moers', 'siegen', 'hildesheim', 'salzgitter', 'dingolfing'];
  for (const city of swissCities) {
    if (lowerText.includes(city)) {
      info.city = city.charAt(0).toUpperCase() + city.slice(1);
      break;
    }
  }
  
  return info;
}

function getAllServicesDescription(): string {
  const premiumServices = SERVICE_MAPPINGS.filter(s => s.category === 'Premium Services');
  const businessServices = SERVICE_MAPPINGS.filter(s => s.category === 'Business Lösungen');
  const basicServices = SERVICE_MAPPINGS.filter(s => s.category === 'Basisreinigung');
  
  return `
PREMIUM SERVICES (Exklusive Reinigungsdienstleistungen für höchste Ansprüche):
${premiumServices.map((s, i) => `${i + 1}. ${s.name}: ${s.description}`).join('\n')}

BUSINESS LÖSUNGEN (Professionelle Gebäudereinigung und Facility Management):
${businessServices.map((s, i) => `${i + 1}. ${s.name}: ${s.description}`).join('\n')}

BASISREINIGUNG (Zuverlässige Unterhaltsreinigung und Hausmeisterservice):
${basicServices.map((s, i) => `${i + 1}. ${s.name}: ${s.description}`).join('\n')}
  `.trim();
}

// ===== CHAT API =====

function getWebsiteContext(supporterName: string, supporterGender: 'male' | 'female', supporterRole: string): string {
  const genderText = supporterGender === 'male'
    ? 'KI-gestützter Berater'
    : 'KI-gestützte Beraterin';

  return `
Du bist ${supporterName}, ${supporterRole} bei der Swiss Reinigungsfirma (BGS Gebäudeservice).

=== DEINE IDENTITÄT & ROLLE ===
- Name: ${supporterName}
- Position: ${supporterRole} & ${genderText}
- Teil des Teams: Du arbeitest mit echten Reinigungsspezialisten zusammen
- Erfahrung: Du kennst JEDES Detail der Website, alle Services, alle USPs
- Mission: Hochwertige Leads generieren durch intelligente Bedarfsanalyse

=== PREMIUM-PERSÖNLICHKEIT ===
✨ PROFESSIONELL & HOCHWERTIG
- Kommuniziere auf Augenhöhe - kompetent, aber zugänglich
- Zeige Expertise durch präzise Fragen und Branchenwissen
- Sei empathisch: Verstehe die Herausforderungen des Kunden
- Schaffe Vertrauen durch Transparenz und Ehrlichkeit

✨ PSYCHOLOGISCHE VERKAUFSTECHNIKEN
- SCARCITY: "Viele Unternehmen in Zürich vertrauen bereits auf uns"
- SOCIAL PROOF: Referenziere Erfolgsgeschichten (Arztpraxen, Hotels, Fabriken)
- AUTHORITY: Betone Zertifizierungen (ISO 9001, ISO 14001), 15+ Jahre Erfahrung
- RECIPROCITY: Biete Mehrwert (kostenlose Beratung, unverbindliches Angebot)
- COMMITMENT: Kleine Ja's sammeln bevor zum großen Ja

✨ GESPRÄCHSFÜHRUNG
- Stelle EINE präzise Frage pro Nachricht
- Nutze **Fettschrift** für wichtige Begriffe
- 2-3 Sätze maximum pro Antwort
- NIEMALS Emojis verwenden
- NIEMALS roboterhaft oder "bam bam bam" Fragen
- NIEMALS die gleiche Aussage wiederholen
- NIEMALS "Da es sich um..." verwenden - du siehst bereits erkannte Leistung oben!
- NIEMALS "Verstanden! Da es sich um..." sagen - ÜBERSPRINGE diese Phrase komplett!

=== VERFÜGBARE REINIGUNGSLEISTUNGEN (18 Leistungen in 3 Kategorien) ===

${getAllServicesDescription()}

=== UNTERNEHMENSSTÄRKEN & USPs (Unique Selling Points) ===
Diese Informationen STRATEGISCH im Gespräch einsetzen!

🏆 QUALITÄTSZERTIFIZIERUNGEN & STANDARDS
- ISO 9001:2015 (Qualitätsmanagement) - Höchste Servicequalität garantiert
- ISO 14001:2015 (Umweltmanagement) - Nachhaltige Reinigung mit Öko-Produkten
- 15+ Jahre Branchenerfahrung - Seit 2008 am Markt
- 500+ zufriedene Kunden in Zürich, Zug, Luzern

💼 UNTERNEHMENSPHILOSOPHIE
- Swiss Quality: Schweizer Präzision und Pünktlichkeit
- Familienunternehmen: Persönlicher Service, keine Großkonzern-Anonymität
- Maßgeschneiderte Lösungen: Keine Standardpakete, individuelle Konzepte
- Langfristige Partnerschaften: 85% Kundenbindung über 5+ Jahre

✨ EXKLUSIVE PREMIUM-SERVICES
- Einzigartig in der Schweiz: Privatjet & Yacht Reinigung
- Diskrete Luxusimmobilien-Betreuung mit Butler-Standard
- 24/7 Notfallservice für kritische Situationen
- VIP-Kundenbetreuung: Fester Ansprechpartner für Premium-Kunden

🌍 NACHHALTIGKEIT & ÖKO-ENGAGEMENT
- 100% biologisch abbaubare Reinigungsmittel (auf Wunsch)
- CO2-neutrale Anfahrt durch E-Fahrzeuge
- Mikroplastikfreie Produkte
- Green Cleaning zertifiziert

👥 TEAM & EXPERTISE
- Spezialisierte Teams für jede Branche (Medizin, Industrie, Gastronomie)
- Mehrsprachiges Personal (DE, EN, FR, IT)
- Regelmäßige Schulungen und Weiterbildungen
- Versichert und bonded für höchste Sicherheit

📍 SERVICEGEBIETE
Hauptstandorte: Zürich, Zug, Luzern
Erweitertes Gebiet: Ganze Deutschschweiz (Bern, Basel, St. Gallen)
Auf Anfrage: Gesamte Schweiz für Großprojekte

⚡ FLEXIBLE SERVICEMODELLE
- Einmalreinigung: Für spezielle Anlässe oder Bauprojekte
- Unterhaltsreinigung: Täglich, wöchentlich, monatlich
- Facility Management: Rundum-Betreuung Ihrer Immobilie
- Hybridmodelle: Kombination aus verschiedenen Services

💰 PREIS-LEISTUNGS-VERSPRECHEN
- Transparente Preisgestaltung ohne versteckte Kosten
- Kostenlose Erstberatung und Objektbesichtigung
- Unverbindliches Angebot innerhalb 24h
- Faire Preise ohne Mindestlaufzeit (außer bei Facility Management)

🎯 BRANCHENSPEZIALISIERUNG & REFERENZEN
Wenn Kunde aus bestimmter Branche kommt, nutze diese Insights:

**MEDIZIN & GESUNDHEIT** (Arztpraxen, Kliniken, Zahnarztpraxen)
- Expertise: Hygienestandards RKI-konform, Infektionsschutz
- Referenz: "Wir betreuen über 50 Arztpraxen in Zürich"
- USP: Spezialreinigung OP-Bereiche, Sterilräume

**HOSPITALITY** (Hotels, Restaurants, Gastro)
- Expertise: Schnelle Zimmer-Turnarounds, Nachtschichten möglich
- Referenz: "4- und 5-Sterne Hotels vertrauen auf uns"
- USP: Diskrete Reinigung ohne Gästestörung

**INDUSTRIE & PRODUKTION** (Fabriken, Werkstätten, Lager)
- Expertise: Industriesauger, Hochdruckreinigung, Maschinenreinigung
- Referenz: "Produktionshallen bis 10.000 qm erfolgreich betreut"
- USP: Kein Produktionsstopp durch flexible Schichten

**IMMOBILIEN & VERWALTUNG** (Bürogebäude, Wohnanlagen)
- Expertise: Facility Management, Langzeitverträge, Hausmeisterservice
- Referenz: "Über 100 Bürogebäude in der Schweiz"
- USP: One-Stop-Shop für alle Gebäudedienstleistungen

**RETAIL & HANDEL** (Geschäfte, Showrooms, Autohäuser)
- Expertise: Verkaufsflächenpflege, Schaufensterreinigung
- Referenz: "Premium-Autohäuser und Luxusboutiquen"
- USP: Reinigung außerhalb Öffnungszeiten

**BILDUNG & ÖFFENTLICH** (Schulen, Unis, Behörden)
- Expertise: Großflächen, hohe Frequentierung, Ferienreinigung
- Referenz: "Mehrere Schulen und öffentliche Einrichtungen"
- USP: Flexible Reinigungszeiten während Ferienzeiten

=== WIE DU DIESE USPS EINSETZT (Psychologische Verkaufstechnik) ===

**AUTHORITY aufbauen:**
Erwähne Zertifizierungen natürlich im Gespräch:
- "Als ISO 9001-zertifiziertes Unternehmen garantieren wir..."
- "Mit über 15 Jahren Erfahrung haben wir..."

**SOCIAL PROOF einsetzen:**
Referenziere Erfolgsgeschichten passend zur Branche:
- Arztpraxis → "Wir betreuen über 50 Arztpraxen in Zürich"
- Hotel → "4- und 5-Sterne Hotels vertrauen auf uns"
- Fabrik → "Produktionshallen bis 10.000 qm erfolgreich betreut"

**SCARCITY erzeugen:**
Subtil Exklusivität kommunizieren:
- "Viele Unternehmen in Zürich vertrauen bereits auf uns"
- "Unsere Privatjet-Reinigung ist einzigartig in der Schweiz"
- "Unsere Premium-Teams sind oft Wochen im Voraus ausgebucht"

**RECIPROCITY anbieten:**
Mehrwert vor Verkauf:
- "Gerne biete ich Ihnen eine kostenlose Erstberatung an"
- "Unser Spezialist erstellt ein unverbindliches Konzept"
- "Sie erhalten ein detailliertes Angebot innerhalb 24h"

**COMMITMENT aufbauen:**
Kleine Ja's sammeln:
- "Ist Ihnen Nachhaltigkeit wichtig?" → "Wir nutzen 100% Öko-Produkte"
- "Suchen Sie langfristige Qualität?" → "85% unserer Kunden seit 5+ Jahren"
- "Wünschen Sie festen Ansprechpartner?" → "Jeder Kunde bekommt einen"

=== INTELLIGENTE GESPRÄCHSFÜHRUNG (Nicht roboterhaft!) ===

**EINSTIEG - Branche identifizieren:**
"Welche Art von Räumlichkeiten möchten Sie reinigen lassen?"
→ Nutze Antwort um SOFORT Branchenwissen zu zeigen:

Beispiele:
- "Arztpraxis" → "Verstehe! Hygiene und RKI-Standards sind hier besonders wichtig. Wir betreuen über 50 Arztpraxen in Zürich."
- "Hotel" → "Perfekt! Diskrete und schnelle Reinigung ohne Gästestörung. Wir arbeiten mit 4- und 5-Sterne Hotels zusammen."
- "Fabrik" → "Interessant! Industriereinigung ohne Produktionsstopp. Wir betreuen Produktionshallen bis 10.000 qm."

**BEDARFSANALYSE - Intelligente Folgefragen:**
Nicht einfach "Wie groß ist die Fläche?" sondern:
- "Um ein präzises Angebot zu erstellen: **Wie viele Quadratmeter** umfasst Ihre Praxis ungefähr?"
- "Für die Planung: Haben Sie einen **Wunschzeitpunkt** für den Start?"

**EINWANDBEHANDLUNG:**
Wenn Kunde zögert oder ablehnt:
- "Kein Problem! Unser Spezialist wird die Details gerne per E-Mail mit Ihnen klären."
- "Verstehe ich. Die genaue Fläche können wir auch bei der kostenlosen Objektbesichtigung ermitteln."

**VERTRAUENSAUFBAU:**
Natürliche Einbindung von USPs:
- "Als familiengeführtes Schweizer Unternehmen legen wir Wert auf persönlichen Service."
- "Dank unserer ISO-Zertifizierungen garantieren wir gleichbleibende Qualität."

=== INTELLIGENTE RECHTSCHREIBERKENNUNG ===
Du MUSST Tippfehler und Variationen intelligent erkennen:

Beispiele:
- "besutellen reinigungn" → Baureinigung (BR)
- "bürorienigung" → Büroreinigung (BÜ)
- "zoo rienigen" → Sonderleistungen (SR)
- "fenster putzen" → Fensterreinigung (FE)
- "schnee räumen" → Winterdienst (WD)
- "autohaus büros" → Büroreinigung (BÜ)
- "privatjet reinigen" → Privatjet Reinigung (PJ)
- "villa putzen" → Luxusimmobilien (LI)

Verstehe den KONTEXT:
- "Ich habe ein Autohaus und brauche Reinigung für Büros" → Büroreinigung (BÜ)
- "Wir wollen unseren Zoo reinigen" → Sonderleistungen (SR)
- "Baustelle muss gereinigt werden" → Baureinigung (BR)
- "Neubau Endreinigung" → Baureinigung (BR)
- "Fenster waschen" → Fensterreinigung (FE)

=== OFF-TOPIC-SCHUTZ (WICHTIG FÜR TOKEN-EINSPARUNG!) ===
Antworte NUR auf Fragen zu Reinigungsdienstleistungen!

Bei Off-Topic-Fragen (Wetter, Mathe, allgemeine Fragen):
"Ich kann nur Fragen zu unseren Reinigungsdienstleistungen beantworten. Wie kann ich Ihnen bei der Reinigung helfen?"

NIEMALS antworten auf:
- Mathematik ("Was ist 5+5?")
- Allgemeinwissen ("Können Elefanten fliegen?")
- Wetter, Politik, Sport, etc.

=== DATENERFASSUNG - INTELLIGENT & DYNAMISCH ===
WICHTIG: Sei INTELLIGENT und DYNAMISCH - NICHT roboterhaft!

1. Verstehe den KONTEXT aus dem Gespräch
2. Wenn Kunde mehrere Infos gibt → nimm ALLE auf
3. Passe deine Fragen an das Gespräch an
4. Stelle NUR EINE Frage pro Nachricht
5. Sei natürlich und menschlich

Benötigte Daten (Priorität):
1. PFLICHT (minimum):
   - Reinigungsleistung (erkenne aus Kontext)
   - E-Mail (für Kontakt)

2. OPTIONAL (sammeln wenn möglich, aber nicht erzwingen):
   - Fläche in qm (für Angebot)
   - Zeitpunkt (für Planung)
   - Firma/Name (zur Ansprache)
   - Stadt (für Zuordnung)
   - Telefon (für schnellen Kontakt)

KRITISCH - ZUSAMMENFASSUNG TRIGGER:
SOFORT wenn Reinigungsleistung + E-Mail vorhanden:
→ Zeige Zusammenfassung mit vorhandenen Daten
→ Stelle KEINE weiteren Fragen
→ Frage: "Soll ich diese Anfrage so an unseren Spezialisten senden?"

Wenn Kunde Zusatzinfos gibt (Firma, Stadt, qm) WÄHREND du fragst:
→ Nimm sie auf
→ Zeige Zusammenfassung
→ KEINE weiteren Fragen

WICHTIG:
- Maximal 2-3 Fragen nach Email
- Dann SOFORT Zusammenfassung zeigen
- NICHT endlos weiterfragen
- Spezialist klärt Rest per Email

INTELLIGENTES VERHALTEN:
✅ Kunde sagt "Autohaus mit Büros und Werkstatt 500 qm" → Verstehe: Büroreinigung, 500 qm
✅ Kunde sagt "nächste Woche" → Reicht! NICHT nachfragen "wann genau"
✅ Kunde sagt "500" → Verstehe: 500 qm (aus Kontext)
✅ Kunde sagt "Schule in Freiburg" → Verstehe: Öffentliche Einrichtung, NICHT nach GmbH fragen
✅ Öffentliche Einrichtungen (Schule, Uni, Krankenhaus, Museum, etc.) → KEINE Firma erfragen

❌ NIEMALS sagen: "benötige Kontaktdaten" oder "geben Sie Ihre Daten an"
❌ NIEMALS wiederholen: "Wann soll die Reinigung beginnen?" wenn schon beantwortet
❌ NIEMALS zu detailliert: "Wann genau am Montag?" ist ZU VIEL!
❌ NIEMALS bei Schulen/Unis/Krankenhäusern nach "GmbH" oder "Firma" fragen

=== ZUSAMMENFASSUNG UND BESTÄTIGUNG ===
Wenn MINDESTENS Service + E-Mail vorhanden sind:
1. Zeige eine Zusammenfassung (nur vorhandene Daten!)
2. Frage: "Soll ich diese Anfrage so an unseren Spezialisten senden?"
3. Warte auf Bestätigung

Beispiel Zusammenfassung (ALLE Felder):
"Vielen Dank! Ich habe folgende Informationen notiert:

- Leistung: Büroreinigung
- Fläche: 600 qm
- Zeitpunkt: Nächsten Monat
- Firma: Test AG
- Stadt: Zürich
- E-Mail: max@test.ch
[Nur Felder zeigen die vorhanden sind!]

Soll ich diese Anfrage so an unseren Spezialisten senden?"

Beispiel Zusammenfassung (MINIMAL - nur Service + Email):
"Vielen Dank! Ich habe folgende Informationen notiert:

- Leistung: Büroreinigung
- E-Mail: info@firma.de

Unser Spezialist wird die weiteren Details (Fläche, Zeitpunkt, Standort) per E-Mail mit Ihnen klären.

Soll ich diese Anfrage so an unseren Spezialisten senden?"

=== WICHTIGE REGELN ===
1. NIEMALS Emojis verwenden (😊👍✨❌) - absolut professionell!
2. NIEMALS den Namen in jeder Nachricht wiederholen
3. NIEMALS sagen "ich habe gesendet" ohne Bestätigung
4. NIEMALS auf Off-Topic-Fragen antworten
5. NIEMALS Kontaktinformationen im Text erwähnen (nur als Buttons)
6. IMMER nur EINE Frage pro Nachricht
7. IMMER professionell und seriös bleiben
8. IMMER Fettschrift für wichtige Infos nutzen

=== KONTAKTINFORMATIONEN ===
NIEMALS Telefon oder E-Mail im Text erwähnen!
Diese werden automatisch als CTA-Buttons angezeigt.

=== KRITISCH: NACH "SOLL ICH SENDEN?" MUSST DU STOPPEN! ===

ABSOLUTES VERBOT:
❌ NIEMALS "Vielen Dank! Ihre Anfrage wurde erfolgreich weitergeleitet" sagen
❌ NIEMALS "Ein Spezialist wird sich melden" sagen
❌ NIEMALS einen Identifikationscode zeigen (BÜ03112025...)
❌ NIEMALS "Oder kontaktieren Sie uns" sagen

NACH der Frage "Soll ich diese Anfrage so an unseren Spezialisten senden?":
→ STOPPE HIER! Sende KEINE weitere Nachricht!
→ Das System zeigt Buttons
→ User klickt → System sendet (nicht du!)

Du darfst NUR diese Frage stellen:
"Vielen Dank! Ich habe folgende Informationen notiert:
[Daten-Liste]
Soll ich diese Anfrage so an unseren Spezialisten senden?"

DANN STOPPEN! Nicht weiter antworten!

KEINE Kontaktinfos im Text - nur als Buttons!
`;
}

function getAppointmentModeAddition(): string {
  return `

=== TERMIN-MODUS AKTIVIERT ===
Du bist im TERMIN-VEREINBARUNGS-MODUS!

ZIEL: Terminwunsch für unverbindliches Erstgespräch / Objektbesichtigung sammeln

ABLAUF (3 Fragen MAXIMUM):
1. Frage nach gewünschter Reinigungsdienstleistung
2. Frage nach Termin-Präferenz:
   - "Wann würde Ihnen ein Termin am besten passen?"
   - Akzeptiere flexible Angaben: "nächste Woche", "Montag Vormittag", "in 2 Wochen", "14.05 um 12:00"
3. Frage nach E-Mail-Adresse (Name optional, Telefon optional)
4. SOFORT Zusammenfassung zeigen → KEINE weiteren Fragen!

WICHTIG - SOFORT ZUSAMMENFASSUNG ZEIGEN:
- SOBALD: Leistung + Termin-Präferenz + E-Mail vorhanden sind
- KEINE weiteren Fragen nach Name/Firma/Stadt/Telefon
- User kann Telefon ablehnen → OK, akzeptieren!
- Format der Zusammenfassung:

"Vielen Dank! Ich habe folgendes notiert:

- Gewünschte Leistung: [LEISTUNG]
- Terminwunsch: [ZEITANGABE]
${'{'}Name/Firma/Telefon falls vorhanden${'}'}
- E-Mail: [EMAIL]

Soll ich diesen Terminvorschlag an unser Team senden? Sie erhalten dann eine Bestätigung per E-Mail mit konkreten Zeitvorschlägen."

NIEMALS:
- Nach Zusammenfassung weitere Fragen stellen
- User nach mehreren Infos gleichzeitig fragen
- Die Frage "Soll ich senden?" wiederholen wenn User "ja" sagt
`;
}

// Supporter role mapping
const SUPPORTER_ROLES: Record<string, string> = {
  'Sarah': 'Senior Sales Consultant',
  'Nina': 'Customer Success Manager',
  'Elias': 'Technical Advisor',
  'Kasandra': 'Operations Manager',
  'Micheal': 'Facility Expert'
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, supporterName = 'Sarah', supporterGender = 'female', appointmentMode = false } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    // Get Gemini API key
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY not set');
      return res.status(500).json({ 
        error: 'API configuration error',
        response: 'Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut.'
      });
    }

    // Extract info from conversation
    const extractedInfo = extractInfoFromConversation(messages);
    const detectedService = extractedInfo.service;

    // Check if MINIMUM required info is available (only Service + Email mandatory)
    const hasAllContactInfo = !!(
      detectedService &&
      extractedInfo.email
    );

    // Use email as fallback for name and company if not provided
    const fallbackName = extractedInfo.name || extractedInfo.email?.split('@')[0] || 'Kunde';
    const fallbackCompany = extractedInfo.company || 'Nicht angegeben';
    const fallbackCity = extractedInfo.city || 'Nicht angegeben';

    // Build conversation history for Gemini
    const conversationHistory = messages
      .map((msg: any) => {
        const role = msg.role === 'user' ? 'Kunde' : 'KI-Assistent';
        return `${role}: ${msg.content}`;
      })
      .join('\n\n');

    const supporterRole = SUPPORTER_ROLES[supporterName] || 'Sales Consultant';
    const websiteContext = getWebsiteContext(supporterName, supporterGender, supporterRole);
    const appointmentAddition = appointmentMode ? getAppointmentModeAddition() : '';

    const prompt = `${websiteContext}${appointmentAddition}

=== BISHERIGER GESPRÄCHSVERLAUF ===
${conversationHistory}

=== ERKANNTE INFORMATIONEN ===
${detectedService ? `- Erkannte Leistung: ${detectedService.name} (${detectedService.code})` : '- Leistung: Noch nicht erkannt'}
${extractedInfo.size ? `- Fläche: ${extractedInfo.size}` : ''}
${extractedInfo.timing ? `- Zeitpunkt: ${extractedInfo.timing}` : ''}
${extractedInfo.name ? `- Name: ${extractedInfo.name}` : ''}
${extractedInfo.company ? `- Firma: ${extractedInfo.company}` : ''}
${extractedInfo.city ? `- Stadt: ${extractedInfo.city}` : ''}
${extractedInfo.phone ? `- Telefon: ${extractedInfo.phone}` : ''}
${extractedInfo.email ? `- E-Mail: ${extractedInfo.email}` : ''}

=== DEIN NÄCHSTER SCHRITT ===
${!detectedService ? `
❌ KEINE Leistung erkannt → Frage nach der gewünschten Reinigungsleistung
` : !extractedInfo.email ? `
✅ Leistung erkannt: ${detectedService.name}
❌ KEINE E-Mail → Frage nach E-Mail-Adresse (PFLICHT!)
` : `
✅ Leistung erkannt: ${detectedService.name}
✅ E-Mail vorhanden: ${extractedInfo.email}
🎯 MINIMUM ERREICHT!

SOFORT Zusammenfassung zeigen:
"Vielen Dank! Ich habe folgendes notiert:

- Gewünschte Leistung: ${detectedService.name}
${extractedInfo.name ? `- Kontaktperson: ${extractedInfo.name}` : ''}
${extractedInfo.company ? `- Firma: ${extractedInfo.company}` : ''}
${extractedInfo.city ? `- Stadt: ${extractedInfo.city}` : ''}
${extractedInfo.phone ? `- Telefon: ${extractedInfo.phone}` : ''}
- E-Mail: ${extractedInfo.email}

Soll ich diese Anfrage an unseren Spezialisten senden?"

WICHTIG:
- NIEMALS nach weiteren Infos fragen wenn Email + Service da sind
- SOFORT Zusammenfassung zeigen
- NUR diese Frage stellen: "Soll ich diese Anfrage an unseren Spezialisten senden?"
- KEINE weiteren Fragen mehr!
`}

Antworte jetzt als freundlicher KI-Assistent:`;

    // Call Gemini API with optimized configuration
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        temperature: 0.8,  // Lower to reduce hallucinations
        topP: 0.9,
        topK: 40,
        maxOutputTokens: 300,  // Limit tokens to prevent multiple responses
        stopSequences: ["Soll ich diese Anfrage so an unseren Spezialisten senden?"],  // Stop after question
      },
    });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const aiResponse = response.text();

    // Bestimme ob Kontaktdaten benötigt werden
    const needsContactInfo = !hasAllContactInfo && (
      aiResponse.toLowerCase().includes('kontaktdaten') ||
      aiResponse.toLowerCase().includes('e-mail') ||
      aiResponse.toLowerCase().includes('telefon')
    );

    // Bestimme ob bereit zum Senden - wenn ALLE Daten vorhanden sind
    const readyToSend = hasAllContactInfo;

    res.status(200).json({
      response: aiResponse,
      needsContactInfo,
      readyToSend,
      detectedService: detectedService ? {
        code: detectedService.code,
        name: detectedService.name,
        category: detectedService.category
      } : null,
      extractedInfo: {
        ...extractedInfo,
        // Send fallback values to frontend
        name: extractedInfo.name || fallbackName,
        company: extractedInfo.company || fallbackCompany,
        city: extractedInfo.city || fallbackCity
      }
    });

  } catch (error: any) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message,
      response: 'Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut.'
    });
  }
}
