
import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Check, Users, Award, Heart } from "lucide-react";

export default function UeberUns() {
  return (
    <div className=\"min-h-screen bg-white\">
      <SEO
        title=\"Über Uns - Swiss Reinigungsfirma | Qualität & Vertrauen\"
        description=\"Lernen Sie die Geschichte und die Werte der Swiss Reinigungsfirma kennen. Erfahren Sie, warum wir Ihr vertrauenswürdiger Partner für professionelle Reinigung sind.\"
        keywords=\"Über uns, Reinigungsfirma Schweiz, Team, Werte, Mission, Geschichte\"
        url=\"/ueber-uns\"
      />
      <SwissNavigation />

      {/* Hero Section */}
      <section className=\"pt-32 pb-20 relative bg-gradient-to-br from-slate-50 to-blue-50\">
        <div className=\"container\"><div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-red-50/30 -z-10"/>
          <div className=\"grid lg:grid-cols-2 gap-12 items-center\">
            <div>
              <h1 className=\"text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-6\">Unsere Geschichte: Von einer Vision zu Ihrem vertrauenswürdigen Partner</h1>
              <p className=\"text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8\">Seit unserer Gründung durch Nezir Bozhdaraj im Jahr 2005 hat sich die Swiss Reinigungsfirma von einem kleinen, engagierten Team zu einem der führenden Reinigungsunternehmen in der Schweiz entwickelt. Unsere Mission war von Anfang an klar: Wir wollen nicht nur reinigen, wir wollen Werte schaffen und Vertrauen aufbauen.</p>
              <Link href=\"/kontakt\"><Button size=\"lg\" className=\"text-lg\">Werden Sie Teil unserer Geschichte <ArrowRight className=\"ml-2 w-5 h-5\"/></Button></Link>
            </div>
            <div className=\"relative\"><img src=\"/ueber-uns-hero.jpg\" alt=\"Das Team der Swiss Reinigungsfirma\" className=\"rounded-2xl shadow-2xl w-full h-[500px] object-cover\"/></div>
          </div>
        </div>
      </section>

      {/* Unsere Werte Section */}
      <section className=\"py-20 bg-white\">
        <div className=\"container\"><div className="text-center mb-16">
            <h2 className=\"text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4\">Unsere Werte: Das Fundament unseres Erfolgs</h2>
            <p className=\"text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto\">Qualität, Zuverlässigkeit und Kundennähe sind für uns nicht nur Worte, sondern die Grundpfeiler unserer täglichen Arbeit. Sie sind das Versprechen, das wir jedem einzelnen Kunden geben.</p>
          </div>
          <div className=\"grid md:grid-cols-3 gap-8\"><Card className=\"p-8 text-center\"><Award className=\"w-16 h-16 text-primary mx-auto mb-6\"/><h3 className=\"font-bold text-xl mb-4\">Qualität</h3><p className=\"text-slate-600 text-xs sm:text-sm md:text-base\">Wir verwenden nur die besten Materialien und modernsten Techniken, um ein makelloses Ergebnis zu garantieren. Unsere Mitarbeiter werden kontinuierlich geschult, um die höchsten Standards zu erfüllen.</p></Card><Card className=\"p-8 text-center\"><Users className=\"w-16 h-16 text-primary mx-auto mb-6\"/><h3 className=\"font-bold text-xl mb-4\">Zuverlässigkeit</h3><p className=\"text-slate-600 text-xs sm:text-sm md:text-base\">Pünktlichkeit, Diskretion und ein fester Ansprechpartner sind für uns selbstverständlich. Sie können sich darauf verlassen, dass wir unsere Zusagen einhalten – immer.</p></Card><Card className=\"p-8 text-center\"><Heart className=\"w-16 h-16 text-primary mx-auto mb-6\"/><h3 className=\"font-bold text-xl mb-4\">Kundennähe</h3><p className=\"text-slate-600 text-xs sm:text-sm md:text-base\">Wir hören Ihnen zu und entwickeln individuelle Lösungen, die perfekt auf Ihre Bedürfnisse zugeschnitten sind. Ihre Zufriedenheit ist unser größter Ansporn.</p></Card></div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className=\"py-20 bg-slate-50\">
        <div className=\"container\"><div className="text-center mb-16">
            <h2 className=\"text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4\">Was unsere Kunden sagen</h2>
            <p className=\"text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto\">Die Zufriedenheit unserer Kunden ist der beste Beweis für unsere Qualität. Hier sind einige Stimmen von Unternehmen, die uns vertrauen.</p>
          </div>
          <div className=\"grid lg:grid-cols-3 gap-8\"><Card className=\"p-8\"><p className=\"text-slate-700 mb-6 font-serif italic text-lg\">\"Die Zusammenarbeit mit der Swiss Reinigungsfirma ist ein echter Gewinn. Das Team ist professionell, zuverlässig und das Ergebnis immer perfekt. Wir können sie uneingeschränkt empfehlen.\"</p><div className=\"flex items-center\"><img src=\"/path-to-customer-logo-1.png\" alt=\"Kundenlogo 1\" className=\"w-12 h-12 rounded-full mr-4\"/><div className=\"font-bold text-slate-900\">Anna Meier</div><div className=\"text-slate-600 text-sm\">CEO, Meier AG</div></div></Card><Card className=\"p-8\"><p className=\"text-slate-700 mb-6 font-serif italic text-lg\">\"Seit wir die Reinigung unserer Büros an die Swiss Reinigungsfirma übergeben haben, hat sich die Arbeitsatmosphäre spürbar verbessert. Ein sauberes Umfeld motiviert!\"</p><div className=\"flex items-center\"><img src=\"/path-to-customer-logo-2.png\" alt=\"Kundenlogo 2\" className=\"w-12 h-12 rounded-full mr-4\"/><div className=\"font-bold text-slate-900\">Peter Schmidt</div><div className=\"text-slate-600 text-sm\">Office Manager, Schmidt & Partner</div></div></Card><Card className=\"p-8\"><p className=\"text-slate-700 mb-6 font-serif italic text-lg\">\"Die Flexibilität und die hohe Qualität der Arbeit haben uns überzeugt. Die Swiss Reinigungsfirma ist ein Partner, auf den man sich verlassen kann.\"</p><div className=\"flex items-center\"><img src=\"/path-to-customer-logo-3.png\" alt=\"Kundenlogo 3\" className=\"w-12 h-12 rounded-full mr-4\"/><div className=\"font-bold text-slate-900\">Maria Rossi</div><div className=\"text-slate-600 text-sm\">Inhaberin, Rossi Boutique</div></div></Card></div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className=\"py-20 bg-white\">
        <div className=\"container\"><div className="grid lg:grid-cols-2 gap-12 items-center\"><div className=\"relative\"><img src=\"/nezir-bozhdaraj.jpg\" alt=\"Nezir Bozhdaraj, Gründer der Swiss Reinigungsfirma\" className=\"rounded-2xl shadow-2xl w-full h-[500px] object-cover\"/></div><div>
              <h2 className=\"text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6\">Ein Wort vom Gründer</h2>
              <p className=\"text-slate-700 mb-6 font-serif italic text-lg\">\"Als ich die Swiss Reinigungsfirma gründete, hatte ich eine einfache Vision: einen Reinigungsservice anzubieten, der auf Vertrauen, Qualität und persönlichem Engagement basiert. Ich bin stolz darauf, dass wir diese Werte auch heute noch leben und jeden Tag unser Bestes geben, um die Erwartungen unserer Kunden zu übertreffen.\"</p>
              <div className=\"font-bold text-slate-900 text-lg\">Nezir Bozhdaraj</div>
              <div className=\"text-slate-600\">Gründer & Geschäftsführer</div>
            </div></div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className=\"py-20 bg-primary text-white\">
        <div className=\"container text-center\"><h2 className=\"text-2xl sm:text-3xl lg:text-4xl font-bold mb-6\">Bereit für eine saubere Zukunft?</h2><p className=\"text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-8\">Lassen Sie uns gemeinsam für eine saubere und professionelle Umgebung sorgen. Kontaktieren Sie uns noch heute für ein unverbindliches Erstgespräch und ein individuelles Angebot.</p><Link href=\"/kontakt\"><Button size=\"lg\" variant=\"secondary\" className=\"text-lg\">Jetzt Kontakt aufnehmen <ArrowRight className=\"ml-2 w-5 h-5\"/></Button></Link></div>
      </section>

      <SwissFooter />
    </div>
  );
}
