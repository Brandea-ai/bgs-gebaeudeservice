import { useState } from 'react'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Search } from 'lucide-react'

const glossaryTerms = [
  { term: "Bauendreinigung", definition: "Abschlussreinigung nach Bau- oder Renovierungsarbeiten, um das Objekt übergabefertig zu machen." },
  { term: "Büroreinigung", definition: "Regelmässige Reinigung von Büroräumen, Arbeitsplätzen und Gemeinschaftsbereichen." },
  { term: "Desinfektion", definition: "Abtötung von Krankheitserregern auf Oberflächen durch chemische oder physikalische Verfahren." },
  { term: "Facility Management", definition: "Ganzheitliche Verwaltung und Bewirtschaftung von Gebäuden und Anlagen." },
  { term: "Fassadenreinigung", definition: "Professionelle Reinigung von Gebäudeaussenwänden aus verschiedenen Materialien." },
  { term: "Fensterreinigung", definition: "Reinigung von Fenstern innen und aussen für streifenfreien Durchblick." },
  { term: "Grundreinigung", definition: "Intensive Tiefenreinigung aller Bereiche, die über die Unterhaltsreinigung hinausgeht." },
  { term: "HACCP", definition: "Hazard Analysis Critical Control Points - Hygienestandard in der Lebensmittelindustrie." },
  { term: "Hallenreinigung", definition: "Reinigung grosser Produktions- und Lagerhallen mit Spezialgeräten." },
  { term: "Hausmeisterservice", definition: "Umfassende Betreuung von Immobilien inkl. Kontrolle, Wartung und Kleinreparaturen." },
  { term: "Hochdruckreinigung", definition: "Reinigungsverfahren mit Wasser unter hohem Druck für robuste Oberflächen." },
  { term: "Hygieneplan", definition: "Dokumentierter Plan über alle Reinigungs- und Desinfektionsmassnahmen." },
  { term: "Industriereinigung", definition: "Spezialisierte Reinigung von Produktionsanlagen und Industriebetrieben." },
  { term: "ISO 9001", definition: "Internationaler Standard für Qualitätsmanagement-Systeme." },
  { term: "Kehrmaschine", definition: "Maschine zum Kehren grosser Flächen in Hallen und Aussenbereichen." },
  { term: "Maschinenreinigung", definition: "Reinigung von Produktionsmaschinen und Anlagen." },
  { term: "Nassreinigung", definition: "Reinigungsverfahren mit Wasser und Reinigungsmitteln." },
  { term: "Niederdruckreinigung", definition: "Schonende Reinigung mit reduziertem Wasserdruck für empfindliche Oberflächen." },
  { term: "Objektbetreuung", definition: "Regelmässige Betreuung und Pflege von Immobilien." },
  { term: "Polsterreinigung", definition: "Professionelle Reinigung von Möbeln, Stühlen und Polstern." },
  { term: "Qualitätskontrolle", definition: "Systematische Überprüfung der Reinigungsqualität." },
  { term: "Reinigungsplan", definition: "Zeitplan für alle Reinigungsarbeiten in einem Objekt." },
  { term: "Sonderreinigung", definition: "Spezielle Reinigungsleistungen für aussergewöhnliche Anforderungen." },
  { term: "Sprühextraktionsverfahren", definition: "Tiefenreinigung von Teppichen durch Einsprühen und Absaugen." },
  { term: "Tatortreinigung", definition: "Diskrete Reinigung nach Unfällen oder Verbrechen." },
  { term: "Teppichreinigung", definition: "Professionelle Reinigung von Teppichböden und Auslegeware." },
  { term: "Trockeneisreinigung", definition: "Umweltfreundliches Reinigungsverfahren mit festem CO2." },
  { term: "Trockenreinigung", definition: "Reinigung ohne oder mit minimalem Wassereinsatz." },
  { term: "Unterhaltsreinigung", definition: "Regelmässige Grundreinigung zur Erhaltung der Sauberkeit." },
  { term: "Verglasung", definition: "Fenster und Glasflächen eines Gebäudes." },
  { term: "Winterdienst", definition: "Schneeräumung und Streudienst in der kalten Jahreszeit." },
  { term: "Abfallentsorgung", definition: "Fachgerechte Entsorgung von Abfällen und Wertstoffen." },
  { term: "Arbeitsschutz", definition: "Massnahmen zum Schutz der Gesundheit von Reinigungskräften." },
  { term: "Bedarfsreinigung", definition: "Reinigung nach Bedarf, nicht nach festem Plan." },
  { term: "Bodenreinigung", definition: "Reinigung verschiedener Bodenbeläge wie Fliesen, Parkett, Teppich." },
  { term: "Brandschadensanierung", definition: "Reinigung und Sanierung nach Bränden." },
  { term: "Checkliste", definition: "Systematische Auflistung aller Reinigungsaufgaben." },
  { term: "Dampfreinigung", definition: "Reinigung mit heissem Wasserdampf ohne Chemikalien." },
  { term: "Einpflegung", definition: "Erstpflege neuer Bodenbeläge zum Schutz und Glanz." },
  { term: "Fleckenentfernung", definition: "Gezielte Behandlung hartnäckiger Flecken." },
  { term: "Glasreinigung", definition: "Streifenfreie Reinigung von Glasflächen." },
  { term: "Graffiti-Entfernung", definition: "Entfernung von Graffiti von Fassaden und Wänden." },
  { term: "Grundierung", definition: "Erstbehandlung von Böden vor der Versiegelung." },
  { term: "Intervallreinigung", definition: "Reinigung in festgelegten Zeitabständen." },
  { term: "Kristallisation", definition: "Spezialverfahren zur Aufbereitung von Steinböden." },
  { term: "Leerstandsreinigung", definition: "Reinigung leerstehender Immobilien." },
  { term: "Messie-Reinigung", definition: "Einfühlsame Reinigung und Entrümpelung von Messie-Wohnungen." },
  { term: "Mikrofasertuch", definition: "Spezielles Reinigungstuch aus feinen Kunstfasern." },
  { term: "Ökologische Reinigung", definition: "Umweltfreundliche Reinigung mit biologisch abbaubaren Mitteln." },
  { term: "Parkettaufbereitung", definition: "Professionelle Pflege und Aufarbeitung von Parkettböden." },
  { term: "pH-Wert", definition: "Mass für den sauren oder basischen Charakter von Reinigungsmitteln." },
  { term: "Reinigungsmittel", definition: "Chemische Substanzen zur Entfernung von Verschmutzungen." },
  { term: "Schimmelentfernung", definition: "Professionelle Beseitigung von Schimmelpilzen." },
  { term: "Schmutzfangmatte", definition: "Matte am Eingang zum Auffangen von Schmutz." },
  { term: "Sicherheitsdatenblatt", definition: "Dokument mit Sicherheitsinformationen zu Reinigungsmitteln." },
  { term: "Steinreinigung", definition: "Reinigung von Naturstein- und Kunststeinflächen." },
  { term: "Taubenkotreinigung", definition: "Hygienische Entfernung von Taubenkot." },
  { term: "Versiegelung", definition: "Schutzschicht auf Böden gegen Verschmutzung und Abnutzung." },
  { term: "Wasserschadensanierung", definition: "Reinigung und Trocknung nach Wasserschäden." },
  { term: "Wischmopp", definition: "Reinigungsgerät zum Wischen von Böden." }
]

export function GlossarPage() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => a.term.localeCompare(b.term))

  // Group by first letter
  const groupedTerms = filteredTerms.reduce((acc, item) => {
    const firstLetter = item.term[0].toUpperCase()
    if (!acc[firstLetter]) acc[firstLetter] = []
    acc[firstLetter].push(item)
    return acc
  }, {})

  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-5xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white">Glossar & Fachbegriffe</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Reinigungslexikon</h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mb-8">
            Alle wichtigen Fachbegriffe rund um Gebäudereinigung und Facility Management verständlich erklärt.
          </p>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Begriff suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-600 mb-8">{filteredTerms.length} Begriffe gefunden</p>
          
          {Object.keys(groupedTerms).sort().map((letter) => (
            <div key={letter} className="mb-12">
              <h2 className="text-4xl font-bold text-[#0A2540] mb-6 border-b-2 border-[#0A2540] pb-2">{letter}</h2>
              <div className="space-y-6">
                {groupedTerms[letter].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#0A2540] mb-2">{item.term}</h3>
                      <p className="text-gray-700">{item.definition}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GlossarPage
