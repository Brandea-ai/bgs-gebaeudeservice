import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

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

    // Prepare email content
    const emailContent = `
Neue Kontaktanfrage von der BGS-Gebäudeservice Website

Name: ${name}
E-Mail: ${email}
Telefon: ${phone || 'Nicht angegeben'}
Gewünschte Dienstleistung: ${service || 'Nicht angegeben'}

Nachricht:
${message}

---
Diese E-Mail wurde automatisch über das Kontaktformular auf bgs-gebaeudeservice.vercel.app gesendet.
    `.trim();

    console.log('📤 Sending email via Resend...');
    console.log('From: onboarding@resend.dev');
    console.log('To: info@brandea.de');
    console.log('Subject: Neue Kontaktanfrage von ' + name);

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@brandea.de',
      subject: `Neue Kontaktanfrage von ${name}`,
      text: emailContent,
      replyTo: email,
    });

    console.log('✅ Email sent successfully!');
    console.log('Resend response:', JSON.stringify(data, null, 2));

    return res.status(200).json({ 
      success: true,
      message: 'E-Mail erfolgreich gesendet',
      emailId: data.id
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
