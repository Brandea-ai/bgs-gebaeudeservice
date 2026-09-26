import type { Metadata } from 'next'
import RootShell from '@/components/RootShell'
import NotFoundView from '@/views/NotFoundView'
import { navDicts } from '../content/navigation'
import { company } from '../shared/company'

/**
 * 404 für alle Adressen (M17, E61). Mit einem Grundlayout je Sprache (M60)
 * braucht Next.js dafür eine eigene Seite mit vollständigem HTML. Sie erscheint
 * auf Deutsch, Menü und Umschalter führen zu den anderen Sprachen.
 */
export const metadata: Metadata = {
  title: `${navDicts.de.notFound.title} | ${company.brand}`,
  robots: { index: false, follow: true },
}

export default function GlobalNotFound() {
  return (
    <RootShell lang="de">
      <NotFoundView lang="de" />
    </RootShell>
  )
}
