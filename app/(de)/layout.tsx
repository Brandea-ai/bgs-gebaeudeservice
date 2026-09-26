import RootShell, { rootMetadata } from '@/components/RootShell'

// Grundlayout der Sprache de (M60)
export const metadata = rootMetadata('de')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="de">{children}</RootShell>
}
