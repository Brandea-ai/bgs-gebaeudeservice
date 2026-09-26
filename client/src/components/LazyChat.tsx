'use client'

import dynamic from 'next/dynamic'
import { chatEnabled } from '../../../shared/features'

/**
 * Chat und KI-Berater erst laden, wenn der Chat an ist (E14, E35, M25). Das
 * Nachladen muss in einer Client-Komponente stehen, sonst lädt Next.js den Code
 * trotzdem auf jeder Seite vor.
 */
const AIChatbot = dynamic(() => import('./AIChatbot'), { ssr: false })
const IndustryAdvisor = dynamic(() => import('./IndustryAdvisor'), { ssr: false })

export function LazyChatbot() {
  return chatEnabled ? <AIChatbot /> : null
}

export function LazyIndustryAdvisor() {
  return chatEnabled ? <IndustryAdvisor /> : null
}
