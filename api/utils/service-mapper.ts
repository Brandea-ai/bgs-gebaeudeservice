// Service Mapping und Identifikationscode-Generator
// Basierend auf der echten BGS Website-Struktur: 18 Leistungen in 3 Kategorien

export interface ServiceMapping {
  code: string;
  name: string;
  category: 'Premium Services' | 'Business Lösungen' | 'Basisreinigung';
  keywords: string[];
  description: string;
}

// ALLE 18 verfügbaren Reinigungsleistungen mit korrekten Kürzeln
export const SERVICE_MAPPINGS: ServiceMapping[] = [
  // ===== PREMIUM SERVICES (4 Leistungen) =====
  {
    code: 'PJ',
    name: 'Privatjet Reinigung',
    category: 'Premium Services',
    description: 'Exklusive Reinigung von Privatjets und Businessjets mit höchster Sorgfalt und Diskretion.',
    keywords: [
      'privatjet', 'jet', 'flugzeug', 'private jet', 'businessjet',
      'business jet', 'aircraft', 'luftfahrzeug', 'privat jet',
      'privatflugzeug', 'jet reinigung', 'flugzeugreinigung'
    ]
  },
  {
    code: 'YR',
    name: 'Yacht Reinigung',
    category: 'Premium Services',
    description: 'Professionelle Reinigung von Yachten, Booten und Schiffen für höchste Ansprüche.',
    keywords: [
      'yacht', 'boot', 'schiff', 'segelboot', 'motorboot',
      'segelyacht', 'motoryacht', 'yacht reinigung', 'boot reinigung',
      'schiffsreinigung', 'bootspflege', 'yachtpflege'
    ]
  },
  {
    code: 'PH',
    name: 'Private Housekeeping',
    category: 'Premium Services',
    description: 'Diskreter Housekeeping-Service für Privathaushalte mit Butler-Qualität.',
    keywords: [
      'housekeeping', 'haushalt', 'privat haushalt', 'butler',
      'private housekeeping', 'haushälterin', 'haushaltshilfe',
      'privathaushalt', 'haushaltsservice', 'hauspersonal'
    ]
  },
  {
    code: 'LI',
    name: 'Luxusimmobilien-Reinigung',
    category: 'Premium Services',
    description: 'Exklusive Reinigung von Luxusimmobilien, Villen und Penthäusern.',
    keywords: [
      'luxusimmobilien', 'villa', 'luxus', 'penthouse', 'luxuswohnung',
      'luxusimmobilie', 'luxusvilla', 'herrschaftshaus', 'anwesen',
      'luxusobjekt', 'premium immobilie', 'luxus immobilie'
    ]
  },

  // ===== BUSINESS LÖSUNGEN (9 Leistungen) =====
  {
    code: 'BÜ',
    name: 'Büroreinigung',
    category: 'Business Lösungen',
    description: 'Professionelle Reinigung von Büros, Arbeitsplätzen und Bürogebäuden.',
    keywords: [
      'büro', 'büroreinigung', 'office', 'arbeitsplatz', 'bürogebäude',
      'bürofläche', 'bürorienigung', 'buro', 'buero', 'büros',
      'office cleaning', 'arbeitsplatzreinigung', 'büroräume',
      'autohaus büro', 'praxis', 'kanzlei', 'verwaltung'
    ]
  },
  {
    code: 'IR',
    name: 'Industriereinigung',
    category: 'Business Lösungen',
    description: 'Reinigung von Industrieanlagen, Fabriken und Produktionsstätten.',
    keywords: [
      'industrie', 'industriereinigung', 'fabrik', 'werk', 'produktion',
      'industriehalle', 'produktionshalle', 'fertigungshalle',
      'industrieanlage', 'produktionsstätte', 'industriebetrieb',
      'industrierienigung', 'fabrikreinigung', 'werksreinigung'
    ]
  },
  {
    code: 'FR',
    name: 'Fassadenreinigung',
    category: 'Business Lösungen',
    description: 'Professionelle Reinigung von Gebäudefassaden und Außenwänden.',
    keywords: [
      'fassade', 'fassadenreinigung', 'außenreinigung', 'gebäudefassade',
      'fassadenrienigung', 'aussenfassade', 'außenfassade', 'fassadenpflege',
      'gebäudeaußenreinigung', 'fassadenwäsche'
    ]
  },
  {
    code: 'FE',
    name: 'Fensterreinigung',
    category: 'Business Lösungen',
    description: 'Streifenfreie Reinigung von Fenstern, Glasflächen und Scheiben.',
    keywords: [
      'fenster', 'fensterreinigung', 'glasreinigung', 'scheiben',
      'fensterputzen', 'fenster putzen', 'glasscheiben', 'fensterscheiben',
      'fensterrienigung', 'glas reinigung', 'scheibenreinigung',
      'fenster waschen', 'glasflächen'
    ]
  },
  {
    code: 'HR',
    name: 'Hallenreinigung',
    category: 'Business Lösungen',
    description: 'Reinigung von Lager-, Produktions- und Sporthallen.',
    keywords: [
      'halle', 'hallenreinigung', 'lagerhalle', 'produktionshalle',
      'sporthalle', 'messehalle', 'veranstaltungshalle', 'hallenboden',
      'hallenrienigung', 'hallen reinigung', 'großraum'
    ]
  },
  {
    code: 'MR',
    name: 'Maschinenreinigung',
    category: 'Business Lösungen',
    description: 'Fachgerechte Reinigung von Produktionsmaschinen und Anlagen.',
    keywords: [
      'maschine', 'maschinenreinigung', 'anlagenreinigung', 'produktionsmaschinen',
      'maschinen', 'maschinenrienigung', 'anlagen', 'produktionsanlage',
      'maschinenpflege', 'anlagenpflege', 'maschinenpark'
    ]
  },
  {
    code: 'BR',
    name: 'Baureinigung',
    category: 'Business Lösungen',
    description: 'Professionelle Reinigung von Baustellen, Neubauten und nach Bauarbeiten.',
    keywords: [
      'bau', 'baureinigung', 'baustelle', 'baustellenreinigung', 'neubau',
      'rohbau', 'endreinigung', 'bauendreinigung', 'bauabschlussreinigung',
      'baurienigung', 'baustellenrienigung', 'besutellen', 'baustel',
      'baustell', 'neubaureinigung', 'rohbaureinigung', 'bauschlussreinigung',
      'baufeinreinigung', 'bauabnahme', 'bauübergabe'
    ]
  },
  {
    code: 'AA',
    name: 'Außenanlagen',
    category: 'Business Lösungen',
    description: 'Reinigung und Pflege von Außenanlagen, Höfen und Parkplätzen.',
    keywords: [
      'außenanlagen', 'außenbereich', 'hof', 'parkplatz', 'gehweg',
      'aussena nlagen', 'aussenbereich', 'außenanlage', 'hofbereich',
      'parkplatzreinigung', 'gehwegreinigung', 'außengelände',
      'außenflächen', 'freiflächen'
    ]
  },
  {
    code: 'FM',
    name: 'Facility Management',
    category: 'Business Lösungen',
    description: 'Umfassendes Gebäudemanagement und Objektbetreuung.',
    keywords: [
      'facility', 'facility management', 'gebäudemanagement', 'objektbetreuung',
      'facilitymanagement', 'gebäudeverwaltung', 'objektmanagement',
      'facility service', 'gebäudeservice', 'objektservice',
      'fm', 'gebäudetechnik'
    ]
  },

  // ===== BASISREINIGUNG (5 Leistungen) =====
  {
    code: 'UR',
    name: 'Unterhaltsreinigung',
    category: 'Basisreinigung',
    description: 'Regelmäßige Unterhaltsreinigung für Wohn- und Geschäftsobjekte.',
    keywords: [
      'unterhalt', 'unterhaltsreinigung', 'regelmäßig', 'laufend',
      'wartung', 'pflege', 'unterhaltsrienigung', 'unterhaltung',
      'regelmäßige reinigung', 'laufende reinigung', 'kontinuierliche reinigung',
      'dauerreinigung', 'unterhaltsservice'
    ]
  },
  {
    code: 'HS',
    name: 'Hausmeisterservice',
    category: 'Basisreinigung',
    description: 'Hausmeisterdienste und Facility-Service für Immobilien.',
    keywords: [
      'hausmeister', 'hausmeisterservice', 'facility', 'hauswart',
      'hausmeisterdienst', 'hauswartung', 'hausbetreuung',
      'immobilienbetreuung', 'objektbetreuung', 'hausservice'
    ]
  },
  {
    code: 'WD',
    name: 'Winterdienst',
    category: 'Basisreinigung',
    description: 'Schneeräumung, Streudienst und Winterbetreuung.',
    keywords: [
      'winter', 'winterdienst', 'schnee', 'schneeräumung', 'streudienst',
      'räumdienst', 'schneedienst', 'schnee räumen', 'schneebeseitigung',
      'winterbetreuung', 'glättebekämpfung', 'streuen', 'räumen'
    ]
  },
  {
    code: 'BE',
    name: 'Beschaffung',
    category: 'Basisreinigung',
    description: 'Beschaffung von Reinigungsmitteln und Material.',
    keywords: [
      'beschaffung', 'einkauf', 'material', 'reinigungsmittel',
      'materialbeschaffung', 'einkaufsservice', 'beschaffungsservice',
      'reinigungsmaterialien', 'reinigungsprodukte', 'verbrauchsmaterial'
    ]
  },
  {
    code: 'SR',
    name: 'Sonderleistungen',
    category: 'Basisreinigung',
    description: 'Spezialreinigungen für besondere Objekte wie Zoos, Kinos, Theater, Museen und Krankenhäuser.',
    keywords: [
      'sonder', 'sonderleistungen', 'spezial', 'spezialreinigung',
      'zoo', 'kino', 'theater', 'museum', 'krankenhaus', 'klinik',
      'sonderreinigung', 'speziell', 'spezielle reinigung', 'sonderservice',
      'spezialservice', 'tierpark', 'cinema', 'hospital', 'galerie',
      'ausstellung', 'veranstaltungsort', 'kultureinrichtung',
      'gesundheitseinrichtung', 'medizinische einrichtung'
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
  const sizeMatch = fullText.match(/(\d+)\s*(qm|m2|m²|quadratmeter|quadrat meter)/i);
  if (sizeMatch) {
    info.size = `${sizeMatch[1]} qm`;
  }
  
  // Erkenne Zeitangaben
  const timingKeywords = [
    'nächste woche', 'nächster woche', 'näcsht woch', 'nächste monat',
    'sofort', 'heute', 'morgen', 'bald', 'dringend', 'asap', 'schnell'
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

/**
 * Gibt eine vollständige Beschreibung aller verfügbaren Leistungen zurück
 * Für den KI-Prompt (vollständige Informationen, keine Kürzungen!)
 */
export function getAllServicesDescription(): string {
  const premiumServices = SERVICE_MAPPINGS.filter(s => s.category === 'Premium Services');
  const businessServices = SERVICE_MAPPINGS.filter(s => s.category === 'Business Lösungen');
  const basicServices = SERVICE_MAPPINGS.filter(s => s.category === 'Basisreinigung');
  
  return `
PREMIUM SERVICES (Exklusive Reinigungsdienstleistungen für höchste Ansprüche):
${premiumServices.map((s, i) => `${i + 1}. ${s.name} (${s.code}): ${s.description}`).join('\n')}

BUSINESS LÖSUNGEN (Professionelle Gebäudereinigung und Facility Management):
${businessServices.map((s, i) => `${i + 1}. ${s.name} (${s.code}): ${s.description}`).join('\n')}

BASISREINIGUNG (Zuverlässige Unterhaltsreinigung und Hausmeisterservice):
${basicServices.map((s, i) => `${i + 1}. ${s.name} (${s.code}): ${s.description}`).join('\n')}
  `.trim();
}
