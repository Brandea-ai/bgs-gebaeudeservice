import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

const blogArticles = [
  {
    id: 1,
    title: "10 Tipps für eine saubere und hygienische Büroumgebung",
    excerpt: "Ein sauberes Büro steigert nicht nur die Produktivität, sondern auch das Wohlbefinden der Mitarbeiter. Wir zeigen Ihnen, wie Sie Ihr Büro optimal sauber halten.",
    date: "15. September 2024",
    author: "Nezir Bozhdaraj",
    category: "Büroreinigung",
    readTime: "5 Min.",
    content: `
      Ein sauberes und hygienisches Büro ist entscheidend für die Gesundheit und Produktivität Ihrer Mitarbeiter. 
      
      **1. Regelmässige Desinfektion von Kontaktflächen**
      Türklinken, Lichtschalter und Tastaturen sollten täglich desinfiziert werden.
      
      **2. Professionelle Bodenreinigung**
      Teppiche und Hartböden benötigen unterschiedliche Pflege.
      
      **3. Luftqualität verbessern**
      Regelmässiges Lüften und Luftreiniger helfen gegen Staub und Allergene.
      
      **4. Papierlose Büros**
      Weniger Papier bedeutet weniger Staub und einfachere Reinigung.
      
      **5. Mülltrennung**
      Konsequente Mülltrennung erleichtert die Entsorgung.
    `
  },
  {
    id: 2,
    title: "KI-gestützte Reinigung: Die Zukunft des Facility Managements",
    excerpt: "Künstliche Intelligenz revolutioniert die Gebäudereinigung. Erfahren Sie, wie KI-Technologien Effizienz und Qualität steigern.",
    date: "10. September 2024",
    author: "Nezir Bozhdaraj",
    category: "KI & Innovation",
    readTime: "7 Min.",
    content: `
      Die Integration von KI in die Gebäudereinigung bringt zahlreiche Vorteile.
      
      **Predictive Maintenance**
      KI-Systeme erkennen Wartungsbedarf bevor Probleme entstehen.
      
      **Smart Scheduling**
      Optimierte Einsatzplanung spart Zeit und Kosten.
      
      **Qualitätskontrolle**
      Automatische Überprüfung der Reinigungsqualität durch Bilderkennung.
      
      **Ressourcen-Optimierung**
      Intelligente Verbrauchsprognosen für Reinigungsmittel.
    `
  },
  {
    id: 3,
    title: "Nachhaltige Reinigung: Umweltfreundliche Lösungen für Ihr Unternehmen",
    excerpt: "Nachhaltigkeit wird immer wichtiger. Wir zeigen, wie Sie Ihr Gebäude umweltfreundlich reinigen können.",
    date: "5. September 2024",
    author: "Nezir Bozhdaraj",
    category: "Nachhaltigkeit",
    readTime: "6 Min.",
    content: `
      Umweltfreundliche Reinigung schont nicht nur die Natur, sondern auch Ihre Mitarbeiter.
      
      **Biologisch abbaubare Reinigungsmittel**
      Moderne Öko-Reiniger sind genauso effektiv wie herkömmliche Produkte.
      
      **Wassersparende Technologien**
      Moderne Reinigungsmaschinen verbrauchen bis zu 70% weniger Wasser.
      
      **Energieeffiziente Geräte**
      LED-Beleuchtung und energiesparende Staubsauger senken Kosten.
    `
  },
  {
    id: 4,
    title: "Industriereinigung: Herausforderungen und Lösungen",
    excerpt: "Produktionshallen und Industrieanlagen stellen besondere Anforderungen an die Reinigung. Ein Überblick.",
    date: "1. September 2024",
    author: "Nezir Bozhdaraj",
    category: "Industriereinigung",
    readTime: "8 Min.",
    content: `
      Industriereinigung erfordert Spezialwissen und professionelle Ausrüstung.
      
      **Sicherheit geht vor**
      Alle Mitarbeiter sind in Arbeitssicherheit geschult.
      
      **Spezialreiniger für Öl und Fett**
      Industrielle Verschmutzungen benötigen spezielle Reinigungsmittel.
      
      **Minimale Betriebsunterbrechung**
      Reinigung während Produktionspausen oder im laufenden Betrieb.
    `
  },
  {
    id: 5,
    title: "Hygiene in Gesundheitseinrichtungen: Standards und Best Practices",
    excerpt: "Krankenhäuser und Pflegeheime haben höchste Hygieneanforderungen. So werden sie erfüllt.",
    date: "25. August 2024",
    author: "Nezir Bozhdaraj",
    category: "Healthcare",
    readTime: "9 Min.",
    content: `
      Hygiene in Gesundheitseinrichtungen rettet Leben.
      
      **Desinfektion nach RKI-Standards**
      Wir arbeiten nach den Richtlinien des Robert Koch-Instituts.
      
      **Spezielle Reinigungsverfahren**
      Unterschiedliche Bereiche erfordern unterschiedliche Reinigungsprotokolle.
      
      **Dokumentation**
      Lückenlose Dokumentation aller Reinigungsschritte.
    `
  },
  {
    id: 6,
    title: "Winterdienst: Professionelle Schneeräumung und Streudienst",
    excerpt: "Sicherheit im Winter: Wie professioneller Winterdienst Unfälle verhindert.",
    date: "20. August 2024",
    author: "Nezir Bozhdaraj",
    category: "Winterdienst",
    readTime: "5 Min.",
    content: `
      Professioneller Winterdienst sorgt für sichere Wege und Zufahrten.
      
      **24/7 Bereitschaft**
      Unser Team ist rund um die Uhr einsatzbereit.
      
      **Umweltfreundliches Streugut**
      Wir verwenden salzreduzierte oder salzfreie Streumittel.
      
      **Räumfahrzeuge**
      Moderne Technik für effiziente Schneeräumung.
    `
  },
  {
    id: 7,
    title: "Fassadenreinigung: Methoden und Techniken im Überblick",
    excerpt: "Von Hochdruckreinigung bis Trockeneisstrahlen – welche Methode für welche Fassade?",
    date: "15. August 2024",
    author: "Nezir Bozhdaraj",
    category: "Fassadenreinigung",
    readTime: "7 Min.",
    content: `
      Jede Fassade benötigt eine individuelle Reinigungsmethode.
      
      **Hochdruckreinigung**
      Effektiv für robuste Oberflächen wie Beton.
      
      **Niederdruckreinigung**
      Schonend für empfindliche Materialien.
      
      **Trockeneisstrahlen**
      Umweltfreundlich und rückstandsfrei.
    `
  },
  {
    id: 8,
    title: "Teppichreinigung: So bleiben Ihre Teppiche lange schön",
    excerpt: "Professionelle Teppichreinigung verlängert die Lebensdauer und verbessert die Raumluft.",
    date: "10. August 2024",
    author: "Nezir Bozhdaraj",
    category: "Bodenreinigung",
    readTime: "6 Min.",
    content: `
      Teppiche sind Staubfänger und benötigen regelmässige Pflege.
      
      **Sprühextraktionsverfahren**
      Die effektivste Methode für Teppichböden.
      
      **Trockenreinigung**
      Schnell wieder begehbar.
      
      **Fleckenentfernung**
      Spezialbehandlung für hartnäckige Flecken.
    `
  },
  {
    id: 9,
    title: "Bauendreinigung: Checkliste für die perfekte Übergabe",
    excerpt: "Nach dem Bau kommt die Endreinigung. Was muss beachtet werden?",
    date: "5. August 2024",
    author: "Nezir Bozhdaraj",
    category: "Bauendreinigung",
    readTime: "8 Min.",
    content: `
      Bauendreinigung ist der letzte Schritt vor der Übergabe.
      
      **Grobreinigung**
      Entfernung von Baustaub und grobem Schmutz.
      
      **Feinreinigung**
      Detailarbeit an Fenstern, Böden und Sanitär.
      
      **Abnahme**
      Gemeinsame Kontrolle mit dem Bauherrn.
    `
  },
  {
    id: 10,
    title: "Qualitätsmanagement in der Gebäudereinigung: ISO 9001",
    excerpt: "Wie ISO-Zertifizierung die Qualität in der Gebäudereinigung sicherstellt.",
    date: "1. August 2024",
    author: "Nezir Bozhdaraj",
    category: "Qualität",
    readTime: "7 Min.",
    content: `
      ISO 9001 ist der internationale Standard für Qualitätsmanagement.
      
      **Prozessoptimierung**
      Kontinuierliche Verbesserung aller Abläufe.
      
      **Kundenzufriedenheit**
      Regelmässige Befragungen und Feedback-Schleifen.
      
      **Mitarbeiterschulung**
      Fortlaufende Weiterbildung des Teams.
    `
  }
]

export function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white">Blog & Ratgeber</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">BGS Blog</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
            Aktuelles, Tipps und Wissenswertes rund um Gebäudereinigung und Facility Management.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="mb-4 w-fit">{article.category}</Badge>
                  <CardTitle className="text-xl mb-4">{article.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {article.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-2" />
                      {article.author}
                    </div>
                    <Button variant="ghost" size="sm">
                      Lesen <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
