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
    const { industry } = req.body;

    if (!industry) {
      return res.status(400).json({ error: 'Industry is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY not set');
      return res.status(500).json({
        recommendation: "Vielen Dank für Ihr Interesse! Wir bieten professionelle Reinigungsdienstleistungen für Ihre Branche an.",
        services: ["Büroreinigung", "Unterhaltsreinigung", "Facility Management"],
        callToAction: "Kontaktieren Sie uns für eine persönliche Beratung!"
      });
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
      return res.status(200).json(parsed);
    }

    // Fallback response
    return res.status(200).json({
      recommendation: "Basierend auf Ihrer Branche empfehlen wir Ihnen unsere professionellen Reinigungsdienstleistungen.",
      services: ["Büroreinigung", "Unterhaltsreinigung", "Facility Management"],
      callToAction: "Kontaktieren Sie uns für ein unverbindliches Angebot!"
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Fallback response on error
    return res.status(200).json({
      recommendation: "Vielen Dank für Ihr Interesse! Wir bieten professionelle Reinigungsdienstleistungen für Ihre Branche an.",
      services: ["Büroreinigung", "Unterhaltsreinigung", "Facility Management"],
      callToAction: "Kontaktieren Sie uns für eine persönliche Beratung!"
    });
  }
}
