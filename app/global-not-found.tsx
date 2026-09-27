import type { Metadata } from 'next'
import RootShell from '@/components/RootShell'
import NotFoundSwitch from '@/components/NotFoundSwitch'
import { navDicts } from '../content/navigation'
import { company } from '../shared/company'

/**
 * 404 für alle Adressen (M17, E61, T14). Mit einem Grundlayout je Sprache (M60)
 * braucht Next.js dafür eine eigene Seite mit vollständigem HTML. Sie kommt auf
 * Deutsch aus dem Build; unter /en, /fr und /it wechselt sie im Browser in die
 * Sprache der Adresse (NotFoundSwitch).
 */
export const metadata: Metadata = {
  title: `${navDicts.de.notFound.title} | ${company.brand}`,
  robots: { index: false, follow: true },
}

export default function GlobalNotFound() {
  return (
    <RootShell lang="de">
      <NotFoundSwitch />
    </RootShell>
  )
}
