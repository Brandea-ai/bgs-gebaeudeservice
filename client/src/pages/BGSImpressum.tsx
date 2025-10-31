import BGSNavigation from "@/components/BGSNavigation";
import BGSFooter from "@/components/BGSFooter";

export default function BGSImpressum() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BGSNavigation />
      <section className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold text-foreground mb-8">Impressum</h1>
          <div className="bg-white rounded-xl p-12 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Angaben gemäss Art. 8 UWG</h2>
              <p className="text-muted-foreground">BGS Gebäudeservice</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Adresse</h3>
              <p className="text-muted-foreground">
                Tannhof 10<br />
                6020 Emmenbrücke<br />
                Luzern, Schweiz
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Kontakt</h3>
              <p className="text-muted-foreground">
                Telefon: +41 41 320 56 10<br />
                E-Mail: info@bgs-service.ch
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Handelsregister</h3>
              <p className="text-muted-foreground">UID: CHE-108.687.458</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Geschäftsführung</h3>
              <p className="text-muted-foreground">Nezir Bozhdaraj</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Verantwortlich für den Inhalt</h3>
              <p className="text-muted-foreground">Nezir Bozhdaraj</p>
            </div>
          </div>
        </div>
      </section>
      <BGSFooter />
    </div>
  );
}
