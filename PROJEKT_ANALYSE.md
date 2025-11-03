# Projekt-Analyse: BGS Gebäudeservice Chatbot

## Projektstruktur

### Frontend (React + Vite + TypeScript)
- **Framework**: React 18.3.1 mit TypeScript
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.14
- **UI Components**: Radix UI + Custom Components
- **Routing**: Wouter 3.3.5
- **Animations**: Framer Motion 12.23.22

### Backend (Vercel Serverless Functions)
- **Runtime**: Node.js auf Vercel
- **API Routes**: `/api/*` (TypeScript Serverless Functions)
- **AI Model**: Google Gemini 2.0-flash-exp via `@google/generative-ai`
- **Email Service**: Resend API

---

## Kontaktformular-Funktionalität (WICHTIG für Chat-to-Specialist)

### 1. Frontend: SwissFooter.tsx
**Lokation**: `client/src/components/SwissFooter.tsx`

**Formular-Daten**:
```typescript
{
  name: string,
  email: string,
  phone: string,
  service: string,
  message: string,
  acceptPrivacy: boolean
}
```

**Submit-Handler**:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    setSubmitStatus("success");
    // Reset form
  }
}
```

### 2. Backend: /api/contact.ts
**Lokation**: `api/contact.ts`

**Wichtige Details**:
- **Resend API Key**: `process.env.RESEND_API_KEY`
- **Empfänger-Email**: `info@brandea.de`
- **Absender**: `onboarding@resend.dev` (Resend Standard-Domain)

**Funktionsweise**:
1. Empfängt Formular-Daten via POST
2. Validiert erforderliche Felder (name, email, message)
3. Initialisiert Resend Client mit API Key
4. Sendet **2 E-Mails**:
   - **Admin-Email** an `info@brandea.de` mit allen Kontaktdaten
   - **Bestätigungs-Email** an den Kunden

**Admin-Email Template**:
- HTML-formatiert mit Swiss Reinigungsfirma Branding
- Enthält: Name, E-Mail, Telefon, Service, Nachricht
- CTA-Button: "Jetzt antworten" (mailto-Link)

**Bestätigungs-Email Template**:
- Professionelle Bestätigung an den Kunden
- Hinweis: "Wir melden uns innerhalb von 24 Stunden"
- Kontaktinformationen und Öffnungszeiten

---

## Aktueller Chatbot (AIChatbot.tsx)

### Lokation
`client/src/components/AIChatbot.tsx`

### Probleme
1. **Fehlende API-Route**: `/api/chat-to-specialist` existiert NICHT
2. **Keine E-Mail-Funktion**: Chat kann nicht an Spezialisten gesendet werden
3. **Zu lange Antworten**: KI schreibt zu viel Text
4. **Keine Ja/Nein-Buttons**: Nur ein grüner "An Spezialisten senden" Button
5. **Kontaktformular-Popup**: Zeigt ein gelbes Formular-Popup (nicht gewünscht)
6. **Keine direkten Kontaktlinks**: Kein Telefon-Icon, kein mailto-Link

### Aktuelle Funktionen
- GDPR Consent Screen
- Chat-Verlauf mit Timestamps
- Kontaktdaten-Sammlung (name, email, phone)
- `needsContactInfo` und `readyToSend` Flags vom Backend

---

## Chat API (/api/chat.ts)

### Aktueller Prompt-Stil
- Zu ausführlich und lang
- Keine Formatierung
- Keine Begrenzung der Fragen

### Gewünschte Änderungen
1. **Kompakter Stil**: Max. 2-3 kurze Sätze
2. **Formatierung**: **Fettschrift** für wichtige Infos
3. **Diskrete Datenerfassung**: Max. 3-5 Fragen
4. **Psychologische Gesprächsführung**: Eine Frage nach der anderen
5. **Grunddaten erfragen**:
   - Art des Projekts/Service
   - Projektgröße (z.B. Quadratmeter)
   - Zeitrahmen
   - Besondere Anforderungen (optional)
6. **NICHT fragen**: Details wie Fensteranzahl
7. **Hinweis**: Spezialist meldet sich innerhalb 12 Stunden (werktags)

---

## Zu implementieren: /api/chat-to-specialist.ts

### Basierend auf contact.ts Vorlage

**Erforderliche Daten**:
```typescript
{
  userInfo: {
    name: string,
    email: string,
    phone: string
  },
  conversationLong: string,  // Vollständiger Chat-Verlauf mit Timestamps
  conversationShort: string  // Kurze Zusammenfassung
}
```

**E-Mail-Versand**:
1. **Admin-Email** an `info@brandea.de`:
   - Betreff: "Neue Chat-Anfrage von [Name]"
   - Inhalt:
     - Kontaktdaten (Name, E-Mail, Telefon)
     - Kurze Zusammenfassung
     - Vollständiger Chatverlauf
   - CTA: "Jetzt antworten"

2. **Bestätigungs-Email** an Kunden:
   - Betreff: "Bestätigung Ihrer Anfrage - Swiss Reinigungsfirma"
   - Inhalt:
     - Dankesnachricht
     - Hinweis: "Spezialist meldet sich innerhalb 12 Stunden (werktags)"
     - Kontaktinformationen

**Resend-Konfiguration**:
- API Key: `process.env.RESEND_API_KEY`
- From: `onboarding@resend.dev`
- To (Admin): `info@brandea.de`
- To (Kunde): `userInfo.email`

---

## Frontend-Änderungen (AIChatbot.tsx)

### 1. Ja/Nein-Buttons statt grünem Button
**Aktuell**:
```tsx
<button onClick={handleSendToSpecialist}>
  An Spezialisten senden
</button>
```

**Gewünscht**:
```tsx
<div className="flex gap-3">
  <button onClick={() => handleSpecialistDecision(true)} className="bg-green-600">
    ✅ Ja, bitte senden
  </button>
  <button onClick={() => handleSpecialistDecision(false)} className="bg-gray-600">
    ❌ Nein, danke
  </button>
</div>
```

### 2. Direkte Kontaktmöglichkeiten
**Telefon-Icon mit direktem Anruf**:
```tsx
<a href="tel:+41413205610" className="flex items-center gap-2">
  <Phone className="w-5 h-5" />
  Direkt anrufen
</a>
```

**E-Mail-Link mit mailto**:
```tsx
<a href="mailto:info@brandea.de" className="flex items-center gap-2">
  <Mail className="w-5 h-5" />
  E-Mail senden
</a>
```

### 3. Entfernung des Kontaktformular-Popups
- Gelbes Formular-Popup entfernen
- Daten während des Chats erfragen (diskret)
- Nach 2-3 Fachfragen nach Kontaktdaten fragen

### 4. Markdown-Rendering für formatierte Antworten
- **Fettschrift** unterstützen
- Zeilenumbrüche korrekt darstellen
- Emojis erlauben (📞, 📧, ✅, etc.)

---

## Environment Variables (Vercel)

**Erforderlich**:
- `GEMINI_API_KEY`: Google Gemini API Key
- `RESEND_API_KEY`: Resend Email API Key

**Bereits konfiguriert** (laut Deployment-Logs)

---

## Deployment-Workflow

1. **Änderungen committen**: `git add . && git commit -m "message"`
2. **Push zu GitHub**: `git push origin main`
3. **Automatisches Deployment**: Vercel deployed automatisch bei Push
4. **Vercel Environment Variables**: Bereits konfiguriert

---

## Zusammenfassung der Aufgaben

### Phase 1: ✅ Analyse abgeschlossen
- Projektstruktur verstanden
- Kontaktformular-Funktionalität analysiert
- Resend-Integration dokumentiert

### Phase 2: Chat-to-Specialist API erstellen
- Neue Datei: `/api/chat-to-specialist.ts`
- Basierend auf `/api/contact.ts`
- E-Mail an `info@brandea.de` mit Chatverlauf

### Phase 3: Chat-Prompt optimieren
- Kompakter Stil (max. 2-3 Sätze)
- Formatierung mit **Fettschrift**
- Max. 3-5 Fragen
- Psychologische Gesprächsführung

### Phase 4: Frontend-Optimierungen
- Ja/Nein-Buttons implementieren
- Telefon-Icon + direkter Anruf
- E-Mail-Link mit mailto
- Kontaktformular-Popup entfernen
- Markdown-Rendering

### Phase 5: Testing & Deployment
- Lokales Testing
- Git Push
- Vercel Deployment
- Live-Testing

---

## Wichtige Erkenntnisse

1. **Resend funktioniert bereits** im Kontaktformular
2. **Gleiche Technik** kann für Chat-to-Specialist verwendet werden
3. **E-Mail-Empfänger**: `info@brandea.de` (nicht info@bgs-service.ch)
4. **Zwei E-Mails**: Admin + Kundenbestätigung
5. **HTML-Templates**: Professionell mit Swiss Branding
