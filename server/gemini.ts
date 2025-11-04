/**
 * Gemini AI Service - PROFESSIONAL CHATBOT SYSTEM
 *
 * Provides AI-powered chatbot with:
 * - Intelligent service detection
 * - Automatic information extraction
 * - Natural conversation flow
 * - Professional tone
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
      keywords: ['büro', 'office', 'arbeitsplatz', 'geschäft', 'bürogebäude', 'coworking']
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

  // Extract timing keywords
  const timingKeywords = ['sofort', 'dringend', 'nächste woche', 'ab', 'morgen', 'heute', 'bald', 'monat', 'jahr'];
  for (const keyword of timingKeywords) {
    if (userMessages.toLowerCase().includes(keyword)) {
      extracted.timing = keyword;
      break;
    }
  }

  // Extract service
  const service = detectServiceFromText(userMessages);
  if (service) {
    extracted.service = service;
  }

  // Extract city (Swiss cities)
  const swissCities = ['zürich', 'zug', 'luzern', 'bern', 'basel', 'genf', 'lausanne', 'winterthur', 'st. gallen', 'emmenbrücke'];
  for (const city of swissCities) {
    if (userMessages.toLowerCase().includes(city)) {
      extracted.city = city.charAt(0).toUpperCase() + city.slice(1);
      break;
    }
  }

  return extracted;
}

/**
 * Determine missing required fields
 */
function getMissingFields(extracted: ExtractedInfo): string[] {
  const missing: string[] = [];

  if (!extracted.email) missing.push('E-Mail');
  if (!extracted.service) missing.push('Dienstleistung');
  if (!extracted.name) missing.push('Name');
  if (!extracted.city) missing.push('Stadt/Standort');

  return missing;
}

/**
 * Determine conversation phase
 */
function determinePhase(extracted: ExtractedInfo): number {
  if (!extracted.service) return 1; // Phase 1: Identify service
  if (!extracted.email || !extracted.name || !extracted.city) return 2; // Phase 2: Collect details
  return 3; // Phase 3: Ready to send
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
      timing: extracted.timing
    };

    // Determine missing fields
    const missingFields = getMissingFields(mergedInfo);
    const phase = determinePhase(mergedInfo);

    // Build conversation history
    const conversationHistory = messages.map(msg =>
      `${msg.role === 'user' ? 'Kunde' : supporterName}: ${msg.content}`
    ).join('\n');

    // Determine if ready to send (MINIMUM: email + service)
    const readyToSend = !!(mergedInfo.email && mergedInfo.service);

    // Build professional system prompt
    const prompt = `${WEBSITE_CONTEXT}

DU BIST: ${supporterName}, ${supporterGender === 'male' ? 'ein professioneller Berater' : 'eine professionelle Beraterin'} der Swiss Reinigungsfirma.

WICHTIGE REGELN:
1. Sei natürlich und menschlich
2. NIEMALS dieselbe Frage zweimal stellen
3. Wenn Info bereits erwähnt wurde, nutze sie und bestätige sie!
4. Frage nur nach EINER fehlenden Info pro Nachricht
5. Sei präzise und professionell
6. Keine langen Texte - max 2-3 kurze Sätze

GESPRÄCHS-PHASEN:
Phase 1: Service identifizieren (Was möchten Sie reinigen lassen?)
Phase 2: Details erfassen (Name, E-Mail, Stadt für Angebot)
Phase 3: Abschluss (Alle Infos vorhanden, bereit zum Senden)

AKTUELLE PHASE: ${phase}

BEREITS BEKANNTE INFORMATIONEN:
${JSON.stringify(mergedInfo, null, 2)}

FEHLENDE PFLICHTFELDER: ${missingFields.join(', ') || 'Keine - alle Infos vorhanden!'}

GESPRÄCHSVERLAUF:
${conversationHistory}

${readyToSend ? `
**WICHTIG**: Alle notwendigen Informationen sind vorhanden!
- Bestätige die Informationen kurz
- Sage, dass du die Anfrage an einen Spezialisten weiterleiten kannst
- Warte auf Bestätigung des Kunden
` : `
**AUFGABE**:
- Beantworte die letzte Nachricht des Kunden
- Frage nach EINER fehlenden Info: ${missingFields[0] || 'Keine'}
- Sei freundlich und natürlich
`}

ANTWORTE ALS ${supporterName} (maximal 2-3 Sätze):`;

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
      missingFields: ['E-Mail', 'Dienstleistung', 'Name', 'Stadt'],
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
