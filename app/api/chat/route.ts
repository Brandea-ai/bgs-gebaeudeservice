import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('💬 Chat request received')

  try {
    const body = await request.json()
    const { chatWithAI } = await import('@/server/gemini')
    const result = await chatWithAI(body)

    // 503 macht Ausfälle im Monitoring sichtbar (M03)
    return NextResponse.json(result, { status: result.unavailable ? 503 : 200 })
  } catch (error) {
    console.error('❌ Chat error:', error)
    return NextResponse.json(
      { error: 'Chat failed' },
      { status: 500 }
    )
  }
}
