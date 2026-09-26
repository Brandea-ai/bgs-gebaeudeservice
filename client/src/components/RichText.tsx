import Link from 'next/link'
import type { ReactNode } from 'react'
import { localizeHref, type Locale } from '../../../shared/i18n'

// [Linktext](/pfad), nur interne Pfade (content/types.ts)
const LINK = /\[([^\]]+)\]\((\/[^)\s]*)\)/g

const linkStyle = 'font-medium text-red-700 underline underline-offset-4 hover:no-underline'

/** Fliesstext aus der Inhaltsschicht mit internen Links. Auf dunklem Grund linkClassName setzen. Links stehen mit deutscher Adresse und werden je Sprache übersetzt (M60). */
export default function RichText({ text, linkClassName = linkStyle, lang = 'de' }: { text: string; linkClassName?: string; lang?: Locale }) {
  const parts: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(LINK)) {
    const start = match.index ?? 0
    if (start > last) parts.push(text.slice(last, start))
    parts.push(
      <Link key={start} href={localizeHref(match[2], lang)} className={linkClassName}>
        {match[1]}
      </Link>,
    )
    last = start + match[0].length
  }
  parts.push(text.slice(last))
  return <>{parts}</>
}
