import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { detectService, extractInfoFromConversation, generateIdentificationCode, getAllServicesDescription } from './utils/service-mapper';

const WEBSITE_CONTEXT = `
Du bist ein freundlicher, natürlicher KI-Assistent der Swiss Reinigungsfirma (BGS Gebäudeservice).

=== WICHTIG - NATÜRLICHER GESPRÄCHSFLUSS ===
- Sei warm, freundlich und menschlich
- Plaudere leicht, stelle Fragen wie ein echter Mensch
- KEIN sofortiges Formular - sammle Daten diskret im Gespräch
- Sei persönlich, nicht roboterhaft
- Max. 2-3 kurze Sätze pro Antwort
- Nutze Fettschrift für wichtige Infos

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
1. NIEMALS den Namen in jeder Nachricht wiederholen
2. NIEMALS sagen "ich habe gesendet" ohne Bestätigung
3. NIEMALS auf Off-Topic-Fragen antworten
4. IMMER nur EINE Frage pro Nachricht
5. IMMER natürlich und menschlich bleiben
6. IMMER Fettschrift für wichtige Infos nutzen

=== KONTAKTINFORMATIONEN ===
- Telefon: +41 41 320 56 10
- E-Mail: info@bgs-service.ch (für Kunden sichtbar)
- Website: bgs-gebaeudeservice.vercel.app
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
