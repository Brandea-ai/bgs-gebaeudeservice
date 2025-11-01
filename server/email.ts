/**
 * Email Service using Resend
 * 
 * To enable email sending in production:
 * 1. Sign up at https://resend.com
 * 2. Get your API key
 * 3. Add RESEND_API_KEY to your environment variables
 * 4. Verify your domain (info@brandea.de)
 * 
 * Installation: npm install resend
 */

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  const { firstName, lastName, email, phone, message } = data;

  // Check if Resend is configured
  const resendApiKey = process.env.RESEND_API_KEY;
  
  if (!resendApiKey) {
    console.log("⚠️  RESEND_API_KEY not configured. Email would be sent to: info@brandea.de");
    console.log("📧 Email preview:", {
      to: "info@brandea.de",
      from: email,
      subject: `Neue Kontaktanfrage von ${firstName} ${lastName}`,
      message: message
    });
    return true; // Return success for development
  }

  try {
    // Dynamic import of Resend (only if API key is present)
    const { Resend } = await import('resend');
    const resend = new Resend(resendApiKey);

    const emailHtml = `
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
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Brandea Website Kontaktformular</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${firstName} ${lastName}</div>
      </div>
      <div class="field">
        <div class="label">E-Mail:</div>
        <div class="value"><a href="mailto:${email}" style="color: #c44a2c; text-decoration: none;">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Telefon:</div>
        <div class="value">${phone || 'Nicht angegeben'}</div>
      </div>
      <div class="field">
        <div class="label">Nachricht:</div>
        <div class="message-box">${message}</div>
      </div>
      <div class="footer">
        Diese Nachricht wurde über das Kontaktformular auf brandea.de gesendet.
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const { data: emailResponse, error } = await resend.emails.send({
      from: 'Brandea Website <noreply@brandea.de>',
      to: ['info@brandea.de'],
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${firstName} ${lastName}`,
      html: emailHtml,
      text: `
Neue Kontaktanfrage über die Website

Name: ${firstName} ${lastName}
E-Mail: ${email}
Telefon: ${phone || 'Nicht angegeben'}

Nachricht:
${message}

---
Diese Nachricht wurde über das Kontaktformular auf brandea.de gesendet.
      `
    });

    if (error) {
      console.error("❌ Error sending email:", error);
      return false;
    }

    console.log("✅ Email sent successfully:", emailResponse);
    return true;

  } catch (error) {
    console.error("❌ Error in email service:", error);
    return false;
  }
}
