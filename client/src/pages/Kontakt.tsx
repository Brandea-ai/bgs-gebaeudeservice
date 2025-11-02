import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Kontakt() {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Kontakt - Swiss Reinigungsfirma | Jetzt Angebot anfordern"
        description="Kontaktieren Sie die Swiss Reinigungsfirma für ein individuelles Angebot. Wir sind für Sie da - per Telefon, E-Mail oder über unser Kontaktformular."
        keywords="Kontakt, Angebot, Reinigungsfirma Schweiz, Anfrage, Beratung"
        url="/kontakt"
      />
      <SwissNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Kontaktieren Sie uns
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Wir freuen uns auf Ihre Anfrage und melden uns innerhalb von 24 Stunden bei Ihnen zurück.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Zum Kontaktformular
          </button>
        </div>
      </section>

      {/* Kontaktoptionen */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Telefon</h3>
              <p className="text-slate-600 mb-4">Rufen Sie uns an - wir beraten Sie gerne</p>
              <a href="tel:+41413205610" className="text-primary font-semibold hover:underline">
                +41 41 320 56 10
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">E-Mail</h3>
              <p className="text-slate-600 mb-4">Schreiben Sie uns eine Nachricht</p>
              <a href="mailto:info@bgs-service.ch" className="text-primary font-semibold hover:underline">
                info@bgs-service.ch
              </a>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Adresse</h3>
              <p className="text-slate-600 mb-4">Besuchen Sie uns vor Ort</p>
              <p className="text-slate-900 font-semibold">
                Tannhof 10<br />
                6020 Emmenbrücke
              </p>
            </Card>
          </div>

          {/* Standort-Karte */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
              Unser Standort
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/karte-emmenbruecke.jpg" 
                alt="Standort der Swiss Reinigungsfirma in Emmenbrücke" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <p className="text-center text-slate-600 mt-4">
              Zentral gelegen in der Zentralschweiz - schnell erreichbar aus Luzern, Zug und Zürich
            </p>
          </div>

          {/* Kontaktformular */}
          <div id="contact-form" className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
              Jetzt Kontakt aufnehmen
            </h2>
            <p className="text-center text-slate-600 mb-8">
              Fordern Sie ein unverbindliches Angebot an – wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12 text-center">
            Häufig gestellte Fragen
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Wie schnell erhalte ich ein Angebot?</h3>
              <p className="text-slate-600">
                Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück und erstellen ein individuelles, auf Ihre Bedürfnisse zugeschnittenes Angebot.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">In welchen Regionen sind Sie tätig?</h3>
              <p className="text-slate-600">
                Wir sind in der gesamten Zentralschweiz tätig, mit Schwerpunkt auf Luzern, Zug und Zürich. Für andere Regionen kontaktieren Sie uns bitte direkt.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Verwenden Sie umweltfreundliche Reinigungsmittel?</h3>
              <p className="text-slate-600">
                Ja, wir setzen auf umweltfreundliche und nachhaltige Reinigungsmittel, die sowohl effektiv als auch schonend für Mensch und Umwelt sind.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Bieten Sie auch kurzfristige Einsätze an?</h3>
              <p className="text-slate-600">
                Ja, wir sind flexibel und können auch kurzfristige Reinigungseinsätze durchführen. Kontaktieren Sie uns für eine schnelle Terminvereinbarung.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
