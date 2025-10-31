import { Star } from "lucide-react";
import BGSNavigation from "@/components/BGSNavigation";
import BGSFooter from "@/components/BGSFooter";

export default function BGSReferences() {
  const references = [
    { company: "Bürokomplex Zürich City", service: "Büroreinigung", result: "Tägliche Reinigung von 5.000 m² Bürofläche" },
    { company: "Produktionshalle Luzern", service: "Industriereinigung", result: "Wöchentliche Grundreinigung und Wartung" },
    { company: "Verwaltungsgebäude St. Gallen", service: "Glasreinigung", result: "Monatliche Fassadenreinigung" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BGSNavigation />
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Unsere Referenzen
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vertrauen Sie auf unsere Erfahrung und Expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {references.map((ref, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <Star className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{ref.company}</h3>
                <p className="text-primary font-semibold mb-3">{ref.service}</p>
                <p className="text-muted-foreground">{ref.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BGSFooter />
    </div>
  );
}
