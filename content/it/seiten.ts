import { company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Dictionary } from '../de'
import type { Step } from '../types'
import { answers, cantonListIt, languagesIt, premiumLine, registerIt, responseTime, steps } from './common'

/**
 * Testi della pagina iniziale, di Chi siamo, Contatto, Zona d’intervento e delle
 * due panoramiche, in italiano (M39, M47, M49, M54, M60). Solo quanto documentato (E18).
 */

type Card = { title: string; text: string }
type LinkCard = Card & { path: PagePath }
type Seiten = Dictionary['seiten']

/** Cifre documentate (E18, stato a settembre 2026) */
export const proof = [
  { value: 'Dal 2006', label: 'Esperienza nella pulizia e nella custodia di stabili' },
  { value: 'Oltre 120', label: 'Clienti' },
  { value: 'Oltre 50', label: 'Collaboratrici e collaboratori' },
  { value: 'CHF 10 mio.', label: 'Responsabilità civile aziendale' },
]

/** Svolgimento fino al primo intervento, uguale su pagina iniziale e contatto (quattro passi, un video ciascuno) */
const offerSteps: Step[] = [
  steps.anfrage,
  steps.besichtigung,
  {
    title: 'Accordo',
    text: 'Esamina l’offerta con calma. Con la Sua conferma è stabilito quali servizi svolgiamo, con quale frequenza e in quali orari.',
  },
  {
    title: 'Inizio',
    text: 'Fissiamo il primo intervento e concordiamo con Lei orari e accesso, ad esempio con chiave o badge.',
  },
]

/** Domande uguali su pagina iniziale e contatto (E18) */
const faq = {
  schnell: {
    question: 'In quanto tempo ricevo un’offerta?',
    answer: `La contattiamo ${responseTime} e fissiamo un appuntamento per il sopralluogo. In seguito riceve l’offerta per iscritto.`,
  },
  kosten: {
    question: 'Quanto costa la pulizia?',
    answer: `${answers.kosten} Maggiori informazioni nella guida: [Da che cosa dipendono i costi di una pulizia di manutenzione](/blog/reinigungskosten-schweiz).`,
  },
  gebiet: { question: 'In quali regioni operate?', answer: answers.gebiet },
  versichert: { question: 'Siete assicurati?', answer: answers.versicherung },
  kurzfristig: {
    question: 'Eseguite anche interventi con breve preavviso?',
    answer: 'Ci telefoni. Chiariamo con Lei che cosa è possibile con breve preavviso.',
  },
}

export const home: Seiten['home'] = {
  h1: 'Impresa di pulizie e custodia di stabili a Lucerna, Zugo e dintorni',
  // Frase di profilo citabile (T5): la prima frase solo con NEW_BRAND, la seconda come in Chi siamo
  profile: {
    title: 'In sintesi',
    brand: company.premiumBrand
      ? `${company.brand} è il marchio della ${company.legalName} con sede a ${company.seat} (LU).`
      : null,
    text: `Dal 2006 operiamo nella pulizia e nella custodia di stabili. Oggi oltre 50 collaboratrici e collaboratori seguono più di 120 clienti nei Cantoni di ${cantonListIt}, in ${languagesIt}.`,
    facts: [
      { key: 'register', label: 'Registro di commercio', value: `Cantone di Lucerna, IDI ${company.uid}` },
      { key: 'persoenlich', label: 'La Sua richiesta', value: 'Trattata personalmente dal gerente' },
      { key: 'umwelt', label: 'Detergenti', value: 'Ecologici su richiesta' },
    ],
  },
  services: {
    title: 'I nostri servizi',
    intro: 'Dieci servizi in tre gruppi: ciò che si ripete regolarmente, ciò che richiede un intervento a fondo e ciò di cui ha bisogno un intero stabile.',
    all: 'Tutti i servizi in sintesi',
    swipe: 'Scorra di lato',
    cards: {
      '/leistungen/unterhaltsreinigung': 'Vano scale, ingresso e ascensore restano puliti senza che nessuno nello stabile debba occuparsene. Riforniamo sapone e carta.',
      '/leistungen/bueroreinigung': 'Postazioni di lavoro, sale riunioni, angoli cottura e ambulatori, puliti in orari adatti alla Sua attività.',
      '/leistungen/hauswartung': 'Giri di controllo, piccole riparazioni, smaltimento dei rifiuti e partecipazione alle consegne degli appartamenti.',
      '/leistungen/aussen-und-gruenflaechenpflege': 'Aree esterne curate tutto l’anno, dal primo taglio dell’erba alle foglie d’autunno.',
      '/leistungen/facility-services': 'Diversi dei nostri servizi riuniti, con un solo contratto e un solo interlocutore.',
    },
    premium: {
      title: premiumLabel,
      text: 'Una linea a sé per ville, loft e residenze, jet privati e yacht, oltre ad alberghi e family office. Discreta e con team fissi.',
      link: 'Al settore Premium',
    },
  },
  audiences: {
    title: 'Per chi lavoriamo',
    intro: 'Un’amministrazione ha esigenze diverse da un’azienda o da una villa. Scelga il Suo gruppo.',
    items: [
      {
        key: 'verwaltungen',
        short: 'Amministrazioni',
        title: 'Amministrazioni e comunioni di proprietari per piani',
        text: 'Gestisce stabili abitativi o commerciali per proprietari o per una comunione. Sul posto serve qualcuno che passi regolarmente e segnali ciò che nota.',
        points: [
          'Vano scale, lavanderia e aree esterne con una cadenza fissa',
          'Giri di controllo regolari, i difetti li segnaliamo direttamente a Lei',
          'Pulizia finale al cambio di inquilino, con garanzia di consegna',
        ],
        link: { path: '/leistungen/hauswartung', hash: 'pflichtenheft', text: 'Modello di capitolato per la custodia di stabili' },
      },
      {
        key: 'unternehmen',
        short: 'Aziende',
        title: 'Aziende',
        text: 'Uffici, studi, commerci e produzione. La pulizia si adatta ai Suoi processi, non il contrario.',
        points: [
          'Orari d’intervento adatti agli orari di lavoro e di apertura',
          'Servizio di rifornimento dei materiali di consumo',
          'Capannoni e macchinari in orari coordinati con la produzione',
        ],
        link: { path: '/leistungen/bueroreinigung', hash: 'leistungsverzeichnis', text: 'Capitolato delle prestazioni per il Suo ufficio' },
      },
      {
        key: 'premium',
        short: 'Premium',
        title: 'Ville, jet, yacht e alberghi',
        text: 'Pietra naturale, parquet, pelle e legni pregiati non perdonano un prodotto sbagliato. Per curarli serve un team che conosca i materiali e lavori con discrezione.',
        points: [
          'Un team fisso che conosce la Sua casa',
          'Un accordo di riservatezza, se lo desidera',
          'Negli alberghi pulizia prima dell’apertura e dopo una ristrutturazione',
        ],
        link: { path: '/premium/luxusimmobilien', hash: 'materialkunde', text: 'Guida ai materiali: pietra naturale, parquet e superfici lucide' },
      },
    ],
  },
  agreed: {
    title: 'Tutto chiaro prima di iniziare',
    intro: 'Prima del primo intervento l’essenziale è messo per iscritto. Così amministrazione, proprietari e il nostro team sanno che cosa vale.',
    written: {
      title: 'Che cosa riceve per iscritto',
      items: [
        { title: 'Offerta', text: 'dopo il sopralluogo, con entità e prezzo' },
        { title: 'Entità', text: 'quali locali e compiti sono inclusi, con quale frequenza e in quali orari' },
        { title: 'Custodia', text: 'quante volte siamo sul posto e a chi segnaliamo i difetti' },
        { title: 'Rifornimento', text: 'quali articoli sono inclusi e chi li acquista' },
        { title: 'Pulizia di fine locazione', text: 'la garanzia di consegna con i suoi dettagli' },
      ],
      note: 'Se in seguito si aggiunge una superficie, completiamo l’accordo per iscritto.',
    },
    limits: {
      title: 'Che cosa non facciamo',
      intro: 'Perché non perda tempo, lo diciamo subito.',
      items: [
        'Servizio invernale e sgombero della neve',
        'Un servizio di picchetto raggiungibile giorno e notte per le emergenze',
        'Pulizie di fine locazione commissionate da inquilini di singoli appartamenti',
        'Economie domestiche ordinarie. Ville, residenze e residenze secondarie le seguiamo nel [settore Premium](/premium).',
        'Manutenzione di riscaldamento, ventilazione, ascensori e protezione antincendio, grandi riparazioni, costruzione di giardini e nuove piantagioni',
      ],
    },
  },
  area: {
    title: 'La nostra zona d’intervento',
    text: `Da ${company.address.city} lavoriamo in tutto il territorio di cinque Cantoni, con tutti i servizi. Per ogni Cantone trova località, oggetti tipici e indicazioni per la pianificazione.`,
    link: 'Alla zona d’intervento',
  },
  faq: [
    {
      question: 'Quanto costa un’impresa di pulizie all’ora?',
      answer:
        'Senza conoscere l’oggetto non è possibile rispondere seriamente. Conta il lavoro richiesto: quanto sono grandi le superfici, quali pavimenti ci sono, quanto sono utilizzate, con quale frequenza e in quali orari si pulisce e chi fornisce il materiale di consumo. Come incidono questi fattori lo spiega la guida [Costi di pulizia in Svizzera](/blog/reinigungskosten-schweiz).',
    },
    {
      question: 'Mi serve una pulizia di manutenzione o una custodia di stabili?',
      answer:
        'Se si tratta solo di pulire, basta la [pulizia di manutenzione](/leistungen/unterhaltsreinigung): vano scale, pavimenti e locali comuni con una cadenza fissa. La [custodia di stabili](/leistungen/hauswartung) si occupa inoltre dello stabile stesso, con giri di controllo, piccole riparazioni, smaltimento e la partecipazione alle consegne degli appartamenti.',
    },
    {
      question: 'Quale servizio è adatto al mio immobile?',
      answer:
        'Lo mostra la [guida nella panoramica dei servizi](/leistungen#wegweiser): abbina dieci situazioni tipiche al servizio adatto. Sulla stessa pagina una tabella confronta i quattro servizi che si confondono più spesso. Se nessuna situazione corrisponde esattamente, descriva il Suo immobile nel modulo qui sotto.',
    },
    {
      question: 'Posso affidarvi anche un singolo intervento?',
      answer:
        'Sì, per esempio una [pulizia a fondo](/leistungen/sonderreinigungen), una [pulizia di fine locazione](/leistungen/umzugsreinigung) prima di una riconsegna, una [pulizia di cantiere](/leistungen/baureinigung) dopo costruzioni e ristrutturazioni o una [pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung). Per questo non serve un contratto di pulizia regolare.',
    },
    {
      question: 'Devo affidarvi più servizi insieme?',
      answer:
        'No. Può affidarci ogni servizio anche da solo, per esempio solo la pulizia delle finestre o solo la cura delle aree esterne. Se per lo stesso stabile gliene servono diversi, si possono riunire nei [facility services](/leistungen/facility-services): un solo contratto invece di diversi.',
    },
    {
      question: 'A che cosa badare nella scelta di un’impresa di pulizie?',
      answer:
        'Soprattutto a offerte davvero confrontabili. È possibile solo se ogni offerente ha visto l’immobile e calcola con gli stessi locali, la stessa cadenza e gli stessi orari. Quali altre domande porre, dall’assicurazione fino al contratto, lo spiega la guida [Come trovare l’impresa di pulizie giusta?](/blog/richtige-reinigungsfirma-finden).',
    },
  ],
  cta: {
    title: 'Un’offerta per il Suo immobile',
    text: 'Descriva brevemente oggetto, luogo ed esigenze. Concordiamo poi con Lei la data del sopralluogo.',
  },
}

export const about = {
  h1: `Pulizia e custodia di stabili da ${company.address.city}, dal 2006`,
  lead: `Dal 2006 operiamo nella pulizia e nella custodia di stabili. Oggi oltre 50 collaboratrici e collaboratori seguono più di 120 clienti nei Cantoni di ${cantonListIt}, in ${languagesIt}.`,
  promises: {
    title: 'Su che cosa può contare',
    items: [
      { key: 'persoenlich' as const, title: 'Contatto personale', text: 'La Sua richiesta è trattata personalmente dal gerente.' },
      { key: 'offerte' as const, title: 'Offerta dopo il sopralluogo', text: 'Indichiamo un prezzo solo dopo aver visto il Suo immobile. Sopralluogo e offerta sono gratuiti e senza impegno.' },
      { key: 'gebiet' as const, title: 'In tutta la zona', text: `Tutti i servizi nei Cantoni di ${cantonListIt}, ovunque alle stesse condizioni.` },
      { key: 'versichert' as const, title: 'Assicurazione', text: answers.versicherung.replace('Sì. ', '') },
      { key: 'sprachen' as const, title: 'Quattro lingue', text: answers.sprachen },
      { key: 'umwelt' as const, title: 'Prodotti ecologici', text: 'Su richiesta puliamo con prodotti ecologici.' },
    ],
  },
  work: {
    title: 'Come lavoriamo',
    intro: 'Quattro principi validi per ogni incarico, dalla pulizia di uffici alla custodia di stabili.',
    items: [
      {
        title: 'Prima vedere, poi offrire',
        paragraphs: [
          'Pavimenti, superfici vetrate, utilizzo e accesso determinano l’impegno. Per questo visitiamo prima il Suo immobile sul posto e chiariamo con Lei entità, cadenza e orari.',
          'Solo dopo indichiamo un prezzo, per iscritto nell’offerta, gratuita e senza impegno.',
        ],
      },
      {
        title: 'Accordi chiari',
        paragraphs: [
          'Con la Sua conferma è stabilito quali locali e compiti sono compresi, con quale frequenza veniamo e in quali orari. L’accesso lo regoliamo prima, ad esempio con chiave o badge.',
          'Ciò che non è compreso lo diciamo apertamente e indichiamo il servizio adatto.',
        ],
      },
      {
        title: 'Vie brevi',
        paragraphs: [
          `La Sua richiesta è trattata personalmente dal gerente; riceverà nostre notizie ${responseTime}.`,
          'Chi ha bisogno di più servizi può riunirli come [facility services](/leistungen/facility-services) in un unico contratto, con un solo interlocutore per tutto.',
        ],
      },
      {
        title: 'Materiale e prodotti',
        paragraphs: [
          'Nella pulizia di manutenzione riforniamo il materiale di consumo come carta e sapone. Su richiesta puliamo con prodotti ecologici.',
          'Pietra naturale, parquet e superfici lucide li puliamo nel rispetto dei materiali, con riguardo per le superfici delicate.',
        ],
      },
    ],
  },
  history: {
    title: 'Nella regione dal 2006',
    items: [
      { label: '2006', title: 'L’inizio', text: 'Dal 2006 operiamo nella pulizia e nella custodia di stabili.' },
      {
        label: 'Oggi',
        title: 'Oltre 50 collaboratori, oltre 120 clienti',
        text: 'Stato a settembre 2026. Lavoriamo per aziende, amministrazioni immobiliari, proprietari e clienti privati con esigenze particolari.',
      },
      {
        label: 'Sede',
        title: company.address.city,
        text: `La ${company.legalName} è iscritta nel ${registerIt}.`,
      },
    ],
  },
  languages: {
    title: 'Quattro lingue',
    text: `Le nostre collaboratrici e i nostri collaboratori parlano ${languagesIt}. Questo facilita gli accordi con team internazionali, con inquiline e inquilini e con clienti che preferiscono esprimersi nella propria lingua. Questo sito è disponibile nelle stesse quattro lingue.`,
  },
  region: {
    title: 'Cinque Cantoni, stesse condizioni',
    text: `Da ${company.address.city} operiamo nei Cantoni di ${cantonListIt}. Offriamo tutti i servizi nell’intera zona, e per la trasferta valgono ovunque le stesse condizioni.`,
    link: 'Alla zona d’intervento',
  },
  values: {
    title: 'I nostri valori nella pratica',
    intro: 'I valori si vedono in ciò che si fa. Per questo qui trova che cosa facciamo in concreto.',
    items: [
      { key: 'ehrlich' as const, title: 'Onesti sul prezzo', text: 'Indichiamo i prezzi solo nell’offerta scritta, dopo aver visto l’immobile. Un prezzo senza sopralluogo spesso non sarebbe corretto in seguito.' },
      { key: 'klar' as const, title: 'Chiari sull’entità', text: 'Ogni pagina di servizio indica anche ciò che non è compreso, con un rimando al servizio adatto.' },
      { key: 'nachbessern' as const, title: 'Rispondiamo del nostro lavoro', text: 'Se alla consegna l’amministrazione contesta qualcosa nella nostra pulizia di fine locazione, puliamo di nuovo gratuitamente. I dettagli figurano nell’offerta.' },
      { key: 'versichert' as const, title: 'Responsabilità', text: 'Per i danni durante il lavoro abbiamo un’assicurazione di responsabilità civile aziendale con una copertura di CHF 10 mio.' },
      { key: 'diskret' as const, title: 'Discrezione', text: 'Nel settore Premium sottoscriviamo su richiesta un accordo di riservatezza. Chiavi e allarme li gestiamo secondo regole fisse.' },
      { key: 'umwelt' as const, title: 'Rispetto per l’ambiente', text: 'Su richiesta puliamo con prodotti ecologici. Ce lo dica durante il sopralluogo.' },
    ],
  },
  contact: {
    title: 'Il Suo interlocutore',
    text: `La Sua richiesta arriva direttamente al gerente. La contatta ${responseTime}.`,
  },
  register: { title: 'Dati del registro', court: registerIt, uid: 'IDI' },
  statsLabel: 'In cifre',
  faq: [faq.kosten, faq.gebiet, faq.kurzfristig],
  cta: {
    title: 'Fissare un sopralluogo',
    text: 'Durante il sopralluogo esaminiamo il Suo immobile e chiariamo l’entità del lavoro e gli orari. In seguito riceve un’offerta scritta.',
  },
}

export const contact = {
  h1: 'Contatto e offerta',
  lead: `Ci telefoni o ci scriva. La contattiamo ${responseTime}.`,
  channels: {
    title: 'Come raggiungerci',
    phone: { title: 'Telefono', hint: 'Per domande e per fissare un appuntamento per il sopralluogo.', action: 'Chiamare' },
    mobile: { title: 'Cellulare', hint: 'Il nostro numero di cellulare, in aggiunta alla rete fissa.', action: 'Chiamare' },
    email: { title: 'E-mail', hint: 'Per richieste con documenti, ad esempio piante, elenchi delle superfici o foto.', action: 'Scrivere un’e-mail' },
    form: { title: 'Modulo', value: 'Richiedere un’offerta', hint: 'Le indicazioni principali in pochi campi, il servizio lo sceglie da un elenco.', action: 'Al modulo' },
    address: { title: 'Indirizzo', hint: 'La nostra sede. Il sopralluogo si svolge da Lei, sul posto.', action: 'Alla cartina' },
  },
  brief: {
    title: 'Che cosa dovrebbe contenere la Sua richiesta',
    intro: 'Più precise sono le Sue indicazioni, meglio prepariamo il sopralluogo. Se manca qualcosa, lo chiariamo nel colloquio.',
    items: [
      { key: 'objekt' as const, title: 'Immobile', text: 'Tipo di immobile, ad esempio ufficio, studio, casa plurifamiliare, capannone o villa.' },
      { key: 'ort' as const, title: 'Luogo', text: 'Indirizzo o numero postale dell’immobile.' },
      { key: 'groesse' as const, title: 'Dimensioni', text: 'Superficie approssimativa, numero di locali, appartamenti o piani.' },
      { key: 'leistung' as const, title: 'Servizio', text: 'Che cosa va fatto, ad esempio pulizia di manutenzione, custodia di stabili o una pulizia singola.' },
      { key: 'rhythmus' as const, title: 'Cadenza e orari', text: 'Con quale frequenza e quando, ad esempio prima dell’inizio del lavoro, la sera o nel fine settimana.' },
      { key: 'start' as const, title: 'Inizio', text: 'Da quando Le serve il servizio, per pulizie di cantiere e di fine locazione la data di consegna.' },
      { key: 'zugang' as const, title: 'Accesso e particolarità', text: 'Chiave o badge, pavimenti e materiali delicati, grandi superfici vetrate.' },
    ],
    note: 'Piante, elenchi delle superfici o foto può inviarceli per e-mail.',
  },
  steps: { title: 'Dalla richiesta al primo intervento', items: offerSteps },
  map: {
    title: 'Come raggiungerci',
    text: `Sede a ${company.address.city}. Operiamo nei Cantoni di ${cantonListIt}.`,
  },
  faq: [faq.schnell, faq.kosten, faq.gebiet, faq.versichert, faq.kurzfristig],
  cta: {
    title: 'Ci descriva il Suo immobile',
    text: `Bastano l’immobile e la Sua richiesta nel modulo qui sotto. La contattiamo ${responseTime} e fissiamo il sopralluogo.`,
  },
}

export const area = {
  h1: 'Zona d’intervento: Svizzera centrale e Argovia',
  lead: `La nostra zona d’intervento comprende gli interi Cantoni di ${cantonListIt}. Offriamo ogni servizio in tutta la zona, per amministrazioni e aziende come nel settore Premium.`,
  cantonsTitle: 'Cantoni',
  cantonLabels: ['Cantone di Lucerna', 'Cantone di Zugo', 'Cantone di Argovia', 'Cantone di Nidvaldo', 'Cantone di Obvaldo'],
  // Località per Cantone (S06): le stesse località di places.groups, raggruppate; chiavi come company.cantons
  cantonPlaces: {
    Luzern: ['Lucerna', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Eich'],
    Zug: ['Zugo', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'],
    Aargau: ['Meisterschwanden', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'],
    Nidwalden: ['Hergiswil', 'Stansstad', 'Ennetbürgen'],
    Obwalden: ['Engelberg'],
  },
  seatTitle: 'Sede e contatto',
  seatText: 'La trasferta da Emmenbrücke avviene ovunque alle stesse condizioni, che sia verso Sursee, Baar, Muri o Engelberg.',
  // Elemento 6.1: solo dati che figurano con fonte sulle pagine cantonali
  vergleich: {
    nav: 'Confronto',
    title: 'I cinque Cantoni a confronto',
    intro: 'Servizi e condizioni sono gli stessi ovunque, trasferta compresa. Le differenze riguardano termini di disdetta senza altro accordo nel contratto, giorni festivi e abitazioni secondarie, e contano per il piano di pulizia.',
    columns: ['Cantone', 'Priorità', 'Termini di disdetta', 'Festivi: particolarità', 'Abitazioni secondarie > 20 %'],
    rows: [
      ['[Lucerna](/einzugsgebiet/luzern)', 'Abitazioni, uffici, studi', 'Secondo il contratto, altrimenti uso locale (art. 266c CO)', 'Santo Stefano festivo, San Giuseppe secondo Comune', 'Flühli, Vitznau, Weggis'],
      ['[Zugo](/einzugsgebiet/zug)', 'Uffici, sedi aziendali', '31.3, 30.6, 30.9', 'Quattro giorni semifestivi', 'Nessuno'],
      ['[Argovia](/einzugsgebiet/aargau)', 'Capannoni, magazzini, abitazioni', 'Secondo il contratto, altrimenti uso locale (art. 266c CO)', 'Sei regimi distrettuali', 'Nessuno'],
      ['[Nidvaldo](/einzugsgebiet/nidwalden)', 'Immobili sul lago, proprietà per piani', 'Secondo il contratto, altrimenti uso locale (art. 266c CO)', 'San Giuseppe (19.3)', 'Emmetten'],
      ['[Obvaldo](/einzugsgebiet/obwalden)', 'Sarneraatal, alberghi a Engelberg', '31.3, 30.6, 30.9', 'Nicolao della Flüe (25.9)', 'Engelberg'],
    ],
    note: 'I Comuni non sono tenuti a dichiarare come tali le abitazioni secondarie nel registro degli edifici. Secondo l’ARE, le quote non si possono quindi confrontare tra Comuni.',
    sources: ['zgMietrecht', 'owSchlichtung', 'orMiete', 'luRuhetage', 'zgFeiertagsaehnlich', 'agFeiertage', 'nwRuhetage', 'owRuhetage', 'are'] as const,
  },
  places: {
    title: 'Rive dei laghi e località di villeggiatura',
    text: 'Secondo l’inventario delle abitazioni, a Flühli con Sörenberg e a Engelberg più della metà delle abitazioni non è un’abitazione primaria, a Emmetten e a Vitznau quasi una su tre. Lì conta meno un ritmo settimanale fisso che la pulizia prima dell’arrivo e dopo la partenza, con giri di controllo nel frattempo. Per questi immobili c’è il nostro [settore Premium](/premium).',
    sources: ['are'] as const,
    groups: [
      { title: 'Sul lago dei Quattro Cantoni', items: ['Lucerna', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Hergiswil', 'Stansstad', 'Ennetbürgen'] },
      { title: 'Sul lago di Zugo e sul lago di Ägeri', items: ['Zugo', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'] },
      { title: 'Sul lago di Sempach e sul lago di Hallwil', items: ['Eich', 'Meisterschwanden'] },
      { title: 'Località di montagna', items: ['Sörenberg', 'Emmetten', 'Engelberg'] },
    ],
  },
  cta: {
    title: 'Il Suo immobile si trova nella nostra zona?',
    text: `Ci indichi indirizzo e tipo di immobile. Se si trova in uno dei cinque Cantoni, La contattiamo ${responseTime} e concordiamo il sopralluogo, gratuitamente e senza impegno.`,
  },
}

export const servicesOverview: Seiten['servicesOverview'] = {
  h1: 'Servizi di pulizia e custodia per stabili, uffici e attività commerciali',
  lead: 'Dieci servizi per amministrazioni, proprietari e aziende, ordinati per occasione. Qui vede a che cosa serve ciascuno, in che cosa si distinguono servizi simili e che cosa va fatto in quale periodo dell’anno.',
  groups: [
    {
      title: 'Pulizia regolare',
      text: 'Pulizia ricorrente, con una cadenza che dipende dall’utilizzo.',
      items: [
        {
          title: 'Pulizia di manutenzione',
          path: '/leistungen/unterhaltsreinigung',
          text: 'Per case plurifamiliari, stabili abitativi e commerciali e superfici commerciali: puliamo vano scale, pavimenti e locali accessori, di solito più volte alla settimana, e riforniamo il materiale di consumo.',
        },
        {
          title: 'Pulizia di uffici e studi',
          path: '/leistungen/bueroreinigung',
          text: 'Uffici, amministrazioni e studi, puliti in orari che tengono conto delle Sue riunioni e degli orari di consultazione.',
        },
      ],
    },
    {
      title: 'Pulizie una tantum e speciali',
      text: 'Interventi legati a un’occasione precisa, per esempio una riconsegna, la fine di un cantiere o un fermo della produzione.',
      items: [
        {
          title: 'Pulizie a fondo e speciali',
          path: '/leistungen/sonderreinigungen',
          text: 'Contro calcare, grasso, sporcizia nelle fughe e vecchi strati di prodotti di cura che la pulizia corrente in appartamenti, uffici e superfici commerciali non elimina più.',
        },
        {
          title: 'Pulizia di fine locazione',
          path: '/leistungen/umzugsreinigung',
          text: 'Pulizia finale di appartamenti e superfici commerciali prima dell’ispezione di riconsegna, su incarico di amministrazioni, proprietari e aziende. Con garanzia di consegna.',
        },
        {
          title: 'Pulizia di cantiere e di fine cantiere',
          path: '/leistungen/baureinigung',
          text: 'Pulizia durante i lavori e pulizia di fine cantiere prima della consegna a inquilini, acquirenti o al Suo team.',
        },
        {
          title: 'Pulizia di vetri e facciate',
          path: '/leistungen/fenster-und-fassadenreinigung',
          text: 'Finestre, vetrine e altre superfici vetrate, oltre alle facciate, se necessario ad alta pressione. Come incarico singolo o a cadenza fissa.',
        },
        {
          title: 'Pulizia industriale e di capannoni',
          path: '/leistungen/industrie-und-hallenreinigung',
          text: 'Pavimenti, capannoni, macchinari e impianti in produzione e magazzino, coordinati con turni e fermi.',
        },
      ],
    },
    {
      title: 'Cura degli stabili',
      text: 'Quando qualcuno deve occuparsi regolarmente dell’intero stabile, dentro e fuori.',
      items: [
        {
          title: 'Custodia di stabili',
          path: '/leistungen/hauswartung',
          text: 'Giri di controllo con rapporto all’amministrazione, vano scale e lavanderia, piccole riparazioni, smaltimento e consegne degli appartamenti. Quali compiti, dipende dal Suo stabile.',
        },
        {
          title: 'Manutenzione delle aree esterne e verdi',
          path: '/leistungen/aussen-und-gruenflaechenpflege',
          text: 'Prato, siepi, aiuole, vialetti e piazzali, affidati da soli o insieme alla custodia.',
        },
        {
          title: 'Facility services',
          path: '/leistungen/facility-services',
          text: 'Pulizia, custodia e aree esterne in un unico contratto. Gli impianti tecnici come riscaldamento, ventilazione o ascensori non ne fanno parte.',
        },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  guide: {
    title: 'Quale servizio fa al caso Suo?',
    intro: 'Dieci situazioni frequenti e il servizio adatto.',
    items: [
      { situation: 'Il vano scale e i locali comuni devono essere puliti regolarmente.', path: '/leistungen/unterhaltsreinigung' },
      { situation: 'Ufficio o studio vanno puliti senza disturbare l’attività.', path: '/leistungen/bueroreinigung' },
      { situation: 'Un appartamento o una superficie commerciale viene riconsegnato.', path: '/leistungen/umzugsreinigung' },
      { situation: 'Pavimenti, fughe e servizi igienici richiedono una pulizia approfondita.', path: '/leistungen/sonderreinigungen' },
      { situation: 'Una nuova costruzione o una trasformazione sta per essere consegnata.', path: '/leistungen/baureinigung' },
      { situation: 'Finestre, vetrine o facciata sono sporche.', path: '/leistungen/fenster-und-fassadenreinigung' },
      { situation: 'Capannone, magazzino o macchinari devono essere puliti.', path: '/leistungen/industrie-und-hallenreinigung' },
      { situation: 'Lo stabile ha bisogno di qualcuno che controlli regolarmente che tutto sia in ordine.', path: '/leistungen/hauswartung' },
      { situation: 'Prato, siepi, vialetti e piazzali devono essere curati.', path: '/leistungen/aussen-und-gruenflaechenpflege' },
      { situation: 'Al posto di più imprese, una sola deve occuparsi di tutto.', path: '/leistungen/facility-services' },
    ] satisfies { situation: string; path: PagePath }[] as { situation: string; path: PagePath }[],
  },
  toolNav: { vergleich: 'Confronto', jahresplan: 'Calendario annuale' },
  tools: [
    {
      kind: 'table',
      id: 'vergleich',
      title: 'Pulizia, pulizia a fondo, custodia o tutto insieme?',
      intro: 'Quattro servizi che si confondono facilmente, messi a confronto.',
      columns: ['Servizio', 'Che cosa', 'Frequenza', 'Occasione tipica', 'Non incluso'],
      rows: [
        [
          '[Pulizia di manutenzione](/leistungen/unterhaltsreinigung)',
          'Pulizia con una cadenza fissa, con servizio di rifornimento',
          'Di solito più volte alla settimana',
          'Vano scale, parti comuni o superficie commerciale devono restare sempre puliti',
          'Uffici e studi, pulizia a fondo, finestre all’esterno e facciate',
        ],
        [
          '[Pulizie a fondo e speciali](/leistungen/sonderreinigungen)',
          'Un intervento approfondito contro calcare, grasso e vecchi strati',
          'Una tantum, se necessario ripetuta a lunghi intervalli',
          'Prima di una nuova locazione o dopo un uso intenso',
          'Pulizia corrente. La pulizia finale prima di una riconsegna spetta alla pulizia di fine locazione',
        ],
        [
          '[Custodia di stabili](/leistungen/hauswartung)',
          'Cura dello stabile: giri di controllo, piccole riparazioni, segnalazioni',
          'Con la frequenza prevista nel capitolato',
          'Il custode attuale smette, o uno stabile viene rilevato',
          'Servizio invernale, picchetto giorno e notte, grandi riparazioni',
        ],
        [
          '[Facility services](/leistungen/facility-services)',
          'Diversi dei nostri servizi in un unico contratto',
          'Secondo il servizio',
          'Più imprese devono essere sostituite da una sola',
          'Facility management tecnico, servizio invernale, intermediazione di artigiani',
        ],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'jahresplan',
      title: 'Quale lavoro e quando',
      intro: 'Molti lavori in uno stabile hanno la loro stagione. Ecco come si distribuiscono di solito nell’anno:',
      entries: [
        {
          label: 'Da gennaio a marzo',
          text: 'Pulizia a fondo di uffici e superfici commerciali nelle settimane tranquille. Tagliare ora siepi e arbusti: la Stazione ornitologica di Sempach consiglia di potare le piante legnose fuori dal periodo di nidificazione, meglio tra novembre e marzo.',
        },
        {
          label: 'Da aprile a giugno',
          text: 'Pulire finestre e vetri dopo l’inverno e il polline. Liberare vialetti e piazzali dallo sporco dell’inverno, tagliare il prato per la prima volta. Che cosa segue in giardino fino all’autunno lo indica il [calendario di manutenzione delle aree esterne](/leistungen/aussen-und-gruenflaechenpflege#pflegekalender).',
        },
        {
          label: 'Luglio e agosto',
          text: 'Pulizia a fondo durante le ferie aziendali, capannoni e macchinari durante i fermi programmati. Togliere le erbacce nelle fughe e sui piazzali a mano o con apparecchi, perché su e lungo vialetti e piazzali gli erbicidi sono vietati. Dove i prodotti sono vietati e che cosa funziona al loro posto lo spiega la pagina [Manutenzione delle aree esterne e verdi](/leistungen/aussen-und-gruenflaechenpflege#spritzmittelverbot).',
        },
        {
          label: 'Da settembre a novembre',
          text: 'Togliere le foglie da vialetti, piazzali e prato, preparare le aiuole per l’inverno e pulire le finestre prima della stagione buia. Da novembre inizia il periodo per tagliare le siepi.',
        },
        {
          label: 'Prima della prima neve',
          text: 'Sgombero della neve e spargimento di sale non fanno parte della nostra offerta. Affidi per tempo il servizio invernale a un’impresa che lo svolge.',
        },
        {
          label: 'Intorno alle scadenze di disdetta',
          text: 'Il CO prevede per le abitazioni un preavviso di tre mesi, per i locali commerciali di sei, ogni volta per la scadenza determinata dall’uso locale o, in mancanza, per la fine di un trimestre di locazione. Il contratto può prevedere termini più lunghi o altre scadenze. Pianifichi la pulizia finale insieme alla data di riconsegna; le [scadenze per Cantone](/leistungen/umzugsreinigung#kuendigungstermine) sono indicate alla pagina della pulizia di fine locazione.',
        },
      ],
      note: 'I mesi sono indicativi. Che cosa va fatto nel Suo stabile dipende da utilizzo, posizione e contratto.',
      sources: [
        {
          label: 'Stazione ornitologica svizzera: taglio di arbusti e siepi nelle zone abitate (in tedesco)',
          href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/',
        },
        { label: 'UFAM: protezione dei vegetali nel Comune (in tedesco)', href: 'https://www.bafu.admin.ch/de/pflanzenschutz-in-der-gemeinde' },
        { label: 'Codice delle obbligazioni, art. 266a, 266c e 266d (Fedlex)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_266_c' },
      ],
    },
  ],
  principles: {
    title: 'Uguale per ogni servizio',
    items: [
      {
        title: 'Entità per iscritto',
        text: 'Locali, compiti, cadenza e orari sono stabiliti prima di iniziare. Se un ufficio viene trasformato o usato diversamente, adeguiamo l’accordo.',
      },
      {
        title: 'Limiti chiari',
        text: 'Ogni pagina dei servizi indica anche che cosa non è compreso, ad esempio il servizio invernale o la manutenzione degli impianti tecnici.',
      },
    ] satisfies Card[] as Card[],
  },
  faq: [
    {
      question: 'Da che cosa dipendono i costi dei singoli servizi?',
      answer:
        'Ogni servizio ha i propri fattori di costo. Per la pulizia di manutenzione sono superficie, cadenza, orari e materiale di consumo. Per la pulizia a fondo contano lo stato, il pavimento e quanti mobili ingombrano. La custodia dipende dai compiti e dal numero di giri di controllo, la pulizia dei vetri da superficie vetrata, altezza e accesso. Il prezzo lo riceve quindi dopo il sopralluogo, per iscritto.',
    },
    {
      question: 'Che differenza c’è tra pulizia di manutenzione e pulizia di uffici?',
      answer:
        'La [pulizia di manutenzione](/leistungen/unterhaltsreinigung) si occupa delle superfici comuni di uno stabile, cioè vano scale, ingresso, ascensore e lavanderia. La [pulizia di uffici e studi](/leistungen/bueroreinigung) pulisce i locali in cui si lavora e si adatta agli orari di lavoro e di apertura. In uno stabile commerciale spesso servono entrambe.',
    },
    {
      question: 'La pulizia delle finestre fa parte della pulizia di manutenzione?',
      answer:
        'In parte. I vetri nell’ingresso, per esempio le porte vetrate, ne fanno parte. Le finestre all’esterno e le facciate rientrano nella [pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung), una tantum o a intervalli fissi.',
    },
    {
      question: 'Che cosa comprendono i vostri facility services?',
      answer:
        'I nostri servizi, combinati secondo le esigenze: pulizia, custodia, aree esterne, vetri, pulizia a fondo e industriale. C’è un solo contratto con un solo interlocutore. Non eseguiamo la manutenzione di riscaldamento, ventilazione e ascensori e non facciamo da intermediari per artigiani.',
    },
    {
      question: 'Pulite anche studi medici e di terapia?',
      answer:
        'Sì, gli studi rientrano nella [pulizia di uffici e studi](/leistungen/bueroreinigung). Gli orari d’intervento seguono i Suoi orari di consultazione. Strumenti e dispositivi medici continuano a essere ricondizionati dal Suo team.',
    },
    {
      question: 'Quando serve una pulizia a fondo e quando una pulizia di fine locazione?',
      answer:
        'Decide l’occasione. La [pulizia di fine locazione](/leistungen/umzugsreinigung) prepara un appartamento o una superficie commerciale al collaudo quando viene riconsegnato, con garanzia di consegna. La [pulizia a fondo](/leistungen/sonderreinigungen) riporta pavimenti, fughe e locali sanitari a uno stato che la pulizia corrente può di nuovo mantenere, anche in locali che restano in uso.',
    },
  ] as { question: string; answer: string }[],
  premium: {
    title: 'Ville, jet privati o yacht?',
    text: 'Per una clientela privata con esigenze particolari e per gli alberghi c’è una linea a sé.',
    detail: 'Ville e residenze, cabine di jet privati, yacht sul lago dei Quattro Cantoni e sul lago di Zugo. Con team fissi che sanno trattare i materiali delicati.',
    link: 'Al settore Premium',
  },
  cta: {
    title: 'Non sa esattamente di che cosa ha bisogno?',
    text: 'Ci scriva in poche frasi di che cosa si tratta. Esaminiamo l’oggetto e Le proponiamo il servizio adatto.',
  },
}

// Stesse chiavi e stesso ordine della lista tedesca (simboli in app/premium/page.tsx)
const promises: Seiten['premiumOverview']['promises'] = [
  { key: 'persoenlich', title: 'Contatto personale', text: 'La Sua richiesta è trattata personalmente dal gerente.' },
  { key: 'diskret', title: 'Discrezione', text: 'Su richiesta sottoscriviamo un accordo di riservatezza.' },
  { key: 'teams', title: 'Team fissi', text: 'Da Lei lavora sempre lo stesso team.' },
  { key: 'personal', title: 'Personale verificato', text: 'Chi lavora da Lei è stato verificato da noi.' },
  { key: 'schluessel', title: 'Chiavi e allarme', text: 'Secondo regole fisse che concordiamo con Lei.' },
  { key: 'zeiten', title: 'Nei Suoi orari', text: 'Anche la sera, nel fine settimana e durante la Sua assenza.' },
  { key: 'material', title: 'Conoscenza dei materiali', text: 'Pietra naturale, parquet e superfici lucide; per le imbarcazioni teak, gelcoat e imbottiture.' },
  { key: 'sprachen', title: 'Quattro lingue', text: 'Tedesco, inglese, francese e italiano.' },
  { key: 'versichert', title: 'Assicurazione', text: 'Responsabilità civile aziendale con una copertura di CHF 10 milioni.' },
  { key: 'offerte', title: 'Offerta sul posto', text: 'Gratuita e senza impegno, dopo un sopralluogo.' },
]

export const premiumOverview: Seiten['premiumOverview'] = {
  line: premiumLine,
  h1: 'Pulizie per esigenze particolari',
  lead: 'Per ville e residenze, abitazioni secondarie, alberghi con esigenze particolari, family office, jet privati e yacht. Sempre lo stesso team, con discrezione, con la conoscenza dei materiali delicati e nella Sua lingua.',
  // Significato del nome solo con il nuovo nome (E38)
  nameMeaning: company.premiumBrand
    ? `Il nome ${company.premiumBrand} deriva dal latino «clavis», la chiave. Lei ci affida la Sua casa, e noi ce ne prendiamo cura come se fosse la nostra.`
    : null,
  offers: [
    { title: 'Immobili di pregio', path: '/premium/luxusimmobilien', text: 'Ville, loft e residenze, regolarmente o prima di occasioni particolari, con cura dei materiali delicati.' },
    { title: 'Jet privato', path: '/premium/privatjet', text: 'Pulizia della cabina con riguardo per i materiali di pregio, previo accordo con Lei.' },
    { title: 'Yacht', path: '/premium/yacht', text: 'Pulizia di imbarcazioni e yacht sul lago dei Quattro Cantoni e sul lago di Zugo.' },
  ] satisfies LinkCard[],
  moreTitle: 'Inoltre per',
  more: [
    { title: 'Abitazioni secondarie e residence', text: 'Pulizia prima del Suo arrivo e dopo la Sua partenza, giri di controllo durante la Sua assenza.' },
    { title: 'Alberghi', text: 'Pulizie speciali e a fondo, interventi prima di aperture e dopo rinnovi.' },
    { title: 'Uffici e family office', text: 'In modo confidenziale, al di fuori dei Suoi orari di lavoro, con team fissi.' },
    { title: 'Locali con opere d’arte e oggetti d’antiquariato', text: 'Pulizia accurata dei locali, opere d’arte solo con la Sua autorizzazione.' },
    { title: 'Eventi privati', text: 'Pulizia prima e dopo l’evento, anche nel fine settimana.' },
    { title: 'Agenti immobiliari e amministrazioni', text: 'Pulizia con breve preavviso prima di vendita, servizio fotografico e consegna.' },
  ] satisfies Card[],
  discretion: {
    title: 'Discrezione fin dal primo messaggio',
    paragraphs: [
      'La Sua richiesta è trattata personalmente dal gerente. Su richiesta sottoscriviamo un accordo di riservatezza.',
      'Da Lei lavora sempre lo stesso team, verificato da noi. Conosce la Sua casa, i Suoi desideri e le regole per chiavi e impianto d’allarme che concordiamo con Lei.',
      'Le opere d’arte le puliamo solo con la Sua autorizzazione. Gli orari si adeguano a Lei, anche la sera, nel fine settimana o durante la Sua assenza.',
    ],
  },
  promisesTitle: 'Su che cosa può contare',
  promises,
  places: {
    title: 'Dove siamo a Sua disposizione',
    text: `Sul lago dei Quattro Cantoni da Lucerna e Meggen fino a Weggis, Vitznau, Hergiswil ed Ennetbürgen, sul lago di Zugo e sul lago di Ägeri da Zugo e Walchwil fino a Oberägeri, a Engelberg e nell’intero territorio dei Cantoni di ${cantonListIt}.`,
  },
  cta: {
    title: 'Richiesta discreta',
    text: 'Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal gerente, su richiesta con vincolo di riservatezza.',
  },
}
