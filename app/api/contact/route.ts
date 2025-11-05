import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/server/email'

export async function POST(request: NextRequest) {
  console.log('📧 Contact form submission received')

  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Bitte füllen Sie alle Pflichtfelder aus.'
        },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
        },
        { status: 400 }
      )
    }

    // Send email
    console.log('📤 Attempting to send email via Resend...')
    try {
      const emailSent = await sendContactEmail({
        name,
        email,
        phone,
        service,
        message
      })

      if (emailSent) {
        console.log('✅ Email sent successfully!')
      } else {
        console.warn('⚠️ Email sending failed, but form submission logged')
      }
    } catch (emailError) {
      console.error('❌ Email sending error:', emailError)
    }

    return NextResponse.json({
      success: true,
      message: 'Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.'
    })

  } catch (error) {
    console.error('❌ Error processing contact form:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
      },
      { status: 500 }
    )
  }
}
