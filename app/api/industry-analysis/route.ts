import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  console.log('🤖 Industry analysis request')

  try {
    const body = await request.json()
    const { analyzeIndustry } = await import('@/server/gemini')
    const result = await analyzeIndustry(body)

    return NextResponse.json(result)
  } catch (error) {
    console.error('❌ Industry analysis error:', error)
    return NextResponse.json(
      { error: 'Analysis failed' },
      { status: 500 }
    )
  }
}
