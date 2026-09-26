import { notFound } from 'next/navigation'
import { pageForSlug, pageMetadata, renderPage, staticParams } from '@/views/registry'
import { isActiveLocale } from '../../../../shared/i18n'

// Alle Seiten der Sprache fr aus einer Route (M60). Nur bekannte Adressen, statisch erzeugt.
// Alles andere zeigt app/global-not-found.tsx.
const lang = 'fr'
export const dynamicParams = false

export function generateStaticParams() {
  return isActiveLocale(lang) ? staticParams(lang) : []
}

type Props = { params: Promise<{ slug?: string[] }> }

export async function generateMetadata({ params }: Props) {
  const path = pageForSlug(lang, (await params).slug)
  return path ? pageMetadata(path, lang) : {}
}

export default async function Page({ params }: Props) {
  const path = pageForSlug(lang, (await params).slug)
  if (!path || !isActiveLocale(lang)) notFound()
  return renderPage(path, lang)
}
