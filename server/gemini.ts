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
 * Determine conversation phase (5-phase model)
 */
function determinePhase(extracted: ExtractedInfo): number {
  // Phase 1: Discovery (industry/company type)
  if (!extracted.industry && !extracted.service) return 1;

  // Phase 2: Needs Assessment (areas, frequency, size)
  if (!extracted.size && !extracted.frequency && !extracted.areas) return 2;

  // Phase 3: Solution Pitch (recommendation given)
  if (extracted.service && extracted.industry && !extracted.email && !extracted.phone) return 3;

  // Phase 4: Contact Collection (email/phone, name, city, timeline)
  if (!extracted.email && !extracted.phone) return 4;
  if (!extracted.name || !extracted.city || !extracted.timing) return 4;

  // Phase 5: Ready to handoff
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
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

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

    // Determine if ready to send (all 9 Pflicht-Datenpunkte vorhanden)
    const readyToSend = !!(
      mergedInfo.name &&
      mergedInfo.company &&
      mergedInfo.industry &&
      mergedInfo.service &&
      (mergedInfo.size || mergedInfo.employees) &&
      mergedInfo.frequency &&
      mergedInfo.city &&
      mergedInfo.timing &&
      (mergedInfo.email || mergedInfo.phone)
    );

    // Get industry pitch
    const industryPitch = getIndustryPitch(mergedInfo.industry);

    // Build gender-aware identity
    const isFemale = supporterGender === 'female';
    const genderText = isFemale ? 'eine professionelle Sales Consultant' : 'ein professioneller Sales Consultant';

    // ========================================================================
    // FOCUSED SYSTEM PROMPT - Strikte Phase-Enforcement
    // ========================================================================

    // Build phase-specific instructions
    let phaseInstruction = '';

    if (readyToSend) {
      // PHASE 5: Summary
      phaseInstruction = `
**🎯 PHASE 5 - HANDOFF SUMMARY**

ALLE DATEN ERFASST! Erstelle JETZT eine Zusammenfassung:

"Perfekt${mergedInfo.name ? ', ' + (mergedInfo.name.split(' ').pop()) : ''}! Lassen Sie mich kurz zusammenfassen:

📍 Objekt: ${mergedInfo.industry || '[Objekttyp]'}
🏢 ${mergedInfo.company || '[Firma/Privatperson]'}
📏 Größe: ${mergedInfo.size || mergedInfo.employees || '[Größe]'}
🔄 Frequenz: ${mergedInfo.frequency || '[Frequenz]'}
📍 Standort: ${mergedInfo.city || '[Stadt]'}
📅 Start: ${mergedInfo.timing || '[Timeline]'}
☎️ Rückruf: ${mergedInfo.callback_preference || '[Rückruf-Präferenz]'}
📞 Kontakt: ${mergedInfo.email || mergedInfo.phone || '[Kontakt]'}

Empfohlene Leistungen:
- ${mergedInfo.service?.name || 'Service 1'} (Ref: ${mergedInfo.service?.code || 'XX'})

Passt das so? Dann leite ich Ihre Anfrage direkt an unseren Spezialisten weiter."

STOP HIER! Warte auf Bestätigung.`;
    } else if (phase === 1) {
      // PHASE 1: Discovery
      phaseInstruction = `
**PHASE 1 - DISCOVERY**

Du weißt NOCH NICHT was für ein Objekt/Unternehmen der Kunde hat.

FRAGE JETZT (max. 2 Sätze):
"Um Ihnen die beste Lösung zu empfehlen: Handelt es sich um ein Unternehmen oder eine private Reinigung?"

STOP HIER! Warte auf Antwort. Stelle KEINE weiteren Fragen!`;
    } else if (phase === 2) {
      // PHASE 2: Needs Assessment
      const nextQuestion = !mergedInfo.areas ? 'Bereiche' :
                          !mergedInfo.size && !mergedInfo.employees ? 'Größe' :
                          !mergedInfo.frequency ? 'Frequenz' : 'Details';

      phaseInstruction = `
**PHASE 2 - NEEDS ASSESSMENT**

Objekt bekannt: ${mergedInfo.industry || 'Ja'}

FEHLEND: ${missingFields.slice(0, 3).join(', ')}

FRAGE JETZT NACH: ${nextQuestion}

${nextQuestion === 'Bereiche' ?
  'FRAGE: "Welche Bereiche sollen gereinigt werden?"' :
  nextQuestion === 'Größe' ?
  'FRAGE: "Wie groß ist die Fläche? (Quadratmeter oder Raumanzahl)"' :
  nextQuestion === 'Frequenz' ?
  'FRAGE: "Wie häufig soll die Reinigung erfolgen?"' :
  'FRAGE: Nächste fehlende Info'}

STOP HIER! Stelle NUR 1 Frage! Max. 2 Sätze!`;
    } else if (phase === 3) {
      // PHASE 3: Solution Pitch
      const serviceRefs = industryPitch ? industryPitch.split('Ref:').slice(1).map(s => s.split(')')[0].trim()).join(', Ref: ') : 'XX';

      phaseInstruction = `
**PHASE 3 - SOLUTION PITCH**

Bedarf bekannt! Jetzt empfehle Services MIT REFERENZNUMMERN!

BEISPIEL-ANTWORT:
"Für Ihr ${mergedInfo.industry || 'Objekt'} empfehle ich:

${mergedInfo.service?.name || 'Hauptservice'} (Ref: ${mergedInfo.service?.code || 'XX'}) – Professionelle Reinigung nach höchsten Standards

Für ein konkretes Angebot benötige ich noch Ihre Kontaktdaten."

WICHTIG: IMMER Referenznummern verwenden (Ref: XX)!
Max. 3 Sätze!`;
    } else {
      // PHASE 4: Contact Collection
      const nextField = !mergedInfo.name ? 'Name' :
                       !mergedInfo.email && !mergedInfo.phone ? 'Email/Telefon' :
                       !mergedInfo.city ? 'Stadt' :
                       !mergedInfo.timing ? 'Timeline' :
                       !mergedInfo.callback_preference ? 'Rückruf-Präferenz' : 'unbekannt';

      phaseInstruction = `
**PHASE 4 - CONTACT COLLECTION**

FEHLEND: ${missingFields.join(', ')}

FRAGE JETZT NACH: ${nextField}

${nextField === 'Name' ?
  'FRAGE: "Darf ich noch Ihren Namen erfahren?"' :
  nextField === 'Email/Telefon' ?
  'FRAGE: "Wie erreichen wir Sie am besten – per E-Mail oder Telefon?"' :
  nextField === 'Stadt' ?
  'FRAGE: "In welcher Stadt befindet sich das Objekt?"' :
  nextField === 'Timeline' ?
  'FRAGE: "Wann soll die Reinigung starten?"' :
  nextField === 'Rückruf-Präferenz' ?
  'FRAGE: "Möchten Sie, dass wir Sie innerhalb der nächsten Stunde zurückrufen, oder sollen wir einen Termin vereinbaren?"' :
  'FRAGE: Nächstes fehlendes Feld'}

STOP HIER! NUR 1 Frage! Max. 2 Sätze!`;
    }

    const SYSTEM_PROMPT = `Du bist ${supporterName}, ${genderText} der Swiss Reinigungsfirma.

**STRIKTE REGELN:**
❌ NIEMALS "Du" → IMMER "Sie"
❌ KEINE Emojis (außer in finaler Summary)
❌ NUR 1 Frage pro Antwort
❌ Max. 3 Sätze (außer Summary)
❌ Services IMMER mit (Ref: XX) nennen

**KONTEXT:**
Firma: Swiss Reinigungsfirma (Zürich, Zug, Luzern)
Telefon: +41 41 320 56 10
Email: info@bgs-service.ch

**SERVICE-CODES:**
- BR=Büro, IR=Industrie, FR=Fassade, FE=Fenster
- HR=Halle, MR=Maschine, BA=Bau, AA=Außen, FM=Facility
- UR=Unterhalt, HS=Hausmeister, WD=Winter, SL=Sonder
- PJ=Privatjet, YC=Yacht, PH=Housekeeping, LI=Luxus

**AKTUELLE SITUATION:**
Phase: ${phase}/5
Bekannt: ${JSON.stringify(mergedInfo, null, 2)}
Fehlend: ${missingFields.join(', ') || 'Keine'}

Gesprächsverlauf:
${conversationHistory}

---

${phaseInstruction}

ANTWORTE ALS ${supporterName}:`;

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
    console.error('Gemini Chat API Error:', error);

    return {
      response: "Entschuldigung, es gab einen technischen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter +41 41 320 56 10.",
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
