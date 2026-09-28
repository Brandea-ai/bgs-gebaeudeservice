import type { ServicePageContent } from '../../types'
import { answers } from '../common'
import { team, cta } from './gemeinsam'

export const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Pulizia e cura di ville e residenze',
  lead: [
    'In una casa con pietra naturale, parquet e superfici lucide conta ogni dettaglio, così come la fiducia nelle persone che vi lavorano. Puliamo ville, loft e residenze regolarmente o prima di occasioni particolari, con riguardo per i materiali delicati.',
    'Da Lei lavora sempre lo stesso team, negli orari che Le convengono: anche la sera, nel fine settimana o durante la Sua assenza.',
  ],
  facts: [
    { label: 'Per', value: 'Ville, loft, residenze e abitazioni secondarie' },
    { label: 'Cadenza', value: 'Regolarmente o prima di occasioni particolari' },
    { label: 'Team', value: 'Sempre lo stesso team' },
    { label: 'Discrezione', value: 'Su richiesta con accordo di riservatezza' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità del servizio la stabiliamo dopo una visita della Sua casa. Di norma:',
    items: [
      'Soggiorni, camere da letto e camere per gli ospiti',
      'Cucine e bagni',
      'Pietra naturale, parquet e superfici lucide, puliti nel rispetto del materiale',
      'Superfici vetrate e specchi',
      'Pulizia prima del Suo arrivo e dopo la Sua partenza',
      'Giri di controllo durante la Sua assenza',
      'Pulizia prima e dopo eventi, anche nel fine settimana',
      'Locali con opere d’arte e oggetti d’antiquariato, opere d’arte solo con la Sua autorizzazione',
      'Per agenti immobiliari e amministrazioni: con breve preavviso prima di una vendita, di un servizio fotografico o di una consegna',
    ],
    notIncluded: ['Restauro di opere d’arte e oggetti d’antiquariato.'],
  },
  sections: [
    {
      title: 'Materiali trattati con cura',
      paragraphs: [
        'La pietra naturale come marmo e calcare è sensibile agli acidi, anche a detergenti domestici delicati e all’aceto. Il parquet sopporta poca acqua, le superfici lucide si graffiano con panni sbagliati. Ottone e rubinetteria perdono la loro superficie con prodotti aggressivi.',
        'Per questo durante la visita chiariamo quali materiali sono presenti nella Sua casa e di quale cura hanno bisogno. Se dispone di indicazioni di cura del fabbricante o dell’architettura d’interni, ci atteniamo a esse.',
      ],
    },
    {
      title: 'Chiavi, allarme e discrezione',
      paragraphs: [
        'Per chiavi e impianto d’allarme concordiamo con Lei regole fisse. Su richiesta sottoscriviamo un accordo di riservatezza.',
        'La Sua richiesta è trattata personalmente dal gerente. Chi lavora da Lei è stato verificato da noi.',
      ],
    },
    {
      title: 'Situazioni tipiche',
      items: [
        'Cura regolare della Sua residenza, a orari fissi e sempre con lo stesso team',
        'Abitazione secondaria: pulizia prima del Suo arrivo e dopo la Sua partenza, giri di controllo nel frattempo',
        'Prima e dopo un evento, anche nel fine settimana',
        'Locali con opere d’arte e oggetti d’antiquariato, opere d’arte solo con la Sua autorizzazione',
        'Per agenti immobiliari e amministrazioni: con breve preavviso prima di una vendita, di un servizio fotografico o di una consegna',
      ],
    },
    {
      title: 'Durante la Sua assenza',
      paragraphs: [
        'Per abitazioni secondarie e viaggi prolungati controlliamo che tutto sia in ordine, con la frequenza concordata con Lei. Che cosa controlliamo e a chi segnaliamo eventuali anomalie lo stabiliamo con Lei in anticipo.',
        'Prima del Suo arrivo puliamo la casa, affinché possa arrivare senza dover fare più nulla. Dopo la Sua partenza la rimettiamo in ordine.',
      ],
    },
  ],
  steps: [
    {
      title: 'Regole fisse',
      text: 'Concordiamo orari, consegna delle chiavi e gestione dell’impianto d’allarme, su richiesta con accordo di riservatezza.',
    },
    team,
  ],
  faq: [
    {
      question: 'Da noi lavora sempre lo stesso team?',
      answer: 'Sì. Da Lei lavora sempre lo stesso team, che conosce la Sua casa e i Suoi desideri.',
    },
    {
      question: 'Come trattate opere d’arte e oggetti d’antiquariato?',
      answer: 'Puliamo i locali con cura. Le opere d’arte in sé le puliamo solo se Lei lo autorizza espressamente.',
    },
    {
      question: 'Come curate pietra naturale e parquet?',
      answer:
        'Nel rispetto del materiale: la pietra naturale come il marmo mai con prodotti acidi, il parquet con poca umidità. Quali prodotti usiamo nella Sua casa lo chiariamo con Lei durante la visita.',
    },
    {
      question: 'Potete pulire durante la nostra assenza?',
      answer: 'Sì, anche durante la Sua assenza, la sera o nel fine settimana. Per chiavi e allarme concordiamo regole fisse.',
    },
    { question: 'Siete assicurati?', answer: answers.versicherung },
    { question: 'In quali lingue possiamo comunicare?', answer: answers.sprachen },
    { question: 'Quanto costa la pulizia?', answer: answers.kosten },
    { question: 'Dove operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/premium/yacht', text: 'Per yacht e motoscafi sul lago dei Quattro Cantoni e sul lago di Zugo.' },
    { path: '/premium/privatjet', text: 'Per la cabina del Suo jet privato.' },
    { path: '/premium', text: 'Tutte le offerte e gli impegni della nostra linea premium.' },
  ],
  cta,
}
