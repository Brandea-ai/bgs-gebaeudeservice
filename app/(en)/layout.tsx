import RootShell, { rootMetadata } from '@/components/RootShell'

// Grundlayout der Sprache en (M60)
export const metadata = rootMetadata('en')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>
}
