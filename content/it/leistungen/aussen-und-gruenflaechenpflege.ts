import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Manutenzione delle aree esterne e verdi per stabili',
  lead: [
    'Le aree esterne sono la prima cosa che inquilini, clientela e visitatori vedono di uno stabile. Aree verdi curate, vialetti e piazzali puliti fanno quindi parte della manutenzione tanto quanto il vano scale.',
    'Curiamo le aree esterne del Suo stabile, singolarmente o nell’ambito del [servizio di custodia](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari e aziende' },
    { label: 'Intervento', value: 'Singolarmente o nell’ambito del servizio di custodia' },
    { label: 'Non offriamo', value: 'Servizio invernale' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'Quali lavori svolgiamo lo stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Tagliare l’erba e rifilare i bordi',
      'Curare siepi, arbusti e aiuole',
      'Rimuovere il fogliame',
      'Mantenere puliti vialetti, piazzali e parcheggi',
      'Rimuovere le erbacce da piazzali e fughe',
      'Raccogliere i rifiuti nelle aree esterne',
    ],
    notIncluded: ['Non offriamo il servizio invernale.', 'Costruzione di giardini e nuove sistemazioni a verde.'],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Complessi residenziali con prato, siepi e parco giochi, stabili commerciali con parcheggio e zona d’ingresso, edifici artigianali con aiuole e superfici in ghiaia. Le aree esterne sono la prima cosa che vedono i visitatori e ciò che gli inquilini usano ogni giorno.',
        'Spesso la richiesta arriva quando le aree esterne finora venivano curate di passaggio e ciò non basta più, oppure quando pulizia, custodia e aree esterne devono essere affidate insieme.',
      ],
    },
    {
      title: 'Manutenzione nel corso dell’anno',
      paragraphs: [
        'I lavori seguono la stagione. Di norma si svolgono così:',
      ],
      items: [
        'Primavera: liberare vialetti e piazzali dallo sporco dell’inverno, curare le aiuole, primo taglio dell’erba',
        'Estate: tagliare regolarmente l’erba, rimuovere le erbacce da piazzali e fughe, liberare leggermente i passaggi se necessario',
        'Autunno: rimuovere il fogliame, preparare le aiuole per l’inverno',
        'Inverno: potare siepi e arbusti, fuori dal periodo di nidificazione. Non offriamo il servizio invernale, sgombero della neve e spargimento di sale richiedono un’altra soluzione',
      ],
    },
    {
      title: 'Pianificazione e cadenza',
      paragraphs: [
        'La frequenza della manutenzione dipende da stagione e condizioni meteo. Nel periodo di crescita il prato richiede più attenzione che a fine autunno. Il piano di manutenzione lo stabiliamo per iscritto; interventi supplementari, ad esempio prima di un evento, li concorda con noi.',
        'Nell’ambito del [servizio di custodia](/leistungen/hauswartung) la manutenzione delle aree esterne si può combinare con i giri di controllo: chi lavora all’esterno vede anche quando qualcosa non va nell’edificio.',
      ],
    },
    {
      title: 'Come riconoscere aree esterne curate',
      items: [
        'I bordi del prato sono rifilati con precisione',
        'Vialetti e piazzali sono senza fogliame, rifiuti ed erbacce nelle fughe',
        'Le siepi sono in forma, passaggi e visuali restano liberi',
        'Le aiuole sono curate e senza erbacce',
      ],
    },
  ],
  steps: [
    {
      title: 'Piano di manutenzione',
      text: 'Stabiliamo quali lavori svolgiamo e con quale frequenza, in funzione della stagione.',
    },
    {
      title: 'Manutenzione',
      text: 'Curiamo le aree esterne secondo il piano. Interventi supplementari, ad esempio prima di un evento, li concorda con noi.',
    },
  ],
  faq: [
    { question: 'Eseguite anche il servizio invernale?', answer: 'No, non offriamo il servizio invernale.' },
    {
      question: 'Posso affidare la manutenzione delle aree esterne senza il servizio di custodia?',
      answer: 'Sì. La manutenzione delle aree esterne e verdi è disponibile singolarmente o nell’ambito del [servizio di custodia](/leistungen/hauswartung).',
    },
    {
      question: 'Quando è meglio potare le siepi?',
      answer:
        'Fuori dal periodo di nidificazione, che per molte specie va dalla primavera alla fine dell’estate. La Stazione ornitologica svizzera di Sempach raccomanda di potare gli arbusti in inverno, da novembre a marzo. Se in estate passaggi o visuali si chiudono, di solito basta una leggera potatura di forma con attenzione ai nidi. Il momento adatto per le Sue siepi lo fissiamo nel piano di manutenzione.',
    },
    {
      question: 'Realizzate anche nuovi giardini?',
      answer: 'No. La costruzione di giardini e le nuove sistemazioni a verde non fanno parte della nostra offerta. Curiamo aree esterne esistenti.',
    },
    { question: 'Quanto costa la manutenzione delle aree esterne?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Se oltre alle aree esterne si desidera la cura dell’edificio e dell’impiantistica.' },
    { path: '/leistungen/facility-services', text: 'Se pulizia, custodia e aree esterne devono rientrare in un unico contratto.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per facciate e superfici vetrate.' },
  ],
  cta: {
    title: 'Offerta per la manutenzione delle Sue aree esterne',
    text: 'Ci indichi stabile e superfici. Visitiamo le aree esterne e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}
