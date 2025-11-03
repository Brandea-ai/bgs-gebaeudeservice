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
  const customerMessages = messages.filter(m => m.role === 'user').map(m => m.content.toLowerCase());
  const fullText = customerMessages.join(' ');
  
  const detectedService = detectService(fullText);
  if (detectedService) info.service = detectedService;
  
  const sizeMatch = fullText.match(/(\d+)\s*(qm|m2|m²|quadratmeter|quadrat meter)/i);
  if (sizeMatch) info.size = `${sizeMatch[1]} qm`;
  
  const timingKeywords = ['nächste woche', 'nächster woche', 'näcsht woch', 'nächste monat', 'sofort', 'heute', 'morgen', 'bald', 'dringend', 'asap', 'schnell', 'in 2 monaten', '2 monate'];
  for (const keyword of timingKeywords) {
    if (fullText.includes(keyword)) {
      info.timing = keyword;
      break;
    }
  }
  
  const emailMatch = fullText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/);
  if (emailMatch) info.email = emailMatch[1];
  
  const phoneMatch = fullText.match(/(\+?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,4})/);
  if (phoneMatch) info.phone = phoneMatch[1];
  
  return info;
}

function getAllServicesDescription(): string {
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

// ===== CHAT API =====

const WEBSITE_CONTEXT = `
Du bist ein freundlicher, natürlicher KI-Assistent der Swiss Reinigungsfirma (BGS Gebäudeservice).

=== WICHTIG - PROFESSIONELLER GESPRÄCHSFLUSS ===
- Sei professionell, seriös und kompetent
- Stelle präzise Fragen wie ein erfahrener Berater
- KEIN sofortiges Formular - sammle Daten diskret im Gespräch
- Sei höflich und respektvoll, nicht übertrieben freundlich
- Max. 2-3 kurze, prägnante Sätze pro Antwort
- Nutze Fettschrift für wichtige Infos
- NIEMALS Emojis verwenden - absolut professionell bleiben

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

=== DATENERFASSUNG - EINZELNE FRAGEN ===
WICHTIG: Stelle IMMER NUR EINE FRAGE PRO NACHRICHT!

Erfrage die Daten in dieser Reihenfolge:
1. Welche Reinigungsleistung? (erkenne automatisch aus Kontext)
2. Wie groß ist die Fläche? (in qm)
3. Wann soll es losgehen? (Zeitpunkt)
4. Wie ist Ihr Name?
5. Wie heißt Ihr Unternehmen?
6. In welcher Stadt sind Sie?
7. Unter welcher Nummer kann ich Sie erreichen?
8. Und Ihre E-Mail-Adresse?

NIEMALS sagen: "benötige Kontaktdaten" oder "geben Sie Ihre Daten an"
Stattdessen: Einzeln fragen!

Beispiel:
❌ FALSCH: "Um Ihnen ein Angebot zu erstellen, benötige ich noch Ihre Kontaktdaten."
✅ RICHTIG: "Wie ist Ihr Name?"

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

    // Check if all contact info is available
    const hasAllContactInfo = !!(
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

    // Call Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const aiResponse = response.text();

    // Bestimme ob Kontaktdaten benötigt werden
    const needsContactInfo = !hasAllContactInfo && (
      aiResponse.toLowerCase().includes('kontaktdaten') ||
      aiResponse.toLowerCase().includes('e-mail') ||
      aiResponse.toLowerCase().includes('telefon')
    );

    // Bestimme ob bereit zum Senden
    const readyToSend = hasAllContactInfo && (
      aiResponse.toLowerCase().includes('soll ich') ||
      aiResponse.toLowerCase().includes('senden') ||
      aiResponse.toLowerCase().includes('weiterleiten')
    );

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
