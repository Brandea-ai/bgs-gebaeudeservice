// Service Mapping und Identifikationscode-Generator

export interface ServiceMapping {
  code: string;
  name: string;
  keywords: string[];
}

// Alle verfügbaren Reinigungsleistungen mit Kürzeln
export const SERVICE_MAPPINGS: ServiceMapping[] = [
  {
    code: 'BR',
    name: 'Baustellenreinigung',
    keywords: [
      'baustelle', 'baustellenreinigung', 'baureinigung', 'neubau', 
      'rohbau', 'endreinigung', 'bauendreinigung', 'bauabschlussreinigung',
      'baustellenrienigung', 'besutellen', 'baustel', 'baustell'
    ]
  },
  {
    code: 'BÜ',
    name: 'Büroreinigung',
    keywords: [
      'büro', 'büroreinigung', 'office', 'arbeitsplatz', 'bürogebäude',
      'bürorienigung', 'buro', 'buero', 'büros', 'bürofläche'
    ]
  },
  {
    code: 'UR',
    name: 'Unterhaltsreinigung',
    keywords: [
      'unterhalt', 'unterhaltsreinigung', 'regelmäßig', 'laufend',
      'wartung', 'pflege', 'unterhaltsrienigung', 'unterhaltung'
    ]
  },
  {
    code: 'FR',
    name: 'Fassadenreinigung',
    keywords: [
      'fassade', 'fassadenreinigung', 'fenster', 'fensterreinigung',
      'glasreinigung', 'außenreinigung', 'fassadenrienigung'
    ]
  },
  {
    code: 'SR',
    name: 'Spezialreinigung',
    keywords: [
      'spezial', 'spezialreinigung', 'zoo', 'kino', 'theater',
      'museum', 'krankenhaus', 'klinik', 'labor', 'reinraum',
      'industriereinigung', 'sonderreinigung', 'spezielle'
    ]
  },
  {
    code: 'HR',
    name: 'Hausmeisterservice',
    keywords: [
      'hausmeister', 'hausmeisterservice', 'facility', 'management',
      'winterdienst', 'schneeräumung', 'gartenpflege'
    ]
  },
  {
    code: 'GR',
    name: 'Grundreinigung',
    keywords: [
      'grundreinigung', 'tiefenreinigung', 'intensivreinigung',
      'grundrienigung', 'tiefen', 'intensiv'
    ]
  },
  {
    code: 'TR',
    name: 'Treppenreinigung',
    keywords: [
      'treppe', 'treppenhaus', 'treppenreinigung', 'treppenrienigung'
    ]
  },
  {
    code: 'PR',
    name: 'Privatreinigung',
    keywords: [
      'privat', 'privatreinigung', 'wohnung', 'haus', 'villa',
      'privathaushalt', 'privatrienigung'
    ]
  },
  {
    code: 'IR',
    name: 'Industriereinigung',
    keywords: [
      'industrie', 'industriereinigung', 'fabrik', 'werk', 'produktion',
      'halle', 'lager', 'industrierienigung'
    ]
  }
];

/**
 * Intelligente Erkennung der Reinigungsleistung aus Kundentext
 * Unterstützt Rechtschreibfehler und verschiedene Variationen
 */
export function detectService(text: string): ServiceMapping | null {
  const lowerText = text.toLowerCase();
  
  // Durchsuche alle Service-Mappings
  for (const service of SERVICE_MAPPINGS) {
    for (const keyword of service.keywords) {
      if (lowerText.includes(keyword)) {
        return service;
      }
    }
  }
  
  return null;
}

/**
 * Generiert einen eindeutigen Identifikationscode
 * Format: [KÜRZEL][DDMMYYYY][LAUFNUMMER]
 * Beispiel: BR10022025000001
 */
export function generateIdentificationCode(serviceCode: string): string {
  const now = new Date();
  
  // Datum im Format DDMMYYYY
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const dateStr = `${day}${month}${year}`;
  
  // Laufnummer (6-stellig)
  // In Produktion: Aus Datenbank holen und inkrementieren
  // Für jetzt: Zufällige Nummer basierend auf Timestamp
  const timestamp = now.getTime();
  const runningNumber = String(timestamp % 1000000).padStart(6, '0');
  
  return `${serviceCode}${dateStr}${runningNumber}`;
}

/**
 * Extrahiert Informationen aus dem Gesprächsverlauf
 */
export function extractInfoFromConversation(messages: any[]): {
  service?: ServiceMapping;
  size?: string;
  timing?: string;
  name?: string;
  company?: string;
  city?: string;
  phone?: string;
  email?: string;
} {
  const info: any = {};
  
  // Durchsuche alle Kundennachrichten
  const customerMessages = messages
    .filter(m => m.role === 'user')
    .map(m => m.content.toLowerCase());
  
  const fullText = customerMessages.join(' ');
  
  // Erkenne Reinigungsleistung
  const detectedService = detectService(fullText);
  if (detectedService) {
    info.service = detectedService;
  }
  
  // Erkenne Größe (qm, m2, quadratmeter)
  const sizeMatch = fullText.match(/(\d+)\s*(qm|m2|m²|quadratmeter)/i);
  if (sizeMatch) {
    info.size = `${sizeMatch[1]} qm`;
  }
  
  // Erkenne Zeitangaben
  const timingKeywords = [
    'nächste woche', 'nächster woche', 'näcsht woch', 'nächste monat',
    'sofort', 'heute', 'morgen', 'bald', 'dringend', 'asap'
  ];
  for (const keyword of timingKeywords) {
    if (fullText.includes(keyword)) {
      info.timing = keyword;
      break;
    }
  }
  
  // Erkenne E-Mail
  const emailMatch = fullText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
  if (emailMatch) {
    info.email = emailMatch[1];
  }
  
  // Erkenne Telefonnummer
  const phoneMatch = fullText.match(/(\+?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4})/);
  if (phoneMatch) {
    info.phone = phoneMatch[1];
  }
  
  return info;
}
