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
  identificationCode: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data: ChatToSpecialistData = req.body;

    // Only email is required, name can be fallback from email
    if (!data.userInfo || !data.userInfo.email) {
      return res.status(400).json({ error: 'Missing required user information (email)' });
    }

    // Use fallback name if not provided
    const finalName = data.userInfo.name || data.userInfo.email.split('@')[0] || 'Kunde';
    const finalCompany = data.userInfo.company || 'Nicht angegeben';
    const finalCity = data.userInfo.city || 'Nicht angegeben';

    console.log('📧 Sending specialist emails:', {
      name: finalName,
      email: data.userInfo.email,
      company: finalCompany,
      city: finalCity,
      service: data.userInfo.service
    });

    // Email 1: To Admin (internal: info@brandea.de)
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Neue Kundenanfrage</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Neue Kundenanfrage</h1>
                      <p style="margin: 10px 0 0 0; color: #fecaca; font-size: 14px;">BGS Gebäudeservice</p>
                    </td>
                  </tr>

                  <!-- Identification Code -->
                  <tr>
                    <td style="padding: 20px; background-color: #fef2f2; border-bottom: 2px solid #dc2626;">
                      <p style="margin: 0; color: #991b1b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Identifikationscode</p>
                      <p style="margin: 5px 0 0 0; color: #dc2626; font-size: 20px; font-weight: 700; font-family: 'Courier New', monospace;">${data.identificationCode}</p>
                    </td>
                  </tr>

                  <!-- Contact Details -->
                  <tr>
                    <td style="padding: 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">Kontaktdaten</h2>
                      
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; margin-bottom: 25px;">
                        <tr>
                          <td style="padding: 20px;">
                            <table width="100%" cellpadding="8" cellspacing="0">
                              ${data.userInfo.service ? `
                              <tr>
                                <td style="color: #666666; font-size: 14px; font-weight: 600; width: 130px; vertical-align: top;">Leistung:</td>
                                <td style="color: #1a1a1a; font-size: 15px; font-weight: 700;">${data.userInfo.service}</td>
                              </tr>
                              ` : ''}
                              <tr>
                                <td style="color: #666666; font-size: 14px; font-weight: 600; width: 130px; vertical-align: top;">Name:</td>
                                <td style="color: #1a1a1a; font-size: 15px;">${finalName}</td>
                              </tr>
                              <tr>
                                <td style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">Firma:</td>
                                <td style="color: #1a1a1a; font-size: 15px;">${finalCompany}</td>
                              </tr>
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
                              <tr>
                                <td style="color: #666666; font-size: 14px; font-weight: 600; vertical-align: top;">Stadt:</td>
                                <td style="color: #1a1a1a; font-size: 15px;">${finalCity}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Project Details -->
                      <h2 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">Projektdetails</h2>
                      <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; padding: 15px; margin-bottom: 25px;">
                        <pre style="margin: 0; color: #4b5563; font-size: 14px; line-height: 1.6; white-space: pre-wrap; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${data.conversationShort}</pre>
                      </div>

                      <!-- Full Conversation -->
                      <h2 style="margin: 0 0 15px 0; color: #1a1a1a; font-size: 18px; font-weight: 600;">Gesprächsverlauf</h2>
                      <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 4px; padding: 15px;">
                        <pre style="margin: 0; color: #4b5563; font-size: 13px; line-height: 1.6; white-space: pre-wrap; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${data.conversationLong}</pre>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #6b7280; font-size: 12px;">BGS Gebäudeservice | Swiss Reinigungsfirma</p>
                      <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 11px;">Diese E-Mail wurde automatisch generiert.</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Email 2: To Customer (external: shows info@bgs-service.ch)
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ihre Anfrage bei BGS Gebäudeservice</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Vielen Dank für Ihre Anfrage</h1>
                      <p style="margin: 10px 0 0 0; color: #fecaca; font-size: 14px;">BGS Gebäudeservice</p>
                    </td>
                  </tr>

                  <!-- Identification Code -->
                  <tr>
                    <td style="padding: 20px; background-color: #fef2f2; border-bottom: 2px solid #dc2626;">
                      <p style="margin: 0; color: #991b1b; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Ihr Identifikationscode</p>
                      <p style="margin: 5px 0 0 0; color: #dc2626; font-size: 20px; font-weight: 700; font-family: 'Courier New', monospace;">${data.identificationCode}</p>
                      <p style="margin: 10px 0 0 0; color: #7f1d1d; font-size: 12px;">Bitte bewahren Sie diesen Code auf. Sie können ihn bei Rückfragen angeben.</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px;">
                      <p style="margin: 0 0 20px 0; color: #1a1a1a; font-size: 16px; line-height: 1.6;">
                        Sehr geehrte/r ${finalName},
                      </p>
                      
                      <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 15px; line-height: 1.6;">
                        vielen Dank für Ihre Anfrage bezüglich unserer Reinigungsdienstleistungen. Wir haben Ihre Nachricht erhalten und werden uns umgehend darum kümmern.
                      </p>

                      <div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 15px; margin: 20px 0;">
                        <p style="margin: 0; color: #166534; font-size: 14px; font-weight: 600;">
                          Ein Spezialist wird sich innerhalb von 12 Stunden (werktags) bei Ihnen melden.
                        </p>
                      </div>

                      <p style="margin: 20px 0; color: #4b5563; font-size: 15px; line-height: 1.6;">
                        Sollten Sie in der Zwischenzeit Fragen haben, können Sie uns jederzeit kontaktieren:
                      </p>

                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
                        <tr>
                          <td style="padding: 15px; background-color: #f9fafb; border-radius: 4px;">
                            <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 13px; font-weight: 600;">Kontakt</p>
                            <p style="margin: 0; color: #1a1a1a; font-size: 14px;">
                              <strong>Telefon:</strong> <a href="tel:+41413205610" style="color: #1e3a8a; text-decoration: none;">+41 41 320 56 10</a>
                            </p>
                            <p style="margin: 5px 0 0 0; color: #1a1a1a; font-size: 14px;">
                              <strong>E-Mail:</strong> <a href="mailto:info@bgs-service.ch" style="color: #1e3a8a; text-decoration: none;">info@bgs-service.ch</a>
                            </p>
                          </td>
                        </tr>
                      </table>

                      <p style="margin: 20px 0 0 0; color: #4b5563; font-size: 15px; line-height: 1.6;">
                        Mit freundlichen Grüßen<br>
                        <strong>Ihr BGS Gebäudeservice Team</strong>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #6b7280; font-size: 12px;">BGS Gebäudeservice | Swiss Reinigungsfirma</p>
                      <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 11px;">Professionelle Reinigungsdienstleistungen in Zürich, Zug und Luzern</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Send both emails using Resend's test domain (like contact form)
    await Promise.all([
      // Admin email (internal)
      resend.emails.send({
        from: 'BGS Gebäudeservice <onboarding@resend.dev>',
        to: 'info@brandea.de',
        subject: `Neue Anfrage: ${data.userInfo.service || 'Reinigung'} - ${data.identificationCode}`,
        html: adminEmailHtml,
        replyTo: data.userInfo.email,  // User can reply to customer directly
      }),

      // Customer email (shows external address)
      resend.emails.send({
        from: 'BGS Gebäudeservice <onboarding@resend.dev>',
        to: data.userInfo.email,
        subject: `Ihre Anfrage bei BGS Gebäudeservice - ${data.identificationCode}`,
        html: customerEmailHtml,
        replyTo: 'info@brandea.de',  // Customer replies go to brandea
      })
    ]);

    res.status(200).json({ 
      success: true,
      identificationCode: data.identificationCode
    });

  } catch (error: any) {
    console.error('Chat-to-specialist error:', error);
    res.status(500).json({ 
      error: 'Failed to send emails',
      details: error.message 
    });
  }
}
