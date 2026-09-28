import type { ServicePageContent, Step } from '../types'
import { answers, responseTime } from './common'

/**
 * Testi delle tre pagine premium sotto /premium, in italiano (M29, M57, M60).
 * Traduzione fedele di content/de/premium.ts: nessuna referenza, cifra o prezzo (E18).
 */

const anfrage: Step = {
  title: 'Richiesta discreta',
  text: `Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal gerente; riceverà nostre notizie ${responseTime}.`,
}

const team: Step = {
  title: 'Il Suo team',
  text: 'Da Lei lavora sempre lo stesso team. Chi lavora da Lei è stato verificato da noi.',
}

const cta = {
  title: 'Richiesta discreta',
  text: `Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal gerente; riceverà nostre notizie ${responseTime}.`,
}

const luxusimmobilien: ServicePageContent = {
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
    anfrage,
    {
      title: 'Visita e offerta',
      text: 'Visitiamo la Sua casa e chiariamo materiali, orari e accesso. In seguito riceve un’offerta, gratuita e senza impegno.',
    },
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

const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Pulizia della cabina di jet privati',
  lead: [
    'Nella cabina di un jet privato pelle, legno, superfici lucide e tessuti pregiati si trovano in uno spazio ristretto. La pulizia richiede cura, discrezione e una pianificazione in linea con i Suoi voli.',
    'Puliamo la cabina d’intesa con Lei e con il Suo operatore aereo, con riguardo per i materiali di pregio.',
  ],
  facts: [
    { label: 'Per', value: 'Proprietari e operatori di jet privati' },
    { label: 'Prestazioni', value: 'Pulizia della cabina' },
    { label: 'Appuntamenti', value: 'Previo accordo, in funzione del Suo piano di volo' },
    { label: 'Discrezione', value: 'Su richiesta con accordo di riservatezza' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità del servizio la stabiliamo con Lei in anticipo. Di norma:',
    items: [
      'Sedili e imbottiture in pelle e tessuto',
      'Tappeti e pavimenti',
      'Superfici in legno e superfici lucide',
      'Finestrini, specchi e vetri nella cabina',
      'Cucina di bordo e toilette',
    ],
  },
  sections: [
    {
      title: 'Materiali nella cabina',
      paragraphs: [
        'Pelle, legno laccato, superfici lucide, moquette e tessuti pregiati si trovano vicinissimi in una cabina. Ogni materiale richiede un prodotto e un panno propri, affinché nulla si scolorisca, si secchi o si graffi.',
        'Quali prodotti sono adatti alla Sua cabina lo chiariamo in anticipo con Lei e con il Suo operatore aereo.',
      ],
    },
    {
      title: 'Pianificazione in funzione dei Suoi voli',
      paragraphs: [
        'Dove e quando puliamo la cabina lo concordiamo con Lei e con il Suo operatore aereo. Così l’intervento si inserisce nel Suo piano di volo.',
        'Spesso la pulizia avviene tra due voli, dopo un viaggio lungo o prima di un volo con ospiti. Se la finestra temporale è stretta, è utile concordare le date per tempo.',
      ],
    },
    {
      title: 'Che cosa deve essere definito prima dell’intervento',
      items: [
        'Il luogo in cui si trova l’aeromobile e come è regolato l’accesso per il nostro team',
        'La finestra temporale tra i voli',
        'Quali zone della cabina sono comprese',
        'Quali prodotti sono autorizzati per i materiali',
        'Chi prende in consegna la cabina dopo la pulizia',
      ],
    },
    {
      title: 'Discrezione a bordo',
      paragraphs: [
        'Come trattiamo oggetti personali e documenti a bordo lo stabilisce Lei. Da Lei lavora sempre lo stesso team, verificato da noi. Su richiesta sottoscriviamo un accordo di riservatezza.',
      ],
    },
  ],
  steps: [
    anfrage,
    {
      title: 'Sopralluogo e offerta',
      text: 'Visitiamo la cabina e chiariamo materiali, luogo e finestra temporale con Lei e con il Suo operatore aereo. In seguito riceve un’offerta, gratuita e senza impegno.',
    },
    {
      title: 'Pulizia',
      text: 'Puliamo la cabina al momento concordato.',
    },
    team,
  ],
  faq: [
    {
      question: 'Come pianificate la pulizia in funzione dei nostri voli?',
      answer: 'Il momento lo concordiamo con Lei e con il Suo operatore aereo, affinché la cabina sia pronta prima del volo successivo.',
    },
    {
      question: 'Come trattate pelle e legno?',
      answer: 'Puliamo con riguardo per i materiali e chiariamo in anticipo quali prodotti sono adatti alla Sua cabina.',
    },
    {
      question: 'Pulite anche l’esterno dell’aeromobile?',
      answer: 'No. La nostra offerta comprende la pulizia della cabina.',
    },
    {
      question: 'Chi lavora nella nostra cabina?',
      answer:
        'Sempre lo stesso team. Chi lavora da Lei è stato verificato da noi. Su richiesta sottoscriviamo un accordo di riservatezza.',
    },
    { question: 'Siete assicurati?', answer: answers.versicherung },
    { question: 'In quali lingue possiamo comunicare?', answer: answers.sprachen },
    { question: 'Quanto costa la pulizia?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Per ville, residenze e abitazioni secondarie.' },
    { path: '/premium/yacht', text: 'Per yacht e motoscafi sul lago dei Quattro Cantoni e sul lago di Zugo.' },
    { path: '/premium', text: 'Tutte le offerte e gli impegni della nostra linea premium.' },
  ],
  cta,
}

const yacht: ServicePageContent = {
  path: '/premium/yacht',
  area: 'premium',
  h1: 'Pulizia di yacht e motoscafi',
  lead: [
    'Un’imbarcazione sul lago è esposta a vento, intemperie, polline ed escrementi di uccelli; all’interno si depositano umidità e polvere. Puliamo la Sua imbarcazione all’interno e all’esterno, sul lago dei Quattro Cantoni e sul lago di Zugo.',
    'Teak, gelcoat e imbottiture richiedono ciascuno un trattamento specifico. Quali prodotti usiamo per la Sua imbarcazione lo chiariamo con Lei in anticipo.',
  ],
  facts: [
    { label: 'Per', value: 'Proprietari di yacht e motoscafi' },
    { label: 'Zona', value: 'Sul lago dei Quattro Cantoni e sul lago di Zugo' },
    { label: 'Materiali', value: 'Teak, gelcoat e imbottiture' },
    { label: 'Appuntamenti', value: 'Previo accordo, una tantum o regolarmente' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità del servizio la stabiliamo dopo un sopralluogo all’ormeggio. Di norma:',
    items: [
      'Ponte e superfici in teak',
      'Superfici in gelcoat su ponte e sovrastrutture',
      'Imbottiture e tessili',
      'Salone, cabine e cambusa',
      'Bagni',
      'Finestrature e vetri',
    ],
    notIncluded: ['Lavori sull’opera viva, ad esempio l’antivegetativa.', 'Manutenzione tecnica del motore e degli impianti di bordo.'],
  },
  sections: [
    {
      title: 'Materiali a bordo',
      paragraphs: [
        'Il teak diventa grigio e ruvido se viene pulito in modo sbagliato: spazzole troppo dure e alta pressione staccano le fibre morbide del legno. Il gelcoat perde lucentezza a causa del sole e delle macchie d’acqua, l’acciaio inossidabile mostra ruggine superficiale, le imbottiture assorbono umidità.',
        'Per questo ogni materiale richiede un procedimento proprio. Quali prodotti usiamo per la Sua imbarcazione lo chiariamo con Lei in anticipo.',
      ],
    },
    {
      title: 'Sul lago molto è diverso',
      paragraphs: [
        'Sul lago dei Quattro Cantoni e sul lago di Zugo manca il sale, ma polline, foglie, ragni ed escrementi di uccelli portano molto sporco a bordo, soprattutto in primavera e in estate. Negli interni chiusi si depositano umidità e polvere.',
        'Poiché l’acqua che scorre dal ponte finisce direttamente nel lago, occorre cura nella scelta dei prodotti. Su richiesta puliamo con prodotti ecologici.',
      ],
    },
    {
      title: 'Occasioni tipiche',
      items: [
        'Prima della prima uscita della stagione',
        'Regolarmente durante la stagione',
        'Prima e dopo avere ospiti a bordo',
        'A fine stagione, prima del rimessaggio invernale',
      ],
    },
    {
      title: 'Accesso all’ormeggio',
      paragraphs: [
        'L’accesso al pontile o al porto lo chiariamo con Lei in anticipo, così come corrente e acqua all’ormeggio e chi ci apre l’imbarcazione. Da Lei lavora sempre lo stesso team.',
      ],
    },
  ],
  steps: [
    anfrage,
    {
      title: 'Sopralluogo all’ormeggio',
      text: 'Visitiamo l’imbarcazione e chiariamo materiali e accesso all’ormeggio. In seguito riceve un’offerta, gratuita e senza impegno.',
    },
    {
      title: 'Appuntamenti',
      text: 'Puliamo alle date che concordiamo con Lei, una tantum o regolarmente.',
    },
    team,
  ],
  faq: [
    {
      question: 'Dove pulite le imbarcazioni?',
      answer: 'All’ormeggio, sul lago dei Quattro Cantoni e sul lago di Zugo. L’accesso al pontile o al porto lo chiariamo con Lei in anticipo.',
    },
    {
      question: 'Quali materiali pulite?',
      answer: 'Teak, gelcoat e imbottiture, nonché gli interni. Quali prodotti usiamo per la Sua imbarcazione lo chiariamo durante il sopralluogo.',
    },
    {
      question: 'Con quale frequenza si dovrebbe pulire un’imbarcazione sul lago?',
      answer:
        'Dipende da ormeggio, utilizzo e stagione. Sotto gli alberi e durante la fioritura un’imbarcazione si sporca più in fretta. Dopo il sopralluogo Le proponiamo delle date, una tantum o regolarmente.',
    },
    {
      question: 'Lavorate anche sull’opera viva o sul motore?',
      answer: 'No. I lavori sull’opera viva, ad esempio l’antivegetativa, e la manutenzione tecnica del motore e degli impianti di bordo non ne fanno parte.',
    },
    { question: 'Potete pulire con prodotti ecologici?', answer: answers.mittel },
    { question: 'Siete assicurati?', answer: answers.versicherung },
    { question: 'Quanto costa la pulizia?', answer: answers.kosten },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Per ville, residenze e abitazioni secondarie sul lago.' },
    { path: '/premium/privatjet', text: 'Per la cabina del Suo jet privato.' },
    { path: '/premium', text: 'Tutte le offerte e gli impegni della nostra linea premium.' },
  ],
  cta: {
    title: cta.title,
    text: 'Ci indichi l’imbarcazione, il posto barca e le date desiderate. Esaminiamo l’imbarcazione al posto barca e Le rimettiamo un’offerta, gratuitamente e senza impegno.',
  },
}

export const premium = { luxusimmobilien, privatjet, yacht }
