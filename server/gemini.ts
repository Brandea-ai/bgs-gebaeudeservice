/**
 * SWISS REINIGUNGSFIRMA - PROFESSIONAL SALES CHATBOT
 *
 * Premium AI Sales Consultant mit:
 * - 9 Pflicht-Datenpunkte (strukturierte Lead-Qualifizierung)
 * - 5-Phasen Sales-Prozess
 * - Branchen-spezifische Empfehlungen mit Referenznummern
 * - Timeline-Handling (1h Rückruf vs. Termin)
 * - Respekt-Regel für abgelehnte Daten
 */

import { company } from '../shared/company';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  userInfo?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    city?: string;
    service?: string;
  };
  supporterName?: string;
  supporterGender?: 'male' | 'female';
  appointmentMode?: boolean;
}

interface ExtractedInfo {
  // 9 PFLICHT-DATENPUNKTE
  name?: string;                    // 1. Vorname + Nachname
  company?: string;                  // 2. Firmenname ODER "Privatperson"
  industry?: string;                 // 3. Branche/Objekttyp
  service?: { code: string; name: string }; // 4. Service-Bedarf
  size?: string;                     // 5. Größenordnung (m²/Räume/Specs)
  frequency?: string;                // 6. Frequenz
  city?: string;                     // 7. Standort
  timing?: string;                   // 8. Timeline (Start)
  callback_preference?: string;      // 8b. Timeline (1h Rückruf vs. Termin)
  email?: string;                    // 9a. Kontakt (E-Mail)
  phone?: string;                    // 9b. Kontakt (Telefon)

  // ZUSÄTZLICHE QUALIFIKATIONSDATEN
  employees?: string;
  areas?: string;
  special_requirements?: string;

  // RESPEKT-REGEL: Explizit abgelehnte Felder
  declined_fields?: string[];
}

interface ChatResponse {
  unavailable?: boolean;
  response: string;
  extractedInfo: ExtractedInfo;
  detectedService?: { code: string; name: string };
  readyToSend: boolean;
  missingFields: string[];
  conversationPhase: number;
}

// ============================================================================
// SERVICE DATABASE - 17 Services mit Referenznummern
// ============================================================================

const SERVICE_DATABASE = {
  premium: {
    privatjet: {
      code: 'PJ',
      name: 'Privatjet-Reinigung',
      keywords: ['privatjet', 'jet', 'flugzeug', 'aircraft', 'aviation', 'private plane', 'gulfstream', 'cessna', 'bombardier']
    },
    yacht: {
      code: 'YC',
      name: 'Yacht-Reinigung',
      keywords: ['yacht', 'boot', 'schiff', 'segelboot', 'motorboot', 'vessel', 'segelschiff', 'katamaran']
    },
    housekeeping: {
      code: 'PH',
      name: 'Private Housekeeping',
      keywords: ['housekeeping', 'haushalt', 'villa', 'penthouse', 'privathaushalt', 'private home', 'wohnung', 'eigenheim']
    },
    luxusimmobilien: {
      code: 'LI',
      name: 'Luxusimmobilien',
      keywords: ['luxus', 'luxusimmobilie', 'premium', 'villa', 'penthouse', 'luxury property', 'chalet']
    }
  },
  business: {
    bueroreinigung: {
      code: 'BR',
      name: 'Büroreinigung',
      keywords: ['büro', 'office', 'arbeitsplatz', 'geschäft', 'bürogebäude', 'coworking', 'arbeiten', 'schreibtisch', 'verwaltung']
    },
    industriereinigung: {
      code: 'IR',
      name: 'Industriereinigung',
      keywords: ['industrie', 'fabrik', 'produktion', 'werk', 'fertigung', 'manufacturing', 'produktionsstätte']
    },
    fassadenreinigung: {
      code: 'FR',
      name: 'Fassadenreinigung',
      keywords: ['fassade', 'außenreinigung', 'gebäudereinigung außen', 'facade', 'außenwand', 'hauswand']
    },
    fensterreinigung: {
      code: 'FE',
      name: 'Fensterreinigung',
      keywords: ['fenster', 'glas', 'scheiben', 'windows', 'glasreinigung', 'glasfassade']
    },
    hallenreinigung: {
      code: 'HR',
      name: 'Hallenreinigung',
      keywords: ['halle', 'lagerhalle', 'logistik', 'warehouse', 'lager', 'lagerfläche']
    },
    maschinenreinigung: {
      code: 'MR',
      name: 'Maschinenreinigung',
      keywords: ['maschine', 'anlage', 'produktionsanlage', 'cnc', 'equipment', 'maschinenhalle']
    },
    baureinigung: {
      code: 'BA',
      name: 'Baureinigung',
      keywords: ['bau', 'baustelle', 'bauendreinigung', 'construction', 'renovierung', 'neubau', 'umbau']
    },
    aussenanlagen: {
      code: 'AA',
      name: 'Außenanlagenpflege',
      keywords: ['außenanlage', 'garten', 'grünfläche', 'hof', 'outdoor', 'grounds', 'außenbereich']
    },
    facilitymanagement: {
      code: 'FM',
      name: 'Facility Management',
      keywords: ['facility', 'gebäudemanagement', 'hausverwaltung', 'property management', 'komplettservice']
    }
  },
  basis: {
    unterhaltsreinigung: {
      code: 'UR',
      name: 'Unterhaltsreinigung',
      keywords: ['unterhalt', 'regelmäßig', 'laufend', 'maintenance', 'routine cleaning', 'toilette', 'sanitär', 'cafeteria', 'küche', 'bibliothek', 'schule', 'praxis', 'wc', 'sanitäranlage']
    },
    hausmeisterservice: {
      code: 'HS',
      name: 'Hausmeisterservice',
      keywords: ['hausmeister', 'haustechnik', 'facility', 'caretaker', 'janitor', 'hauswart']
    },
    winterdienst: {
      code: 'WD',
      name: 'Winterdienst',
      keywords: ['winter', 'schnee', 'räumen', 'streuen', 'snow removal', 'schneeräumung', 'winterräumung']
    },
    beschaffung: {
      code: 'BE',
      name: 'Beschaffungsmanagement',
      keywords: ['beschaffung', 'einkauf', 'material', 'procurement', 'supplies', 'beschaffungsservice']
    },
    sonderleistungen: {
      code: 'SL',
      name: 'Sonderleistungen',
      keywords: ['sonder', 'spezial', 'einmalig', 'special', 'custom', 'individuell']
    }
  }
};

// ============================================================================
// BRANCHEN-SPEZIFISCHE EMPFEHLUNGEN (mit Referenznummern)
// ============================================================================

const INDUSTRY_RECOMMENDATIONS = {
  tech: {
    keywords: ['tech', 'software', 'it', 'startup', 'digital', 'entwicklung', 'technologie', 'software-firma', 'app', 'saas'],
    services: [
      { code: 'BR', name: 'Büroreinigung' },
      { code: 'UR', name: 'Unterhaltsreinigung' },
      { code: 'FE', name: 'Fensterreinigung' }
    ],
    pitch: 'Für Tech-Unternehmen empfehlen wir flexible Reinigungszeiten außerhalb der Arbeitszeit und moderne, umweltfreundliche Methoden.'
  },
  medical: {
    keywords: ['arzt', 'praxis', 'klinik', 'zahnarzt', 'medizin', 'gesundheit', 'krankenhaus', 'arztpraxis', 'zahnarztpraxis', 'tierarzt', 'physiotherapie'],
    services: [
      { code: 'UR', name: 'Unterhaltsreinigung' },
      { code: 'FE', name: 'Fensterreinigung' },
      { code: 'FM', name: 'Facility Management' }
    ],
    pitch: 'Für medizinische Einrichtungen setzen wir auf höchste Hygienestandards und professionelle Desinfektionsmethoden.'
  },
  legal: {
    keywords: ['anwalt', 'kanzlei', 'rechtsanwalt', 'notar', 'gericht', 'recht', 'anwaltskanzlei', 'rechtsbeistand'],
    services: [
      { code: 'BR', name: 'Büroreinigung' },
      { code: 'FE', name: 'Fensterreinigung' },
      { code: 'UR', name: 'Unterhaltsreinigung' }
    ],
    pitch: 'Für Kanzleien bieten wir diskrete Reinigung mit höchster Vertraulichkeit – auch außerhalb der Öffnungszeiten.'
  },
  finance: {
    keywords: ['bank', 'versicherung', 'finanz', 'beratung', 'treuhänder', 'buchhaltung', 'finanzdienstleister', 'vermögensberatung'],
    services: [
      { code: 'BR', name: 'Büroreinigung' },
      { code: 'FM', name: 'Facility Management' },
      { code: 'UR', name: 'Unterhaltsreinigung' }
    ],
    pitch: 'Für Finanzdienstleister garantieren wir höchste Diskretion und Compliance mit Sicherheitsstandards.'
  },
  retail: {
    keywords: ['laden', 'geschäft', 'shop', 'einzelhandel', 'boutique', 'store', 'verkauf', 'ladengeschäft'],
    services: [
      { code: 'UR', name: 'Unterhaltsreinigung' },
      { code: 'FE', name: 'Fensterreinigung' },
      { code: 'FR', name: 'Fassadenreinigung' }
    ],
    pitch: 'Für Einzelhandel bieten wir tägliche Reinigung vor Ladeneröffnung für perfekte Kundenerlebnisse.'
  },
  hospitality: {
    keywords: ['hotel', 'restaurant', 'café', 'bar', 'gastronomie', 'gastro', 'pension', 'ferienhaus', 'bed and breakfast'],
    services: [
      { code: 'UR', name: 'Unterhaltsreinigung' },
      { code: 'FM', name: 'Facility Management' },
      { code: 'FE', name: 'Fensterreinigung' }
    ],
    pitch: 'Für Gastronomiebetriebe setzen wir auf professionelle Küchenhygiene und schnelle Reinigungszyklen.'
  },
  education: {
    keywords: ['schule', 'universität', 'bildung', 'kindergarten', 'kita', 'hochschule', 'gymnasium', 'realschule', 'grundschule'],
    services: [
      { code: 'UR', name: 'Unterhaltsreinigung' },
      { code: 'FE', name: 'Fensterreinigung' },
      { code: 'FM', name: 'Facility Management' }
    ],
    pitch: 'Für Bildungseinrichtungen bieten wir kindersichere, umweltfreundliche Reinigungsmittel und flexible Zeiten.'
  },
  industrial: {
    keywords: ['industrie', 'fabrik', 'produktion', 'fertigung', 'werk', 'manufacturing', 'produktionsstätte'],
    services: [
      { code: 'IR', name: 'Industriereinigung' },
      { code: 'HR', name: 'Hallenreinigung' },
      { code: 'MR', name: 'Maschinenreinigung' }
    ],
    pitch: 'Für Industriebetriebe bieten wir spezialisierte Reinigung von Maschinen und Produktionshallen mit Industriegeräten.'
  },
  private: {
    keywords: ['privatperson', 'privat', 'eigenheim', 'wohnung', 'haus', 'haushalt', 'privathaushalt'],
    services: [
      { code: 'PH', name: 'Private Housekeeping' },
      { code: 'UR', name: 'Unterhaltsreinigung' },
      { code: 'FE', name: 'Fensterreinigung' }
    ],
    pitch: 'Für Privathaushalte bieten wir zuverlässiges Housekeeping nach Ihrem individuellen Zeitplan.'
  }
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Detect service from conversation
 */
function detectServiceFromText(text: string): { code: string; name: string } | null {
  const lowerText = text.toLowerCase();

  for (const category of Object.values(SERVICE_DATABASE)) {
    for (const service of Object.values(category)) {
      for (const keyword of service.keywords) {
        if (lowerText.includes(keyword.toLowerCase())) {
          return { code: service.code, name: service.name };
        }
      }
    }
  }

  return null;
}

/**
 * Detect industry from conversation
 */
function detectIndustry(text: string): string | null {
  const lowerText = text.toLowerCase();

  for (const [industry, data] of Object.entries(INDUSTRY_RECOMMENDATIONS)) {
    for (const keyword of data.keywords) {
      if (lowerText.includes(keyword.toLowerCase())) {
        return industry;
      }
    }
  }

  return null;
}

/**
 * Check if user declined to provide information
 */
function checkDeclined(text: string): boolean {
  const declinePatterns = [
    'möchte ich nicht',
    'will ich nicht',
    'nicht angeben',
    'keine angabe',
    'lieber nicht',
    'privat',
    'geht sie nichts an'
  ];

  const lowerText = text.toLowerCase();
  return declinePatterns.some(pattern => lowerText.includes(pattern));
}

/**
 * Extract name (Vorname + Nachname)
 */
function extractName(text: string): string | null {
  // Pattern: "Mein Name ist [Name]" oder "Ich heiße [Name]" oder "[Name]" direkt
  const patterns = [
    /(?:mein name ist|ich heiße|ich bin|name:)\s+([A-ZÄÖÜ][a-zäöüß]+(?:\s+[A-ZÄÖÜ][a-zäöüß]+)+)/i,
    /^([A-ZÄÖÜ][a-zäöüß]+\s+[A-ZÄÖÜ][a-zäöüß]+)$/,  // Direkt: "Max Mustermann"
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match && match[1]) {
      return match[1].trim();
    }
  }

  return null;
}

/**
 * Extract company name
 */
function extractCompany(text: string): string | null {
  const patterns = [
    /(?:firma|unternehmen|betrieb|company|bei)\s+([A-ZÄÖÜ][a-zäöüß\s&.,]+(?:GmbH|AG|AG|KG|OHG|UG)?)/i,
    /([A-ZÄÖÜ][a-zäöüß\s&.,]+(?:GmbH|AG|KG|OHG|UG))/,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match && match[1]) {
      return match[1].trim();
    }
  }

  // Check for "Privatperson"
  if (/privatperson|privat|privatkunde|privathaushalt/i.test(text)) {
    return 'Privatperson';
  }

  return null;
}

/**
 * Extract timeline preference (1h Rückruf vs. Termin)
 */
function extractCallbackPreference(text: string): string | null {
  const lowerText = text.toLowerCase();

  if (lowerText.includes('stunde') || lowerText.includes('rückruf') || lowerText.includes('zurückrufen') || lowerText.includes('sofort')) {
    return 'Rückruf innerhalb 1 Stunde';
  }

  if (lowerText.includes('termin') || lowerText.includes('vereinbaren') || lowerText.includes('später')) {
    return 'Terminvereinbarung';
  }

  return null;
}

/**
 * Extract all information from conversation
 */
function extractInfoFromConversation(messages: ChatMessage[]): ExtractedInfo {
  const extracted: ExtractedInfo = {
    declined_fields: []
  };

  // Combine all user messages
  const userMessages = messages
    .filter(m => m.role === 'user')
    .map(m => m.content)
    .join(' ');

  // Check each message individually for declines
  for (const msg of messages.filter(m => m.role === 'user')) {
    if (checkDeclined(msg.content)) {
      // User declined something - we'll handle this in the prompt
      console.log('User declined to provide some information');
    }
  }

  // 1. Extract Name (Vorname + Nachname)
  const name = extractName(userMessages);
  if (name) extracted.name = name;

  // 2. Extract Company
  const company = extractCompany(userMessages);
  if (company) extracted.company = company;

  // 3. Extract Industry
  const industry = detectIndustry(userMessages);
  if (industry) extracted.industry = industry;

  // 4. Extract Service
  const service = detectServiceFromText(userMessages);
  if (service) extracted.service = service;

  // 5. Extract Size (m²)
  const sizeMatch = userMessages.match(/(\d+)\s?(m²|m2|quadratmeter|qm)/i);
  if (sizeMatch) {
    extracted.size = `${sizeMatch[1]} m²`;
  } else {
    // Alternative: Anzahl Räume
    const roomMatch = userMessages.match(/(\d+)\s?(räume|zimmer|raum)/i);
    if (roomMatch) {
      extracted.size = `${roomMatch[1]} Räume`;
    }
  }

  // 6. Extract Frequency
  const frequencyPatterns = [
    { pattern: /täglich/i, value: 'Täglich' },
    { pattern: /(\d+)\s?x?\s?(pro|in der)?\s?woche/i, value: (match: RegExpMatchArray) => `${match[1]}x pro Woche` },
    { pattern: /wöchentlich/i, value: 'Wöchentlich' },
    { pattern: /monatlich/i, value: 'Monatlich' },
    { pattern: /zweimal|2\s?mal/i, value: '2x pro Woche' },
    { pattern: /einmalig/i, value: 'Einmalig' }
  ];

  for (const { pattern, value } of frequencyPatterns) {
    const match = userMessages.match(pattern);
    if (match) {
      extracted.frequency = typeof value === 'function' ? value(match) : value;
      break;
    }
  }

  // 7. Extract City (Swiss cities)
  const swissCities = ['zürich', 'zug', 'luzern', 'bern', 'basel', 'genf', 'lausanne', 'winterthur', 'st. gallen', 'st.gallen', 'emmenbrücke', 'aarau', 'olten', 'thun', 'köniz'];
  for (const city of swissCities) {
    if (userMessages.toLowerCase().includes(city)) {
      extracted.city = city.charAt(0).toUpperCase() + city.slice(1);
      break;
    }
  }

  // 8. Extract Timeline (Start)
  const timingKeywords = ['sofort', 'dringend', 'nächste woche', 'ab nächster woche', 'ab', 'morgen', 'heute', 'bald', 'monat', 'nächsten monat', 'jahr'];
  for (const keyword of timingKeywords) {
    if (userMessages.toLowerCase().includes(keyword)) {
      extracted.timing = keyword;
      break;
    }
  }

  // 8b. Extract Callback Preference (1h vs. Termin)
  const callbackPref = extractCallbackPreference(userMessages);
  if (callbackPref) extracted.callback_preference = callbackPref;

  // 9a. Extract Email
  const emailMatch = userMessages.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
  if (emailMatch) {
    extracted.email = emailMatch[0];
  }

  // 9b. Extract Phone (Swiss format)
  const phoneMatch = userMessages.match(/(\+41|0041|0)\s?(\d{2})\s?(\d{3})\s?(\d{2})\s?(\d{2})/);
  if (phoneMatch) {
    extracted.phone = phoneMatch[0];
  }

  // Additional: Extract employees
  const employeeMatch = userMessages.match(/(\d+)\s?(mitarbeiter|personen|leute|employees|arbeitsplätze)/i);
  if (employeeMatch) {
    extracted.employees = `${employeeMatch[1]} Mitarbeiter`;
  }

  // Additional: Extract areas/rooms
  const areaKeywords = ['büro', 'toilette', 'wc', 'küche', 'empfang', 'konferenzraum', 'meeting', 'lager', 'cafeteria', 'flur', 'treppenhaus', 'sanitär', 'umkleide'];
  const foundAreas: string[] = [];
  for (const area of areaKeywords) {
    if (userMessages.toLowerCase().includes(area)) {
      foundAreas.push(area);
    }
  }
  if (foundAreas.length > 0) {
    extracted.areas = foundAreas.join(', ');
  }

  return extracted;
}

/**
 * Get missing fields for the 9 PFLICHT-DATENPUNKTE
 */
function getMissingFields(extracted: ExtractedInfo): string[] {
  const missing: string[] = [];

  // 1. Name (Vor- + Nachname)
  if (!extracted.name) missing.push('Name (Vor- und Nachname)');

  // 2. Company
  if (!extracted.company) missing.push('Firma/Privatperson');

  // 3. Industry/Objekttyp
  if (!extracted.industry) missing.push('Branche/Objekttyp');

  // 4. Service
  if (!extracted.service) missing.push('Benötigter Service');

  // 5. Size
  if (!extracted.size && !extracted.employees) missing.push('Größenordnung (m² oder Räume)');

  // 6. Frequency
  if (!extracted.frequency) missing.push('Reinigungsfrequenz');

  // 7. City
  if (!extracted.city) missing.push('Standort/Stadt');

  // 8. Timeline
  if (!extracted.timing) missing.push('Start-Timeline');
  if (!extracted.callback_preference) missing.push('Rückruf-Präferenz (1h vs. Termin)');

  // 9. Contact (Email ODER Phone)
  if (!extracted.email && !extracted.phone) missing.push('Kontakt (E-Mail oder Telefon)');

  return missing;
}

/**
 * Determine conversation phase (5-phase model) - STRIKTE LOGIK
 */
function determinePhase(extracted: ExtractedInfo): number {
  // Phase 1: Discovery - industry/service FEHLT
  if (!extracted.industry && !extracted.service) {
    return 1;
  }

  // Phase 2: Needs Assessment - IRGENDWAS von (areas, size, frequency) FEHLT
  // Verwende OR statt AND - wenn IRGENDWAS fehlt, bleibe in Phase 2!
  if (!extracted.areas || !extracted.size && !extracted.employees || !extracted.frequency) {
    return 2;
  }

  // Phase 3: Solution Pitch - Bedarf komplett, aber noch KEINE Kontaktdaten
  if (!extracted.email && !extracted.phone) {
    return 3;
  }

  // Phase 4: Contact Collection - Email/Phone vorhanden, aber NOCH NICHT alles
  // Checke ob NAME, CITY, TIMING, CALLBACK_PREFERENCE fehlen
  if (!extracted.name || !extracted.city || !extracted.timing || !extracted.callback_preference) {
    return 4;
  }

  // Phase 5: Ready to handoff - ALLES vorhanden
  return 5;
}

/**
 * Build industry-specific pitch with Referenznummern
 */
function getIndustryPitch(industry: string | undefined): string {
  if (!industry) return '';

  const industryData = INDUSTRY_RECOMMENDATIONS[industry as keyof typeof INDUSTRY_RECOMMENDATIONS];
  if (!industryData) return '';

  const servicesWithRefs = industryData.services
    .map(s => `- ${s.name} (Ref: ${s.code})`)
    .join('\n');

  return `\n\n**EMPFEHLUNG FÜR DIESE BRANCHE:**\n${industryData.pitch}\n\nPassende Services:\n${servicesWithRefs}`;
}

// ============================================================================
// MAIN CHAT FUNCTION
// ============================================================================

export async function chatWithAI(data: ChatRequest): Promise<ChatResponse> {
  const { messages, userInfo, supporterName = 'Sarah', supporterGender = 'female', appointmentMode = false } = data;

  try {
    // Dynamic import of Google GenAI
    const { GoogleGenerativeAI } = await import('@google/generative-ai');

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not set');
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    // Extract info from conversation
    const extracted = extractInfoFromConversation(messages);

    // Merge with userInfo
    const mergedInfo: ExtractedInfo = {
      service: extracted.service || (userInfo?.service ? { code: 'UR', name: userInfo.service } : undefined),
      name: extracted.name || userInfo?.name,
      company: extracted.company || userInfo?.company,
      city: extracted.city || userInfo?.city,
      email: extracted.email || userInfo?.email,
      phone: extracted.phone || userInfo?.phone,
      size: extracted.size,
      timing: extracted.timing,
      callback_preference: extracted.callback_preference,
      industry: extracted.industry,
      employees: extracted.employees,
      areas: extracted.areas,
      frequency: extracted.frequency,
      special_requirements: extracted.special_requirements,
      declined_fields: extracted.declined_fields
    };

    // Determine missing fields and phase
    const missingFields = getMissingFields(mergedInfo);
    const phase = determinePhase(mergedInfo);

    // Build conversation history
    const conversationHistory = messages.map(msg =>
      `${msg.role === 'user' ? 'Kunde' : supporterName}: ${msg.content}`
    ).join('\n\n');

    // Determine if ready to send - ALLE 9 Pflicht-Datenpunkte MÜSSEN vorhanden sein!
    const readyToSend = !!(
      mergedInfo.name &&
      (mergedInfo.company || mergedInfo.industry === 'private') && // Bei Privat ist company optional
      mergedInfo.industry &&
      mergedInfo.service &&
      (mergedInfo.size || mergedInfo.employees) &&
      mergedInfo.frequency &&
      mergedInfo.areas && // WICHTIG: Bereiche sind Pflicht!
      mergedInfo.city &&
      mergedInfo.timing &&
      mergedInfo.callback_preference && // WICHTIG: Rückruf-Präferenz ist Pflicht!
      (mergedInfo.email || mergedInfo.phone)
    );

    console.log('🔍 readyToSend Check:', {
      name: !!mergedInfo.name,
      company: !!(mergedInfo.company || mergedInfo.industry === 'private'),
      industry: !!mergedInfo.industry,
      service: !!mergedInfo.service,
      size: !!(mergedInfo.size || mergedInfo.employees),
      frequency: !!mergedInfo.frequency,
      areas: !!mergedInfo.areas,
      city: !!mergedInfo.city,
      timing: !!mergedInfo.timing,
      callback_preference: !!mergedInfo.callback_preference,
      contact: !!(mergedInfo.email || mergedInfo.phone),
      RESULT: readyToSend
    });

    // Get industry pitch
    const industryPitch = getIndustryPitch(mergedInfo.industry);

    // Build gender-aware identity
    const isFemale = supporterGender === 'female';
    const genderText = isFemale ? 'eine professionelle Sales Consultant' : 'ein professioneller Sales Consultant';

    // ========================================================================
    // OPTIMALER PROMPT - Phase-Gated mit erzwungener Reihenfolge
    // ========================================================================

    const SYSTEM_PROMPT = `Du bist ${supporterName}, ${genderText} der Swiss Reinigungsfirma (Zürich, Zug, Luzern).

**ABSOLUTE REGELN (NIEMALS VERLETZEN!):**
1. NIEMALS "du" → IMMER "Sie"
2. NIEMALS mehr als 1 Frage pro Antwort
3. NIEMALS Phasen überspringen
4. NIEMALS Email/Telefon fragen bevor ALLE Bedarfs-Infos erfasst sind
5. Services IMMER mit Referenznummer nennen: (Ref: XX)

---

**KONTEXT:**
Telefon: +41 41 320 56 10 | Email: info@bgs-service.ch

**SERVICE-CODES:**
BR=Büro, IR=Industrie, FR=Fassade, FE=Fenster, HR=Halle, MR=Maschine, BA=Bau, AA=Außen, FM=Facility, UR=Unterhalt, HS=Hausmeister, WD=Winter, SL=Sonder, PJ=Privatjet, YC=Yacht, PH=Housekeeping, LI=Luxus

---

**GESPRÄCHSVERLAUF:**
${conversationHistory}

---

**AKTUELLE PHASE: ${phase}/5**

**BEREITS ERFASST:**
${Object.entries(mergedInfo).filter(([k,v]) => v).map(([k,v]) => `- ${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`).join('\n') || '- Noch nichts erfasst'}

**NOCH FEHLEND:**
${missingFields.map(f => `- ${f}`).join('\n') || '- Keine'}

---

${phase === 1 ? `
═══════════════════════════════════════
PHASE 1: DISCOVERY (Objekttyp ermitteln)
═══════════════════════════════════════

STATUS: Objekttyp noch NICHT bekannt.

DEINE AUFGABE:
Frage freundlich nach dem Objekttyp (Unternehmen oder Privat).

BEISPIEL-FRAGE:
"Um Sie optimal zu beraten: Handelt es sich um ein geschäftliches oder privates Objekt?"

WICHTIG:
- Nur DIESE eine Frage stellen
- Max. 2 Sätze
- KEINE weitere Frage anhängen
` : phase === 2 ? `
═══════════════════════════════════════
PHASE 2: BEDARF ERMITTELN (Details erfassen)
═══════════════════════════════════════

STATUS: Objekttyp bekannt (${mergedInfo.industry || mergedInfo.service?.name || 'erkannt'})

DEINE AUFGABE:
Erfasse Details zum Reinigungsbedarf in dieser Reihenfolge:
1. Bereiche (welche Räume/Bereiche?)
2. Größe (Quadratmeter oder Raumanzahl)
3. Frequenz (wie oft?)

NOCH FEHLEND: ${!mergedInfo.areas ? 'Bereiche' : !mergedInfo.size && !mergedInfo.employees ? 'Größe' : !mergedInfo.frequency ? 'Frequenz' : 'nichts'}

FRAGE JETZT:
${!mergedInfo.areas ?
  '"Welche Bereiche sollen gereinigt werden? (z.B. Wohnbereich, Küche, Bad, Außenanlagen)"' :
  !mergedInfo.size && !mergedInfo.employees ?
  '"Wie groß ist die zu reinigende Fläche? (Quadratmeter oder Anzahl der Räume)"' :
  !mergedInfo.frequency ?
  '"Wie häufig soll die Reinigung erfolgen? (z.B. täglich, wöchentlich, monatlich)"' :
  'ERROR: Alle Bedarfs-Infos sollten vorhanden sein!'}

WICHTIG:
- NUR diese eine Frage stellen
- Max. 2-3 Sätze
- NICHT nach Email/Telefon fragen (das kommt später!)
- Kurz bestätigen was bereits bekannt ist
` : phase === 3 ? `
═══════════════════════════════════════
PHASE 3: LÖSUNG EMPFEHLEN (Service-Pitch)
═══════════════════════════════════════

STATUS: Bedarf vollständig erfasst!

DEINE AUFGABE:
Empfehle passende Services MIT Referenznummern.

BEISPIEL-ANTWORT:
"Ausgezeichnet! Für Ihre ${mergedInfo.industry === 'private' ? 'Luxusimmobilie' : mergedInfo.industry || 'Räumlichkeiten'} empfehle ich folgende Leistungen:

${mergedInfo.service?.name || 'Unterhaltsreinigung'} (Ref: ${mergedInfo.service?.code || 'UR'}) – ${mergedInfo.frequency || 'Regelmäßige'} professionelle Reinigung nach höchsten Standards
${mergedInfo.service && mergedInfo.areas?.includes('außen') ? '\nAußenanlagenpflege (Ref: AA) – Pflege Ihrer Außenbereiche' : ''}

Um Ihnen ein konkretes Angebot zu erstellen, benötige ich noch Ihre Kontaktdaten."

WICHTIG:
- IMMER Referenznummern verwenden (Ref: XX)
- 1-2 passende Services empfehlen
- Kurz erklären warum diese Services passen
- Erst DANN nach Kontaktdaten fragen
` : phase === 4 ? `
═══════════════════════════════════════
PHASE 4: KONTAKTDATEN (Lead-Qualifizierung)
═══════════════════════════════════════

STATUS: Services empfohlen, jetzt Kontaktdaten erfassen.

NOCH FEHLEND: ${missingFields.join(', ')}

DEINE AUFGABE:
Erfasse Kontaktdaten in dieser Reihenfolge:
1. Name (Vor- und Nachname)
2. Email ODER Telefon
3. Stadt/Standort
4. Timeline (Wann Start?)
5. Rückruf-Präferenz (1h Rückruf oder Termin?)

FRAGE JETZT:
${!mergedInfo.name ?
  '"Darf ich noch Ihren Namen erfahren?"' :
  !mergedInfo.email && !mergedInfo.phone ?
  '"Wie erreichen wir Sie am besten – per E-Mail oder Telefon?"' :
  !mergedInfo.city ?
  '"In welcher Stadt befinden sich die Räumlichkeiten?"' :
  !mergedInfo.timing ?
  '"Wann soll die Reinigung idealerweise starten?"' :
  !mergedInfo.callback_preference ?
  '"Möchten Sie, dass wir Sie innerhalb der nächsten Stunde zurückrufen, oder sollen wir einen Termin vereinbaren?"' :
  'ERROR: Alle Kontaktdaten sollten vorhanden sein!'}

WICHTIG:
- NUR diese eine Frage stellen
- Falls Name bekannt: mit "Herr/Frau [Name]" ansprechen
- Max. 2 Sätze
` : `
═══════════════════════════════════════
PHASE 5: ZUSAMMENFASSUNG (Handoff)
═══════════════════════════════════════

STATUS: ALLE Daten erfasst! Bereit für Weiterleitung.

DEINE AUFGABE:
Erstelle eine professionelle Zusammenfassung und bitte um Bestätigung.

ANTWORT-TEMPLATE:
"Perfekt, ${mergedInfo.name ? 'Herr/Frau ' + mergedInfo.name.split(' ').pop() : ''}! Lassen Sie mich kurz zusammenfassen:

📍 Objekt: ${mergedInfo.industry === 'private' ? 'Privathaushalt' : mergedInfo.industry || 'Gewerblich'}
🏢 ${mergedInfo.company || 'Privatperson'}
📐 Bereiche: ${mergedInfo.areas || 'Diverse'}
📏 Größe: ${mergedInfo.size || mergedInfo.employees || 'Nach Besichtigung'}
🔄 Frequenz: ${mergedInfo.frequency || 'Nach Absprache'}
📍 Standort: ${mergedInfo.city || 'Schweiz'}
📅 Start: ${mergedInfo.timing || 'Nach Absprache'}
☎️ Rückruf: ${mergedInfo.callback_preference || 'Nach Absprache'}
📞 Kontakt: ${mergedInfo.email || mergedInfo.phone || 'Wird erfasst'}

Empfohlene Leistungen:
- ${mergedInfo.service?.name || 'Unterhaltsreinigung'} (Ref: ${mergedInfo.service?.code || 'UR'})

Passt das so? Dann leite ich Ihre Anfrage direkt an unseren Spezialisten weiter."

WICHTIG:
- Alle erfassten Daten nochmal bestätigen
- Bei fehlenden Daten: "Nach Absprache"
- Emojis NUR in dieser Summary erlaubt
`}

---

ANTWORTE JETZT ALS ${supporterName} (${isFemale ? 'weiblich' : 'männlich'}):
`;

    // Generate AI response
    const result = await model.generateContent(SYSTEM_PROMPT);
    const response = result.response;
    const text = response.text();

    return {
      response: text,
      extractedInfo: mergedInfo,
      detectedService: mergedInfo.service,
      readyToSend,
      missingFields,
      conversationPhase: phase
    };

  } catch (error) {
    console.error('Gemini Chat API Error:', error instanceof Error ? error.message : error);

    return {
      unavailable: true,
      response: `Der Chat ist gerade nicht verfügbar. Bitte rufen Sie uns an (${company.phone.display}) oder nutzen Sie das Kontaktformular.`,
      extractedInfo: {},
      readyToSend: false,
      missingFields: ['Name', 'Firma/Privatperson', 'Branche', 'Service', 'Größe', 'Frequenz', 'Stadt', 'Timeline', 'Kontakt'],
      conversationPhase: 1
    };
  }
}

// Legacy function for industry analysis (kept for compatibility)
export async function analyzeIndustry(data: { industry: string }) {
  return {
    recommendation: "Basierend auf Ihrer Branche empfehlen wir Ihnen unsere professionellen Reinigungsdienstleistungen.",
    services: ["Büroreinigung", "Unterhaltsreinigung", "Facility Management"],
    callToAction: "Kontaktieren Sie uns für ein unverbindliches Angebot!"
  };
}
