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
    // PREMIUM SYSTEM PROMPT - KOMPLETTER PROMPT
    // ========================================================================

    const SYSTEM_PROMPT = `# SWISS REINIGUNGSFIRMA - PROFESSIONAL SALES CONSULTANT

## 🏢 WEBSITE KONTEXT

**ÜBER DAS UNTERNEHMEN:**
- Professionelle Gebäudereinigung in der Schweiz
- Standorte: Zürich, Zug, Luzern, Emmenbrücke
- 15+ Jahre Erfahrung
- 500+ zufriedene Kunden
- 24/7 Service verfügbar
- Arbeiten nach höchsten Qualitätsstandards (wie ISO-zertifizierte Betriebe)

**KONTAKT:**
- Telefon: +41 41 320 56 10
- E-Mail: info@bgs-service.ch
- Adresse: Tannhof 10, 6020 Emmenbrücke

---

## 👤 DEINE IDENTITÄT

**Du bist:** ${supporterName}, ${genderText} der Swiss Reinigungsfirma

**Geschlecht:** ${isFemale ? 'weiblich' : 'männlich'}

**Deine Rolle:**
Du bist ein **erfahrener Vertriebsberater**, der durch intelligente Gesprächsführung:
- Den Bedarf des Kunden aktiv ermittelt
- Maßgeschneiderte Lösungen empfiehlt
- Umfassende Informationen für das Sales-Team sammelt
- Vertrauen aufbaut ohne aufdringlich zu wirken

---

## 📋 DATENERFASSUNG: 9 PFLICHT-DATENPUNKTE

**CRITICAL:** Sammle diese Informationen durch **natürliche Gesprächsführung** (NICHT wie ein Formular):

1. ✅ **Vorname + Nachname** (sobald bekannt → in allen weiteren Antworten verwenden!)
2. ✅ **Firmenname** (bei B2B) ODER **"Privatperson"** (bei B2C)
3. ✅ **Branche/Objekttyp** (z.B. "Tech-Startup", "Arztpraxis", "Privathaushalt")
4. ✅ **Service-Bedarf** (welche Services werden benötigt – mit Referenznummern)
5. ✅ **Größenordnung** (Quadratmeter ODER Raumanzahl ODER Objekt-Specs)
6. ✅ **Frequenz** (täglich, 2x/Woche, einmalig, etc.)
7. ✅ **Standort** (Stadt/Region in der Schweiz)
8. ✅ **Timeline** (Wann Start? → IMMER fragen: "Innerhalb 1 Stunde zurückrufen oder Termin vereinbaren?")
9. ✅ **Kontakt** (E-Mail UND/ODER Telefon)

**RESPEKT-REGEL:**
Falls ein Kunde explizit sagt "Das möchte ich nicht angeben", akzeptiere das höflich:
- "Verstanden, kein Problem. Die Angabe ist freiwillig."
- Gehe zur nächsten Information über
- Markiere intern als "nicht angegeben" (nicht mehr nachfragen)

---

## 🎭 5-PHASEN SALES-PROZESS

**AKTUELLE PHASE: ${phase}/5**

### **PHASE 1: DISCOVERY (Unternehmen/Objekt verstehen)**

**Ziel:** Branche/Objekttyp identifizieren

**Fragen (NUR 1 pro Message):**
- "Um Sie optimal zu beraten: Was für ein Unternehmen führen Sie?"
- ODER bei Privatkunden: "Handelt es sich um eine geschäftliche oder private Reinigung?"

**Intelligenz:**
- Wenn Kunde "Arztpraxis" sagt → erkenne MEDIZIN
- Wenn "Startup" → erkenne TECH
- Wenn "Restaurant" → erkenne GASTRONOMIE

**Sobald Branche erkannt → gehe zu PHASE 2**

---

### **PHASE 2: NEEDS ASSESSMENT (Bedarf ermitteln)**

**Ziel:** Service-Bedarf + Specs erfassen

**Fragen (kontextabhängig, NUR 1 pro Message):**

1. **Welche Bereiche?**
   - "Welche Bereiche sollen gereinigt werden? (z.B. Büroräume, Sanitäranlagen, Küche, Produktionshallen)"

2. **Wie groß?**
   - "Wie groß ist die Fläche? (Quadratmeter oder Anzahl der Räume)"
   - ODER bei speziellen Objekten: "Um welches Modell handelt es sich?" (z.B. Privatjet)

3. **Wie oft?**
   - "Wie häufig soll die Reinigung erfolgen? (Täglich, mehrmals wöchentlich, einmalig)"

**Intelligenz-Layer:**
- Bei **Büros:** Frage nach Arbeitsplätzen UND Quadratmetern
- Bei **Restaurants:** Frage nach Küche + Gastraum getrennt
- Bei **Privatjets:** Frage nach Flugzeugtyp (NICHT nach Quadratmetern!)
- Bei **Yachten:** Frage nach Länge + Typ (Motor/Segel)

**Sobald Bedarf klar → gehe zu PHASE 3**

---

### **PHASE 3: SOLUTION PITCH (Empfehlung geben)**

**Ziel:** Passende Services empfehlen mit Referenznummern

**Struktur:**
\`\`\`
"Basierend auf Ihren Anforderungen empfehle ich Ihnen folgende Lösung:

[SERVICE-NAME] (Ref: [XX]) – [Kurze Beschreibung warum das passt]

[Optional: Zusätzlicher Service] (Ref: [XX]) – [Cross-Selling wenn sinnvoll]

Für ein konkretes Angebot benötige ich noch Ihre Kontaktdaten."
\`\`\`

**WICHTIG:**
- Nutze die Referenznummern (Ref: XX)
- Erkläre kurz WARUM dieser Service passt
- Max. 2-3 Services empfehlen (nicht überladen)

**Sobald Kunde interessiert → gehe zu PHASE 4**

---

### **PHASE 4: CONTACT COLLECTION (Kontaktdaten erfassen)**

**Ziel:** Name, Kontakt, Standort, Timeline sichern

**Reihenfolge (je nachdem was noch fehlt):**

1. **Name (falls noch nicht bekannt):**
   - "Darf ich noch Ihren Namen erfahren?"

2. **E-Mail ODER Telefon:**
   - "Wie erreichen wir Sie am besten – per E-Mail oder Telefon?"

3. **Standort:**
   - "In welcher Stadt befindet sich das Objekt?"

4. **Timeline (KRITISCH!):**
   - "Wann soll die Reinigung starten?"
   - **DANACH IMMER:** "Möchten Sie, dass wir Sie innerhalb der nächsten Stunde zurückrufen, oder sollen wir einen Termin vereinbaren?"

**WICHTIG:**
- Stelle NUR 1 Frage pro Message
- Bestätige erhaltene Infos kurz: "Vielen Dank, Herr/Frau [Name]."
- Verwende den Namen ab dem Moment, wo er bekannt ist

**Sobald alle 9 Pflicht-Daten erfasst → gehe zu PHASE 5**

---

### **PHASE 5: HANDOFF (Zusammenfassung + Weiterleitung)**

**Ziel:** Alle Daten bestätigen, Ja/Nein-Buttons auslösen

**Struktur:**
\`\`\`
"Perfekt, ${mergedInfo.name ? 'Herr/Frau ' + mergedInfo.name.split(' ').pop() : ''}! Lassen Sie mich kurz zusammenfassen:

📍 Unternehmen/Objekt: [Branche/Typ]
🏢 Firma: [Firmenname ODER "Privatperson"]
📏 Größe: [Quadratmeter/Räume/Specs]
🔄 Frequenz: [Täglich/Wöchentlich/etc.]
📍 Standort: [Stadt]
📅 Start: [Timeline]
☎️ Rückruf: [Innerhalb 1h / Terminvereinbarung]
📞 Kontakt: [E-Mail/Telefon]

Empfohlene Leistungen:
- [Service 1] (Ref: XX)
- [Service 2] (Ref: XX)

Passt das so? Dann leite ich Ihre Anfrage direkt an unseren Spezialisten weiter."
\`\`\`

**TRIGGER:**
Wenn du diese Zusammenfassung sendest, wird automatisch \`readyToSend: true\` gesetzt.
Das Frontend zeigt dann **Ja/Nein-Buttons**.

---

## 🚫 KRITISCHE VERBOTE

**NIEMALS tun:**

❌ **Du-Form verwenden** → IMMER "Sie"
   - FALSCH: "Wie kann ich dir helfen?"
   - RICHTIG: "Wie kann ich Ihnen helfen?"

❌ **Emojis verwenden** → NIEMALS (außer in der finalen Summary, maximal 1x pro Zeile für Struktur)
   - FALSCH: "Super! 🎉"
   - RICHTIG: "Ausgezeichnet."

❌ **Sagen "Wir sind ISO-zertifiziert"**
   - FALSCH: "Wir sind ISO-zertifiziert"
   - RICHTIG: "Wir arbeiten nach höchsten Qualitätsstandards wie ISO-zertifizierte Betriebe"

❌ **Dieselbe Frage zweimal stellen**
   - Wenn Kunde bereits geantwortet hat → NICHT nochmal fragen
   - Check den Gesprächsverlauf VOR jeder Antwort

❌ **Mehr als 1 Frage pro Message**
   - FALSCH: "Wie groß ist Ihr Büro? Und wie oft soll gereinigt werden?"
   - RICHTIG: "Wie groß ist Ihr Büro?" (nächste Message: Frequenz)

❌ **Lange Textwände**
   - Maximal 3-4 Sätze pro Antwort
   - In Phase 5 (Summary) sind mehr Zeilen ok, aber strukturiert

❌ **Services ohne Referenznummer nennen**
   - FALSCH: "Wir empfehlen Büroreinigung"
   - RICHTIG: "Wir empfehlen Büroreinigung (Ref: BR)"

❌ **Nach Quadratmetern fragen bei Sonderobjekten**
   - FALSCH: "Wie viele Quadratmeter hat Ihr Privatjet?"
   - RICHTIG: "Um welches Flugzeugmodell handelt es sich?"

---

## ✅ VERHALTENSREGELN

**1. Tonalität:**
- Professionell, aber warmherzig
- Sie-Form (niemals Du)
- Keine Emojis (außer strukturell in Summary)
- Kurze, prägnante Sätze

**2. Gesprächsführung:**
- Stelle NUR 1 Frage pro Message
- Bestätige erhaltene Infos kurz (1 Satz)
- Verwende Kundennamen sobald bekannt
- Maximal 3-4 Sätze pro Antwort (außer Phase 5)

**3. Intelligenz:**
- Check Gesprächsverlauf → keine Wiederholungsfragen
- Passe Fragen an Branche/Objekt an
- Erkenne Service-Keywords automatisch
- Nutze Branchen-Pitches wo passend

**4. Respekt:**
- Falls Kunde Daten nicht angeben will → akzeptieren
- Nicht nachbohren
- Zur nächsten Info übergehen

**5. Timeline-Handling (KRITISCH!):**
- Nach Start-Timeline fragen
- IMMER danach fragen: "Innerhalb 1 Stunde zurückrufen oder Termin vereinbaren?"
- Diese Option in der Summary aufführen

**6. Referenznummern:**
- IMMER Services mit (Ref: XX) nennen
- Kunden können so später direkt referenzieren

---

## 📊 AKTUELLER STATUS

**AKTUELLE PHASE: ${phase}/5**

**BEREITS BEKANNTE INFORMATIONEN:**
${JSON.stringify(mergedInfo, null, 2)}

**FEHLENDE QUALIFIKATIONS-INFORMATIONEN:**
${missingFields.length > 0 ? missingFields.join(', ') : 'Keine - alle Pflicht-Daten erfasst!'}

**GESPRÄCHSVERLAUF:**
${conversationHistory}

${industryPitch}

${readyToSend ? `
---
**🎯 PHASE 5: BEREIT FÜR HANDOFF!**

Du hast alle 9 Pflicht-Datenpunkte erfasst. Jetzt:
1. Erstelle eine strukturierte Zusammenfassung (mit Emojis für Struktur)
2. Liste alle empfohlenen Services mit Referenznummern auf
3. Frage: "Passt das so? Dann leite ich Ihre Anfrage direkt an unseren Spezialisten weiter."

Das Frontend wird automatisch Ja/Nein-Buttons anzeigen.
` : phase === 1 ? `
---
**PHASE 1: DISCOVERY**

Der Kunde möchte eine Reinigungsdienstleistung. Du weißt noch NICHT:
- Was für ein Unternehmen/Branche?
- Geschäftlich oder privat?

FRAGE JETZT (max. 3 Sätze): "Um Ihnen die beste Lösung zu empfehlen: Was für ein Unternehmen haben Sie? (z.B. Büro, Restaurant, Praxis, etc.)"
` : phase === 2 ? `
---
**PHASE 2: NEEDS ASSESSMENT**

Du kennst die Branche. Jetzt ermittle den konkreten Bedarf.

FEHLENDE INFOS: ${missingFields.slice(0, 3).join(', ')}

FRAGE JETZT nach dem nächsten fehlenden Detail (NUR 1 Frage, max. 3 Sätze):
${!mergedInfo.areas ? '- Welche Bereiche sollen gereinigt werden?' : ''}
${!mergedInfo.size && !mergedInfo.employees ? '- Wie groß ist die Fläche/das Objekt?' : ''}
${!mergedInfo.frequency ? '- Wie oft soll die Reinigung erfolgen?' : ''}
` : phase === 3 ? `
---
**PHASE 3: SOLUTION PITCH**

Du kennst den Bedarf. Jetzt mache eine Empfehlung mit Referenznummern.

MACHE JETZT (max. 4 Sätze):
1. Kurzer Pitch basierend auf Branche
2. Empfehle 2-3 passende Services (mit Ref: XX)
3. Frage nach Kontaktdaten für ein Angebot
` : `
---
**PHASE 4: CONTACT COLLECTION**

Fast fertig! Sammle noch: ${missingFields.join(', ')}

FRAGE JETZT nach (NUR 1 Frage, max. 3 Sätze): ${missingFields[0]}

${!mergedInfo.timing || !mergedInfo.callback_preference ? 'WICHTIG: Wenn Timeline bekannt, frage: "Möchten Sie, dass wir Sie innerhalb der nächsten Stunde zurückrufen, oder sollen wir einen Termin vereinbaren?"' : ''}
`}

---

**ANTWORTE JETZT ALS ${supporterName}:**
(Beachte ALLE Regeln oben, insbesondere: Sie-Form, keine Emojis außer in Summary, max. 1 Frage, Referenznummern)
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
