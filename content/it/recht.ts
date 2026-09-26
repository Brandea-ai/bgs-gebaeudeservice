import { company } from '../../shared/company'
import type { LegalContent } from '../types'

/**
 * Note legali e informativa sulla protezione dei dati in italiano (M14, M50, M60).
 * Traduzione fedele di content/de/recht.ts, stessa struttura.
 */

const address = `${company.address.street}, ${company.address.postalCode} ${company.address.city}, Svizzera`

export const impressum: LegalContent = {
  h1: 'Note legali',
  sections: [
    {
      title: 'Gestore di questo sito web',
      lines: [company.legalName, `Rappresentata da ${company.representative}`, address],
    },
    {
      title: 'Contatto',
      lines: [`Telefono ${company.phone.display}`, `Cellulare ${company.mobile.display}`, `E-mail ${company.email}`],
    },
    {
      title: 'Dati del registro',
      lines: [
        'Iscritta nel Registro di commercio del Cantone di Lucerna',
        `IDI ${company.uid}`,
        `Numero IVA ${company.uid} IVA`,
      ],
    },
    {
      title: 'Responsabilità per i contenuti',
      paragraphs: [
        'Redigiamo i contenuti di questo sito web con cura. Non garantiamo tuttavia che siano corretti, completi e aggiornati. Vincolanti sono le nostre offerte e i nostri contratti.',
        'Sono escluse, nella misura consentita dalla legge, pretese di responsabilità per danni derivanti dall’accesso a questo sito web, dal suo utilizzo o da disfunzioni tecniche.',
      ],
    },
    {
      title: 'Link ad altri siti web',
      paragraphs: ['Dei contenuti di siti web di terzi a cui rimandiamo sono responsabili i rispettivi gestori. La visita avviene sotto la propria responsabilità.'],
    },
    {
      title: 'Diritto d’autore',
      paragraphs: [
        `Testi, grafica e altri contenuti di questo sito web appartengono alla ${company.legalName} o ai titolari dei diritti indicati. Un utilizzo al di fuori di questo sito web richiede il nostro previo consenso scritto.`,
      ],
    },
    {
      title: 'Protezione dei dati',
      paragraphs: ['Come trattiamo i dati personali è descritto nell’[Informativa sulla protezione dei dati](/datenschutz).'],
    },
  ],
  updated: '2026-09-26',
}

export const datenschutz: LegalContent = {
  h1: 'Informativa sulla protezione dei dati',
  intro:
    'Qui scopre quali dati personali trattiamo durante la visita di questo sito web, a quale scopo e a chi vengono trasmessi. Determinante è la legge federale sulla protezione dei dati (LPD).',
  sections: [
    {
      title: 'Titolare del trattamento',
      lines: [company.legalName, address, `E-mail ${company.email}`, `Telefono ${company.phone.display}`],
    },
    {
      title: 'Visita del sito web',
      paragraphs: [
        'Il sito web è ospitato da Vercel Inc., USA. A ogni accesso si generano dati di protocollo tecnicamente necessari: indirizzo IP, data e ora, pagina richiamata, browser e sistema operativo nonché la pagina di provenienza.',
        'Abbiamo bisogno di questi dati per fornire il sito web, individuare errori e respingere attacchi. Non li analizziamo a fini pubblicitari e non li colleghiamo ad altri dati. Vercel li conserva solo per il tempo necessario al funzionamento e alla sicurezza.',
      ],
    },
    {
      title: 'Modulo di contatto ed e-mail',
      paragraphs: [
        'Se ci scrive tramite il modulo, trattiamo i Suoi dati: nome, indirizzo e-mail e messaggio, facoltativamente anche numero di telefono, servizio desiderato, luogo dell’oggetto e cadenza. Li utilizziamo per rispondere alla Sua richiesta e per allestirLe un’offerta.',
        `Il modulo viene inviato alla nostra casella di posta tramite il servizio e-mail Resend, Inc., USA. Fino all’attivazione del nostro indirizzo si tratta di ${company.email}, la casella di posta di Brandea GbR in Germania, che gestisce questo sito web per nostro conto e ci inoltra le richieste.`,
        'Per proteggersi da abusi, il server mantiene brevemente il Suo indirizzo IP nella memoria di lavoro, per riconoscere un numero eccessivo di richieste in poco tempo. L’indirizzo non viene memorizzato in modo permanente.',
        'Conserviamo la Sua richiesta per il tempo necessario al trattamento e a eventuali domande. Se ne risulta un incarico, si applicano i termini legali di conservazione.',
      ],
    },
    {
      title: 'Mappa',
      paragraphs: [
        'Sulla pagina dei contatti mostriamo una mappa di Google Maps solo quando clicca su «Carica la mappa». Solo allora Google riceve il Suo indirizzo IP e dati tecnici sul Suo browser. Il fornitore è Google Ireland Limited; i dati possono essere trattati anche negli USA. Maggiori informazioni nell’informativa sulla privacy di Google all’indirizzo policies.google.com/privacy.',
      ],
    },
    {
      title: 'Nessun cookie, nessuna analisi',
      paragraphs: [
        'Questo sito web non imposta cookie e non utilizza servizi di analisi, pubblicità o tracciamento. I caratteri tipografici li carichiamo dal nostro server, non da Google.',
      ],
    },
    {
      title: 'Comunicazione all’estero',
      paragraphs: [
        'I dati personali possono essere trasmessi negli USA (Vercel, Resend, Google) e in Germania (Brandea GbR). La Germania garantisce una protezione dei dati adeguata. Per gli USA ci basiamo sulla certificazione dei fornitori secondo lo Swiss-U.S. Data Privacy Framework o sulle clausole contrattuali standard.',
      ],
    },
    {
      title: 'I Suoi diritti',
      paragraphs: ['Lei può in qualsiasi momento:'],
      items: [
        'chiedere informazioni su quali dati personali che La riguardano trattiamo',
        'far rettificare dati inesatti',
        'chiedere la cancellazione dei Suoi dati, se non sussiste un obbligo di conservazione',
        'opporsi al trattamento',
        'chiedere la consegna dei Suoi dati in un formato usuale',
      ],
    },
    {
      title: 'Contatto e reclamo',
      paragraphs: [
        `Per domande e richieste ci scriva a ${company.email} o per posta all’indirizzo indicato sopra. Può rivolgersi anche all’Incaricato federale della protezione dei dati e della trasparenza (IFPDT), edoeb.admin.ch.`,
      ],
    },
    {
      title: 'Sicurezza',
      paragraphs: ['La connessione a questo sito web è cifrata (HTTPS). Proteggiamo i dati con misure tecniche e organizzative, nella misura ragionevolmente esigibile.'],
    },
    {
      title: 'Modifiche',
      paragraphs: ['Adeguiamo la presente informativa quando cambiano il sito web o la situazione giuridica. Fa stato la versione qui pubblicata.'],
    },
  ],
  updated: '2026-09-26',
}
