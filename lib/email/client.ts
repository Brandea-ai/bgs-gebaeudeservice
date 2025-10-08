/**
 * Email Client
 * Supports Resend and SendGrid
 */

import { ContactFormData } from '../validation/schemas';

interface EmailConfig {
  provider: 'resend' | 'sendgrid';
  apiKey: string;
  from: string;
  to: string;
}

interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Send contact form email
 */
export async function sendContactEmail(
  data: ContactFormData
): Promise<EmailResult> {
  const config = getEmailConfig();

  if (!config) {
    console.error('Email configuration missing');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    if (config.provider === 'resend') {
      return await sendViaResend(data, config);
    } else {
      return await sendViaSendGrid(data, config);
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send via Resend
 */
async function sendViaResend(
  data: ContactFormData,
  config: EmailConfig
): Promise<EmailResult> {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: config.from,
      to: [config.to],
      subject: `Kontaktanfrage: ${data.subject}`,
      html: formatEmailHtml(data),
      text: formatEmailText(data),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${error}`);
  }

  const result = await response.json();
  return { success: true, messageId: result.id };
}

/**
 * Send via SendGrid
 */
async function sendViaSendGrid(
  data: ContactFormData,
  config: EmailConfig
): Promise<EmailResult> {
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: config.to }],
          subject: `Kontaktanfrage: ${data.subject}`,
        },
      ],
      from: { email: config.from },
      content: [
        {
          type: 'text/plain',
          value: formatEmailText(data),
        },
        {
          type: 'text/html',
          value: formatEmailHtml(data),
        },
      ],
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`SendGrid API error: ${error}`);
  }

  return { success: true, messageId: response.headers.get('x-message-id') || undefined };
}

/**
 * Format email as HTML
 */
function formatEmailHtml(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0066cc; color: white; padding: 20px; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; margin: 20px 0; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #666; }
          .value { margin-top: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Neue Kontaktanfrage</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">E-Mail:</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Telefon:</div>
              <div class="value">${escapeHtml(data.phone)}</div>
            </div>
            ` : ''}
            ${data.service ? `
            <div class="field">
              <div class="label">Service:</div>
              <div class="value">${escapeHtml(data.service)}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Betreff:</div>
              <div class="value">${escapeHtml(data.subject)}</div>
            </div>
            <div class="field">
              <div class="label">Nachricht:</div>
              <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Format email as plain text
 */
function formatEmailText(data: ContactFormData): string {
  return `
Neue Kontaktanfrage

Name: ${data.name}
E-Mail: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ''}
${data.service ? `Service: ${data.service}` : ''}
Betreff: ${data.subject}

Nachricht:
${data.message}
  `.trim();
}

/**
 * Escape HTML entities
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Get email configuration
 */
function getEmailConfig(): EmailConfig | null {
  const provider = process.env.EMAIL_PROVIDER as 'resend' | 'sendgrid';
  const apiKey = process.env.EMAIL_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;

  if (!provider || !apiKey || !from || !to) {
    return null;
  }

  return { provider, apiKey, from, to };
}

/**
 * Send newsletter subscription confirmation
 */
export async function sendNewsletterConfirmation(
  email: string
): Promise<EmailResult> {
  const config = getEmailConfig();

  if (!config) {
    console.error('Email configuration missing');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const html = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Newsletter Anmeldung bestätigt</h2>
          <p>Vielen Dank für Ihre Anmeldung zu unserem Newsletter!</p>
          <p>Sie erhalten ab sofort regelmäßig Neuigkeiten von BGS Gebäudeservice.</p>
        </body>
      </html>
    `;

    if (config.provider === 'resend') {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: config.from,
          to: [email],
          subject: 'Newsletter Anmeldung bestätigt',
          html,
        }),
      });

      if (!response.ok) throw new Error('Resend API error');
      const result = await response.json();
      return { success: true, messageId: result.id };
    }

    return { success: true };
  } catch (error) {
    console.error('Newsletter confirmation email failed:', error);
    return { success: false, error: 'Failed to send confirmation' };
  }
}
