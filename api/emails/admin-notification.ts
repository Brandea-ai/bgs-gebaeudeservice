export interface AdminEmailData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

export function getAdminEmailTemplate(data: AdminEmailData): string {
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
