/**
 * Gemini AI Service - CONSULTATIVE SALES CHATBOT
 *
 * Professional sales-qualified lead generation chatbot with:
 * - Discovery phase (understand business/industry)
 * - Needs assessment (detailed requirements)
 * - Solution pitch (tailored recommendations)
 * - Contact collection (name, email, phone, city)
 * - Comprehensive handoff to sales team
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
  service?: { code: string; name: string };
  name?: string;
  company?: string;
  city?: string;
  email?: string;
  phone?: string;
  size?: string;
  timing?: string;
  industry?: string;
  employees?: string;
  areas?: string;
  frequency?: string;
  special_requirements?: string;
}

interface ChatResponse {
  response: string;
  extractedInfo: ExtractedInfo;
  detectedService?: { code: string; name: string };
  readyToSend: boolean;
  missingFields: string[];
  conversationPhase: number;
}

// SERVICE DATABASE - All available services
const SERVICE_DATABASE = {
  premium: {
    privatjet: {
      code: 'PJ',
      name: 'Privatjet Reinigung',
      keywords: ['privatjet', 'jet', 'flugzeug', 'aircraft', 'aviation', 'private plane']
    },
    yacht: {
      code: 'YC',
      name: 'Yacht Reinigung',
      keywords: ['yacht', 'boot', 'schiff', 'segelboot', 'motorboot', 'vessel']
    },
    housekeeping: {
      code: 'PH',
      name: 'Private Housekeeping',
      keywords: ['housekeeping', 'haushalt', 'villa', 'penthouse', 'privathaushalt', 'private home']
    },
    luxusimmobilien: {
      code: 'LI',
      name: 'Luxusimmobilien',
      keywords: ['luxus', 'luxusimmobilie', 'premium', 'villa', 'penthouse', 'luxury property']
    }
  },
  business: {
    bueroreinigung: {
      code: 'BR',
      name: 'Büroreinigung',
      keywords: ['büro', 'office', 'arbeitsplatz', 'geschäft', 'bürogebäude', 'coworking', 'arbeiten', 'schreibtisch']
    },
    industriereinigung: {
      code: 'IR',
      name: 'Industriereinigung',
      keywords: ['industrie', 'fabrik', 'produktion', 'werk', 'fertigung', 'manufacturing']
    },
    fassadenreinigung: {
      code: 'FR',
      name: 'Fassadenreinigung',
      keywords: ['fassade', 'außenreinigung', 'gebäudereinigung außen', 'facade']
    },
    fensterreinigung: {
      code: 'FE',
      name: 'Fensterreinigung',
      keywords: ['fenster', 'glas', 'scheiben', 'windows', 'glasreinigung']
    },
    hallenreinigung: {
      code: 'HR',
      name: 'Hallenreinigung',
      keywords: ['halle', 'lagerhalle', 'logistik', 'warehouse', 'lager']
    },
    maschinenreinigung: {
      code: 'MR',
      name: 'Maschinenreinigung',
      keywords: ['maschine', 'anlage', 'produktionsanlage', 'cnc', 'equipment']
    },
    baureinigung: {
      code: 'BA',
      name: 'Baureinigung',
      keywords: ['bau', 'baustelle', 'bauendreinigung', 'construction', 'renovierung']
    },
    aussenanlagen: {
      code: 'AA',
      name: 'Außenanlagenpflege',
      keywords: ['außenanlage', 'garten', 'grünfläche', 'hof', 'outdoor', 'grounds']
    },
    facilitymanagement: {
      code: 'FM',
      name: 'Facility Management',
      keywords: ['facility', 'gebäudemanagement', 'hausverwaltung', 'property management']
    }
  },
  basis: {
    unterhaltsreinigung: {
      code: 'UR',
      name: 'Unterhaltsreinigung',
      keywords: ['unterhalt', 'regelmäßig', 'laufend', 'maintenance', 'routine cleaning', 'toilette', 'sanitär', 'cafeteria', 'küche', 'bibliothek', 'schule', 'praxis']
    },
    hausmeisterservice: {
      code: 'HS',
      name: 'Hausmeisterservice',
      keywords: ['hausmeister', 'haustechnik', 'facility', 'caretaker', 'janitor']
    },
    winterdienst: {
      code: 'WD',
      name: 'Winterdienst',
      keywords: ['winter', 'schnee', 'räumen', 'streuen', 'snow removal']
    },
    beschaffung: {
      code: 'BE',
      name: 'Beschaffungsmanagement',
      keywords: ['beschaffung', 'einkauf', 'material', 'procurement', 'supplies']
    },
    sonderleistungen: {
      code: 'SL',
      name: 'Sonderleistungen',
      keywords: ['sonder', 'spezial', 'einmalig', 'special', 'custom']
    }
  }
};

// Industry-specific recommendations
const INDUSTRY_RECOMMENDATIONS = {
  tech: {
    keywords: ['tech', 'software', 'it', 'startup', 'digital', 'entwicklung', 'technologie'],
    recommendations: ['Büroreinigung', 'Unterhaltsreinigung', 'Fensterreinigung'],
    pitch: 'Für Tech-Unternehmen empfehlen wir flexible Reinigungszeiten außerhalb der Arbeitszeit und moderne, umweltfreundliche Methoden.'
  },
  medical: {
    keywords: ['arzt', 'praxis', 'klinik', 'zahnarzt', 'medizin', 'gesundheit', 'krankenhaus'],
    recommendations: ['Praxisreinigung', 'Unterhaltsreinigung', 'Hygienische Spezialreinigung'],
    pitch: 'Für medizinische Einrichtungen setzen wir auf höchste Hygienestandards und HACCP-konforme Reinigungsmittel.'
  },
  legal: {
    keywords: ['anwalt', 'kanzlei', 'rechtsanwalt', 'notar', 'gericht', 'recht'],
    recommendations: ['Büroreinigung', 'Fensterreinigung', 'Unterhaltsreinigung'],
    pitch: 'Für Kanzleien bieten wir diskrete Reinigung mit höchster Vertraulichkeit – auch außerhalb der Öffnungszeiten.'
  },
  finance: {
    keywords: ['bank', 'versicherung', 'finanz', 'beratung', 'treuhänder', 'buchhaltung'],
    recommendations: ['Büroreinigung', 'Facility Management', 'Unterhaltsreinigung'],
    pitch: 'Für Finanzdienstleister garantieren wir höchste Diskretion und Compliance mit Sicherheitsstandards.'
  },
  retail: {
    keywords: ['laden', 'geschäft', 'shop', 'einzelhandel', 'boutique', 'store'],
    recommendations: ['Ladenreinigung', 'Fensterreinigung', 'Unterhaltsreinigung'],
    pitch: 'Für Einzelhandel bieten wir tägliche Reinigung vor Ladeneröffnung für perfekte Kundenerlebnisse.'
  },
  hospitality: {
    keywords: ['hotel', 'restaurant', 'café', 'bar', 'gastronomie', 'gastro'],
    recommendations: ['Hotelreinigung', 'Restaurant-Reinigung', 'Unterhaltsreinigung'],
    pitch: 'Für Gastronomiebetriebe setzen wir auf HACCP-konforme Küchenhygiene und schnelle Reinigungszyklen.'
  },
  education: {
    keywords: ['schule', 'universität', 'bildung', 'kindergarten', 'kita', 'hochschule'],
    recommendations: ['Unterhaltsreinigung', 'Fensterreinigung', 'Facility Management'],
    pitch: 'Für Bildungseinrichtungen bieten wir kindersichere, umweltfreundliche Reinigungsmittel und flexible Zeiten.'
  },
  industrial: {
    keywords: ['industrie', 'fabrik', 'produktion', 'fertigung', 'werk', 'manufacturing'],
    recommendations: ['Industriereinigung', 'Hallenreinigung', 'Maschinenreinigung'],
    pitch: 'Für Industriebetriebe bieten wir spezialisierte Reinigung von Maschinen und Produktionshallen mit Industriegeräten.'
  }
};

// Website context
const WEBSITE_CONTEXT = `
ÜBER DIE SWISS REINIGUNGSFIRMA:
- Professionelle Gebäudereinigung in der Schweiz
- Standorte: Zürich, Zug, Luzern, Emmenbrücke
- 15+ Jahre Erfahrung
- 500+ zufriedene Kunden
- 24/7 Service verfügbar
- ISO-Zertifizierung

KONTAKT:
- Telefon: +41 41 320 56 10
- E-Mail: info@bgs-service.ch
- Adresse: Tannhof 10, 6020 Emmenbrücke
`;

/**
 * Detect service from conversation
 */
function detectServiceFromText(text: string): { code: string; name: string } | null {
  const lowerText = text.toLowerCase();

  // Check all services
  for (const category of Object.values(SERVICE_DATABASE)) {
    for (const [key, service] of Object.entries(category)) {
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
 * Extract information from conversation
 */
function extractInfoFromConversation(messages: ChatMessage[]): ExtractedInfo {
  const extracted: ExtractedInfo = {};

  // Combine all user messages
  const userMessages = messages
    .filter(m => m.role === 'user')
    .map(m => m.content)
    .join(' ');

  // Extract email
  const emailMatch = userMessages.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
  if (emailMatch) {
    extracted.email = emailMatch[0];
  }

  // Extract phone
  const phoneMatch = userMessages.match(/(\+41|0041|0)\s?(\d{2})\s?(\d{3})\s?(\d{2})\s?(\d{2})/);
  if (phoneMatch) {
    extracted.phone = phoneMatch[0];
  }

  // Extract size (m²)
  const sizeMatch = userMessages.match(/(\d+)\s?(m²|m2|quadratmeter|qm)/i);
  if (sizeMatch) {
    extracted.size = `${sizeMatch[1]} m²`;
  }

  // Extract employees
  const employeeMatch = userMessages.match(/(\d+)\s?(mitarbeiter|personen|leute|employees)/i);
  if (employeeMatch) {
    extracted.employees = `${employeeMatch[1]} Mitarbeiter`;
  }

  // Extract timing keywords
  const timingKeywords = ['sofort', 'dringend', 'nächste woche', 'ab', 'morgen', 'heute', 'bald', 'monat', 'jahr'];
  for (const keyword of timingKeywords) {
    if (userMessages.toLowerCase().includes(keyword)) {
      extracted.timing = keyword;
      break;
    }
  }

  // Extract frequency
  const frequencyPatterns = [
    { pattern: /täglich/i, value: 'Täglich' },
    { pattern: /(\d+)\s?x?\s?(pro|in der)?\s?woche/i, value: (match: RegExpMatchArray) => `${match[1]}x pro Woche` },
    { pattern: /wöchentlich/i, value: 'Wöchentlich' },
    { pattern: /monatlich/i, value: 'Monatlich' },
    { pattern: /zweimal|2\s?mal/i, value: '2x pro Woche' }
  ];

  for (const { pattern, value } of frequencyPatterns) {
    const match = userMessages.match(pattern);
    if (match) {
      extracted.frequency = typeof value === 'function' ? value(match) : value;
      break;
    }
  }

  // Extract service
  const service = detectServiceFromText(userMessages);
  if (service) {
    extracted.service = service;
  }

  // Extract industry
  const industry = detectIndustry(userMessages);
  if (industry) {
    extracted.industry = industry;
  }

  // Extract city (Swiss cities)
  const swissCities = ['zürich', 'zug', 'luzern', 'bern', 'basel', 'genf', 'lausanne', 'winterthur', 'st. gallen', 'emmenbrücke'];
  for (const city of swissCities) {
    if (userMessages.toLowerCase().includes(city)) {
      extracted.city = city.charAt(0).toUpperCase() + city.slice(1);
      break;
    }
  }

  // Extract areas/rooms
  const areaKeywords = ['büro', 'toilette', 'wc', 'küche', 'empfang', 'konferenzraum', 'meeting', 'lager', 'cafeteria', 'flur', 'treppenhaus'];
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
 * Determine missing required fields for SALES QUALIFICATION
 */
function getMissingFields(extracted: ExtractedInfo): string[] {
  const missing: string[] = [];

  // Core qualification fields
  if (!extracted.service) missing.push('Dienstleistung');
  if (!extracted.industry) missing.push('Branche/Unternehmenstyp');

  // Discovery fields
  if (!extracted.employees && !extracted.size) missing.push('Unternehmensgröße');
  if (!extracted.frequency) missing.push('Reinigungsfrequenz');
  if (!extracted.areas) missing.push('Zu reinigende Bereiche');

  // Contact fields
  if (!extracted.email) missing.push('E-Mail');
  if (!extracted.name) missing.push('Name');
  if (!extracted.city) missing.push('Stadt/Standort');

  return missing;
}

/**
 * Determine conversation phase (5-phase model)
 */
function determinePhase(extracted: ExtractedInfo): number {
  // Phase 1: Discovery (industry/company type)
  if (!extracted.industry && !extracted.service) return 1;

  // Phase 2: Needs Assessment (areas, frequency, size)
  if (!extracted.areas || !extracted.frequency) return 2;

  // Phase 3: Solution Pitch (recommendation given)
  if (!extracted.email || !extracted.name) return 3;

  // Phase 4: Contact Collection (email, name, city)
  if (!extracted.email || !extracted.name || !extracted.city) return 4;

  // Phase 5: Ready to handoff
  return 5;
}

/**
 * Get industry-specific recommendations
 */
function getIndustryRecommendations(industry: string | undefined): string {
  if (!industry) return '';

  const industryData = INDUSTRY_RECOMMENDATIONS[industry as keyof typeof INDUSTRY_RECOMMENDATIONS];
  if (!industryData) return '';

  return `\n\n**EMPFEHLUNG FÜR DIESE BRANCHE:**\n${industryData.pitch}\n\nPassende Services: ${industryData.recommendations.join(', ')}`;
}

/**
 * Main chat function with AI
 */
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
      industry: extracted.industry,
      employees: extracted.employees,
      areas: extracted.areas,
      frequency: extracted.frequency,
      special_requirements: extracted.special_requirements
    };

    // Determine missing fields
    const missingFields = getMissingFields(mergedInfo);
    const phase = determinePhase(mergedInfo);

    // Build conversation history
    const conversationHistory = messages.map(msg =>
      `${msg.role === 'user' ? 'Kunde' : supporterName}: ${msg.content}`
    ).join('\n');

    // Determine if ready to send (MINIMUM: email + service + some qualification data)
    const readyToSend = !!(
      mergedInfo.email &&
      mergedInfo.service &&
      mergedInfo.name &&
      (mergedInfo.industry || mergedInfo.areas || mergedInfo.frequency)
    );

    // Get industry recommendations
    const industryReco = getIndustryRecommendations(mergedInfo.industry);

    // Build professional consultative sales prompt
    const prompt = `${WEBSITE_CONTEXT}

DU BIST: ${supporterName}, ${supporterGender === 'male' ? 'ein professioneller Sales Consultant' : 'eine professionelle Sales Consultant'} der Swiss Reinigungsfirma.

**DEINE ROLLE:**
Du bist KEIN einfacher Chatbot. Du bist ein **erfahrener Vertriebsberater**, der:
- Aktiv qualifizierende Fragen stellt
- Den Bedarf des Kunden analysiert
- Maßgeschneiderte Lösungen empfiehlt
- Wert aufbaut und Vertrauen schafft
- Umfassende Informationen für das Sales-Team sammelt

**5-PHASEN SALES PROZESS:**

Phase 1: DISCOVERY (Unternehmen/Branche verstehen)
- Was für ein Unternehmen? (Tech, Anwalt, Restaurant, etc.)
- Wie viele Mitarbeiter?
- Welche Branche?

Phase 2: NEEDS ASSESSMENT (Bedarf ermitteln)
- Welche Bereiche brauchen Reinigung? (Büro, Toiletten, Küche, etc.)
- Wie groß ist die Fläche? (m² oder Raumanzahl)
- Wie oft soll gereinigt werden? (täglich, 2x/Woche, etc.)
- Besondere Anforderungen?

Phase 3: SOLUTION PITCH (Empfehlungen geben)
- Basierend auf Branche: "Für Ihr [BRANCHE]-Unternehmen empfehle ich..."
- Zeige Wert: "Viele unserer Kunden aus Ihrer Branche nutzen auch..."
- Cross-Selling: "Zusätzlich könnte für Sie interessant sein..."

Phase 4: CONTACT COLLECTION (Kontaktdaten erfassen)
- Name
- E-Mail
- Telefon
- Stadt

Phase 5: HANDOFF (Übergabe ans Sales-Team)
- Zusammenfassung aller Infos
- Bereit zur Weiterleitung an Spezialisten

**AKTUELLE PHASE: ${phase}/5**

**BEREITS BEKANNTE INFORMATIONEN:**
${JSON.stringify(mergedInfo, null, 2)}

**FEHLENDE QUALIFIKATIONS-INFORMATIONEN:**
${missingFields.join(', ') || 'Alle wichtigen Infos vorhanden!'}

**GESPRÄCHSVERLAUF:**
${conversationHistory}

${industryReco}

${readyToSend ? `
**PHASE 5: BEREIT FÜR HANDOFF!**
Du hast genug Informationen gesammelt. Jetzt:
1. Fasse alle Infos kurz zusammen
2. Bestätige die Dienstleistung und Details
3. Sage dem Kunden, dass du die Anfrage an einen Spezialisten weiterleiten kannst
4. Warte auf Bestätigung
` : phase === 1 ? `
**PHASE 1: DISCOVERY**
Der Kunde möchte eine Reinigungsdienstleistung. Du weißt noch NICHT:
- Was für ein Unternehmen/Branche?
- Wie groß ist das Unternehmen?

FRAGE JETZT: "Um Ihnen die beste Lösung zu empfehlen: Was für ein Unternehmen haben Sie? (z.B. Büro, Restaurant, Praxis, etc.)"
` : phase === 2 ? `
**PHASE 2: NEEDS ASSESSMENT**
Du kennst die Branche. Jetzt ermittle den konkreten Bedarf:
- Welche Bereiche/Räume?
- Wie groß?
- Wie oft?

FRAGE JETZT nach dem nächsten fehlenden Detail: ${missingFields[0] || 'Bereiche'}
` : phase === 3 ? `
**PHASE 3: SOLUTION PITCH**
Du kennst den Bedarf. Jetzt mache eine Empfehlung:
- "Für Ihr Unternehmen empfehle ich..."
- Erkläre warum diese Lösung passt
- Dann frage nach Kontaktdaten für ein Angebot

MACHE JETZT einen kurzen Pitch und frage nach E-Mail
` : `
**PHASE 4: CONTACT COLLECTION**
Fast fertig! Sammle noch: ${missingFields.join(', ')}

FRAGE JETZT nach: ${missingFields[0]}
`}

**WICHTIGE REGELN:**
1. Sei natürlich, aber professionell
2. NIEMALS dieselbe Frage zweimal stellen
3. Stelle NUR 1 Frage pro Nachricht
4. Bestätige erhaltene Infos kurz
5. Mache konkrete Empfehlungen basierend auf Branche
6. Baue Vertrauen und Wert auf
7. Maximal 2-3 Sätze pro Antwort

ANTWORTE ALS ${supporterName}:`;

    const result = await model.generateContent(prompt);
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
      missingFields: ['E-Mail', 'Dienstleistung', 'Name', 'Stadt', 'Branche'],
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
