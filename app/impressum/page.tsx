'use client'
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { company } from "../../shared/company";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Impressum - BGS Gebäudeservice"
        description="Rechtliche Hinweise und Impressum der BGS Gebäudeservice. Alle Informationen zu unserem Unternehmen."
        keywords="Impressum, rechtliche Hinweise, Kontakt, Adresse, UID"
        url="/impressum"
      />
      <SwissNavigation />

      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-12">Impressum</h1>

          <div className="space-y-8">
            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Verantwortlich für den Inhalt</h2>
              <div className="space-y-4 text-lg text-slate-700">
                {/* Eingetragene Firma, vollständig und unverändert (Art. 954a OR) */}
                <p className="font-bold text-xl text-slate-900">{company.legalName}</p>
                <p>Nezir Bozhdaraj</p>
                <p>{company.address.street}</p>
                <p>{company.address.postalCode} {company.address.city}</p>
                <p>Schweiz</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Kontakt</h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p><strong>Telefon:</strong> <a href={company.phone.href} className="text-primary hover:underline">{company.phone.display}</a></p>
                <p><strong>E-Mail:</strong> <a href={`mailto:${company.email}`} className="text-primary hover:underline">{company.email}</a></p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Handelsregistereintrag</h2>
              <div className="space-y-4 text-lg text-slate-700">
                <p>Eingetragen im Handelsregister des Kantons Luzern</p>
                <p><strong>Unternehmens-Identifikationsnummer (UID):</strong></p>
                <p className="font-mono">{company.uid}</p>
                <p><strong>Mehrwertsteuernummer:</strong> <span className="font-mono">{company.uid} MWST</span></p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Haftungsausschluss</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.</p>
                <p>Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Haftung für Links</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Urheberrechte</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschliesslich der <strong>{company.legalName}</strong> oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.</p>
              </div>
            </Card>

            <Card className="p-8 bg-amber-50 border-l-4 border-amber-500">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-amber-900">Hinweis zu Bildern</h2>
              <div className="space-y-6 text-amber-800 leading-relaxed text-base">
                <div>
                  <p className="font-bold text-lg mb-2">Verwendung von KI-generierten Bildern:</p>
                  <p>Einige Bilder auf dieser Website wurden mit Unterstützung von künstlicher Intelligenz (AI) erstellt. Diese dienen ausschließlich zu Illustrations- und Marketingzwecken und repräsentieren die Qualität unserer Dienstleistungen.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-slate-900">Datenschutz</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                <p>In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                <p className="mt-4">Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-primary hover:underline font-semibold">Datenschutzerklärung</a>.</p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
