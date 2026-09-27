import { company } from '../../shared/company'
import type { LegalContent } from '../types'

/**
 * Impressum und Datenschutz (M14, M50, E22, E60). Geschrieben von Brandea ohne
 * Fachprüfung, Restrisiko akzeptiert (E22). Grundlage ist die tatsächliche
 * Verarbeitung (Inventar in 08, N080): Hosting bei Vercel, Formular über Resend,
 * Karte erst nach Klick, keine Cookies, keine Analyse, Schriften vom eigenen Server.
 * Bei jeder neuen Funktion mit Personendaten (etwa Chat, M03) hier nachführen.
 */

const address = `${company.address.street}, ${company.address.postalCode} ${company.address.city}, Schweiz`

export const impressum: LegalContent = {
  h1: 'Impressum',
  sections: [
    {
      title: 'Betreiberin dieser Website',
      // Eingetragene Firma, vollständig und unverändert (Art. 954a OR)
      lines: [company.legalName, `Vertreten durch ${company.representative}`, address],
    },
    {
      title: 'Kontakt',
      lines: [`Telefon ${company.phone.display}`, `Mobil ${company.mobile.display}`, `E-Mail ${company.email}`],
    },
    {
      title: 'Registerangaben',
      lines: [`Eingetragen im ${company.register}`, `UID ${company.uid}`, `Mehrwertsteuernummer ${company.vat}`],
    },
    {
      title: 'Haftung für Inhalte',
      paragraphs: [
        'Wir stellen die Inhalte dieser Website mit Sorgfalt zusammen. Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir keine Gewähr. Verbindlich sind unsere Offerten und Verträge.',
        'Haftungsansprüche wegen Schäden aus dem Zugriff auf diese Website, ihrer Nutzung oder technischen Störungen sind ausgeschlossen, soweit das Gesetz es zulässt.',
      ],
    },
    {
      title: 'Links auf andere Websites',
      paragraphs: ['Für Inhalte fremder Websites, auf die wir verweisen, sind deren Betreiber verantwortlich. Der Besuch erfolgt auf eigene Verantwortung.'],
    },
    {
      title: 'Urheberrecht',
      paragraphs: [
        `Texte, Gestaltung und weitere Inhalte dieser Website gehören der ${company.legalName} oder den genannten Rechteinhabern. Eine Verwendung ausserhalb dieser Website braucht unsere vorherige schriftliche Zustimmung.`,
      ],
    },
    {
      title: 'Datenschutz',
      paragraphs: ['Wie wir mit Personendaten umgehen, steht in der [Datenschutzerklärung](/datenschutz).'],
    },
  ],
  updated: '2026-09-26',
}

export const datenschutz: LegalContent = {
  h1: 'Datenschutzerklärung',
  intro:
    'Hier erfahren Sie, welche Personendaten wir beim Besuch dieser Website bearbeiten, wozu und an wen sie gehen. Massgebend ist das Schweizer Datenschutzgesetz (DSG).',
  sections: [
    {
      title: 'Verantwortlich',
      lines: [company.legalName, address, `E-Mail ${company.email}`, `Telefon ${company.phone.display}`],
    },
    {
      title: 'Besuch der Website',
      paragraphs: [
        'Die Website liegt bei Vercel Inc., USA. Bei jedem Aufruf entstehen technisch nötige Protokolldaten: IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und Betriebssystem sowie die Seite, von der Sie kommen.',
        'Wir brauchen diese Daten, um die Website auszuliefern, Fehler zu finden und Angriffe abzuwehren. Wir werten sie nicht für Werbung aus und verknüpfen sie nicht mit anderen Daten. Vercel bewahrt sie nur so lange auf, wie es für Betrieb und Sicherheit nötig ist.',
      ],
    },
    {
      title: 'Kontaktformular und E-Mail',
      paragraphs: [
        'Wenn Sie uns über das Formular schreiben, bearbeiten wir Ihre Angaben: Name, E-Mail-Adresse und Nachricht, freiwillig auch Telefonnummer, gewünschte Leistung, Ort des Objekts und Rhythmus. Wir verwenden sie, um Ihre Anfrage zu beantworten und Ihnen eine Offerte zu erstellen.',
        `Das Formular wird über den E-Mail-Dienst Resend, Inc., USA, an unser Postfach gesendet. Bis unsere eigene Adresse eingerichtet ist, ist das ${company.email}, das Postfach der Brandea GbR in Deutschland, die diese Website für uns betreibt und die Anfragen an uns weitergibt.`,
        'Zum Schutz vor Missbrauch hält der Server Ihre IP-Adresse kurz im Arbeitsspeicher, um zu viele Anfragen in kurzer Zeit zu erkennen. Sie wird dabei nicht dauerhaft gespeichert.',
        'Wir bewahren Ihre Anfrage auf, solange wir sie für die Bearbeitung und mögliche Rückfragen brauchen. Kommt ein Auftrag zustande, gelten die gesetzlichen Aufbewahrungsfristen.',
      ],
    },
    {
      title: 'Karte',
      paragraphs: [
        'Auf der Kontaktseite zeigen wir eine Karte von Google Maps erst, wenn Sie auf «Karte laden» klicken. Erst dann erhält Google Ihre IP-Adresse und technische Angaben zu Ihrem Browser. Anbieterin ist Google Ireland Limited, die Daten können auch in den USA bearbeitet werden. Mehr dazu in der Datenschutzerklärung von Google unter policies.google.com/privacy.',
      ],
    },
    {
      title: 'Keine Cookies, keine Analyse',
      paragraphs: [
        'Diese Website setzt keine Cookies und nutzt keine Analyse-, Werbe- oder Tracking-Dienste. Schriften laden wir von unserem eigenen Server, nicht von Google.',
      ],
    },
    {
      title: 'Bekanntgabe ins Ausland',
      paragraphs: [
        'Personendaten können in die USA (Vercel, Resend, Google) und nach Deutschland (Brandea GbR) gelangen. Deutschland bietet einen angemessenen Datenschutz. Für die USA stützen wir uns auf die Zertifizierung der Anbieter unter dem Swiss-U.S. Data Privacy Framework oder auf die Standardvertragsklauseln.',
      ],
    },
    {
      title: 'Ihre Rechte',
      paragraphs: ['Sie können jederzeit:'],
      items: [
        'Auskunft verlangen, welche Personendaten wir über Sie bearbeiten',
        'unrichtige Daten berichtigen lassen',
        'die Löschung Ihrer Daten verlangen, soweit keine Aufbewahrungspflicht besteht',
        'der Bearbeitung widersprechen',
        'Ihre Daten in einem gängigen Format herausverlangen',
      ],
    },
    {
      title: 'Kontakt und Beschwerde',
      paragraphs: [
        `Schreiben Sie uns für Fragen und Anliegen an ${company.email} oder per Post an die Adresse oben. Sie können sich auch an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden, edoeb.admin.ch.`,
      ],
    },
    {
      title: 'Sicherheit',
      paragraphs: ['Die Verbindung zu dieser Website ist verschlüsselt (HTTPS). Wir schützen Daten mit technischen und organisatorischen Massnahmen, soweit das zumutbar ist.'],
    },
    {
      title: 'Änderungen',
      paragraphs: ['Wir passen diese Erklärung an, wenn sich die Website oder die Rechtslage ändert. Es gilt die hier veröffentlichte Fassung.'],
    },
  ],
  updated: '2026-09-26',
}
