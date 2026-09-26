import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { leistungen } from '../../../content/de/leistungen'
import { metaFor } from '../../../shared/seo'

// Texte in content/de/leistungen.ts, Vorlage in client/src/components/ServicePage.tsx (M29)
const content = leistungen.hauswartung

export const metadata: Metadata = metaFor(content.path)

export default function Page() {
  return <ServicePage content={content} />
}
