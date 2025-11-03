/**
 * Gemini AI Service
 * 
 * Provides AI-powered features using Google's Gemini Flash API
 * Uses GEMINI_API_KEY environment variable
 */

interface IndustryAnalysisRequest {
  industry: string;
}

interface IndustryAnalysisResponse {
  recommendation: string;
  services: string[];
  callToAction: string;
}

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
  };
}

interface ChatResponse {
  message: string;
  needsContactInfo: boolean;
  readyToSend: boolean;
}

// Website context for AI
const WEBSITE_CONTEXT = `
Du bist ein professioneller KI-Assistent für die Swiss Reinigungsfirma (BGS Gebäudeservice).

ÜBER UNS:
- Professionelle Gebäudereinigung in der Schweiz
- Standorte: Zürich, Zug, Luzern, Emmenbrücke
- 15+ Jahre Erfahrung
- 500+ zufriedene Kunden
- 24/7 Service
- ISO-Zertifizierung in Arbeit

UNSERE LEISTUNGEN:

Premium Services:
- Privatjet Reinigung
- Yacht Reinigung
- Private Housekeeping
- Luxusimmobilien

Business Services:
- Büroreinigung
- Industriereinigung
- Fassadenreinigung
- Fensterreinigung
- Hallenreinigung
- Maschinenreinigung
- Baureinigung
- Außenanlagen
- Facility Management

Basis Services:
- Unterhaltsreinigung
- Hausmeisterservice
- Winterdienst
- Beschaffung
- Sonderleistungen

KONTAKT:
- Telefon: +41 41 320 56 10
- E-Mail: info@bgs-service.ch
- Adresse: Tannhof 10, 6020 Emmenbrücke

DEIN TON:
- Professionell und seriös
- Kompetent und hilfsbereit
- Schnell und präzise
- Du gehörst zum Team
- Antworte auf Deutsch
`;

export async function analyzeIndustry(data: IndustryAnalysisRequest): Promise<IndustryAnalysisResponse> {
  const { industry } = data;

  try {
    // Dynamic import of Google GenAI
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not set');
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `${WEBSITE_CONTEXT}

Ein potenzieller Kunde aus der Branche "${industry}" besucht unsere Website.

AUFGABE:
1. Analysiere, welche unserer Reinigungsleistungen für diese Branche am relevantesten sind
2. Gib eine kurze, professionelle Empfehlung (max. 2-3 Sätze)
3. Liste die 3 wichtigsten passenden Services auf
4. Erstelle einen Call-to-Action

ANTWORT-FORMAT (JSON):
{
  "recommendation": "Kurze Empfehlung hier...",
  "services": ["Service 1", "Service 2", "Service 3"],
  "callToAction": "Motivierender CTA hier..."
}

Antworte NUR mit dem JSON-Objekt, ohne zusätzlichen Text.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Parse JSON response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return parsed;
    }

    // Fallback response
    return {
      recommendation: "Basierend auf Ihrer Branche empfehlen wir Ihnen unsere professionellen Reinigungsdienstleistungen.",
      services: ["Büroreinigung", "Unterhaltsreinigung", "Facility Management"],
      callToAction: "Kontaktieren Sie uns für ein unverbindliches Angebot!"
    };

  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Fallback response on error
    return {
      recommendation: "Vielen Dank für Ihr Interesse! Wir bieten professionelle Reinigungsdienstleistungen für Ihre Branche an.",
      services: ["Büroreinigung", "Unterhaltsreinigung", "Facility Management"],
      callToAction: "Kontaktieren Sie uns für eine persönliche Beratung!"
    };
  }
}

export async function chatWithAI(data: ChatRequest): Promise<ChatResponse> {
  const { messages, userInfo } = data;

  try {
    // Dynamic import of Google GenAI
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is not set');
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Build conversation history
    const conversationHistory = messages.map(msg => 
      `${msg.role === 'user' ? 'Kunde' : 'Du'}: ${msg.content}`
    ).join('\n');

    const hasContactInfo = userInfo && userInfo.name && userInfo.email;

    const prompt = `${WEBSITE_CONTEXT}

GESPRÄCHSVERLAUF:
${conversationHistory}

KONTAKTINFORMATIONEN:
${hasContactInfo ? `Name: ${userInfo.name}, E-Mail: ${userInfo.email}, Telefon: ${userInfo.phone || 'Nicht angegeben'}` : 'Noch keine Kontaktdaten'}

AUFGABE:
1. Beantworte die letzte Nachricht des Kunden professionell und hilfreich
2. Wenn du noch keine Kontaktdaten hast und das Gespräch fortgeschritten ist, frage höflich danach
3. Wenn du Kontaktdaten hast und das Gespräch abgeschlossen werden kann, biete an, die Anfrage an einen Spezialisten zu senden

ANTWORT-FORMAT (JSON):
{
  "message": "Deine Antwort hier...",
  "needsContactInfo": true/false,
  "readyToSend": true/false
}

- needsContactInfo: true wenn du nach Kontaktdaten fragen möchtest
- readyToSend: true wenn das Gespräch dokumentiert ist und an einen Spezialisten gesendet werden kann

Antworte NUR mit dem JSON-Objekt, ohne zusätzlichen Text.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Parse JSON response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return parsed;
    }

    // Fallback response
    return {
      message: "Vielen Dank für Ihre Nachricht. Wie kann ich Ihnen weiterhelfen?",
      needsContactInfo: false,
      readyToSend: false
    };

  } catch (error) {
    console.error('Gemini Chat API Error:', error);
    
    return {
      message: "Entschuldigung, es gab einen technischen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter +41 41 320 56 10.",
      needsContactInfo: false,
      readyToSend: false
    };
  }
}
