import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Rechtliches() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">Rechtliche Hinweise</h1>
          <div className="glass floating rounded-3xl p-12 space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
