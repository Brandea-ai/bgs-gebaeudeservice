import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { premium } from '../../../content/de/premium'
import { metaFor } from '../../../shared/seo'

// Texte in content/de/premium.ts, Vorlage in client/src/components/ServicePage.tsx (M29)
const content = premium.privatjet

export const metadata: Metadata = metaFor(content.path)

export default function Page() {
  return <ServicePage content={content} />
}
