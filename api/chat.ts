import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

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

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, userInfo } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY not set');
      return res.status(200).json({
        message: "Entschuldigung, es gab einen technischen Fehler. Bitte kontaktieren Sie uns direkt unter +41 41 320 56 10.",
        needsContactInfo: false,
        readyToSend: false
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    // Build conversation history
    const conversationHistory = messages.map((msg: any) => 
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
      return res.status(200).json(parsed);
    }

    // Fallback response
    return res.status(200).json({
      message: "Vielen Dank für Ihre Nachricht. Wie kann ich Ihnen weiterhelfen?",
      needsContactInfo: false,
      readyToSend: false
    });

  } catch (error) {
    console.error('Gemini Chat API Error:', error);
    
    return res.status(200).json({
      message: "Entschuldigung, es gab einen technischen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter +41 41 320 56 10.",
      needsContactInfo: false,
      readyToSend: false
    });
  }
}
