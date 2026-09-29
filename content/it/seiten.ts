import { company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Dictionary } from '../de'
import type { Step } from '../types'
import { answers, cantonListIt, languagesIt, premiumLine, registerIt, responseTime, steps, ui } from './common'

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
      { key: 'persoenlich', label: 'La Sua richiesta', value: 'Una risposta con i passi successivi' },
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

const uidRegister = `https://www.uid.admin.ch/Detail.aspx?uid_id=${company.uid.replace(/[-.]/g, '')}&lang=it`
const legalNameText = company.legalName.replace(' - ', '\u00a0-\u2060\u00a0')

export const about = {
  h1: 'Chi siamo: pulizia e custodia di stabili dal 2006',
  lead: `Puliamo e curiamo stabili abitativi, uffici, studi e capannoni nei Cantoni di ${cantonListIt}.`,
  profile: {
    title: 'Profilo aziendale',
    items: [
      { value: 'Dal 2006', label: 'Esperienza' },
      { value: 'Oltre 50', label: 'Collaboratrici e collaboratori' },
      { value: 'Oltre 120', label: 'Clienti' },
      // L’importo resta unito alla sua unità (misurato a 360, 390 e 1024 px)
      { value: 'CHF 10\u00a0mio.', label: 'Copertura della responsabilità civile aziendale' },
    ],
    note: 'Stato: settembre 2026',
  },
  fit: {
    title: 'Quando facciamo al caso Suo, e quando no',
    intro: 'Preferiamo dirlo prima del primo appuntamento. Così nessuno perde tempo con una richiesta che non fa per noi.',
    yesTitle: 'Facciamo al caso Suo se',
    yes: [
      'come amministrazione immobiliare, proprietà o comunione dei proprietari per piani desidera far pulire o curare uno stabile, con la [custodia di stabili](/leistungen/hauswartung) e la [pulizia di manutenzione](/leistungen/unterhaltsreinigung)',
      'desidera far pulire più volte alla settimana uffici, studi, superfici commerciali o capannoni: [pulizia di uffici e studi](/leistungen/bueroreinigung), [pulizia industriale e di capannoni](/leistungen/industrie-und-hallenreinigung)',
      'vuole riunire pulizia, custodia e cura degli esterni in un unico contratto, come [facility services](/leistungen/facility-services)',
      'pianifica un intervento unico, ad esempio una [pulizia a fondo](/leistungen/sonderreinigungen), la [pulizia di fine cantiere](/leistungen/baureinigung) prima della consegna o la [pulizia di fine locazione](/leistungen/umzugsreinigung) tra due locazioni',
      `come cliente privato desidera la cura di una villa, di una residenza secondaria o di uno yacht, oppure la pulizia della cabina del Suo jet privato: a questo serve [${premiumLabel}](/premium)`,
    ],
    noTitle: 'Non facciamo al caso Suo per',
    no: [
      'il servizio invernale e lo sgombero della neve',
      'un servizio di picchetto 24 ore su 24',
      'la pulizia di fine locazione di un singolo appartamento su incarico dell’inquilina o dell’inquilino',
      'la pulizia di normali economie domestiche',
      'la costruzione di giardini e le nuove sistemazioni a verde',
    ],
    note: `Ciò che un servizio non comprende è indicato sulla sua pagina, sotto [Servizi](/leistungen), alla voce «${ui.notIncluded}».`,
  },
  work: {
    title: 'Come lavoriamo',
    intro: 'Quattro principi con cui affrontiamo un incarico.',
    items: [
      {
        title: 'Prima l’immobile, poi il prezzo',
        paragraphs: [
          'Quanto lavoro richieda una pulizia si vede solo sul posto: pavimenti e superfici vetrate, utilizzo dei locali, percorsi e accessi.',
          'Per questo non indichiamo prezzi al telefono. Senza sopralluogo sarebbero spesso sbagliati.',
          'L’offerta segue questo appuntamento, per iscritto e senza costi per Lei.',
        ],
      },
      {
        title: 'Entità e limiti per iscritto',
        paragraphs: [
          'L’offerta indica locali e compiti, cadenza e orari d’intervento. Con la Sua conferma diventa l’accordo, compreso il modo in cui accediamo all’edificio, ad esempio con chiave o badge.',
          'Ciò che non è compreso lo diciamo con la stessa chiarezza, insieme al servizio adatto.',
          'Per la [pulizia di fine locazione](/leistungen/umzugsreinigung) vale la nostra garanzia di consegna: se in occasione della riconsegna l’amministrazione contesta qualcosa della nostra pulizia, ripuliamo gratuitamente. L’offerta precisa che cosa copre la garanzia.',
        ],
      },
      {
        title: 'Contatti diretti',
        paragraphs: [
          'Rispondiamo alla Sua richiesta sul Suo immobile e sui passi successivi.',
          'Se riunisce più servizi come [facility services](/leistungen/facility-services), presso di noi ha un solo interlocutore per tutti.',
        ],
      },
      {
        title: 'Adatto al materiale',
        paragraphs: [
          'Marmo e calcare non sopportano detergenti acidi, il parquet oliato solo poca acqua. Prodotti e apparecchi dipendono quindi dal rivestimento, non dall’abitudine.',
          'Durante la pulizia regolare riforniamo carta, sapone e altro materiale di consumo. Chi acquista il materiale, Lei o noi, è stabilito nell’accordo.',
          'Usiamo prodotti ecologici se lo desidera.',
        ],
      },
    ],
  },
  check: {
    kind: 'table' as const,
    id: 'firmenangaben',
    title: 'Dati aziendali da verificare',
    intro: `${company.premiumBrand ? `${company.brand} è il marchio della ${legalNameText}. ` : ''}Per il Suo dossier fornitori: trova ogni dato qui sotto nel [registro IDI](${uidRegister}) dell’Ufficio federale di statistica, con il campo in cui figura.`,
    columns: ['Dato', 'Iscrizione', 'Campo nel registro IDI'],
    rows: [
      ['Ditta', company.legalName, '«Nome»'],
      ['Sede e indirizzo', `Sede ${company.seat} LU. L’indirizzo ${company.address.street}, ${company.address.postalCode} ${company.address.city} si trova nel Comune di ${company.seat}.`, '«Comune» e indirizzo della sede'],
      ['Numero di registro di commercio', `${company.registerNumber}, ${registerIt}`, '«Numero di riferimento» sotto Dati del registro di commercio'],
      ['IDI (numero d’identificazione delle imprese)', company.uid, '«IDI» sotto Caratteristiche di base'],
      // Suffisso IVA come nel registro IDI in italiano e nelle note legali (AFC: MWST, TVA o IVA)
      ['Numero IVA', `${company.uid} IVA`, '«Numero IVA» sotto Dati dell’IVA'],
    ],
    note: 'Per controllare offerte e fatture: il CO prevede che la ditta iscritta nel registro di commercio figuri in modo completo e senza modifiche nella corrispondenza e sulle fatture (art. 954a CO). Abbreviazioni, simboli e nomi commerciali possono essere usati in aggiunta. Secondo la legge sull’IVA, di regola una fattura indica anche il numero con cui l’impresa è iscritta nel registro dei contribuenti (art. 26 LIVA).',
    sources: [
      { label: `Registro IDI, ${company.uid}`, href: uidRegister },
      { label: 'Art. 954a Codice delle obbligazioni (CO)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_954_a' },
      { label: 'Art. 26 Legge sull’IVA (LIVA)', href: 'https://www.fedlex.admin.ch/eli/cc/2009/615/it#art_26' },
    ],
    printable: true,
    updated: '2026-09-28',
  },
  languages: {
    title: 'Quattro lingue',
    text: 'Da noi può porre domande e prendere accordi in tedesco, inglese, francese o italiano. Questo aiuta le aziende internazionali, i proprietari domiciliati all’estero e le inquiline e gli inquilini che preferiscono porre la loro domanda nella propria lingua.',
    switchLabel: 'Questa pagina in',
  },
  region: {
    title: 'Cinque cantoni, le stesse condizioni',
    text: `Da ${company.address.city} offriamo ogni servizio in tutta la zona, alle stesse condizioni di trasferta.`,
    listLabel: 'I cantoni in dettaglio',
    link: 'Zona d’intervento con carta',
  },
  cta: {
    title: 'Concordare un sopralluogo',
    text: 'Ci indichi l’immobile, il luogo e il servizio desiderato. Sopralluogo e offerta sono gratuiti e senza impegno.',
  },
}

/** Kontakt (E80, Audit Inhalt 9, Audit visuell /kontakt), Übersetzung von content/de/seiten.ts */
export const contact = {
  h1: 'Contatto e offerta',
  lead: `Per telefono, e-mail o modulo. Riceve una risposta ${responseTime}.`,
  channels: {
    title: 'Come raggiungerci',
    phone: { title: 'Telefono', mobile: 'Cellulare', hint: 'Per domande e per fissare l’appuntamento per il sopralluogo.', action: 'Chiamare' },
    email: { title: 'E-mail', hint: 'Per richieste con documenti come piante, elenchi delle superfici o foto.', action: 'Scrivere un’e-mail' },
    address: { title: 'Indirizzo', hint: 'Qui si trova la nostra sede. Il sopralluogo si svolge da Lei, sul posto.', action: 'Alla cartina' },
  },
  brief: {
    title: 'Che cosa mettere nella richiesta',
    items: [
      { key: 'rolle' as const, title: 'Chi fa la richiesta', text: 'amministrazione immobiliare, comunione dei proprietari per piani, proprietario, azienda o cliente privato con villa, residenza secondaria, yacht o jet.' },
      { key: 'objekt' as const, title: 'Immobile', text: 'ufficio, studio, casa plurifamiliare, capannone o villa.' },
      { key: 'ort' as const, title: 'Luogo', text: 'indirizzo o NPA.' },
      { key: 'groesse' as const, title: 'Dimensioni', text: 'superficie in m², numero di appartamenti, piani o stabili.' },
      { key: 'leistung' as const, title: 'Servizio', text: 'ad esempio pulizia di manutenzione, custodia di stabili o una pulizia singola.' },
      { key: 'rhythmus' as const, title: 'Cadenza e orari', text: 'con quale frequenza e quando, ad esempio prima dell’inizio del lavoro, la sera o il sabato.' },
      { key: 'start' as const, title: 'Inizio', text: 'da quando, e per pulizie di cantiere e di fine locazione la data di consegna.' },
      { key: 'zugang' as const, title: 'Accesso e particolarità', text: 'chiave o badge, pavimenti delicati, grandi superfici vetrate.' },
    ],
  },
  steps: {
    title: 'Che cosa succede dopo l’invio',
    items: [
      { title: 'Risposta', text: 'Il gerente legge personalmente la Sua richiesta e Le propone una data per il sopralluogo.' },
      { title: 'Sopralluogo', text: 'Con Lei o con la Sua persona di contatto percorriamo tutti i locali e le superfici interessati. Così vediamo stato, materiali e accesso.' },
      { title: 'Offerta', text: 'Le inviamo l’offerta per iscritto. Indica locali e compiti, con quale frequenza li svolgiamo e in quali orari.' },
      { title: 'Inizio', text: 'Con la Sua conferma è fissato il primo giorno d’intervento. Orari e accesso all’immobile sono allora concordati con Lei.' },
    ] satisfies Step[] as Step[],
  },
  visit: {
    title: 'Preparare il sopralluogo',
    intro: 'Che cosa tenere a disposizione per l’appuntamento sul posto:',
    items: [
      'L’accesso a tutti i locali da pulire o da curare, anche cantina, solaio, lavanderia e locali tecnici',
      'Piante o un elenco delle superfici, se disponibili',
      'Il capitolato d’oneri o l’elenco delle prestazioni attuale, se un’impresa lavora già da Lei',
      'Gli orari desiderati e la data di inizio',
      'Una persona di contatto che possa rispondere a domande su utilizzo e accesso',
    ],
  },
  map: {
    title: 'Come trovarci',
    text: `La nostra sede è a ${company.address.city}. Da qui raggiungiamo il Suo immobile in tutta la nostra zona d’intervento.`,
  },
  faq: [
    { question: 'Come viene allestita l’offerta?', answer: 'Prima fissiamo con Lei la data del sopralluogo. Poi redigiamo l’offerta sulla base di ciò che abbiamo visto sul posto.' },
    { question: 'Quanto mi costa il sopralluogo?', answer: 'Niente. Non paga né il sopralluogo né l’offerta, e l’offerta non La impegna a nulla.' },
    { question: 'Venite anche fuori da Lucerna?', answer: `Sì. La nostra zona comprende cinque Cantoni interi: ${cantonListIt}. Tutti i servizi vi sono offerti alle stesse condizioni. Località e cartina si trovano alla pagina [Zona d’intervento](/einzugsgebiet).` },
    { question: 'Avete un’assicurazione di responsabilità civile aziendale?', answer: 'Sì, con una somma assicurata di CHF 10 milioni.' },
    { question: 'Lavorate con prodotti ecologici?', answer: 'Su richiesta sì. Lo indichi preferibilmente già nella richiesta, alla voce «Immobile e richiesta».' },
    { question: 'In quale lingua posso fare la richiesta?', answer: 'In tedesco, inglese, francese o italiano. La consigliamo nella Sua lingua.' },
    { question: 'È possibile anche a breve termine?', answer: 'In questo caso ci telefoni invece di scrivere. Al telefono saprà prima se e quando possiamo intervenire.' },
  ],
  cta: {
    title: 'Richiedere un’offerta per le pulizie',
    text: 'Queste indicazioni ci servono per l’offerta. Lasci vuoto ciò che non sa ancora.',
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

// Stesse chiavi e stesso ordine della lista tedesca (i sei modi di lavorare confermati, E41)
const promises: Seiten['premiumOverview']['promises'] = [
  { key: 'diskret', title: 'Discrezione', text: 'Su Sua richiesta firmiamo un accordo di riservatezza.' },
  { key: 'teams', title: 'Team fissi', text: 'Un team fisso si occupa della Sua casa, barca o cabina.' },
  { key: 'personal', title: 'Personale verificato', text: 'Da Lei non lavora nessuno che non abbiamo verificato.' },
  { key: 'schluessel', title: 'Chiavi e allarme', text: 'Consegna, custodia e impianto d’allarme secondo regole che concorda con noi.' },
  { key: 'zeiten', title: 'Nei Suoi orari', text: 'Interventi anche la sera, nel fine settimana o mentre Lei è in viaggio.' },
  { key: 'material', title: 'Conoscenza dei materiali', text: 'Pietra naturale, parquet e superfici lucide; per le imbarcazioni teak, gelcoat e imbottiture.' },
]

export const premiumOverview: Seiten['premiumOverview'] = {
  line: premiumLine,
  h1: 'Pulizie premium per esigenze particolari',
  lead: 'Chi fa pulire una casa, uno yacht o la cabina di un jet privato affida ad altri chiavi, orari e vita privata. Per questo da Lei lavoriamo secondo regole che Lei contribuisce a stabilire.',
  // Significato del nome solo con il nuovo nome (E38)
  nameMeaning: company.premiumBrand
    ? `Il nome ${company.premiumBrand} deriva dal latino «clavis», la chiave. Lei ci affida la Sua casa, e noi ce ne prendiamo cura come se fosse la nostra.`
    : null,
  firstMessage: {
    title: 'Basta questo per un primo messaggio',
    items: [
      'Casa, barca o cabina, con il luogo o l’ormeggio',
      'L’occasione o il ritmo desiderato',
      'Da quando ha bisogno di noi',
      'Materiali delicati e opere d’arte che dobbiamo conoscere',
    ],
  },
  nav: {
    bereiche: 'Servizi',
    diskretion: 'Discrezione',
    zusagen: 'Metodo',
    ablauf: 'Svolgimento',
    fragen: 'Domande',
    orte: 'Luoghi',
  },
  offersTitle: 'Casa, cabina o barca',
  offers: [
    {
      title: 'Ville e residenze',
      name: 'Pulizia di ville e immobili di pregio',
      link: 'Vai alla pulizia di ville',
      path: '/premium/luxusimmobilien',
      text: 'Ville, loft, residenze e abitazioni secondarie, regolarmente o prima di un evento.',
      detail: 'Per dimore con pietra naturale, parquet, superfici lucide e opere d’arte. Puliamo regolarmente o prima di una festa o di una vendita.',
      notIncluded: 'Non inclusi: i restauri, ad esempio di quadri o mobili antichi.',
    },
    {
      title: 'Cabine di jet privati',
      name: 'Pulizia di jet privati',
      link: 'Vai alla pulizia di jet privati',
      path: '/premium/privatjet',
      text: 'La cabina tra due voli, pianificata con il Suo operatore aereo.',
      detail: 'Pelle, legno laccato, superfici lucide e tessuti pregiati si trovano in pochi metri quadrati, e spesso resta solo il tempo tra due voli. Quali prodotti sono ammessi a bordo lo decide Lei con il Suo operatore aereo.',
      notIncluded: 'Non inclusa: la pulizia esterna dell’aereo.',
    },
    {
      title: 'Yacht e motoscafi',
      name: 'Pulizia di yacht e imbarcazioni',
      link: 'Vai alla pulizia di yacht',
      path: '/premium/yacht',
      text: 'Interni e ponte, all’ormeggio sui laghi dei Quattro Cantoni e di Zugo.',
      detail: 'Acqua dolce, polline ed escrementi di uccelli mettono alla prova una barca sul lago in modo diverso dal sale in mare. Puliamo teak, gelcoat e imbottiture all’ormeggio, ogni materiale con il proprio metodo.',
      notIncluded: 'Non inclusi: i lavori sull’opera viva e sul motore.',
    },
  ],
  moreTitle: 'Inoltre per',
  more: [
    { title: 'Abitazioni secondarie e residence', text: 'Pulite prima del Suo arrivo, rimesse in ordine dopo la Sua partenza, con giri di controllo nel frattempo al ritmo concordato.' },
    { title: 'Alberghi', text: 'Pulizie speciali e a fondo prima di un’apertura e dopo un rinnovo. Maggiori informazioni sulle [pulizie a fondo e speciali](/leistungen/sonderreinigungen).' },
    { title: 'Uffici e family office', text: 'Locali riservati, puliti al di fuori dei Suoi orari di lavoro. Maggiori informazioni sulla [pulizia di uffici e studi](/leistungen/bueroreinigung).' },
    { title: 'Locali con opere d’arte e oggetti d’antiquariato', text: 'Puliamo i locali con cura, quadri, sculture e altre opere d’arte solo con la Sua espressa autorizzazione.' },
    { title: 'Eventi privati', text: 'Tutto pronto prima dell’evento e di nuovo in ordine dopo, anche se cade in un fine settimana.' },
    { title: 'Agenti immobiliari e amministrazioni', text: 'Pulizia con breve preavviso prima di vendita, servizio fotografico e consegna.' },
  ],
  discretion: {
    title: 'La discrezione, nero su bianco',
    paragraphs: [
      'Chi pulisce da Lei viene a sapere più di quanto dica un’offerta. Che cosa resta riservato, e per quanto tempo, si può fissare in un accordo di riservatezza.',
    ],
  },
  // Che cosa regola di solito un tale accordo, non il contenuto di un nostro modello; senza pena convenzionale (non confermata).
  // Art. 11 CO letto il 28.09.2026 su fedlex.admin.ch, nessuna consulenza legale.
  nda: {
    kind: 'checklist',
    id: 'geheimhaltung',
    title: 'Che cosa dovrebbe regolare un accordo di riservatezza',
    intro: 'L’elenco mostra che cosa regola di solito un tale accordo e La aiuta a verificare un testo.',
    groups: [
      {
        title: 'Chi e che cosa',
        items: [
          'Chi è vincolato: l’azienda e tutte le persone che lavorano da Lei',
          'Che cosa è riservato: indirizzo, assenze, ospiti, locali, arredamento e documenti',
          'Nessuna foto in casa, a bordo o in cabina e nessuna informazione sui social media',
        ],
      },
      {
        title: 'Durata e fine',
        items: [
          'Per quanto tempo vale l’obbligo, anche oltre la fine dell’incarico',
          'Come vengono restituiti chiavi e badge e cambiati i codici',
          'Che cosa succede alla fine con documenti come planimetrie o schemi d’allarme: restituzione o distruzione',
        ],
      },
    ],
    note: 'Il CO non richiede alcuna forma speciale per un tale accordo (art. 11 CO), ma una versione firmata ne facilita la prova. Chiarisca i dettagli del Suo caso con la Sua consulenza legale.',
    sources: [
      { label: 'Codice delle obbligazioni, art. 11: forma dei contratti', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_11' },
    ],
    printable: true,
    updated: '2026-09-28',
  },
  promisesTitle: 'Che cosa vale per ogni incarico premium',
  promises,
  stepsTitle: 'Come si svolge una richiesta premium',
  steps: [
    {
      title: 'La Sua richiesta',
      text: 'Dopo la Sua telefonata o il Suo messaggio concordiamo con Lei una data per la visita.',
    },
    {
      title: 'Visita e offerta',
      text: 'In casa, all’ormeggio o in cabina esaminiamo con Lei locali, materiali e accessi, per un jet privato d’intesa con il Suo operatore aereo. Su questa base redigiamo la Sua offerta scritta.',
    },
    {
      title: 'Regole fissate prima di iniziare',
      text: 'Prima di iniziare è stabilito quando veniamo, come vengono gestiti chiavi e impianto d’allarme e quali opere d’arte o oggetti tocchiamo solo con la Sua autorizzazione.',
    },
    {
      title: 'Il Suo team fisso',
      text: 'Il Suo team fisso conosce le regole stabilite prima del primo intervento.',
    },
  ],
  faq: [
    {
      question: 'Come rimane riservata la mia richiesta?',
      answer: 'Se desidera un accordo di riservatezza, lo indichi possibilmente già nel Suo primo messaggio. Descriva inizialmente soltanto il bene e il servizio desiderato.',
    },
    {
      question: 'Un agente immobiliare o un’amministrazione può fare la richiesta per il proprietario?',
      answer: 'Sì. Ci indichi nella richiesta chi accompagnerà la visita e chi deve ricevere l’offerta.',
    },
    {
      question: 'Devo affidare un incarico regolare?',
      answer: 'No. Può affidarci anche un singolo intervento, ad esempio prima di un evento privato.',
    },
    {
      question: 'Lavorate anche quando non c’è nessuno in casa?',
      answer: 'Sì, anche mentre Lei è in viaggio. Come entriamo in casa e come usiamo l’impianto d’allarme è concordato prima.',
    },
    {
      question: 'Da che cosa dipende il prezzo di una pulizia premium?',
      answer: 'Per una casa da superficie, materiali e opere d’arte, per una barca da dimensioni, ponte e ormeggio, per un jet da cabina e fascia oraria. A ciò si aggiungono il ritmo e gli interventi la sera o nel fine settimana. Per questo solo l’offerta dopo la visita indica un prezzo.',
    },
    {
      question: 'Possiamo fare la richiesta in inglese, francese o italiano?',
      answer: 'Sì. Comunichiamo con Lei in tedesco, inglese, francese o italiano. Ci scriva nella lingua che preferisce.',
    },
  ],
  places: {
    title: 'Dove siamo a Sua disposizione',
    text: `Sul lago dei Quattro Cantoni da Lucerna e Meggen fino a Weggis, Vitznau, Hergiswil ed Ennetbürgen, sul lago di Zugo e sul lago di Ägeri da Zugo e Walchwil fino a Oberägeri, a Engelberg e nell’intero territorio dei Cantoni di ${cantonListIt}.`,
  },
  cta: {
    title: 'Richiesta discreta',
    text: 'Una telefonata o poche righe tramite il modulo bastano per iniziare.',
  },
}
