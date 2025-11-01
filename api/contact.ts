import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { getAdminEmailTemplate } from './emails/admin-notification';
import { getSenderConfirmationTemplate } from './emails/sender-confirmation';

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

    // Generate HTML email templates
    const adminEmailHtml = getAdminEmailTemplate({
      name,
      email,
      phone,
      service,
      message
    });

    const senderConfirmationHtml = getSenderConfirmationTemplate({
      name,
      service
    });

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
