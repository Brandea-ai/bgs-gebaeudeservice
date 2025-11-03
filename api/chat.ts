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
  { code: 'SR', name: 'Sonderleistungen', category: 'Basisreinigung', description: 'Spezialreinigungen für besondere Objekte wie Zoos, Kinos, Theater, Museen und Krankenhäuser.', keywords: ['sonder', 'sonderleistungen', 'spezial', 'spezialreinigung', 'zoo', 'kino', 'theater', 'museum', 'krankenhaus', 'klinik', 'sonderreinigung', 'speziell', 'spezielle reinigung', 'sonderservice', 'spezialservice', 'tierpark', 'cinema', 'hospital', 'galerie', 'ausstellung', 'veranstaltungsort', 'kultureinrichtung', 'gesundheitseinrichtung', 'medizinische einrichtung'] }
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
  
  const timingKeywords = ['nächste woche', 'nächster woche', 'näcsht woch', 'nächste monat', 'sofort', 'heute', 'morgen', 'bald', 'dringend', 'asap', 'schnell', 'in 2 monaten', '2 monate'];
  for (const keyword of timingKeywords) {
    if (lowerText.includes(keyword)) {
      info.timing = keyword;
      break;
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

const WEBSITE_CONTEXT = `
Du bist ein freundlicher, natürlicher KI-Assistent der Swiss Reinigungsfirma (BGS Gebäudeservice).

=== WICHTIG - INTELLIGENTER GESPRÄCHSFLUSS ===
- Sei INTELLIGENT und DYNAMISCH - verstehe den Kontext!
- NICHT roboterhaft - NICHT "bam bam bam" Fragen
- Passe dich dem Kunden an - natürlich und menschlich
- Stelle präzise Fragen wie ein erfahrener Berater
- Max. 2-3 kurze, prägnante Sätze pro Antwort
- Nutze Fettschrift für wichtige Infos
- NIEMALS Emojis verwenden - absolut professionell bleiben
- NIEMALS "Oder kontaktieren Sie uns direkt" sagen!

=== VERFÜGBARE REINIGUNGSLEISTUNGEN (18 Leistungen in 3 Kategorien) ===

${getAllServicesDescription()}

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

Benötigte Daten:
- Reinigungsleistung (erkenne aus Kontext)
- Fläche in qm (ungefähr reicht!)
- Zeitpunkt ("nächste Woche" reicht! NICHT "wann genau am Montag?")
- Name
- Firma
- Stadt
- Telefon
- E-Mail

INTELLIGENTES VERHALTEN:
✅ Kunde sagt "Autohaus mit Büros und Werkstatt 500 qm" → Verstehe: Büroreinigung, 500 qm
✅ Kunde sagt "nächste Woche" → Reicht! NICHT nachfragen "wann genau"
✅ Kunde sagt "500" → Verstehe: 500 qm (aus Kontext)

❌ NIEMALS sagen: "benötige Kontaktdaten" oder "geben Sie Ihre Daten an"
❌ NIEMALS wiederholen: "Wann soll die Reinigung beginnen?" wenn schon beantwortet
❌ NIEMALS zu detailliert: "Wann genau am Montag?" ist ZU VIEL!

=== ZUSAMMENFASSUNG UND BESTÄTIGUNG ===
Wenn ALLE 6 Kontaktdaten vorhanden sind:
1. Zeige eine kurze Zusammenfassung
2. Frage: "Soll ich diese Anfrage so an unseren Spezialisten senden?"
3. Warte auf Bestätigung

Beispiel Zusammenfassung:
"Vielen Dank! Ich habe folgende Informationen notiert:

- Leistung: Maschinenreinigung
- Fläche: 1000 qm
- Zeitpunkt: In 2 Monaten
- Name: Max Mustermann
- Firma: Test AG
- Stadt: Zürich
- Telefon: +41 44 123 45 67
- E-Mail: max@test.ch

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

=== NACH ERFOLGREICHER WEITERLEITUNG ===
Nach "ja" zur Weiterleitung:
"Vielen Dank! Ihre Anfrage wurde erfolgreich weitergeleitet.

**Identifikationscode**: [CODE]

Ein Spezialist wird sich innerhalb von 12 Stunden (werktags) bei Ihnen melden."

KEINE Kontaktinfos im Text - nur als Buttons!
`;

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
    const { messages } = req.body;

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

    // Check if all contact info is available (including service and timing)
    const hasAllContactInfo = !!(
      detectedService &&
      extractedInfo.size &&
      extractedInfo.timing &&
      extractedInfo.name &&
      extractedInfo.company &&
      extractedInfo.city &&
      extractedInfo.phone &&
      extractedInfo.email
    );

    // Build conversation history for Gemini
    const conversationHistory = messages
      .map((msg: any) => {
        const role = msg.role === 'user' ? 'Kunde' : 'KI-Assistent';
        return `${role}: ${msg.content}`;
      })
      .join('\n\n');

    const prompt = `${WEBSITE_CONTEXT}

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
- Erkenne die gewünschte Reinigungsleistung aus dem Kontext
- Frage nach der Fläche
` : !extractedInfo.size ? `
- Frage nach der Fläche (in qm)
` : !extractedInfo.timing ? `
- Frage nach dem gewünschten Zeitpunkt
` : !extractedInfo.name ? `
- Frage nach dem Namen (nur "Wie ist Ihr Name?")
` : !extractedInfo.company ? `
- Frage nach dem Firmennamen
` : !extractedInfo.city ? `
- Frage nach der Stadt
` : !extractedInfo.phone ? `
- Frage nach der Telefonnummer
` : !extractedInfo.email ? `
- Frage nach der E-Mail-Adresse
` : `
- Zeige eine kurze Zusammenfassung aller Informationen
- Frage: "Soll ich diese Anfrage so an unseren Spezialisten senden?"
- Setze readyToSend: true
`}

Antworte jetzt als freundlicher KI-Assistent:`;

    // Call Gemini API with optimized configuration
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash-exp',
      generationConfig: {
        temperature: 1.2,  // Höher für natürlichere, menschlichere Antworten
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 500,  // Mehr Tokens für vollständige Antworten
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
      extractedInfo
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
