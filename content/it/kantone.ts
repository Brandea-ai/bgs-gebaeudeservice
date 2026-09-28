import { company } from '../../shared/company'
import type { Dictionary } from '../de'
import type { KantonPage } from '../de/kantone'
import { answers, responseTime } from './common'
import { nav } from './navigation'

/**
 * Testi delle cinque pagine cantonali in italiano (E80, M60). Traduzione fedele
 * di content/de/kantone.ts, stesse chiavi, nessuna affermazione nuova (E18).
 * Nomi di Cantoni, laghi e città in italiano dove esistono (Lucerna, Zugo, lago
 * dei Quattro Cantoni), altrimenti il nome ufficiale. Titoli senza marchio,
 * metaFor() in shared/seo.ts lo aggiunge.
 */

const sameTerms = 'Tutti, alle stesse condizioni in tutta la zona'
const seat = `${company.address.street}, ${company.address.postalCode} ${company.address.city}`
const menu = nav.areaMenu.cantons

const luzern: KantonPage = {
  name: 'Lucerna',
  kuerzel: 'LU',
  seo: {
    title: 'Impresa di pulizie Lucerna e custodia',
    description:
      'Pulizia e custodia di stabili nel Cantone di Lucerna, dalla sede a Emmenbrücke: città, agglomerato, rive del lago, Sursee e Seetal. Offerta sul posto.',
  },
  h1: 'La Sua impresa di pulizie nel Cantone di Lucerna',
  lead: [
    'La nostra sede si trova a Emmenbrücke, nel cuore dell’agglomerato di Lucerna. Da qui puliamo e curiamo immobili, uffici e superfici commerciali in tutto il Cantone, dalla città di Lucerna al lago di Sempach fino all’Entlebuch.',
    'Dal 2006 lavoriamo nella pulizia e nella custodia di stabili. Prima di ricevere un’offerta, esaminiamo il Suo immobile sul posto. Sopralluogo e offerta sono gratuiti e senza impegno.',
  ],
  facts: [
    { label: 'La nostra sede', value: `${company.address.city}, Comune di Emmen` },
    { label: 'Capoluogo', value: 'Lucerna' },
    { label: 'Laghi', value: 'Lago dei Quattro Cantoni, lago di Sempach, lago di Baldegg' },
    { label: 'Servizi', value: sameTerms },
  ],
  regionen: [
    { title: 'Città e agglomerato', orte: ['Lucerna', 'Emmen', 'Kriens', 'Horw', 'Ebikon', 'Adligenswil'] },
    { title: 'Sul lago dei Quattro Cantoni', orte: ['Meggen', 'Weggis', 'Vitznau', 'Greppen'] },
    { title: 'Sursee e lago di Sempach', orte: ['Sursee', 'Sempach', 'Nottwil', 'Eich', 'Triengen', 'Ruswil'] },
    { title: 'Seetal', orte: ['Hochdorf', 'Hitzkirch'] },
    { title: 'Willisau ed Entlebuch', orte: ['Willisau', 'Entlebuch', 'Schüpfheim', 'Escholzmatt-Marbach'] },
  ],
  objekte: [
    {
      title: 'Condomini e proprietà per piani',
      text: 'In città e nei Comuni dell’agglomerato si trovano molti stabili abitativi e commerciali. Manteniamo puliti vano scala, lavanderia e aree esterne e, su richiesta, controlliamo regolarmente che tutto sia in ordine.',
    },
    {
      title: 'Uffici e studi',
      text: 'Nella città di Lucerna e in centri come Sursee puliamo uffici e studi in orari che concordiamo con Lei in base alla Sua attività.',
    },
    {
      title: 'Cambio d’inquilino',
      text: 'A un cambio d’inquilino puliamo l’appartamento prima della riconsegna, con garanzia di consegna. Il servizio di custodia partecipa alla riconsegna.',
    },
    {
      title: 'Immobili sul lago',
      text: 'Per ville e residenze sul lago dei Quattro Cantoni, ad esempio a Meggen, Weggis o Vitznau, è a disposizione il nostro settore Premium: sempre la stessa squadra, su richiesta con accordo di riservatezza.',
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', title: 'Custodia di stabili', text: 'Per amministrazioni immobiliari e comunioni dei proprietari per piani che affidano la cura del proprio stabile.' },
    { path: '/leistungen/unterhaltsreinigung', title: 'Pulizia di manutenzione', text: 'Vani scala, ingressi e locali comuni con un ritmo fisso.' },
    { path: '/leistungen/sonderreinigungen', title: 'Pulizie speciali', text: 'Pulizia di fine locazione con garanzia di consegna, oltre a pulizie a fondo.' },
    { path: '/leistungen/bueroreinigung', title: 'Pulizia di uffici e studi', text: 'Per uffici e studi, in base ai Suoi orari di lavoro e di apertura.' },
    { path: '/premium/luxusimmobilien', title: 'Ville e residenze', text: 'Pulizia e cura discrete di case sul lago.' },
  ],
  planung: {
    title: 'Trasferta e pianificazione',
    paragraphs: [
      'Poiché la nostra sede si trova nel Cantone, i tragitti verso la città e l’agglomerato sono brevi. Per immobili nel Seetal, a Willisau o nell’Entlebuch fissiamo ritmo e orari d’intervento durante il sopralluogo.',
      'Prima del primo intervento chiarisca con noi dove la nostra squadra può parcheggiare e come accede alle chiavi e ai locali. Soprattutto in centro città è utile un posto fisso per veicolo e materiale.',
    ],
  },
  faq: [
    { question: 'Dove si trova la vostra sede?', answer: `All’indirizzo ${seat}, nell’agglomerato di Lucerna.` },
    {
      question: 'Lavorate anche fuori dalla città di Lucerna?',
      answer: 'Sì, in tutto il Cantone, dal Seetal all’Entlebuch, con tutti i servizi e alle stesse condizioni.',
    },
    { question: 'Quanto costa un’impresa di pulizie nel Cantone di Lucerna?', answer: answers.kostenFaktoren },
    {
      question: 'Vi occupate della pulizia a un cambio d’inquilino?',
      answer: 'Sì. La pulizia di fine locazione con garanzia di consegna fa parte delle nostre [pulizie speciali](/leistungen/sonderreinigungen).',
    },
    { question: 'Accettate anche interventi a breve termine?', answer: 'Ci telefoni. Chiariamo con Lei che cosa è possibile a breve termine.' },
  ],
  menuText: menu.luzern.text,
}

const zug: KantonPage = {
  name: 'Zugo',
  kuerzel: 'ZG',
  seo: {
    title: 'Impresa di pulizie Zugo per uffici',
    description:
      'Pulizia di uffici, vetri e custodia di stabili a Zugo: sedi aziendali, studi e immobili da Zugo e Baar alla valle di Ägeri. Consulenza in quattro lingue.',
  },
  h1: 'La Sua impresa di pulizie per uffici e immobili nel Cantone di Zugo',
  lead: [
    'Nel Cantone di Zugo hanno sede molte aziende, anche internazionali. Serve una pulizia che si adatti all’attività aziendale e non disturbi la giornata di lavoro.',
    'Le nostre collaboratrici e i nostri collaboratori parlano tedesco, inglese, francese e italiano. Questo facilita il coordinamento con squadre la cui lingua di lavoro non è il tedesco.',
  ],
  facts: [
    { label: 'Capoluogo', value: 'Zugo' },
    { label: 'Laghi', value: 'Lago di Zugo, lago di Ägeri' },
    { label: 'Comuni', value: 'Tutti gli undici Comuni del Cantone' },
    { label: 'Lingue', value: 'Tedesco, inglese, francese, italiano' },
  ],
  regionen: [
    { title: 'Zugo, Baar e Steinhausen', orte: ['Zugo', 'Baar', 'Steinhausen'] },
    { title: 'Sul lago di Zugo', orte: ['Cham', 'Hünenberg', 'Risch (Rotkreuz)', 'Walchwil'] },
    { title: 'Valle di Ägeri e Comuni di montagna', orte: ['Unterägeri', 'Oberägeri', 'Menzingen', 'Neuheim'] },
  ],
  objekte: [
    {
      title: 'Uffici e sedi aziendali',
      text: 'Dal piccolo ufficio alla sede su più piani: postazioni di lavoro, sale riunioni, reception, angoli cottura e servizi igienici, in orari che fissiamo con Lei.',
    },
    {
      title: 'Family office e locali riservati',
      text: 'Dove si trovano documenti riservati, da Lei lavora sempre la stessa squadra, anche fuori dai Suoi orari di lavoro. Su richiesta sottoscriviamo un accordo di riservatezza.',
    },
    {
      title: 'Vetri e facciate',
      text: 'Gli edifici per uffici hanno spesso grandi superfici vetrate. Puliamo finestre, porte a vetri e facciate singolarmente o in aggiunta alla pulizia degli uffici.',
    },
    {
      title: 'Abitare sul lago di Zugo e sul lago di Ägeri',
      text: 'Per ville e residenze sul lago, ad esempio a Walchwil o a Oberägeri, è a disposizione il nostro settore Premium. Puliamo anche barche e yacht sul lago di Zugo.',
    },
  ],
  leistungen: [
    { path: '/leistungen/bueroreinigung', title: 'Pulizia di uffici e studi', text: 'Per uffici, amministrazioni e studi, in base ai Suoi orari di lavoro.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', title: 'Pulizia di vetri e facciate', text: 'Per finestre, superfici vetrate e facciate di edifici commerciali.' },
    { path: '/leistungen/facility-services', title: 'Facility services', text: 'Pulizia, custodia e aree esterne in un unico contratto con un’unica persona di riferimento.' },
    { path: '/leistungen/sonderreinigungen', title: 'Pulizie speciali', text: 'Pulizia a fondo al cambio d’ufficio, pulizia di fine locazione con garanzia di consegna.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Interni, imbottiture, teak e gelcoat, sul lago di Zugo e sul lago dei Quattro Cantoni.' },
  ],
  planung: {
    title: 'Trasferta e pianificazione',
    paragraphs: [
      'Da Emmenbrücke raggiungiamo il Cantone di Zugo tramite l’autostrada A14. Pianifichiamo gli interventi negli uffici in modo da non disturbare la Sua attività, ad esempio fuori dall’orario d’ufficio.',
      'Negli edifici commerciali con reception, badge d’accesso o impianto d’allarme chiariamo l’accesso prima del primo intervento. Se ha più sedi nella nostra zona, ce le indichi tutte nella richiesta.',
    ],
  },
  faq: [
    {
      question: 'Possiamo comunicare in inglese?',
      answer: `${answers.sprachen} Ci indichi nella richiesta quale lingua preferisce.`,
    },
    {
      question: 'Pulite fuori dall’orario d’ufficio?',
      answer: 'Fissiamo con Lei gli orari d’intervento, in base ai Suoi orari di lavoro e di apertura.',
    },
    { question: 'Quanto costa un’impresa di pulizie nel Cantone di Zugo?', answer: answers.kostenFaktoren },
    {
      question: 'Lavorate anche a Baar, a Cham o nella valle di Ägeri?',
      answer: 'Sì, in tutti i Comuni del Cantone di Zugo, con tutti i servizi e alle stesse condizioni.',
    },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  menuText: menu.zug.text,
}

const aargau: KantonPage = {
  name: 'Argovia',
  kuerzel: 'AG',
  seo: {
    title: 'Impresa di pulizie Argovia e custodia',
    description:
      'Pulizia industriale, di capannoni e di cantiere, custodia in Argovia: dal Freiamt e dal Seetal ad Aarau e Baden, alle stesse condizioni di Lucerna.',
  },
  h1: 'La Sua impresa di pulizie per industria e artigianato nel Cantone di Argovia',
  lead: [
    'In Argovia ci sono molte aziende industriali e artigianali. Capannoni di produzione e di stoccaggio, officine ed edifici commerciali hanno bisogno di una pulizia che segua turni e processi.',
    'Dal Freiamt e dal Seetal, al confine con Lucerna, fino alle regioni di Aarau e Baden lavoriamo in tutto il Cantone, con tutti i servizi e alle stesse condizioni di Lucerna.',
  ],
  facts: [
    { label: 'Capoluogo', value: 'Aarau' },
    { label: 'Laghi e fiumi', value: 'Lago di Hallwil, Aar, Reuss, Limmat e Reno' },
    { label: 'Specialità', value: 'Capannoni, magazzini, officine e immobili abitativi' },
    { label: 'Servizi', value: sameTerms },
  ],
  regionen: [
    { title: 'Freiamt', orte: ['Muri', 'Wohlen', 'Bremgarten', 'Sins'] },
    { title: 'Seetal e lago di Hallwil', orte: ['Meisterschwanden', 'Seengen', 'Beinwil am See'] },
    { title: 'Aarau, Lenzburg e Zofingen', orte: ['Aarau', 'Lenzburg', 'Zofingen', 'Oftringen'] },
    { title: 'Regione di Baden e del Mutschellen', orte: ['Baden', 'Wettingen', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
    { title: 'Brugg e Fricktal', orte: ['Brugg', 'Windisch', 'Rheinfelden', 'Frick'] },
  ],
  objekte: [
    {
      title: 'Capannoni di produzione e di stoccaggio',
      text: 'Puliamo pavimenti dei capannoni, aree di stoccaggio, scaffalature e vie di circolazione una tantum o regolarmente, in orari coordinati con la produzione e il lavoro a turni.',
    },
    {
      title: 'Macchine e impianti',
      text: 'Puliamo le macchine secondo le Sue indicazioni e d’intesa con il Suo servizio di manutenzione. Quando un impianto è fermo e quali prodotti sono adatti lo stabiliamo prima dell’intervento.',
    },
    {
      title: 'Nuove costruzioni e ristrutturazioni',
      text: 'Dopo la costruzione di un capannone o la ristrutturazione di un edificio commerciale puliamo fino alla consegna, affinché l’attività possa partire.',
    },
    {
      title: 'Immobili abitativi',
      text: 'Per condomini e proprietà per piani ci occupiamo di pulizia di manutenzione e custodia di stabili. Le ville sul lago di Hallwil o nella regione di Baden sono seguite dal nostro settore Premium.',
    },
  ],
  leistungen: [
    { path: '/leistungen/industrie-und-hallenreinigung', title: 'Pulizia industriale e di capannoni', text: 'Capannoni di produzione e di stoccaggio, officine, macchine e impianti.' },
    { path: '/leistungen/baureinigung', title: 'Pulizia di cantiere e di fine cantiere', text: 'Durante e dopo lavori di costruzione e ristrutturazione, fino alla consegna.' },
    { path: '/leistungen/bueroreinigung', title: 'Pulizia di uffici e studi', text: 'Per uffici, locali del personale e spogliatoi in azienda.' },
    { path: '/leistungen/hauswartung', title: 'Custodia di stabili', text: 'Giri di controllo, lavanderia, piccole riparazioni e smaltimento per immobili abitativi.' },
    { path: '/leistungen/facility-services', title: 'Facility services', text: 'Pulizia, custodia e aree esterne per il Suo sito aziendale da un unico fornitore.' },
  ],
  planung: {
    title: 'Trasferta e pianificazione',
    paragraphs: [
      'I tragitti da Emmenbrücke in Argovia variano a seconda della regione. Per questo fissiamo ritmo, orari d’intervento e fermi degli impianti durante il sopralluogo e li riportiamo nell’offerta.',
      'Prima dell’offerta esaminiamo capannoni, impianti e processi durante un giro del sito. Le Sue regole di sicurezza e d’esercizio valgono anche per la nostra squadra, le chiariamo con Lei prima del primo intervento.',
    ],
  },
  faq: [
    {
      question: 'In Argovia valgono le stesse condizioni di Lucerna?',
      answer: 'Sì. Offriamo tutti i servizi in tutta la zona d’intervento alle stesse condizioni.',
    },
    {
      question: 'Pulite anche durante il lavoro a turni?',
      answer: 'Coordiniamo con Lei gli orari d’intervento con produzione e turni, affinché la pulizia non rallenti l’attività.',
    },
    {
      question: 'La manutenzione delle macchine è compresa?',
      answer: 'No. Puliamo macchine e impianti secondo le Sue indicazioni, manutenzione e riparazioni restano di competenza del Suo servizio di manutenzione.',
    },
    { question: 'Quanto costa un’impresa di pulizie nel Cantone di Argovia?', answer: answers.kostenFaktoren },
    { question: 'Pulite con prodotti ecologici?', answer: answers.mittel },
  ],
  menuText: menu.aargau.text,
}

const nidwalden: KantonPage = {
  name: 'Nidvaldo',
  kuerzel: 'NW',
  seo: {
    title: 'Impresa di pulizie Nidvaldo e custodia',
    description:
      'Pulizia e custodia di stabili a Nidvaldo: immobili sul lago dei Quattro Cantoni, seconde case e ville da Hergiswil a Beckenried. Offerta sul posto.',
  },
  h1: 'La Sua impresa di pulizie nel Cantone di Nidvaldo',
  lead: [
    'Nidvaldo si estende dalla riva del lago dei Quattro Cantoni presso Hergiswil ed Ennetbürgen fino alla valle di Engelberg. Molti immobili si trovano vicino al lago, alcuni sono abitati solo in certi periodi.',
    'Puliamo e curiamo stabili abitativi e commerciali, abitazioni secondarie e ville in tutto il Cantone. Allestiamo l’offerta dopo un sopralluogo, gratuitamente e senza impegno.',
  ],
  facts: [
    { label: 'Capoluogo', value: 'Stans' },
    { label: 'Lago', value: 'Lago dei Quattro Cantoni' },
    { label: 'Comuni', value: 'Tutti gli undici Comuni del Cantone' },
    { label: 'Servizi', value: sameTerms },
  ],
  regionen: [
    { title: 'Sul lago dei Quattro Cantoni', orte: ['Hergiswil', 'Stansstad', 'Ennetbürgen', 'Buochs', 'Beckenried'] },
    { title: 'Stans e dintorni', orte: ['Stans', 'Oberdorf', 'Ennetmoos'] },
    { title: 'Valle di Engelberg ed Emmetten', orte: ['Dallenwil', 'Wolfenschiessen', 'Emmetten'] },
  ],
  objekte: [
    {
      title: 'Abitazioni secondarie',
      text: 'Secondo l’inventario delle abitazioni della Confederazione, a Emmetten circa un terzo delle abitazioni è un’abitazione secondaria. Puliamo prima del Suo arrivo e dopo la Sua partenza e controlliamo che tutto sia in ordine durante la Sua assenza.',
    },
    {
      title: 'Ville e residenze sul lago',
      text: 'Nelle case con pietra naturale, parquet e grandi superfici vetrate puliamo nel rispetto dei materiali. Da Lei lavora sempre la stessa squadra, su richiesta con accordo di riservatezza.',
    },
    {
      title: 'Proprietà per piani',
      text: 'Se non tutti i proprietari vivono sul posto, il servizio di custodia si occupa di giri di controllo, lavanderia, smaltimento e consegne degli appartamenti e segnala i difetti all’interlocutore concordato.',
    },
    {
      title: 'Barche sul lago dei Quattro Cantoni',
      text: 'Puliamo yacht e motoscafi all’interno e all’esterno, nel rispetto di teak, gelcoat e imbottiture.',
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', title: 'Custodia di stabili', text: 'Per comunioni dei proprietari per piani e amministrazioni immobiliari, concordata per iscritto.' },
    { path: '/premium/luxusimmobilien', title: 'Ville e abitazioni secondarie', text: 'Pulizia prima del Suo arrivo e dopo la Sua partenza, giri di controllo durante la Sua assenza.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', title: 'Pulizia di vetri e facciate', text: 'Per grandi vetrate e superfici vetrate.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', title: 'Manutenzione delle aree esterne e verdi', text: 'Per giardino e aree esterne del Suo immobile.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Per barche e yacht sul lago dei Quattro Cantoni.' },
  ],
  planung: {
    title: 'Trasferta e pianificazione',
    paragraphs: [
      'Da Emmenbrücke il tragitto passa per Lucerna e l’autostrada A2 fino a Nidvaldo. Le pulizie prima del Suo arrivo si pianificano meglio con un certo anticipo, ci comunichi quindi le Sue date il prima possibile.',
      'Per le abitazioni secondarie concordiamo regole fisse per chiavi e allarme e stabiliamo a chi segnaliamo ciò che notiamo durante i giri di controllo.',
    ],
  },
  faq: [
    {
      question: 'Vi occupate delle abitazioni secondarie durante la nostra assenza?',
      answer: 'Sì. Puliamo prima del Suo arrivo e dopo la Sua partenza ed effettuiamo giri di controllo. Maggiori informazioni in [Immobili di pregio](/premium/luxusimmobilien).',
    },
    {
      question: 'Pulite anche le barche?',
      answer: 'Sì, yacht e motoscafi sul lago dei Quattro Cantoni: interni, imbottiture, teak e gelcoat. Maggiori informazioni in [Yacht](/premium/yacht).',
    },
    { question: 'Quanto costa un’impresa di pulizie nel Cantone di Nidvaldo?', answer: answers.kostenFaktoren },
    {
      question: 'Come otteniamo un’offerta?',
      answer: `Ci telefoni o ci scriva. La contattiamo ${responseTime}, esaminiamo l’immobile e Le inviamo l’offerta per iscritto.`,
    },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  menuText: menu.nidwalden.text,
}

const obwalden: KantonPage = {
  name: 'Obvaldo',
  kuerzel: 'OW',
  seo: {
    title: 'Impresa di pulizie Obvaldo ed Engelberg',
    description:
      'Pulizia e custodia di stabili a Obvaldo: immobili nel Sarneraatal, abitazioni secondarie e alberghi a Engelberg. Offerta gratuita dopo il sopralluogo.',
  },
  h1: 'La Sua impresa di pulizie nel Cantone di Obvaldo',
  lead: [
    'Obvaldo è composto da due parti: il Sarneraatal con il capoluogo Sarnen e l’alta valle di Engelberg, che si raggiunge passando per Nidvaldo.',
    'Nel Sarneraatal puliamo e curiamo stabili abitativi e commerciali e aziende artigianali. Engelberg è caratterizzata da abitazioni secondarie e alberghi, per entrambi offriamo pulizia e assistenza.',
  ],
  facts: [
    { label: 'Capoluogo', value: 'Sarnen' },
    { label: 'Laghi', value: 'Lago di Sarnen, lago di Lungern' },
    { label: 'Comuni', value: 'Tutti i sette Comuni, Engelberg compresa' },
    { label: 'Non offerto', value: 'Servizio invernale' },
  ],
  regionen: [
    { title: 'Sarneraatal', orte: ['Sarnen', 'Kerns', 'Sachseln', 'Alpnach'] },
    { title: 'Verso il passo del Brünig', orte: ['Giswil', 'Lungern'] },
    { title: 'Alta valle', orte: ['Engelberg'] },
  ],
  objekte: [
    {
      title: 'Abitazioni secondarie a Engelberg',
      text: 'Secondo l’inventario delle abitazioni della Confederazione, a Engelberg più della metà delle abitazioni è un’abitazione secondaria. Puliamo prima del Suo arrivo e dopo la Sua partenza e controlliamo che tutto sia in ordine durante la Sua assenza.',
    },
    {
      title: 'Alberghi',
      text: 'Per gli alberghi ci occupiamo di pulizie a fondo e speciali, ad esempio prima di un’apertura, prima dell’inizio della stagione o dopo una ristrutturazione.',
    },
    {
      title: 'Immobili nel Sarneraatal',
      text: 'A Sarnen, Kerns, Sachseln e Alpnach puliamo vani scala, uffici e superfici commerciali e ci occupiamo della custodia di stabili abitativi e commerciali.',
    },
    {
      title: 'Trasloco e riconsegna',
      text: 'Quando un appartamento cambia proprietario o inquilini, lo puliamo prima della riconsegna, con garanzia di consegna.',
    },
  ],
  leistungen: [
    { path: '/premium/luxusimmobilien', title: 'Ville e abitazioni secondarie', text: 'Pulizia prima del Suo arrivo e dopo la Sua partenza, giri di controllo durante la Sua assenza.' },
    { path: '/leistungen/sonderreinigungen', title: 'Pulizie speciali', text: 'Pulizia a fondo per alberghi e appartamenti, pulizia di fine locazione con garanzia di consegna.' },
    { path: '/leistungen/baureinigung', title: 'Pulizia di cantiere e di fine cantiere', text: 'Dopo ristrutturazione e rinnovo, fino alla consegna.' },
    { path: '/leistungen/hauswartung', title: 'Custodia di stabili', text: 'Giri di controllo, lavanderia, smaltimento e consegne degli appartamenti.' },
    { path: '/leistungen/unterhaltsreinigung', title: 'Pulizia di manutenzione', text: 'Vani scala e superfici commerciali con un ritmo fisso.' },
  ],
  planung: {
    title: 'Trasferta e pianificazione',
    paragraphs: [
      'Nel Sarneraatal arriviamo da Emmenbrücke passando per Lucerna e l’autostrada A8. Per Engelberg il tragitto passa per Nidvaldo e la valle di Engelberg.',
      'A Engelberg adattiamo gli interventi ad arrivi, partenze e stagione. Chiarisca durante il sopralluogo accesso, parcheggio e consegna delle chiavi.',
      'Non offriamo il servizio invernale. Lo sgombero della neve attorno all’immobile va quindi affidato separatamente.',
    ],
  },
  faq: [
    {
      question: 'Venite anche a Engelberg?',
      answer: 'Sì. Engelberg fa parte del Cantone di Obvaldo e quindi della nostra zona d’intervento, con tutti i servizi e alle stesse condizioni.',
    },
    {
      question: 'Pulite prima del nostro arrivo?',
      answer: 'Sì. Puliamo prima del Suo arrivo e dopo la Sua partenza. Ci comunichi le Sue date il prima possibile.',
    },
    { question: 'Vi occupate del servizio invernale?', answer: 'No, non offriamo il servizio invernale.' },
    { question: 'Quanto costa un’impresa di pulizie nel Cantone di Obvaldo?', answer: answers.kostenFaktoren },
  ],
  menuText: menu.obwalden.text,
}

export const kantone: Dictionary['kantone']['seiten'] = { luzern, zug, aargau, nidwalden, obwalden }

export const kantonUi: Dictionary['kantone']['ui'] = {
  regionen: 'Regioni e località',
  objekte: 'Immobili tipici',
  leistungen: 'Servizi richiesti',
  weitere: 'Altri Cantoni',
  overview: 'Tutta la zona d’intervento',
  toCanton: 'Vai alla pagina del Cantone',
  seat: 'La nostra sede',
  cta: {
    title: 'Sopralluogo e offerta',
    text: `Ci descriva l’immobile e la località. La contattiamo ${responseTime} e veniamo da Lei per il sopralluogo, gratuitamente e senza impegno.`,
  },
}

export const kantoneUebersicht: Dictionary['kantone']['uebersicht'] = {
  title: 'Il Suo Cantone in dettaglio',
  text: 'Per ogni Cantone c’è una pagina dedicata: quali regioni e località ne fanno parte, quali immobili vi sono tipici e a che cosa badiamo nella pianificazione.',
}
