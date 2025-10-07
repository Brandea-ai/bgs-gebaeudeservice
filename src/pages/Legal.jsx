import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { MapPin, Phone, Mail, Building2 } from 'lucide-react'

export function ImpressumPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Impressum</h1>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Angaben gemäss Art. 8 UWG</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Firma</h3>
                  <p className="text-gray-700">BGS Gebäudeservice</p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Adresse</h3>
                  <div className="flex items-start text-gray-700">
                    <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p>Tannhof 10</p>
                      <p>6020 Emmenbrücke</p>
                      <p>Luzern, Schweiz</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Kontakt</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Phone className="h-5 w-5 mr-3" />
                      <a href="tel:+41413205610" className="hover:text-[#0A2540]">+41 41 320 56 10</a>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="h-5 w-5 mr-3" />
                      <a href="mailto:info@bgs-service.ch" className="hover:text-[#0A2540]">info@bgs-service.ch</a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Handelsregister</h3>
                  <p className="text-gray-700">UID: CHE-108.687.458</p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Geschäftsführung</h3>
                  <p className="text-gray-700">Nezir Bozhdaraj</p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Verantwortlich für den Inhalt</h3>
                  <p className="text-gray-700">Nezir Bozhdaraj</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Haftungsausschluss</h2>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Inhalt des Onlineangebotes</h3>
                  <p>
                    Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität 
                    der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden 
                    materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen 
                    Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, 
                    sind grundsätzlich ausgeschlossen.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Verweise und Links</h3>
                  <p>
                    Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"), die ausserhalb des 
                    Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschliesslich in dem 
                    Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich 
                    und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Urheberrecht</h3>
                  <p>
                    Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, 
                    Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder, Grafiken, 
                    Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, 
                    Videosequenzen und Texte zurückzugreifen.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export function DatenschutzPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1a3a5f] text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Allgemeiner Hinweis und Pflichtinformationen</h2>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Benennung der verantwortlichen Stelle</h3>
                  <p>
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold">BGS Gebäudeservice</p>
                    <p>Nezir Bozhdaraj</p>
                    <p>Tannhof 10</p>
                    <p>6020 Emmenbrücke</p>
                    <p className="mt-2">Telefon: +41 41 320 56 10</p>
                    <p>E-Mail: info@bgs-service.ch</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Erhebung und Speicherung personenbezogener Daten</h3>
                  <p>
                    Wir erheben, verarbeiten und speichern Ihre Daten bei Kontaktaufnahme mit uns, z.B. über unser 
                    Kontaktformular oder per E-Mail. Folgende Daten werden dabei erhoben:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name und Vorname</li>
                    <li>E-Mail-Adresse</li>
                    <li>Telefonnummer (optional)</li>
                    <li>Firma/Organisation (optional)</li>
                    <li>Nachrichtentext</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Zweck der Datenverarbeitung</h3>
                  <p>
                    Die Verarbeitung der personenbezogenen Daten dient uns ausschliesslich zur Bearbeitung Ihrer 
                    Kontaktaufnahme. Im Falle einer Kontaktaufnahme per E-Mail liegt hieran auch das erforderliche 
                    berechtigte Interesse an der Verarbeitung der Daten.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Rechtsgrundlage</h3>
                  <p>
                    Die Verarbeitung der Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) 
                    bzw. zur Erfüllung eines Vertrags oder vorvertraglicher Massnahmen (Art. 6 Abs. 1 lit. b DSGVO).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Empfänger</h3>
                  <p>
                    Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung 
                    unserer Website als Auftragsverarbeiter tätig werden.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Speicherdauer</h3>
                  <p>
                    Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht. Sofern es zu einem 
                    Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen und löschen 
                    Ihre Daten nach Ablauf dieser Fristen.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Ihre Rechte</h3>
                  <p>Sie haben jederzeit das Recht auf:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
                    <li>Berichtigung unrichtiger personenbezogener Daten</li>
                    <li>Löschung Ihrer bei uns gespeicherten Daten</li>
                    <li>Einschränkung der Datenverarbeitung</li>
                    <li>Datenübertragbarkeit</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
                    <li>Beschwerde bei einer Aufsichtsbehörde</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">Cookies</h3>
                  <p>
                    Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät 
                    gespeichert werden. Ihr Browser greift auf diese Dateien zu. Durch den Einsatz von Cookies 
                    erhöht sich die Benutzerfreundlichkeit und Sicherheit dieser Website.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A2540] mb-2">SSL-Verschlüsselung</h3>
                  <p>
                    Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte 
                    eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                    des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Kontakt</h2>
              <p className="text-gray-700">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, 
                Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold">BGS Gebäudeservice</p>
                <p>Datenschutzbeauftragter: Nezir Bozhdaraj</p>
                <p className="mt-2">E-Mail: datenschutz@bgs-service.ch</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default { ImpressumPage, DatenschutzPage }
