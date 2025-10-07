import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Download, FileText, File, CheckCircle2 } from 'lucide-react'

const downloads = [
  {
    id: 1,
    title: "BGS Unternehmensbroschüre 2024",
    description: "Umfassender Überblick über alle unsere Services und Leistungen.",
    size: "2.5 MB",
    type: "PDF",
    category: "Allgemein"
  },
  {
    id: 2,
    title: "Preisliste Büroreinigung",
    description: "Transparente Preise für alle Büroreinigungsleistungen.",
    size: "850 KB",
    type: "PDF",
    category: "Preise"
  },
  {
    id: 3,
    title: "Preisliste Industriereinigung",
    description: "Individuelle Preise für Industriereinigung und Hallenreinigung.",
    size: "920 KB",
    type: "PDF",
    category: "Preise"
  },
  {
    id: 4,
    title: "Checkliste Bauendreinigung",
    description: "Vollständige Checkliste für die perfekte Bauendreinigung.",
    size: "450 KB",
    type: "PDF",
    category: "Checklisten"
  },
  {
    id: 5,
    title: "Hygiene-Standards Healthcare",
    description: "Unsere Hygiene-Standards für Gesundheitseinrichtungen.",
    size: "1.2 MB",
    type: "PDF",
    category: "Standards"
  },
  {
    id: 6,
    title: "Umweltzertifikate & Nachweise",
    description: "ISO 9001 und weitere Zertifizierungen.",
    size: "3.1 MB",
    type: "PDF",
    category: "Zertifikate"
  },
  {
    id: 7,
    title: "Reinigungsplan Vorlage",
    description: "Editierbare Vorlage für Ihren individuellen Reinigungsplan.",
    size: "320 KB",
    type: "PDF",
    category: "Vorlagen"
  },
  {
    id: 8,
    title: "Sicherheitsdatenblätter Reinigungsmittel",
    description: "Alle Sicherheitsdatenblätter unserer verwendeten Produkte.",
    size: "4.8 MB",
    type: "PDF",
    category: "Sicherheit"
  },
  {
    id: 9,
    title: "Referenzprojekte 2023/2024",
    description: "Erfolgreiche Projekte und zufriedene Kunden.",
    size: "5.2 MB",
    type: "PDF",
    category: "Referenzen"
  },
  {
    id: 10,
    title: "Anfrageformular Services",
    description: "Formular für Ihre individuelle Serviceanfrage.",
    size: "180 KB",
    type: "PDF",
    category: "Formulare"
  }
]

export function DownloadsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white">Downloads & Ressourcen</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Downloads</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
            Broschüren, Preislisten, Checklisten und weitere nützliche Dokumente zum Download.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((download) => (
              <Card key={download.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="h-12 w-12 text-[#0A2540]" />
                    <Badge>{download.category}</Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{download.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{download.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{download.type} • {download.size}</span>
                    <Button size="sm" className="bg-[#0A2540] hover:bg-[#1a3a5f]">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-4">Benötigen Sie weitere Informationen?</h2>
          <p className="text-gray-600 mb-8">Kontaktieren Sie uns für individuelle Unterlagen und Angebote.</p>
          <Button size="lg" className="bg-[#0A2540] hover:bg-[#1a3a5f]">
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
      </section>
    </div>
  )
}

export default DownloadsPage
