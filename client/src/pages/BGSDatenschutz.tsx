import BGSNavigation from "@/components/BGSNavigation";
import BGSFooter from "@/components/BGSFooter";

export default function BGSDatenschutz() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BGSNavigation />
      <section className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="text-5xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
          <div className="bg-white rounded-xl p-12 shadow-lg space-y-6">
            <p className="text-muted-foreground">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSG, DSGVO).
            </p>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Verantwortliche Stelle</h2>
              <p className="text-muted-foreground">
                BGS Gebäudeservice<br />
                Tannhof 10<br />
                6020 Emmenbrücke<br />
                E-Mail: info@bgs-service.ch
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Datenerfassung</h2>
              <p className="text-muted-foreground">
                Wir erheben und speichern automatisch Informationen, die Ihr Browser an uns übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <BGSFooter />
    </div>
  );
}
