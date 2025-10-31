import { CheckCircle, Users, Award, Target } from "lucide-react";
import BGSNavigation from "@/components/BGSNavigation";
import BGSFooter from "@/components/BGSFooter";

export default function BGSAbout() {
  const values = [
    { icon: <CheckCircle className="w-8 h-8" />, title: "Qualität", description: "Höchste Standards in allen Bereichen" },
    { icon: <Users className="w-8 h-8" />, title: "Teamwork", description: "Erfahrene und motivierte Mitarbeiter" },
    { icon: <Award className="w-8 h-8" />, title: "Professionalität", description: "Zertifizierte Reinigungsverfahren" },
    { icon: <Target className="w-8 h-8" />, title: "Zuverlässigkeit", description: "Pünktlich und verlässlich" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BGSNavigation />
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">Über BGS Gebäudeservice</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              BGS Gebäudeservice ist Ihr zuverlässiger Partner für professionelle Gebäudereinigung in der Schweiz. Mit langjähriger Erfahrung und einem engagierten Team bieten wir maßgeschneiderte Reinigungslösungen für Unternehmen jeder Größe.
            </p>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Unser Fokus liegt auf höchster Qualität, Zuverlässigkeit und individueller Betreuung. Wir verstehen die spezifischen Anforderungen unserer Kunden und entwickeln Reinigungskonzepte, die perfekt zu Ihren Bedürfnissen passen.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Unsere Werte</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BGSFooter />
    </div>
  );
}
