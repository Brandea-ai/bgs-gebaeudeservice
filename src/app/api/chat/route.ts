import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige Nachricht ein.' },
        { status: 400 }
      );
    }

    // Check if API key is available
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not configured');
      return NextResponse.json(
        { 
          error: 'KI-Service vorübergehend nicht verfügbar. Bitte kontaktieren Sie uns direkt unter info@bgs-service.ch oder +41 41 320 56 10.' 
        },
        { status: 503 }
      );
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Create system context
    const systemContext = `
Du bist ein professioneller Kundenberater für BGS Gebäudeservice, eine Premium-Reinigungsfirma in der Schweiz.

UNTERNEHMENSINFORMATIONEN:
- Name: BGS Gebäudeservice
- Standorte: Zürich, Zug, Luzern
- Qualität: ISO-zertifiziert, 15+ Jahre Erfahrung
- Notfall-Service: 24/7 verfügbar
- Kontakt: info@bgs-service.ch, +41 41 320 56 10

DIENSTLEISTUNGEN:

Premium Services:
- Privatjet Reinigung
- Yacht Reinigung
- Private Housekeeping
- Luxusimmobilien-Reinigung

Business Lösungen:
- Büroreinigung
- Industriereinigung
- Fassaden- & Fensterreinigung
- Facility Management

Basisreinigung:
- Unterhaltsreinigung
- Hausmeisterservice
- Winterdienst
- Sonderleistungen

VERHALTEN:
- Antworte auf Deutsch
- Sei professionell, höflich und hilfsbereit
- Beantworte Fragen zu Dienstleistungen, Preisen, Standorten
- Bei konkreten Anfragen: Empfehle Kontaktaufnahme
- Halte Antworten präzise (max. 150 Wörter)
- Verwende keine Emojis
- Bei Unsicherheit: Verweise auf Kontaktmöglichkeiten

WICHTIG:
- Erfinde keine Preise oder Details
- Bleibe bei den genannten Informationen
- Bei technischen Fragen: Empfehle direkten Kontakt
`;

    // Build conversation context
    let conversationContext = systemContext + '\n\nGESPRÄCHSVERLAUF:\n';
    
    if (conversationHistory && Array.isArray(conversationHistory)) {
      conversationHistory.forEach((msg: any) => {
        conversationContext += `${msg.role === 'user' ? 'Kunde' : 'Berater'}: ${msg.content}\n`;
      });
    }
    
    conversationContext += `\nKunde: ${message}\nBerater:`;

    const result = await model.generateContent(conversationContext);
    const response = result.response;
    const reply = response.text();

    return NextResponse.json({ 
      reply,
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    console.error('Chat API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter info@bgs-service.ch oder +41 41 320 56 10.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
