import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: NextRequest) {
  try {
    const { industry } = await request.json();

    if (!industry || typeof industry !== 'string') {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige Branche ein.' },
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

    // Create context from website information
    const context = `
Du bist ein Experte für professionelle Gebäudereinigung in der Schweiz. 
Analysiere die Branche "${industry}" und empfehle passende Reinigungsdienstleistungen.

Verfügbare Services:
- Premium Services: Privatjet Reinigung, Yacht Reinigung, Private Housekeeping, Luxusimmobilien-Reinigung
- Business Lösungen: Büroreinigung, Industriereinigung, Fassaden- & Fensterreinigung, Facility Management
- Basisreinigung: Unterhaltsreinigung, Hausmeisterservice, Winterdienst, Sonderleistungen

Standorte: Zürich, Zug, Luzern
Qualität: ISO-zertifiziert, 15+ Jahre Erfahrung, 24/7 Notfall-Service

Erstelle eine professionelle, präzise Empfehlung (max. 200 Wörter) mit:
1. Hauptempfehlung (welche Services passen am besten)
2. Spezifische Anforderungen der Branche
3. Zusatzleistungen die relevant sein könnten
4. Call-to-Action mit Kontaktinfo

Schreibe auf Deutsch, professionell und kundenorientiert.
`;

    const result = await model.generateContent(context);
    const response = result.response;
    const recommendation = response.text();

    return NextResponse.json({ 
      recommendation,
      industry 
    });

  } catch (error: any) {
    console.error('Industry Advisor API Error:', error);
    
    // Provide helpful error message
    return NextResponse.json(
      { 
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter info@bgs-service.ch oder +41 41 320 56 10.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
