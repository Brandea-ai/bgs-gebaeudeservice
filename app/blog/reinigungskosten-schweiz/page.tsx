import type { Metadata } from 'next'
import ArticlePage from '@/components/ArticlePage'
import { ratgeber } from '../../../content/de/ratgeber'
import { metaFor } from '../../../shared/seo'

// Text in content/de/ratgeber.ts, Fassung ohne Preise (M53, R3e)
const article = ratgeber.kosten

export const metadata: Metadata = metaFor(article.path)

export default function Page() {
  return <ArticlePage article={article} />
}
