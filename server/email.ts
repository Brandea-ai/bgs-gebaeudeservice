/**
 * E-Mail-Versand über Resend.
 *
 * Umgebungsvariablen (Vercel):
 * - RESEND_API_KEY: Pflicht. Ohne Schlüssel wird nichts versendet, und das
 *   Formular meldet einen Fehler statt eines Scheinerfolgs (M04).
 * - CONTACT_TO_EMAIL: Empfänger der Anfragen, vorläufig admin@brandea.de (E15).
 * - CONTACT_FROM_EMAIL: Absender. Die Domain muss in Resend verifiziert sein,
 *   heute brandea.de. Zum Launch auf die Domain des Kunden umstellen (M58).
 */
import { company } from '../shared/company'

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

const DEFAULT_FROM = 'BGS Website <website@brandea.de>';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function buildContactEmail(data: EmailData) {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone || 'Nicht angegeben');
  const service = escapeHtml(data.service || 'Nicht angegeben');
  const message = escapeHtml(data.message);

  const subject = `Neue Kontaktanfrage von ${data.name.replace(/[\r\n]+/g, ' ').slice(0, 100)}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #c44a2c 0%, #a83820 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin-bottom: 20px; }
    .label { font-weight: bold; color: #c44a2c; margin-bottom: 5px; }
    .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #c44a2c; }
    .message-box { background: white; padding: 20px; border-radius: 5px; border: 1px solid #ddd; margin-top: 10px; white-space: pre-wrap; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Neue Kontaktanfrage</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">${escapeHtml(company.brand)} – Kontaktformular der Website</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">E-Mail:</div>
        <div class="value"><a href="mailto:${email}" style="color: #c44a2c; text-decoration: none;">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Telefon:</div>
        <div class="value">${phone}</div>
      </div>
      <div class="field">
        <div class="label">Gewünschte Leistung:</div>
        <div class="value">${service}</div>
      </div>
      <div class="field">
        <div class="label">Nachricht:</div>
        <div class="message-box">${message}</div>
      </div>
      <div class="footer">
        Diese Nachricht wurde über das Kontaktformular der Website gesendet.
      </div>
    </div>
  </div>
</body>
</html>
    `;

  const text = `
Neue Kontaktanfrage über die Website

Name: ${data.name}
E-Mail: ${data.email}
Telefon: ${data.phone || 'Nicht angegeben'}
Gewünschte Leistung: ${data.service || 'Nicht angegeben'}

Nachricht:
${data.message}

---
Diese Nachricht wurde über das Kontaktformular der Website gesendet.
      `;

  return { subject, html, text };
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error('Kontaktformular: RESEND_API_KEY fehlt, Anfrage wurde nicht versendet');
    return false;
  }

  const to = process.env.CONTACT_TO_EMAIL || company.email;
  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;
  const { subject, html, text } = buildContactEmail(data);

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(resendApiKey);

    const { data: emailResponse, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error('Kontaktformular: Resend meldet einen Fehler:', error.name, error.message);
      return false;
    }

    console.log('Kontaktformular: versendet, ID', emailResponse?.id);
    return true;
  } catch (error) {
    console.error('Kontaktformular: Versand fehlgeschlagen:', error instanceof Error ? error.message : error);
    return false;
  }
}
