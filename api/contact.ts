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
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header mit Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
              <img src="https://bgs-gebaeudeservice.vercel.app/logo.png" alt="BGS Gebäudeservice" style="max-width: 180px; height: auto; margin-bottom: 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Neue Kontaktanfrage</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                Sie haben eine neue Kontaktanfrage über die Website erhalten:
              </p>
              
              <!-- Kontaktdaten Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 6px; border: 1px solid #e5e7eb; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 25px;">
                    <table width="100%" cellpadding="8" cellspacing="0">
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600; width: 140px; vertical-align: top;">Name:</td>
                        <td style="color: #111827; font-size: 15px; font-weight: 500;">${data.name}</td>
                      </tr>
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600; padding-top: 12px; vertical-align: top;">E-Mail:</td>
                        <td style="color: #111827; font-size: 15px; font-weight: 500; padding-top: 12px;">
                          <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a>
                        </td>
                      </tr>
                      ${data.phone ? `
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600; padding-top: 12px; vertical-align: top;">Telefon:</td>
                        <td style="color: #111827; font-size: 15px; font-weight: 500; padding-top: 12px;">
                          <a href="tel:${data.phone}" style="color: #3b82f6; text-decoration: none;">${data.phone}</a>
                        </td>
                      </tr>
                      ` : ''}
                      ${data.service ? `
                      <tr>
                        <td style="color: #6b7280; font-size: 14px; font-weight: 600; padding-top: 12px; vertical-align: top;">Dienstleistung:</td>
                        <td style="color: #111827; font-size: 15px; font-weight: 500; padding-top: 12px;">${data.service}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Nachricht Box -->
              <div style="margin-bottom: 30px;">
                <p style="color: #6b7280; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Nachricht:</p>
                <div style="background-color: #f9fafb; border-radius: 6px; border: 1px solid #e5e7eb; padding: 20px;">
                  <p style="color: #111827; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${data.message}</p>
                </div>
              </div>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 16px; font-weight: 600; box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);">
                      Jetzt antworten
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 13px; line-height: 1.6; margin: 0;">
                Diese E-Mail wurde automatisch über das Kontaktformular auf<br>
                <a href="https://bgs-gebaeudeservice.vercel.app" style="color: #3b82f6; text-decoration: none;">bgs-gebaeudeservice.vercel.app</a> gesendet.
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
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header mit Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
              <img src="https://bgs-gebaeudeservice.vercel.app/logo.png" alt="BGS Gebäudeservice" style="max-width: 180px; height: auto; margin-bottom: 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Vielen Dank für Ihre Anfrage!</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Sehr geehrte/r ${data.name},
              </p>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                vielen Dank für Ihre Kontaktanfrage${data.service ? ` bezüglich <strong>${data.service}</strong>` : ''}. Wir haben Ihre Nachricht erfolgreich erhalten und werden uns schnellstmöglich bei Ihnen melden.
              </p>
              
              <!-- Info Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-radius: 6px; border-left: 4px solid #3b82f6; margin: 30px 0;">
                <tr>
                  <td style="padding: 25px;">
                    <p style="color: #1e40af; font-size: 15px; line-height: 1.6; margin: 0;">
                      <strong>⏱️ Antwortzeit:</strong> In der Regel antworten wir innerhalb von 24 Stunden an Werktagen.
                    </p>
                  </td>
                </tr>
              </table>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Unser Team wird Ihre Anfrage sorgfältig prüfen und Ihnen ein individuelles Angebot erstellen.
              </p>
              
              <!-- Kontakt Info -->
              <div style="background-color: #f9fafb; border-radius: 6px; padding: 25px; margin: 30px 0;">
                <p style="color: #111827; font-size: 15px; font-weight: 600; margin: 0 0 15px 0;">
                  Bei dringenden Fragen erreichen Sie uns auch direkt:
                </p>
                <table width="100%" cellpadding="6" cellspacing="0">
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; width: 100px;">📞 Telefon:</td>
                    <td style="color: #111827; font-size: 15px;">
                      <a href="tel:+41413205610" style="color: #3b82f6; text-decoration: none; font-weight: 500;">+41 41 320 56 10</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="color: #6b7280; font-size: 14px; padding-top: 8px;">📧 E-Mail:</td>
                    <td style="color: #111827; font-size: 15px; padding-top: 8px;">
                      <a href="mailto:info@brandea.de" style="color: #3b82f6; text-decoration: none; font-weight: 500;">info@brandea.de</a>
                    </td>
                  </tr>
                </table>
              </div>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="https://bgs-gebaeudeservice.vercel.app" style="display: inline-block; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-size: 16px; font-weight: 600; box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);">
                      Zur Website
                    </a>
                  </td>
                </tr>
              </table>
              
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 30px 0 0 0;">
                Mit freundlichen Grüßen<br>
                <strong>Ihr BGS Gebäudeservice Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 13px; line-height: 1.6; margin: 0 0 10px 0;">
                <strong>BGS Gebäudeservice</strong><br>
                Professionelle Reinigungsdienstleistungen in Zürich, Zug & Luzern
              </p>
              <p style="color: #9ca3af; font-size: 12px; line-height: 1.6; margin: 10px 0 0 0;">
                Diese E-Mail wurde automatisch generiert. Bitte antworten Sie nicht direkt auf diese E-Mail.<br>
                Für Rückfragen nutzen Sie bitte die oben angegebenen Kontaktdaten.
              </p>
              <p style="margin: 15px 0 0 0;">
                <a href="https://bgs-gebaeudeservice.vercel.app/impressum" style="color: #6b7280; text-decoration: none; font-size: 12px; margin: 0 10px;">Impressum</a>
                <span style="color: #d1d5db;">|</span>
                <a href="https://bgs-gebaeudeservice.vercel.app/datenschutz" style="color: #6b7280; text-decoration: none; font-size: 12px; margin: 0 10px;">Datenschutz</a>
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
    console.log('📧 Contact form submission received');
    console.log('Request body:', JSON.stringify(req.body, null, 2));

    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      console.error('❌ Validation failed: Missing required fields');
      return res.status(400).json({ 
        error: 'Name, Email und Nachricht sind erforderlich' 
      });
    }

    // Initialize Resend with API key from environment
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error('❌ RESEND_API_KEY not found in environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error: Missing API key' 
      });
    }

    console.log('✅ Resend API key found, initializing...');
    const resend = new Resend(resendApiKey);

    const formData: ContactFormData = { name, email, phone, service, message };

    // Generate HTML email templates
    const adminEmailHtml = getAdminEmailTemplate(formData);
    const senderConfirmationHtml = getSenderConfirmationTemplate(formData);

    console.log('📤 Sending admin notification email...');
    
    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@brandea.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      html: adminEmailHtml,
      replyTo: email,
    });

    console.log('✅ Admin email sent successfully!');
    console.log('Admin email ID:', adminEmailResult.data?.id);

    console.log('📤 Sending confirmation email to sender...');
    
    // Send confirmation email to sender
    const confirmationEmailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Bestätigung Ihrer Kontaktanfrage - BGS Gebäudeservice',
      html: senderConfirmationHtml,
    });

    console.log('✅ Confirmation email sent successfully!');
    console.log('Confirmation email ID:', confirmationEmailResult.data?.id);

    return res.status(200).json({ 
      success: true,
      message: 'E-Mails erfolgreich gesendet',
      adminEmailId: adminEmailResult.data?.id,
      confirmationEmailId: confirmationEmailResult.data?.id
    });

  } catch (error: any) {
    console.error('❌ Error in contact form handler:');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    if (error.response) {
      console.error('API Response error:', JSON.stringify(error.response, null, 2));
    }

    return res.status(500).json({ 
      error: 'Fehler beim Senden der E-Mail',
      details: error.message 
    });
  }
}
