
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Kontakt() {
  const scrollToContactForm = () => {
    document.getElementById('kontakt-formular')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className=\"min-h-screen bg-white\">
      <SEO
        title=\"Kontakt - Swiss Reinigungsfirma | Wir sind für Sie da\"
        description=\"Nehmen Sie Kontakt mit uns auf. Ob per Telefon, E-Mail oder über unser Kontaktformular – wir freuen uns auf Ihre Anfrage und beraten Sie gerne.\"
        keywords=\"Kontakt, Reinigungsfirma Kontakt, Anfrage, Angebot, Telefon, E-Mail\"
        url=\"/kontakt\"
      />
      <SwissNavigation />

      {/* Hero Section */}
      <section className=\"pt-32 pb-20 relative bg-gradient-to-br from-slate-50 to-blue-50\">
        <div className=\"container text-center\">
          <h1 className=\"text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6\">Wir sind für Sie da</h1>
          <p className=\"text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8\">Haben Sie Fragen oder wünschen Sie ein individuelles Angebot? Zögern Sie nicht, uns zu kontaktieren. Unser Team meldet sich innerhalb von 24 Stunden bei Ihnen.</p>
          <Button size=\"lg\" className=\"text-lg\" onClick={scrollToContactForm}>
            Direkt zum Kontaktformular
            <ArrowRight className=\"ml-2 w-5 h-5\"/>
          </Button>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className=\"py-20 bg-white\">
        <div className=\"container\"><div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className=\"p-8\"><Phone className=\"w-16 h-16 text-primary mx-auto mb-6\"/><h3 className=\"font-bold text-xl mb-4\">Telefon</h3><p className=\"text-slate-600 mb-4 text-xs sm:text-sm md:text-base\">Für dringende Anfragen oder eine persönliche Beratung erreichen Sie uns während unserer Geschäftszeiten.</p><a href=\"tel:+41413205610\" className=\"text-primary font-bold text-lg hover:underline\">+41 41 320 56 10</a></Card>
            <Card className=\"p-8\"><Mail className=\"w-16 h-16 text-primary mx-auto mb-6\"/><h3 className=\"font-bold text-xl mb-4\">E-Mail</h3><p className=\"text-slate-600 mb-4 text-xs sm:text-sm md:text-base\">Schreiben Sie uns eine E-Mail mit Ihrem Anliegen. Wir bearbeiten Ihre Anfrage so schnell wie möglich.</p><a href=\"mailto:info@bgs-service.ch\" className=\"text-primary font-bold text-lg hover:underline\">info@bgs-service.ch</a></Card>
            <Card className=\"p-8\"><MapPin className=\"w-16 h-16 text-primary mx-auto mb-6\"/><h3 className=\"font-bold text-xl mb-4\">Adresse</h3><p className=\"text-slate-600 mb-4 text-xs sm:text-sm md:text-base\">Besuchen Sie uns nach Vereinbarung an unserem Hauptsitz in Emmenbrücke.</p><p className=\"text-slate-800 font-semibold text-lg\">Tannhof 10, 6020 Emmenbrücke</p></Card>
          </div></div>
      </section>

      {/* Map Section */}
      <section className=\"py-20 bg-slate-50\">
        <div className=\"container\"><div className="text-center mb-16">
            <h2 className=\"text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4\">Unser Hauptsitz</h2>
            <p className=\"text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto\">Zentral gelegen in Emmenbrücke, sind wir für unsere Kunden in der ganzen Zentralschweiz schnell erreichbar.</p>
          </div>
          <div className=\"aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl\"><img src=\"/karte-emmenbruecke.jpg\" alt=\"Karte von Emmenbrücke mit dem Standort der Swiss Reinigungsfirma\" className=\"w-full h-full object-cover\"/></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=\"py-20 bg-white\">
        <div className=\"container max-w-4xl\"><div className="text-center mb-16">
            <h2 className=\"text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4\">Häufig gestellte Fragen (FAQ)</h2>
            <p className=\"text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto\">Hier finden Sie Antworten auf die häufigsten Fragen. Vielleicht ist Ihre Frage ja schon dabei.</p>
          </div>
          <Accordion type=\"single\" collapsible className=\"w-full\"><AccordionItem value=\"item-1\"><AccordionTrigger className=\"text-lg font-semibold\">Wie schnell erhalte ich ein Angebot?</AccordionTrigger><AccordionContent className=\"text-base text-slate-700 leading-relaxed\">In der Regel erhalten Sie von uns innerhalb von 24 Stunden nach Ihrer Anfrage ein unverbindliches und individuelles Angebot. Bei komplexeren Anfragen kann es bis zu 48 Stunden dauern.</AccordionContent></AccordionItem><AccordionItem value=\"item-2\"><AccordionTrigger className=\"text-lg font-semibold\">In welchen Regionen sind Sie tätig?</AccordionTrigger><AccordionContent className=\"text-base text-slate-700 leading-relaxed\">Unser Haupt-Einsatzgebiet umfasst die Kantone Luzern, Zug und Zürich. Für grössere Projekte sind wir auch in der gesamten Deutschschweiz für Sie da. Fragen Sie uns einfach an!</AccordionContent></AccordionItem><AccordionItem value=\"item-3\"><AccordionTrigger className=\"text-lg font-semibold\">Verwenden Sie umweltfreundliche Reinigungsmittel?</AccordionTrigger><AccordionContent className=\"text-base text-slate-700 leading-relaxed\">Ja, Nachhaltigkeit ist uns wichtig. Wir setzen standardmässig auf zertifizierte, umweltfreundliche Reinigungsmittel. Auf Wunsch verwenden wir auch spezielle Produkte für Allergiker oder andere besondere Anforderungen.</AccordionContent></AccordionItem><AccordionItem value=\"item-4\"><AccordionTrigger className=\"text-lg font-semibold\">Bieten Sie auch kurzfristige Einsätze an?</AccordionTrigger><AccordionContent className=\"text-base text-slate-700 leading-relaxed\">Ja, je nach Verfügbarkeit können wir auch kurzfristige Reinigungsarbeiten übernehmen, beispielsweise für Events oder nach unvorhergesehenen Ereignissen. Kontaktieren Sie uns am besten telefonisch für eine schnelle Abklärung.</AccordionContent></AccordionItem></Accordion>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
