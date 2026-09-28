import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Facility services: pulizia, custodia e aree esterne da un unico fornitore',
  lead: [
    'Chi affida pulizia, custodia e manutenzione delle aree esterne a imprese diverse ha più contratti, più interlocutori e molto coordinamento. Con i facility services tutto è fornito da noi.',
    'Avrà un solo contratto e un solo interlocutore. Quali servizi ne fanno parte lo definiamo insieme a Lei.',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari e aziende' },
    { label: 'Prestazioni', value: 'Combinate secondo le esigenze a partire dai nostri servizi' },
    { label: 'Contratto', value: 'Un contratto, un interlocutore' },
  ],
  scope: {
    title: 'Che cosa si può combinare',
    intro: 'I facility services li componiamo a partire dai nostri servizi:',
    items: [
      '[Pulizia di manutenzione](/leistungen/unterhaltsreinigung) con servizio di rifornimento',
      '[Pulizia di uffici e studi](/leistungen/bueroreinigung)',
      '[Custodia di stabili](/leistungen/hauswartung)',
      '[Manutenzione delle aree esterne e verdi](/leistungen/aussen-und-gruenflaechenpflege)',
      '[Pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung)',
      '[Pulizie a fondo e speciali](/leistungen/sonderreinigungen)',
      '[Pulizia industriale e di capannoni](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Facility management tecnico, come la manutenzione di riscaldamento, ventilazione o ascensori.',
      'Servizio invernale.',
      'L’intermediazione di imprese terze, ad esempio aziende artigianali.',
    ],
  },
  sections: [
    {
      title: 'Situazioni tipiche',
      paragraphs: [
        'Un’amministrazione immobiliare gestisce più stabili e non vuole coordinare un’impresa diversa per ogni compito. Un’azienda ha uffici, un capannone e aree esterne e vuole un unico riferimento per tutto. Oppure una proprietà assume uno stabile e cerca una soluzione coerente fin dall’inizio.',
      ],
    },
    {
      title: 'Come da singoli servizi nasce un contratto',
      paragraphs: [
        'Durante la visita esaminiamo di che cosa ha bisogno il Suo immobile: pulizia interna, vetri, custodia, aree esterne. Ne nasce un contratto in cui ogni servizio figura con entità e cadenza.',
        'Se in seguito si aggiunge o viene meno qualcosa, ne parla in un unico punto, con il Suo interlocutore presso di noi.',
      ],
    },
    {
      title: 'I vantaggi per Lei',
      items: [
        'Un solo interlocutore per pulizia, custodia e aree esterne',
        'Un solo contratto invece di più, con una visione d’insieme su tutti i servizi',
        'Meno coordinamento tra imprese, ad esempio su chi pulisce il vano scale dopo lavori nelle aree esterne',
        'Uno sguardo sull’intero immobile: chi pulisce nell’edificio vede anche quando all’esterno qualcosa non va',
      ],
    },
    {
      title: 'Limiti e collaborazione',
      paragraphs: [
        'Per noi facility services significa: i servizi che eseguiamo noi stessi. Il facility management tecnico, ad esempio la manutenzione di riscaldamento, ventilazione o ascensori, non ne fa parte, così come l’intermediazione di aziende artigianali.',
        'I guasti che notiamo durante il lavoro Glieli segnaliamo, affinché possa incaricare l’impresa specializzata adatta.',
      ],
    },
  ],
  steps: [
    {
      title: 'Un solo contratto',
      text: 'I servizi di cui il Suo immobile ha bisogno li fissiamo in un unico contratto.',
    },
    {
      title: 'Un solo interlocutore',
      text: 'Per tutti i servizi ha un solo interlocutore presso di noi. Per le modifiche si rivolge sempre alla stessa persona.',
    },
  ],
  faq: [
    {
      question: 'Che cosa intendete per facility services?',
      answer:
        'Pulizia, custodia e manutenzione delle aree esterne da un unico fornitore, in un solo contratto e con un solo interlocutore. Il facility management tecnico, ad esempio la manutenzione di riscaldamento e ventilazione, non ne fa parte.',
    },
    {
      question: 'Possiamo iniziare con un singolo servizio?',
      answer:
        'Sì. Può iniziare con un servizio, ad esempio la [pulizia di manutenzione](/leistungen/unterhaltsreinigung), e aggiungerne altri in seguito.',
    },
    {
      question: 'Qual è la differenza rispetto al servizio di custodia?',
      answer:
        'Il [servizio di custodia](/leistungen/hauswartung) è un singolo servizio con giri di controllo, piccole riparazioni, impiantistica e smaltimento. I facility services lo combinano con pulizia e manutenzione delle aree esterne in un unico contratto.',
    },
    {
      question: 'Chi è il nostro interlocutore?',
      answer: 'Per tutti i servizi ha un solo interlocutore presso di noi. Per le modifiche si rivolge sempre alla stessa persona.',
    },
    { question: 'Quanto costano i facility services?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Giri di controllo, piccole riparazioni, impiantistica, smaltimento, consegne e riconsegne degli appartamenti.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Pulizia regolare di stabili e superfici commerciali.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Manutenzione delle aree esterne e delle aree verdi.' },
  ],
  cta: {
    title: 'Offerta per facility services',
    text: 'Ci indichi i Suoi stabili e i servizi che desidera affidare. Visitiamo gli stabili e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}
