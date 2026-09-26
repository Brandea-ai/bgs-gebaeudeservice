import RootShell, { rootMetadata } from '@/components/RootShell'

// Grundlayout der Sprache it (M60)
export const metadata = rootMetadata('it')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="it">{children}</RootShell>
}
