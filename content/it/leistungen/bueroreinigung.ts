import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizia regolare',
  h1: 'Pulizia di uffici e studi',
  lead: [
    'In uffici e studi la pulizia non deve disturbare l’attività: nessun aspirapolvere durante una riunione, nessun pavimento bagnato durante le ore di consultazione. Per questo stabiliamo con Lei gli orari d’intervento, in funzione dei Suoi orari di lavoro e di apertura.',
    'Puliamo uffici, amministrazioni e studi con una cadenza fissa. Le nostre collaboratrici e i nostri collaboratori parlano tedesco, inglese, francese e italiano, un vantaggio pratico per aziende con un team internazionale.',
  ],
  facts: [
    { label: 'Per', value: 'Uffici, amministrazioni e studi' },
    { label: 'Orari', value: 'Previo accordo, in funzione dei Suoi orari di lavoro e di apertura' },
    { label: 'Cadenza', value: 'Più volte alla settimana, secondo superficie e utilizzo' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità esatta la stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Postazioni di lavoro e superfici libere',
      'Pavimenti di uffici, corridoi e sale riunioni',
      'Ricezione, zona d’ingresso e porte a vetri',
      'Angoli cucina e locali pausa',
      'Servizi igienici',
      'Rifiuti e carta straccia, rifornimento del materiale di consumo',
    ],
    notIncluded: [
      'Vani scale e locali comuni di interi stabili: vedi [Pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      'Pulizie a fondo una tantum: vedi [Pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
      'Ricondizionamento di strumenti e dispositivi medici, che resta di competenza del team del Suo studio.',
    ],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Piccoli uffici con poche postazioni, amministrazioni su più piani, studi medici e di terapia con sala d’attesa: i locali sono diversi, l’esigenza è la stessa. Al mattino tutto deve essere pulito e pronto, senza che nessuno si accorga della pulizia.',
        'Spesso la richiesta arriva con il trasloco in nuovi locali, quando il team cresce o quando la pulizia attuale non si adatta più agli orari di lavoro.',
      ],
    },
    {
      title: 'Che cosa succede durante un intervento',
      paragraphs: [
        'Si è dimostrata valida una sequenza fissa, dall’alto verso il basso e dal pulito allo sporco: svuotare rifiuti e carta straccia, pulire superfici libere e postazioni di lavoro, pulire angolo cucina e servizi igienici, rifornire il materiale di consumo e per ultimi i pavimenti. Così nessun pavimento già pulito si sporca di nuovo.',
        'Se ne fanno parte anche schermi, tastiere, telefoni o piante lo chiariamo durante il sopralluogo e lo stabiliamo nell’offerta.',
      ],
    },
    {
      title: 'Pulizia negli studi medici',
      paragraphs: [
        'Negli studi ci atteniamo al Suo piano d’igiene. Quali locali e superfici puliamo e di che cosa si occupa il team del Suo studio lo chiariamo durante il sopralluogo e lo stabiliamo nell’offerta.',
        'Alla ricezione e in sala d’attesa maniglie, bancone, sedie e ripiani sono toccati da molte persone. Quali prodotti valgono per queste superfici è indicato nel Suo piano d’igiene. Sale di trattamento e apparecchi restano come li prescrive il team del Suo studio.',
      ],
    },
    {
      title: 'Orari e accesso',
      paragraphs: [
        'La maggior parte degli uffici viene pulita al di fuori dell’orario di lavoro, al mattino presto o la sera. Negli studi l’orario dipende dalle ore di consultazione. Gli orari d’intervento li stabiliamo con Lei.',
        'Per l’accesso servono di solito una chiave o un badge e regole chiare per impianto d’allarme, luci e chiusura. Lo chiariamo prima del primo intervento.',
      ],
    },
    {
      title: 'Che cosa determina l’impegno',
      paragraphs: [
        'Quanto dura un intervento e quanto spesso passiamo dipende meno dalla sola superficie che dall’uso dei locali. Chiariamo questi punti durante il sopralluogo:',
      ],
      items: [
        'Superficie e tipo di locali, ad esempio uffici singoli, open space, sale riunioni e ricezione',
        'Numero di postazioni di lavoro e intensità d’uso dei locali',
        'Angoli cucina e servizi igienici, che richiedono più tempo delle superfici d’ufficio',
        'Pavimenti come moquette, parquet, pietra o vinile',
        'Porte a vetri, pareti vetrate e altre superfici in vetro',
        'Ritmo e orari d’intervento',
        'Accesso con chiave, badge o impianto d’allarme',
        'Se il materiale di consumo come sapone, carta e sacchi per i rifiuti è compreso',
      ],
    },
    {
      title: 'Quali informazioni inserire nella richiesta d’offerta',
      paragraphs: [
        'Più la Sua richiesta è precisa, meglio possiamo preparare il sopralluogo. Sono utili queste informazioni:',
      ],
      items: [
        'Indirizzo e tipo di azienda, ad esempio ufficio, amministrazione o studio',
        'Superficie approssimativa e numero di piani',
        'Numero di postazioni di lavoro, sale riunioni, angoli cucina e servizi igienici',
        'Ritmo desiderato e orari in cui deve avvenire la pulizia',
        'Particolarità come studi medici con piano d’igiene, zone riservate o grandi superfici vetrate',
        'Se desidera prodotti di pulizia ecologici',
        'Data d’inizio desiderata e persona di riferimento per il sopralluogo',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia di uffici',
      items: [
        'I cestini sono svuotati e dotati di sacchi nuovi',
        'L’angolo cucina è senza aloni di caffè, il lavello pulito e asciutto',
        'Porte e pareti in vetro sono senza impronte',
        'I distributori di sapone e di carta nei servizi igienici sono riforniti',
        'Documenti e oggetti personali restano come li ha lasciati',
      ],
    },
  ],
  steps: [
    {
      title: 'Orari e accesso',
      text: 'Stabiliamo quando puliamo e come accediamo all’edificio, ad esempio con chiave o badge.',
    },
    {
      title: 'Inizio',
      text: 'Iniziamo alla data concordata. Se le Sue esigenze cambiano, adeguiamo con Lei il volume di lavoro e la cadenza.',
    },
  ],
  faq: [
    {
      question: 'Pulite al di fuori dei nostri orari di lavoro?',
      answer:
        'Gli orari d’intervento li stabiliamo con Lei, in funzione dei Suoi orari di lavoro e di apertura. Al momento della richiesta ci indichi quando desidera che si pulisca.',
    },
    {
      question: 'Pulite anche studi medici e di terapia?',
      answer:
        'Sì. Negli studi ci atteniamo al Suo piano d’igiene e chiariamo durante il sopralluogo di quali locali e superfici ci occupiamo.',
    },
    {
      question: 'Dobbiamo riordinare le postazioni prima della pulizia?',
      answer:
        'Puliamo le superfici libere. Meno oggetti ci sono sulle scrivanie, più accuratamente si può pulire. Come desidera regolarsi con documenti, schermi e tastiere lo chiariamo durante il sopralluogo.',
    },
    {
      question: 'Come avviene la consegna delle chiavi e come entra il vostro team nell’edificio?',
      answer:
        'Prima del primo intervento stabiliamo con Lei quali chiavi, badge o codici riceve il nostro team e quali regole valgono per allarme, luci e chiusura.',
    },
    {
      question: 'Le vostre collaboratrici e i vostri collaboratori parlano anche inglese?',
      answer: `${answers.sprachen} È un vantaggio pratico se nel Suo ufficio si parlano più lingue.`,
    },
    {
      question: 'Chi risponde se durante la pulizia si danneggia qualcosa?',
      answer:
        'Disponiamo di un’assicurazione di responsabilità civile aziendale con una copertura di CHF 10 milioni. Se dopo un intervento nota un danno, ce lo segnali subito.',
    },
    {
      question: 'Quanto dura il contratto e come si può disdire?',
      answer:
        'Durata e disdetta vengono concordate nell’offerta. Ci comunichi i Suoi desideri in merito durante il sopralluogo.',
    },
    { question: 'Pulite anche con prodotti ecologici?', answer: answers.mittel },
    { question: 'Quanto costa la pulizia di uffici?', answer: `${answers.kosten} Maggiori informazioni nella guida: [Da che cosa dipendono i costi di una pulizia di manutenzione](/blog/reinigungskosten-schweiz).` },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Per vani scale e locali comuni dell’intero stabile.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per finestre e superfici vetrate, anche all’esterno.' },
    { path: '/leistungen/facility-services', text: 'Se pulizia, custodia e aree esterne devono essere affidate a un unico fornitore.' },
  ],
  cta: {
    title: 'Offerta per il Suo ufficio o il Suo studio',
    text: 'Ci indichi superficie, locali e orari desiderati. Veniamo da Lei e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}
