import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

interface ChatToSpecialistData {
  userInfo: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    city?: string;
    service?: string;
  };
  conversationLong: string;
  conversationShort: string;
}

function getAdminEmailTemplate(data: ChatToSpecialistData): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neue Chat-Anfrage</title>
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
              <h1 style="color: #1e3a8a; margin: 0; font-size: 24px; font-weight: 600;">🤖 Neue Chat-Anfrage vom KI-Assistenten</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 0 0 25px 0;">
                Ein Kunde hat über den KI-Chatbot eine Anfrage gestellt und möchte von einem Spezialisten kontaktiert werden.
              </p>
              
              <!-- Contact Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 20px;">
                    <table width="100%" cellpadding="8" cellspacing="0">
                      ${data.userInfo.service ? `
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; width: 130px; vertical-align: top;">Leistung:</td>
                        <td style="color: #1a1a1a; font-size: 15px; font-weight: 600;">${data.userInfo.service}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; width: 130px; vertical-align: top;">Name:</td>
                        <td style="color: #1a1a1a; font-size: 15px;">${data.userInfo.name}</td>
                      </tr>
                      ${data.userInfo.company ? `
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">Firma:</td>
                        <td style="color: #1a1a1a; font-size: 15px;">${data.userInfo.company}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">E-Mail:</td>
                        <td style="color: #1a1a1a; font-size: 15px;">
                          <a href="mailto:${data.userInfo.email}" style="color: #1e3a8a; text-decoration: none;">${data.userInfo.email}</a>
                        </td>
                      </tr>
                      ${data.userInfo.phone ? `
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">Telefon:</td>
                        <td style="color: #1a1a1a; font-size: 15px;">
                          <a href="tel:${data.userInfo.phone}" style="color: #1e3a8a; text-decoration: none;">${data.userInfo.phone}</a>
                        </td>
                      </tr>
                      ` : ''}
                      ${data.userInfo.city ? `
                      <tr>
                        <td style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">Stadt:</td>
                        <td style="color: #1a1a1a; font-size: 15px;">${data.userInfo.city}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Short Summary -->
              <div style="margin-bottom: 25px;">
                <p style="color: #666666; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Kurze Zusammenfassung:</p>
                <div style="background-color: #eff6ff; border-left: 4px solid #1e3a8a; padding: 15px;">
                  <p style="color: #1e40af; font-size: 15px; line-height: 1.6; margin: 0;">${data.conversationShort}</p>
                </div>
              </div>
              
              <!-- Full Conversation -->
              <div style="margin-bottom: 25px;">
                <p style="color: #666666; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Vollständiger Gesprächsverlauf:</p>
                <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; padding: 15px; max-height: 400px; overflow-y: auto;">
                  <p style="color: #1a1a1a; font-size: 14px; line-height: 1.8; margin: 0; white-space: pre-wrap; font-family: 'Courier New', monospace;">${data.conversationLong}</p>
                </div>
              </div>
              
              <!-- Action Required Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef3c7; border-left: 4px solid #f59e0b; margin: 25px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="color: #92400e; font-size: 15px; line-height: 1.6; margin: 0; font-weight: 600;">
                      ⚠️ Aktion erforderlich
                    </p>
                    <p style="color: #b45309; font-size: 14px; line-height: 1.6; margin: 8px 0 0 0;">
                      Bitte kontaktieren Sie den Kunden innerhalb von 12 Stunden (werktags) und erstellen Sie ein individuelles Angebot basierend auf den gesammelten Informationen.
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px 0;">
                    <a href="mailto:${data.userInfo.email}" style="display: inline-block; background-color: #1e3a8a; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-size: 15px; font-weight: 600;">
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
                Diese E-Mail wurde automatisch vom KI-Chatbot gesendet.
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

function getCustomerConfirmationTemplate(data: ChatToSpecialistData): string {
  return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bestätigung Ihrer Anfrage</title>
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
              <h1 style="color: #1e3a8a; margin: 0; font-size: 24px; font-weight: 600;">✅ Vielen Dank für Ihre Anfrage!</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 30px 40px;">
              <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                Sehr geehrte/r ${data.userInfo.name},
              </p>
              
              <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                vielen Dank für Ihr Interesse an unseren Reinigungsdienstleistungen. Wir haben Ihre Anfrage über unseren KI-Assistenten erfolgreich erhalten.
              </p>
              
              <!-- Success Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #d1fae5; border-left: 4px solid #10b981; margin: 25px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <p style="color: #065f46; font-size: 15px; line-height: 1.6; margin: 0; font-weight: 600;">
                      ✅ Ihre Anfrage wurde erfolgreich weitergeleitet
                    </p>
                    <p style="color: #047857; font-size: 14px; line-height: 1.6; margin: 8px 0 0 0;">
                      Einer unserer Spezialisten wird sich innerhalb von 12 Stunden (werktags) bei Ihnen melden.
                    </p>
                  </td>
                </tr>
              </table>
              
              <p style="color: #333333; font-size: 15px; line-height: 1.6; margin: 0 0 25px 0;">
                Unser Team wird Ihre Anfrage sorgfältig prüfen und Ihnen ein individuelles, auf Ihre Bedürfnisse zugeschnittenes Angebot erstellen.
              </p>
              
              <!-- Contact Info -->
              <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; padding: 20px; margin: 25px 0;">
                <p style="color: #1a1a1a; font-size: 15px; font-weight: 600; margin: 0 0 15px 0;">
                  Bei dringenden Fragen erreichen Sie uns direkt:
                </p>
                <table width="100%" cellpadding="6" cellspacing="0">
                  <tr>
                    <td style="color: #666666; font-size: 14px; width: 90px;">📞 Telefon:</td>
                    <td style="color: #1a1a1a; font-size: 15px;">
                      <a href="tel:+41413205610" style="color: #1e3a8a; text-decoration: none;">+41 41 320 56 10</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="color: #666666; font-size: 14px;">📧 E-Mail:</td>
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
                <strong>Ihr Team der Swiss Reinigungsfirma</strong>
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
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Chat-to-specialist request received');

    const { userInfo, conversationLong, conversationShort } = req.body;

    // Validate required fields
    if (!userInfo || !userInfo.name || !userInfo.email || !conversationLong) {
      console.error('Validation failed: Missing required fields');
      return res.status(400).json({ 
        error: 'Name, Email und Gesprächsverlauf sind erforderlich' 
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

    const chatData: ChatToSpecialistData = { 
      userInfo, 
      conversationLong, 
      conversationShort: conversationShort || 'Chat-Anfrage über KI-Assistenten'
    };

    // Generate HTML email templates
    const adminEmailHtml = getAdminEmailTemplate(chatData);
    const customerConfirmationHtml = getCustomerConfirmationTemplate(chatData);

    console.log('Sending admin notification email...');
    
    // Send email to admin
    const adminEmailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@brandea.de',
      subject: `🤖 Neue Chat-Anfrage von ${userInfo.name}`,
      html: adminEmailHtml,
      replyTo: userInfo.email,
    });

    console.log('Admin email sent successfully');
    console.log('Admin email ID:', adminEmailResult.data?.id);

    console.log('Sending confirmation email to customer...');
    
    // Send confirmation email to customer
    const confirmationEmailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: userInfo.email,
      subject: '✅ Bestätigung Ihrer Anfrage - Swiss Reinigungsfirma',
      html: customerConfirmationHtml,
    });

    console.log('Confirmation email sent successfully');
    console.log('Confirmation email ID:', confirmationEmailResult.data?.id);

    return res.status(200).json({ 
      success: true,
      message: 'Chat erfolgreich an Spezialisten weitergeleitet',
      adminEmailId: adminEmailResult.data?.id,
      confirmationEmailId: confirmationEmailResult.data?.id
    });

  } catch (error: any) {
    console.error('Error in chat-to-specialist handler:');
    console.error('Error message:', error.message);
    
    return res.status(500).json({ 
      error: 'Fehler beim Senden der E-Mail',
      details: error.message 
    });
  }
}
