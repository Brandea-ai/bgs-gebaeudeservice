import RootShell, { rootMetadata } from '@/components/RootShell'

// Grundlayout der Sprache fr (M60)
export const metadata = rootMetadata('fr')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>
}
