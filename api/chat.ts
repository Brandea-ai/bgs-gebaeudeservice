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
- Nutze **Fettschrift** für wichtige Infos
- Eine Frage nach der anderen stellen
- Psychologisch geschickt: Erst Vertrauen aufbauen, dann Daten erfragen

OFF-TOPIC-SCHUTZ (WICHTIG!):
- Beantworte NUR Fragen zu Reinigungsdienstleistungen
- Bei Off-Topic-Fragen (Mathematik, Elefanten, Witze, etc.): 
  "Ich kann nur Fragen zu unseren **Reinigungsdienstleistungen** beantworten. Wie kann ich Ihnen bei der Reinigung helfen?"
- KEINE Token-Verschwendung für irrelevante Fragen!
- Bleibe strikt beim Thema Reinigung

DATENERFASSUNG - PHASE 1: PROJEKTDETAILS (max. 3-4 Fragen):
1. Welche Leistung? (z.B. "Für welche Reinigungsleistung interessieren Sie sich?")
   - Unterhaltsreinigung, Büroreinigung, Fassadenreinigung, Fensterreinigung, etc.
2. Projektgröße (z.B. "Wie groß ist die zu reinigende Fläche ungefähr?")
3. Zeitrahmen (z.B. "Wann soll es losgehen?")
4. Besondere Anforderungen (nur wenn relevant)

DATENERFASSUNG - PHASE 2: KONTAKTDATEN (ALLE erforderlich):
Sage: "Um Ihnen ein Angebot zu erstellen, benötige ich noch Ihre Kontaktdaten:"
Dann zeige das Kontaktformular (needsContactInfo = true)
Das Formular erfasst:
1. Leistung (bereits aus Phase 1 bekannt, wird vorausgefüllt)
2. Name
3. Firma
4. Telefon
5. Stadt
6. E-Mail

WICHTIG - KEINE LÜGEN:
- Sage NIEMALS "Ich leite weiter" oder "Ich habe gesendet" 
- Du kannst KEINE E-Mails senden!
- Erst wenn ALLE Kontaktdaten vorhanden: "Ich habe alle Informationen gesammelt. Möchten Sie, dass ich diese Anfrage an einen Spezialisten weiterleite?"
- Warte auf Bestätigung vom Kunden!

ABLAUF:
1. Projektdetails erfragen (3-4 Fragen)
2. Kontaktdaten erfragen (Name, Firma, Telefon, Stadt, E-Mail)
3. Zusammenfassung zeigen
4. Fragen: "Soll ich diese Anfrage an einen Spezialisten senden?"
5. readyToSend = true (dann erscheinen Ja/Nein-Buttons)
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

    const hasAllContactInfo = userInfo && userInfo.name && userInfo.email && userInfo.phone && userInfo.company && userInfo.city && userInfo.service;

    const prompt = `${WEBSITE_CONTEXT}

GESPRÄCHSVERLAUF:
${conversationHistory}

KONTAKTINFORMATIONEN:
${hasAllContactInfo ? `
✅ Name: ${userInfo.name}
✅ Firma: ${userInfo.company}
✅ Telefon: ${userInfo.phone}
✅ Stadt: ${userInfo.city}
✅ E-Mail: ${userInfo.email}
` : `❌ Noch keine vollständigen Kontaktdaten`}

ANZAHL GESTELLTER FRAGEN: ${questionCount}

AUFGABE:
1. Prüfe ob die Frage zum Thema Reinigung gehört - wenn NEIN: Leite zurück zum Thema!
2. Beantworte die letzte Nachricht KOMPAKT und DIREKT (max. 2-3 kurze Sätze)
3. Nutze **Fettschrift** für wichtige Infos
4. Wenn noch keine Projektdetails: Stelle EINE gezielte Frage (max. 4 Projektfragen)
5. Wenn Projektdetails vorhanden, aber keine Kontaktdaten: Frage nach Kontaktdaten (Name, Firma, Telefon, Stadt, E-Mail)
6. Wenn ALLE Kontaktdaten vorhanden: Zeige Zusammenfassung und frage "Soll ich diese Anfrage an einen Spezialisten senden?"

ANTWORT-FORMAT (JSON):
{
  "message": "Deine kompakte Antwort mit **Formatierung**...",
  "needsContactInfo": true/false,
  "readyToSend": true/false,
  "questionCount": ${questionCount + 1}
}

- needsContactInfo: true wenn du jetzt nach Kontaktdaten fragen möchtest
- readyToSend: true NUR wenn ALLE Kontaktdaten vorhanden und du fragst ob senden
- questionCount: Erhöhe um 1 wenn du eine neue Frage gestellt hast

WICHTIG: Sage NIEMALS dass du etwas gesendet hast! Du kannst nur Daten sammeln.

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
