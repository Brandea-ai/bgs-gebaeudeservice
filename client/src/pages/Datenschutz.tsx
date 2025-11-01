import SwissNavigation from "@/components/SwissNavigation";
import SwissFooter from "@/components/SwissFooter";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <SwissNavigation />
      
      <section className="pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Datenschutzerklärung</h1>
          <p className="text-xl text-slate-600 mb-12">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie über die Verarbeitung Ihrer personenbezogenen Daten auf unserer Website.
          </p>
          
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Verantwortliche Stelle</h2>
            <div className="text-slate-700 leading-relaxed">
              <p className="mb-2">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
              <p className="font-semibold mt-4">Swiss Reinigungsfirma</p>
              <p>Tannhof 10, 6020 Emmenbrücke, Schweiz</p>
              <p>Telefon: +41 41 320 56 10</p>
              <p>E-Mail: info@bgs-service.ch</p>
            </div>
          </Card>

          <Accordion type="single" collapsible className="mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl font-semibold">
                Allgemeine Hinweise
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p className="mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <p>
                  Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-xl font-semibold">
                Datenerfassung auf unserer Website
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <h4 className="font-bold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p className="mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </p>
                
                <h4 className="font-bold mb-2">Wie erfassen wir Ihre Daten?</h4>
                <p className="mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="mb-4">
                  Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                </p>
                
                <h4 className="font-bold mb-2">Wofür nutzen wir Ihre Daten?</h4>
                <p className="mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-xl font-semibold">
                Server-Log-Dateien
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p className="mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-xl font-semibold">
                Kontaktformular
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p className="mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-xl font-semibold">
                Ihre Rechte
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p className="mb-4">Sie haben jederzeit das Recht:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten zu verlangen</li>
                  <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                  <li>Einschränkung der Verarbeitung Ihrer Daten zu verlangen</li>
                  <li>Datenübertragbarkeit zu verlangen</li>
                  <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
                  <li>Beschwerde bei einer Aufsichtsbehörde einzureichen</li>
                </ul>
                <p>
                  Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@bgs-service.ch
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-xl font-semibold">
                Cookies
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p className="mb-4">
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                </p>
                <p className="mb-4">
                  Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen.
                </p>
                <p>
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell ausschließen können.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-xl font-semibold">
                Datensicherheit
              </AccordionTrigger>
              <AccordionContent className="text-lg leading-relaxed text-slate-700 pt-4">
                <p className="mb-4">
                  Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
                </p>
                <p>
                  Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Card className="p-8 bg-slate-50">
            <h2 className="text-2xl font-bold mb-4">Kontakt bei Datenschutzfragen</h2>
            <p className="text-slate-700 leading-relaxed">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen wenden Sie sich bitte an:
            </p>
            <p className="text-slate-900 font-semibold mt-4">
              info@bgs-service.ch
            </p>
          </Card>
        </div>
      </section>

      <SwissFooter />
    </div>
  );
}
