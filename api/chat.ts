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
- E-Mail: info@brandea.de
- Adresse: Tannhof 10, 6020 Emmenbrücke

KOMMUNIKATIONSSTIL:
- Kompakt und direkt - keine langen Texte
- Professionell aber freundlich
- Maximal 2-3 kurze Sätze pro Antwort
- Nutze Formatierung für bessere Lesbarkeit
- Eine Frage nach der anderen stellen
- Psychologisch geschickt: Erst Vertrauen aufbauen, dann Daten erfragen

DATENERFASSUNG (max. 3-5 Fragen):
1. Art des Projekts/Service (diskret erfragen)
2. Projektgröße (z.B. "Wie groß ist die zu reinigende Fläche ungefähr?")
3. Zeitrahmen (z.B. "Wann soll es losgehen?")
4. Besondere Anforderungen (nur wenn relevant)
5. NICHT nach Details wie Fensteranzahl fragen - nur Grunddaten

WICHTIG:
- Stelle immer nur EINE Frage pro Nachricht
- Warte auf die Antwort, bevor du weitermachst
- Nach 3-5 Fragen hast du genug Infos für ein Angebot
- Weise darauf hin, dass ein Spezialist sich innerhalb 12 Stunden (werktags) meldet
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
    const { messages, userInfo, questionCount = 0 } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY not set');
      return res.status(200).json({
        message: "Entschuldigung, technischer Fehler. Bitte kontaktieren Sie uns direkt:\n\n📞 **+41 41 320 56 10**\n📧 **info@brandea.de**",
        needsContactInfo: false,
        readyToSend: false,
        questionCount: 0
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    // Build conversation history
    const conversationHistory = messages.map((msg: any) => 
      `${msg.role === 'user' ? 'Kunde' : 'Du'}: ${msg.content}`
    ).join('\n');

    const hasContactInfo = userInfo && userInfo.name && userInfo.email;
    const maxQuestionsReached = questionCount >= 5;

    const prompt = `${WEBSITE_CONTEXT}

GESPRÄCHSVERLAUF:
${conversationHistory}

KONTAKTINFORMATIONEN:
${hasContactInfo ? `Name: ${userInfo.name}, E-Mail: ${userInfo.email}, Telefon: ${userInfo.phone || 'Nicht angegeben'}` : 'Noch keine Kontaktdaten'}

ANZAHL GESTELLTER FRAGEN: ${questionCount}

AUFGABE:
1. Beantworte die letzte Nachricht des Kunden KOMPAKT und DIREKT (max. 2-3 kurze Sätze)
2. Nutze **Fettschrift** für wichtige Infos und Formatierung für bessere Lesbarkeit
3. Wenn der Kunde nur Beratung möchte: Stelle EINE gezielte Frage zur Datenerfassung (max. 5 Fragen insgesamt)
4. Nach 3-5 Fragen: Weise darauf hin, dass ein Spezialist sich innerhalb 12 Stunden (werktags) meldet
5. Wenn genug Infos vorhanden: Biete an, die Anfrage an einen Spezialisten zu senden

ANTWORT-FORMAT (JSON):
{
  "message": "Deine kompakte Antwort mit **Formatierung**...",
  "needsContactInfo": true/false,
  "readyToSend": true/false,
  "questionCount": ${questionCount + 1}
}

- needsContactInfo: true wenn du nach Kontaktdaten fragen möchtest (erst nach 2-3 Fachfragen)
- readyToSend: true wenn genug Infos gesammelt wurden (nach 3-5 Fragen)
- questionCount: Erhöhe um 1 wenn du eine neue Frage gestellt hast

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
      readyToSend: false,
      questionCount: 0
    });

  } catch (error) {
    console.error('Gemini Chat API Error:', error);
    
    return res.status(200).json({
      message: "Entschuldigung, technischer Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns:\n\n📞 **+41 41 320 56 10**\n📧 **info@brandea.de**",
      needsContactInfo: false,
      readyToSend: false,
      questionCount: 0
    });
  }
}
