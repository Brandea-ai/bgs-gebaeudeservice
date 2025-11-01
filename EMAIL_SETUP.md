# E-Mail-Konfiguration für Kontaktformular

## Übersicht

Das Kontaktformular sendet E-Mails an **info@brandea.de** über den Resend E-Mail-Service.

## Setup-Anleitung

### 1. Resend Account erstellen

1. Gehe zu [https://resend.com](https://resend.com)
2. Erstelle einen kostenlosen Account
3. Verifiziere deine E-Mail-Adresse

### 2. Domain verifizieren

1. Gehe zu **Domains** im Resend Dashboard
2. Klicke auf **Add Domain**
3. Gib `brandea.de` ein
4. Füge die DNS-Records zu deinem Domain-Provider hinzu:
   - **SPF Record** (TXT)
   - **DKIM Record** (TXT)
   - **DMARC Record** (TXT)
5. Warte auf die Verifizierung (kann bis zu 48 Stunden dauern)

### 3. API Key erstellen

1. Gehe zu **API Keys** im Resend Dashboard
2. Klicke auf **Create API Key**
3. Gib einen Namen ein (z.B. "Brandea Production")
4. Wähle **Full Access** oder **Sending Access**
5. Kopiere den API Key (wird nur einmal angezeigt!)

### 4. Environment Variable setzen

#### Für Vercel:

1. Gehe zu deinem Projekt auf [vercel.com](https://vercel.com)
2. Klicke auf **Settings** → **Environment Variables**
3. Füge hinzu:
   - **Key**: `RESEND_API_KEY`
   - **Value**: Dein Resend API Key
   - **Environment**: Production, Preview, Development (alle auswählen)
4. Klicke auf **Save**
5. Redeploy dein Projekt

#### Für lokale Entwicklung:

Erstelle eine `.env` Datei im Root-Verzeichnis:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

### 5. Resend Package installieren

```bash
npm install resend
```

## Funktionsweise

### Frontend (Contact.tsx)

Das Kontaktformular sendet die Daten als POST-Request an `/api/contact`:

```typescript
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    firstName,
    lastName,
    email,
    phone,
    message
  })
});
```

### Backend (server/index.ts)

Der Server empfängt die Daten, validiert sie und ruft den E-Mail-Service auf:

```typescript
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  
  // Validation
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ success: false, message: "..." });
  }
  
  // Send email
  const emailSent = await sendContactEmail({
    firstName, lastName, email, phone, message
  });
  
  res.json({ success: true, message: "..." });
});
```

### E-Mail-Service (server/email.ts)

Der E-Mail-Service verwendet Resend, um die E-Mail zu senden:

```typescript
const { data, error } = await resend.emails.send({
  from: 'Brandea Website <noreply@brandea.de>',
  to: ['info@brandea.de'],
  replyTo: email,
  subject: `Neue Kontaktanfrage von ${firstName} ${lastName}`,
  html: emailHtml
});
```

## E-Mail-Template

Die E-Mails werden im HTML-Format mit folgendem Design gesendet:

- **Header**: Brandea-Farbschema (Gradient)
- **Inhalt**: Strukturierte Darstellung aller Formularfelder
- **Footer**: Hinweis zur Herkunft der Nachricht

### Beispiel-E-Mail:

```
Von: Brandea Website <noreply@brandea.de>
An: info@brandea.de
Antworten an: [Kunden-E-Mail]
Betreff: Neue Kontaktanfrage von Max Mustermann

[HTML-formatierte E-Mail mit allen Details]
```

## Entwicklungsmodus

Wenn `RESEND_API_KEY` nicht gesetzt ist, werden E-Mails nur in der Konsole geloggt:

```
⚠️  RESEND_API_KEY not configured. Email would be sent to: info@brandea.de
📧 Email preview: { ... }
```

Das Formular funktioniert trotzdem und gibt eine Erfolgsmeldung zurück.

## Produktionsmodus

Mit gesetztem `RESEND_API_KEY` werden echte E-Mails versendet:

```
✅ Email sent successfully: { id: '...' }
```

## Fehlerbehandlung

### Frontend

- Validierung der Pflichtfelder
- E-Mail-Format-Validierung
- Anzeige von Erfolgs-/Fehlermeldungen
- Loading-State während des Sendens
- Formular-Reset nach erfolgreichem Versand

### Backend

- Request-Validierung
- E-Mail-Format-Prüfung
- Try-Catch für API-Fehler
- Logging aller Vorgänge
- Graceful Degradation (funktioniert auch ohne Resend)

## Kosten

Resend bietet:
- **3.000 E-Mails/Monat kostenlos**
- Danach: $1 pro 1.000 E-Mails
- Keine monatliche Gebühr

Für ein Kontaktformular ist das kostenlose Kontingent normalerweise mehr als ausreichend.

## Alternative E-Mail-Services

Falls du einen anderen Service bevorzugst, kannst du `server/email.ts` anpassen:

### SendGrid
```bash
npm install @sendgrid/mail
```

### AWS SES
```bash
npm install @aws-sdk/client-ses
```

### Nodemailer (SMTP)
```bash
npm install nodemailer
```

## Testing

### Lokales Testen:

1. Starte den Dev-Server: `npm run dev`
2. Öffne die Kontaktseite: `http://localhost:5000/kontakt`
3. Fülle das Formular aus
4. Prüfe die Konsole für E-Mail-Logs

### Production Testing:

1. Deploye auf Vercel
2. Setze `RESEND_API_KEY` in den Environment Variables
3. Teste das Formular auf der Live-Website
4. Prüfe dein E-Mail-Postfach (info@brandea.de)

## Troubleshooting

### E-Mails kommen nicht an

1. **Prüfe Resend Dashboard**: Gehe zu **Logs** und schaue, ob die E-Mail gesendet wurde
2. **Prüfe Spam-Ordner**: Neue Domains landen oft im Spam
3. **Prüfe DNS-Records**: Stelle sicher, dass SPF, DKIM und DMARC korrekt konfiguriert sind
4. **Prüfe Domain-Verifizierung**: Domain muss verifiziert sein

### API-Fehler

1. **Prüfe API Key**: Stelle sicher, dass der Key korrekt gesetzt ist
2. **Prüfe Logs**: Schaue in die Vercel-Logs für Details
3. **Prüfe Rate Limits**: Resend hat Rate Limits (10 E-Mails/Sekunde)

### Formular funktioniert nicht

1. **Prüfe Browser-Konsole**: Schaue nach JavaScript-Fehlern
2. **Prüfe Network-Tab**: Schaue, ob der API-Request erfolgreich ist
3. **Prüfe Server-Logs**: Schaue nach Backend-Fehlern

## Support

Bei Problemen:
- **Resend Dokumentation**: [https://resend.com/docs](https://resend.com/docs)
- **Resend Support**: support@resend.com
- **Vercel Dokumentation**: [https://vercel.com/docs](https://vercel.com/docs)
