import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/server/email'

export async function POST(request: NextRequest) {
  console.log('📧 Sending chat to specialist')

  try {
    const body = await request.json()
    const { userInfo, conversationLong, conversationShort, identificationCode, extractedInfo } = body

    // Build comprehensive qualification summary for sales team
    const qualificationSummary = `
═══════════════════════════════════════════════
📋 SALES QUALIFICATION SUMMARY
═══════════════════════════════════════════════

🎯 IDENTIFIKATIONSCODE: ${identificationCode}

👤 KONTAKTDATEN:
   Name: ${userInfo.name || 'Nicht angegeben'}
   E-Mail: ${userInfo.email}
   Telefon: ${userInfo.phone || 'Nicht angegeben'}
   Stadt: ${userInfo.city || 'Nicht angegeben'}

🏢 UNTERNEHMENSDATEN:
   Branche/Typ: ${extractedInfo?.industry || 'Nicht angegeben'}
   Firma: ${userInfo.company || 'Nicht angegeben'}
   Mitarbeiter: ${extractedInfo?.employees || 'Nicht angegeben'}
   Größe: ${extractedInfo?.size || 'Nicht angegeben'}

🧹 REINIGUNGSBEDARF:
   Service: ${userInfo.service || 'Nicht angegeben'}
   Bereiche: ${extractedInfo?.areas || 'Nicht angegeben'}
   Frequenz: ${extractedInfo?.frequency || 'Nicht angegeben'}
   Zeitpunkt: ${extractedInfo?.timing || 'Nicht angegeben'}
   Besonderheiten: ${extractedInfo?.special_requirements || 'Keine angegeben'}

═══════════════════════════════════════════════
💬 VOLLSTÄNDIGER GESPRÄCHSVERLAUF
═══════════════════════════════════════════════

${conversationLong}

═══════════════════════════════════════════════
📝 HANDLUNGSEMPFEHLUNG FÜR CLOSER
═══════════════════════════════════════════════

1. Kontaktiere den Kunden innerhalb von 12h (werktags)
2. Referenziere den Identifikationscode: ${identificationCode}
3. Gehe auf die spezifischen Anforderungen der Branche ein
4. Bereite Angebot vor basierend auf: ${extractedInfo?.frequency || 'Frequenz'}, ${extractedInfo?.areas || 'Bereiche'}
5. Beachte besondere Anforderungen falls angegeben

═══════════════════════════════════════════════
    `.trim()

    const emailData = {
      name: userInfo.name || 'Lead aus KI-Chat',
      email: userInfo.email,
      phone: userInfo.phone || 'Nicht angegeben',
      service: `${userInfo.service || 'Reinigungsdienstleistung'} (${extractedInfo?.industry || 'Unbekannte Branche'})`,
      message: qualificationSummary
    }

    const success = await sendContactEmail(emailData)

    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('❌ Chat to specialist error:', error)
    return NextResponse.json(
      { error: 'Failed to send to specialist' },
      { status: 500 }
    )
  }
}
