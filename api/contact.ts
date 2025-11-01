import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

function getAdminEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neue Kontaktanfrage</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 4px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #1e3a8a; padding: 30px; text-align: center;">
              <img src="https://bgs-gebaeudeservice.vercel.app/swiss-logo.webp" alt="Swiss Reinigungsfirma" style="max-width: 160px; height: auto;">
            </td>
          </tr>
          
          <!-- Title -->
          <tr>
            <td style="padding: 30px 40px 20px 40px;">
              <h1 style="color: #1e3a8a; margin: 0; font-size: 24px; font-weight: 600;">Neue Kontaktanfrage</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 0 0 25px 0;">
                Sie haben eine neue Kontaktanfrage über die Website erhalten.
              </p>
              
              <!-- Contact Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; width: 130px; vertical-align: top;">Name:</td>
                        <td style="color: #1a1a1a; font-size: 15px;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">E-Mail:</td>
                        <td style="color: #1a1a1a; font-size: 15px;">
                          <a href="mailto:${data.email}" style="color: #1e3a8a; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      ${data.phone ? `
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">Telefon:</td>
                        <td style="color: #1a1a1a; font-size: 15px;">
                          <a href="tel:${data.phone}" style="color: #1e3a8a; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                      ` : ''}
                      ${data.service ? `
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">Dienstleistung:</td>
                        <td style="color: #1a1a1a; font-size: 15px;">${data.service}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              <div style="margin-bottom: 25px;">
                <p style="color: #666666; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Nachricht:</p>
                <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; padding: 15px;">
                  <p style="color: #1a1a1a; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px 0;">
                    <a href="mailto:${data.email}" style="display: inline-block; background-color: #1e3a8a; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-size: 15px; font-weight: 600;">
                      Jetzt antworten
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 25px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #666666; font-size: 13px; line-height: 1.5; margin: 0;">
                Diese E-Mail wurde automatisch über das Kontaktformular gesendet.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function getSenderConfirmationTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bestätigung Ihrer Kontaktanfrage</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 4px; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #1e3a8a; padding: 30px; text-align: center;">
              <img src="https://bgs-gebaeudeservice.vercel.app/swiss-logo.webp" alt="Swiss Reinigungsfirma" style="max-width: 160px; height: auto;">
            </td>
          </tr>
          
          <!-- Title -->
          <tr>
            <td style="padding: 30px 40px 20px 40px;">
              <h1 style="color: #1e3a8a; margin: 0; font-size: 24px; font-weight: 600;">Vielen Dank für Ihre Anfrage</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                Sehr geehrte Damen und Herren,
              </p>
              
              <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                vielen Dank für Ihre Kontaktanfrage${data.service ? ` bezüglich <strong>${data.service}</strong>` : ''}. Wir haben Ihre Nachricht erfolgreich erhalten.
              </p>
              
              <!-- Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #eff6ff; border-left: 4px solid #1e3a8a; margin: 25px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="color: #1e3a8a; font-size: 15px; line-height: 1.6; margin: 0; font-weight: 600;">
                      Antwortzeit
                    </p>
                    <p style="color: #1e40af; font-size: 14px; line-height: 1.6; margin: 8px 0 0 0;">
                      Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </td>
                </tr>
              </table>
              
              <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 0 0 25px 0;">
                Unser Team wird Ihre Anfrage sorgfältig prüfen und Ihnen ein individuelles Angebot erstellen.
              </p>
              
              <!-- Contact Info -->
              <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; padding: 20px; margin: 25px 0;">
                <p style="color: #1a1a1a; font-size: 15px; font-weight: 600; margin: 0 0 15px 0;">
                  Bei dringenden Fragen erreichen Sie uns direkt:
                </p>
                <table width="100%" cellpadding="6" cellspacing="0">
                  <tr>
                    <td style="color: #666666; font-size: 14px; width: 90px;">Telefon:</td>
                    <td style="color: #1a1a1a; font-size: 15px;">
                      <a href="tel:+41413205610" style="color: #1e3a8a; text-decoration: none;">+41 41 320 56 10</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="color: #666666; font-size: 14px;">E-Mail:</td>
                    <td style="color: #1a1a1a; font-size: 15px;">
                      <a href="mailto:info@brandea.de" style="color: #1e3a8a; text-decoration: none;">info@brandea.de</a>
                    </td>
                  </tr>
                </table>
                
                <p style="color: #666666; font-size: 14px; margin: 15px 0 0 0; padding-top: 15px; border-top: 1px solid #e5e7eb;">
                  <strong>Öffnungszeiten:</strong><br>
                  Montag bis Freitag: 08:00 - 18:00 Uhr<br>
                  Samstag: 09:00 - 14:00 Uhr
                </p>
              </div>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="https://bgs-gebaeudeservice.vercel.app" style="display: inline-block; background-color: #1e3a8a; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-size: 15px; font-weight: 600;">
                      Zur Website
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 25px 0 0 0;">
                Mit freundlichen Grüßen<br>
                <strong>Swiss Reinigungsfirma</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 25px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #666666; font-size: 13px; line-height: 1.5; margin: 0 0 10px 0;">
                <strong>Swiss Reinigungsfirma</strong><br>
                Professionelle Reinigungsdienstleistungen in Zürich, Zug und Luzern
              </p>
              <p style="color: #999999; font-size: 12px; line-height: 1.5; margin: 10px 0 0 0;">
                Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese E-Mail.
              </p>
              <p style="margin: 15px 0 0 0;">
                <a href="https://bgs-gebaeudeservice.vercel.app/impressum" style="color: #666666; text-decoration: none; font-size: 12px; margin: 0 10px;">Impressum</a>
                <span style="color: #cccccc;">|</span>
                <a href="https://bgs-gebaeudeservice.vercel.app/datenschutz" style="color: #666666; text-decoration: none; font-size: 12px; margin: 0 10px;">Datenschutz</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Contact form submission received');

    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      console.error('Validation failed: Missing required fields');
      return res.status(400).json({ 
        error: 'Name, Email und Nachricht sind erforderlich' 
      });
    }

    // Initialize Resend with API key from environment
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error: Missing API key' 
      });
    }

    const resend = new Resend(resendApiKey);

    const formData: ContactFormData = { name, email, phone, service, message };

    // Generate HTML email templates
    const adminEmailHtml = getAdminEmailTemplate(formData);
    const senderConfirmationHtml = getSenderConfirmationTemplate(formData);

    console.log('Sending admin notification email...');
    
    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@brandea.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      html: adminEmailHtml,
      replyTo: email,
    });

    console.log('Admin email sent successfully');
    console.log('Admin email ID:', adminEmailResult.data?.id);

    console.log('Sending confirmation email to sender...');
    
    // Send confirmation email to sender
    const confirmationEmailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Bestätigung Ihrer Kontaktanfrage - Swiss Reinigungsfirma',
      html: senderConfirmationHtml,
    });

    console.log('Confirmation email sent successfully');
    console.log('Confirmation email ID:', confirmationEmailResult.data?.id);

    return res.status(200).json({ 
      success: true,
      message: 'E-Mails erfolgreich gesendet',
      adminEmailId: adminEmailResult.data?.id,
      confirmationEmailId: confirmationEmailResult.data?.id
    });

  } catch (error: any) {
    console.error('Error in contact form handler:');
    console.error('Error message:', error.message);
    
    return res.status(500).json({ 
      error: 'Fehler beim Senden der E-Mail',
      details: error.message 
    });
  }
}
