import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-12">Impressum</h1>
          
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Angaben gemäss Art. 8 UWG</h2>
            <div className="space-y-6 text-lg">
              <div>
                <div className="font-semibold text-slate-900 mb-2">Firma</div>
                <div className="text-slate-700">Swiss Reinigungsfirma</div>
              </div>
              
              <div>
                <div className="font-semibold text-slate-900 mb-2">Adresse</div>
                <div className="text-slate-700">Tannhof 10</div>
                <div className="text-slate-700">6020 Emmenbrücke</div>
                <div className="text-slate-700">Luzern, Schweiz</div>
              </div>
              
              <div>
                <div className="font-semibold text-slate-900 mb-2">Kontakt</div>
                <div className="text-slate-700">Telefon: <a href="tel:+41413205610" className="text-primary hover:underline">+41 41 320 56 10</a></div>
                <div className="text-slate-700">E-Mail: <a href="mailto:info@bgs-service.ch" className="text-primary hover:underline">info@bgs-service.ch</a></div>
              </div>
              
              <div>
                <div className="font-semibold text-slate-900 mb-2">Handelsregister</div>
                <div className="text-slate-700">UID: CHE-108.687.458</div>
              </div>
              
              <div>
                <div className="font-semibold text-slate-900 mb-2">Geschäftsführung</div>
                <div className="text-slate-700">Nezir Bozhdaraj</div>
              </div>
              
              <div>
                <div className="font-semibold text-slate-900 mb-2">Verantwortlich für den Inhalt</div>
                <div className="text-slate-700">Nezir Bozhdaraj</div>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Haftungsausschluss</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
              </p>
              <p>
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.
              </p>
              <p>
                Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
              </p>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-4">Urheberrechte</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich Swiss Reinigungsfirma oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
