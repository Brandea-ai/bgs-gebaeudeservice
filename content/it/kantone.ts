import { company } from '../../shared/company'
import type { Dictionary } from '../de'
import type { KantonPage } from '../de/kantone'
import type { Source } from '../types'
import { responseTime } from './common'
import { nav } from './navigation'

/**
 * Testi delle cinque pagine cantonali in italiano (E80, E85, M60). Traduzione
 * fedele di content/de/kantone.ts, stesse chiavi, nessuna nuova affermazione
 * (E18). Forma di cortesia Lei. Nomi di Cantoni, laghi e città in italiano
 * quando esistono (Lucerna, Zugo, lago dei Quattro Cantoni), altrimenti il nome
 * ufficiale. Stesse fonti primarie della versione tedesca, per lo più solo in
 * tedesco. Titoli senza marchio, metaFor() in shared/seo.ts lo aggiunge.
 */

const menu = nav.areaMenu.cantons

/** Fonti primarie, lette il 28 settembre 2026 (stessi link della pagina tedesca) */
const quelle = {
  are: {
    label: 'Ufficio federale dello sviluppo territoriale ARE, inventario delle abitazioni e quota di abitazioni secondarie, stato al 31.03.2026',
    href: 'https://map.geo.admin.ch/?lang=it&layers=ch.are.wohnungsinventar-zweitwohnungsanteil',
  },
  luRuhetage: {
    label: 'Cantone di Lucerna, legge sui giorni di riposo (SRL n. 855), §§ 1a e 5 (in tedesco)',
    href: 'https://srl.lu.ch/app/de/texts_of_law/855',
  },
  luMeldung: {
    label: 'Città di Lucerna, cambio d’inquilino e obbligo di notifica dei proprietari (in tedesco)',
    href: 'https://www.stadtluzern.ch/dienstleistungeninformation/28997',
  },
  vogelwarte: {
    label: 'Stazione ornitologica svizzera, taglio di arbusti e siepi nelle zone abitate (in tedesco)',
    href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/',
  },
  zgMietrecht: {
    label: 'Cantone di Zugo, domande frequenti sul diritto di locazione (in tedesco)',
    href: 'https://zg.ch/de/recht-justiz/zivilverfahren/schlichtung/faq-zum-mietrecht',
  },
  zgFeiertage: {
    label: 'Cantone di Zugo, orari di lavoro e di riposo, giorni festivi (in tedesco)',
    href: 'https://zg.ch/de/wirtschaft-arbeit/arbeitsbedingungen/arbeits-und-ruhezeiten',
  },
  zgFeiertagsaehnlich: {
    label: 'Ufficio dell’economia e del lavoro di Zugo, giorni festivi 2026 e 2027 (PDF, in tedesco)',
    href: 'https://cdn.zg.ch/dam/jcr:d241f3f6-4c0c-4bb2-9096-b53dd371501c/Feiertage_2026_2027_Kt-ZG_Daten.pdf',
  },
  agFeiertage: {
    label: 'Cantone di Argovia, Ufficio dell’economia e del lavoro, promemoria sui giorni festivi legali (PDF, in tedesco)',
    href: 'https://www.ag.ch/media/kanton-aargau/dvi/dokumente/awa/awa/arbeitnehmerschutz-im-betrieb/feiertage.pdf',
  },
  nwRuhetage: {
    label: 'Cantone di Nidvaldo, legge sui giorni di riposo (NG 921.1), art. 2 (in tedesco)',
    href: 'https://gesetze.nw.ch/app/de/texts_of_law/921.1',
  },
  owSchlichtung: {
    label: 'Cantone di Obvaldo, autorità di conciliazione, domande sulla disdetta (in tedesco)',
    href: 'https://www.ow.ch/fachbereiche/2131',
  },
  owRuhetage: {
    label: 'Cantone di Obvaldo, legge sui giorni di riposo (GDB 975.2), art. 2, 3 e 5 (in tedesco)',
    href: 'https://gdb.ow.ch/app/de/texts_of_law/975.2',
  },
  orMiete: {
    label: 'Codice delle obbligazioni (RS 220), art. 266c e 266d, disdetta di abitazioni e locali commerciali',
    href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_266_c',
  },
  arg: {
    label: 'Legge sul lavoro (RS 822.11), art. 20a, festa nazionale e giorni festivi cantonali',
    href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/it#art_20_a',
  },
} satisfies Record<string, Source>

const luzern: KantonPage = {
  name: 'Lucerna',
  kuerzel: 'LU',
  seo: {
    title: 'Impresa di pulizie nel Cantone di Lucerna',
    description:
      'Impresa di pulizie a Lucerna con sede a Emmenbrücke: custodia di stabili, pulizia di manutenzione e di uffici fino all’Entlebuch. Offerta gratuita.',
  },
  h1: 'Impresa di pulizie a Lucerna, con sede a Emmenbrücke',
  lead: [
    'La nostra sede si trova a Emmenbrücke, nel Comune di Emmen, al confine con la città di Lucerna. Kriens, Horw ed Ebikon sono vicinissimi, Sursee e Hochdorf solo poco più lontani.',
    'Per le amministrazioni immobiliari e le comunioni di proprietari per piani significa tragitti brevi, soprattutto per gli stabili curati ogni settimana.',
  ],
  facts: [
    { label: 'La nostra sede', value: `${company.address.city}, Comune di Emmen` },
    { label: 'Priorità', value: 'Condomini, proprietà per piani, uffici e studi' },
    { label: 'Giorni di riposo', value: 'Dieci in tutto il Cantone, San Giuseppe secondo il Comune' },
    { label: 'Abitazioni secondarie', value: 'Flühli, Vitznau e Weggis oltre il 20 %' },
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
      text: 'Nella città di Lucerna e in centri come Sursee puliamo uffici e studi in orari che si accordano con le Sue ore di consultazione e d’ufficio.',
    },
    {
      title: 'Cambio d’inquilino per l’amministrazione',
      text: 'Quando un inquilino se ne va, puliamo l’appartamento prima della consegna al successivo, con garanzia di consegna. Il servizio di custodia partecipa alla consegna.',
    },
    {
      title: 'Abitazioni secondarie e ville sul lago',
      text: 'Intorno a Weggis, a Vitznau e a Sörenberg molte abitazioni sono abitate solo per una parte dell’anno. Ville e abitazioni secondarie in riva al lago, da Meggen a Vitznau, le segue il nostro [settore Premium](/premium).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', text: 'Per amministrazioni immobiliari e comunioni di proprietari per piani che affidano la cura del proprio stabile.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Vano scala, ingresso e locali comuni, ad esempio a Emmen, Kriens o Horw.' },
    { path: '/leistungen/umzugsreinigung', text: 'Pulizia finale prima della riconsegna dell’appartamento, con garanzia di consegna.' },
    { path: '/leistungen/bueroreinigung', text: 'Per studi e uffici in città, a Kriens o a Sursee.' },
    { path: '/premium/luxusimmobilien', title: 'Ville e residenze', text: 'Pulizia e cura discrete di case sul lago.' },
  ],
  planung: {
    title: 'Tragitti da Emmenbrücke',
    paragraphs: [
      'Poiché la nostra sede si trova nel Cantone, i tragitti verso la città e l’agglomerato sono brevi. Verso il Seetal, Willisau o l’Entlebuch la strada è più lunga. Lì conviene riunire più lavori in un solo intervento, ad esempio vano scala e aree esterne nello stesso giorno.',
      'In centro città è utile un posto fisso per veicolo e materiale. Prima del primo intervento stabilisca dove la nostra squadra può parcheggiare e come accede a chiavi e locali.',
      'La Stazione ornitologica svizzera ha sede a Sempach. Consiglia di tagliare siepi e arbusti al di fuori del periodo di nidificazione, idealmente tra novembre e marzo. Per la [manutenzione delle aree esterne](/leistungen/aussen-und-gruenflaechenpflege) di uno stabile lucernese significa: prevedere il taglio delle siepi in inverno.',
    ],
    sources: ['vogelwarte'],
  },
  daten: [
    {
      label: 'Giorni di riposo pubblici in tutto il Cantone',
      items: ['Capodanno', 'Venerdì santo', 'Ascensione', 'Corpus Domini', '1° agosto', 'Assunzione', 'Ognissanti', 'Immacolata Concezione', 'Natale', 'Santo Stefano'],
      text: 'Nel Cantone di Lucerna il lunedì di Pasqua e il lunedì di Pentecoste non ne fanno parte. Ogni Comune decide da sé se San Giuseppe (19 marzo) e la festa patronale della parrocchia sono giorni di riposo.',
      source: 'luRuhetage',
    },
    {
      label: 'Termini di disdetta senza accordo',
      text: 'Conta anzitutto il contratto di locazione. Se non indica un termine, l’art. 266c CO prevede per le abitazioni la scadenza determinata dall’uso locale e, in mancanza, la fine di un trimestre di locazione. Il preavviso è di almeno tre mesi.',
      source: 'orMiete',
    },
    {
      label: 'Cambio d’inquilino nella città di Lucerna',
      text: 'Proprietari e locatori notificano all’ufficio controllo abitanti arrivi e partenze dei loro inquilini, con numero dell’appartamento e data.',
      source: 'luMeldung',
    },
    {
      label: 'Abitazioni secondarie',
      text: 'Flühli con Sörenberg 58,31 %, Vitznau 32,71 % e Weggis 24,95 %. In questi tre Comuni valgono le norme edilizie della legge sulle abitazioni secondarie.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'San Giuseppe è un giorno di riposo nel nostro Comune?',
      answer: 'Nel Cantone di Lucerna lo decide ogni Comune, come per la festa patronale della parrocchia. Dove un tale giorno vale, il lavoro nelle aziende artigianali e commerciali vi è in linea di principio vietato come negli altri giorni di riposo (§ 5 della legge sui giorni di riposo). Si informi presso la cancelleria comunale prima di fissare un intervento il 19 marzo.',
    },
    {
      question: 'Lavorate anche nell’Entlebuch o nel Seetal?',
      answer: 'Sì, in tutto il Cantone, da Hochdorf e Hitzkirch fino a Schüpfheim ed Escholzmatt-Marbach. Lì valgono gli stessi servizi e le stesse condizioni della città di Lucerna.',
    },
    {
      question: 'Amministriamo appartamenti nella città di Lucerna. Quando pianificare la pulizia finale al cambio d’inquilino?',
      answer: 'Con la data di partenza che notifica comunque all’ufficio controllo abitanti. Richieda la [pulizia di fine locazione con garanzia di consegna](/leistungen/umzugsreinigung) appena arriva la disdetta, così la pulizia avviene prima della consegna al nuovo inquilino.',
    },
    {
      question: 'Vi occupate di abitazioni secondarie a Weggis, Vitznau o Sörenberg?',
      answer: 'Sì. Tra due soggiorni puliamo l’abitazione e controlliamo che tutto sia in ordine, così al Suo arrivo è tutto pronto. La pagina del [settore Premium](/premium) spiega come funziona.',
    },
    {
      question: 'Quanto costa un’impresa di pulizie nel Cantone di Lucerna?',
      answer: 'Il prezzo dipende da superficie, frequenza, orari d’intervento, accesso e stato dell’immobile. La guida [costi della pulizia di manutenzione](/blog/reinigungskosten-schweiz) spiega come si compone un’offerta.',
    },
  ],
  menuText: menu.luzern.text,
}

const zug: KantonPage = {
  name: 'Zugo',
  kuerzel: 'ZG',
  seo: {
    title: 'Impresa di pulizie nel Cantone di Zugo',
    description:
      'Impresa di pulizie a Zugo per uffici e stabili: pulizia di uffici, vetri e custodia di stabili da Baar alla valle di Ägeri, anche in inglese. Offerta gratuita.',
  },
  h1: 'Impresa di pulizie a Zugo per uffici e sedi aziendali',
  lead: [
    'Molte aziende, anche internazionali, hanno la loro sede nel Cantone di Zugo. I loro uffici si trovano spesso in stabili in cui reception, accesso e allarme vanno regolati prima che arrivi la squadra di pulizia.',
    'Per gli stabili abitativi sul lago di Zugo e sul lago di Ägeri ci occupiamo di custodia e manutenzione.',
  ],
  facts: [
    { label: 'Accesso', value: 'Con l’autostrada A14' },
    { label: 'Priorità', value: 'Stabili per uffici con molto vetro' },
    { label: 'Termini di disdetta', value: '31 marzo, 30 giugno, 30 settembre' },
    { label: 'Giorni festivi', value: 'Nove equiparati alla domenica, più quattro giorni semifestivi' },
  ],
  regionen: [
    { title: 'Zugo, Baar e Steinhausen', orte: ['Zugo', 'Baar', 'Steinhausen'] },
    { title: 'Sul lago di Zugo', orte: ['Cham', 'Hünenberg', 'Risch (Rotkreuz)', 'Walchwil'] },
    { title: 'Valle di Ägeri e Comuni di montagna', orte: ['Unterägeri', 'Oberägeri', 'Menzingen', 'Neuheim'] },
  ],
  objekte: [
    {
      title: 'Uffici e sedi aziendali',
      text: 'Dal piccolo ufficio alla sede su più piani: postazioni di lavoro, sale riunioni, reception, cucinini e servizi igienici, in orari che non disturbano la Sua giornata di lavoro.',
    },
    {
      title: 'Vetri e facciate',
      text: 'Gli edifici per uffici hanno spesso grandi superfici vetrate. Puliamo finestre, porte in vetro e facciate singolarmente o in aggiunta alla pulizia degli uffici.',
    },
    {
      title: 'Family office e locali riservati',
      text: 'Dove si trovano documenti riservati lavora da Lei sempre la stessa squadra, anche al di fuori del Suo orario di lavoro. Come garantiamo la discrezione è descritto nel [settore Premium](/premium).',
      premium: true,
    },
    {
      title: 'Ville e barche sul lago',
      text: 'Per ville e residenze a Walchwil, Oberägeri o Cham c’è il settore [ville e immobili di pregio](/premium/luxusimmobilien), per le barche sul lago di Zugo la [pulizia di yacht](/premium/yacht).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/bueroreinigung', text: 'Per piani uffici, reception e sale riunioni, al di fuori del Suo orario d’ufficio.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per finestre, superfici vetrate e facciate di stabili commerciali.' },
    { path: '/leistungen/facility-services', text: 'Quando per lo stabile per uffici si aggiungono custodia e cura delle aree esterne.' },
    { path: '/leistungen/sonderreinigungen', text: 'Pulizia a fondo al cambio d’ufficio, contro calcare, grasso e vecchi strati.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Interni, imbottiture, teak e gelcoat, sul lago di Zugo e sul lago dei Quattro Cantoni.' },
  ],
  planung: {
    title: 'Accesso e orari nello stabile per uffici',
    paragraphs: [
      'Da Emmenbrücke raggiungiamo il Cantone di Zugo con l’autostrada A14. Si pulisce quando non disturba la Sua attività, ad esempio al di fuori dell’orario d’ufficio.',
      'Negli stabili con reception, badge d’accesso o impianto d’allarme il primo intervento imposta tutto il resto. Questi punti andrebbero chiariti prima:',
    ],
    list: {
      title: 'Prima del primo intervento nello stabile per uffici',
      items: [
        'se la squadra entra dalla reception, con un badge o con una chiave',
        'quali piani e locali sono compresi e quali restano chiusi',
        'come sono regolati allarme, luci e chiusura',
        'in quale lingua si prendono gli accordi con il Suo team: tedesco, inglese, francese o italiano',
        'chi è la Sua persona di contatto se si nota qualcosa',
      ],
    },
  },
  daten: [
    {
      label: 'Termini di disdetta',
      text: 'Salvo altro accordo nel contratto di locazione valgono il 31 marzo, il 30 giugno e il 30 settembre. Il preavviso è di almeno tre mesi per gli appartamenti e di sei mesi per i locali commerciali.',
      source: 'zgMietrecht',
    },
    {
      label: 'Festivi equiparati alla domenica',
      items: ['Capodanno', 'Venerdì santo', 'Ascensione', 'Corpus Domini', '1° agosto', 'Assunzione', 'Ognissanti', 'Immacolata Concezione', 'Natale'],
      text: 'In questi giorni per i dipendenti vale un divieto di lavoro come la domenica, dalle 23 della vigilia alle 23 del giorno festivo.',
      source: 'zgFeiertage',
    },
    {
      label: 'Giorni semifestivi',
      items: ['San Bertoldo', 'Lunedì di Pasqua', 'Lunedì di Pentecoste', 'Santo Stefano'],
      text: 'La maggior parte delle aziende zughesi chiude volontariamente, si può lavorare senza permesso e senza supplemento. Eccezione: il 2 gennaio o il 26 dicembre cade di domenica.',
      source: 'zgFeiertagsaehnlich',
    },
  ],
  faq: [
    {
      question: 'Vi occupate anche di più sedi, ad esempio a Zugo e a Lucerna?',
      answer: 'Sì, tutti e cinque i Cantoni fanno parte della nostra zona d’intervento. Ci indichi tutti gli indirizzi nella richiesta, così pianifichiamo i sopralluoghi insieme. Se a un indirizzo oltre alla pulizia serve anche la custodia, i [facility services](/leistungen/facility-services) riuniscono i servizi di quell’immobile.',
    },
    {
      question: 'Lasciamo il nostro ufficio a Zugo. Quando richiedere la pulizia finale?',
      answer: 'Appena la disdetta è definita. Per i locali commerciali il preavviso è di almeno sei mesi: il tempo basta ampiamente per la [pulizia finale prima della riconsegna](/leistungen/umzugsreinigung).',
    },
    {
      question: 'Lavorate anche a Baar, Cham o nella valle di Ägeri?',
      answer: 'Sì, in tutti gli undici Comuni zughesi, da Risch (Rotkreuz) fino a Menzingen e Neuheim, con tutti i servizi e alle stesse condizioni.',
    },
    {
      question: 'Si può pulire nei giorni semifestivi?',
      answer: 'Sì. A San Bertoldo, lunedì di Pasqua, lunedì di Pentecoste e Santo Stefano nel Cantone di Zugo si può lavorare senza permesso, salvo che il 2 gennaio o il 26 dicembre cada di domenica. In questi giorni la maggior parte delle aziende è chiusa. Se prevede una [pulizia a fondo dei pavimenti](/leistungen/sonderreinigungen) senza attività in corso, indichi uno di questi giorni come data desiderata nella richiesta.',
    },
  ],
  menuText: menu.zug.text,
}

const aargau: KantonPage = {
  name: 'Argovia',
  kuerzel: 'AG',
  seo: {
    title: 'Impresa di pulizie nel Cantone di Argovia',
    description:
      'Impresa di pulizie in Argovia per capannoni e stabili: pulizia industriale, di cantiere e di manutenzione da Aarau al Freiamt. Offerta gratuita.',
  },
  h1: 'Impresa di pulizie in Argovia per industria, aziende e stabili',
  lead: [
    'In Argovia ci sono molte aziende industriali e artigianali. Per capannoni di produzione e di deposito, officine ed edifici commerciali c’è la nostra pulizia industriale e di capannoni, per i condomini la pulizia di manutenzione e la custodia.',
    'Lavoriamo in tutto il Cantone, dal Freiamt e dal Seetal al confine lucernese fino ad Aarau, Baden, Brugg e al Fricktal.',
  ],
  facts: [
    { label: 'Accesso', value: 'Alle stesse condizioni, come a Lucerna' },
    { label: 'Priorità', value: 'Industria e artigianato, più abitazioni' },
    { label: 'Giorni festivi', value: 'Sei regimi secondo il distretto' },
    { label: 'Non festivo', value: 'Il 1° maggio, in tutto il Cantone' },
  ],
  regionen: [
    { title: 'Freiamt', orte: ['Muri', 'Wohlen', 'Bremgarten', 'Sins'] },
    { title: 'Seetal e lago di Hallwil', orte: ['Meisterschwanden', 'Seengen', 'Beinwil am See'] },
    { title: 'Aarau, Lenzburg e Zofingen', orte: ['Aarau', 'Lenzburg', 'Zofingen', 'Oftringen'] },
    { title: 'Baden, Wettingen e Mutschellen', orte: ['Baden', 'Wettingen', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
    { title: 'Brugg e Fricktal', orte: ['Brugg', 'Windisch', 'Rheinfelden', 'Frick'] },
  ],
  objekte: [
    {
      title: 'Capannoni di produzione e di deposito',
      text: 'Puliamo pavimenti dei capannoni, zone di stoccaggio, scaffalature e vie di circolazione, una volta o regolarmente, negli orari che produzione e lavoro a turni consentono.',
    },
    {
      title: 'Macchine e impianti',
      text: 'Pulizia di macchine nel lavoro a turni, durante le pause, tra un turno e l’altro o nei fermi pianificati. Il coordinamento con la Sua manutenzione è spiegato alla voce [pulizia industriale e di capannoni](/leistungen/industrie-und-hallenreinigung).',
    },
    {
      title: 'Nuove costruzioni e trasformazioni',
      text: 'Dopo la costruzione di un capannone o la trasformazione di un edificio commerciale puliamo fino alla consegna, perché l’attività possa partire.',
    },
    {
      title: 'Stabili abitativi',
      text: 'Per condomini e proprietà per piani ci occupiamo di pulizia di manutenzione e custodia. Le ville sul lago di Hallwil o nella regione di Baden sono seguite dal nostro settore Premium.',
    },
  ],
  leistungen: [
    { path: '/leistungen/industrie-und-hallenreinigung', text: 'Pavimenti dei capannoni, zone di stoccaggio e impianti, pianificati attorno a turni e fermi.' },
    { path: '/leistungen/baureinigung', text: 'Durante e dopo lavori di costruzione e trasformazione, fino alla consegna.' },
    { path: '/leistungen/bueroreinigung', text: 'Per uffici, locali di pausa e spogliatoi in azienda.' },
    { path: '/leistungen/hauswartung', text: 'Giri di controllo, lavanderia, piccole riparazioni e smaltimento per stabili abitativi.' },
    { path: '/leistungen/facility-services', text: 'Pulizia, custodia e aree esterne per il Suo sito aziendale da un unico fornitore.' },
  ],
  planung: {
    title: 'Pianificazione per le aziende argoviesi',
    paragraphs: [
      'I tragitti da Emmenbrücke verso l’Argovia variano secondo la regione, le condizioni per la trasferta restano le stesse. Per i capannoni con lavoro a turni contano tre cose: quando un impianto è fermo, quali zone sono accessibili durante la produzione e quali regole di sicurezza valgono per il personale esterno.',
      'Ciò che nel Suo stabilimento vale per le ditte esterne vale anche per la squadra di pulizia. Metta per iscritto zone vietate, dispositivi di protezione e persona di contatto per le emergenze prima dell’inizio del primo intervento.',
    ],
  },
  daten: [
    {
      label: 'Festivi in tutti i distretti',
      items: ['Capodanno', 'Venerdì santo', 'Ascensione', '1° agosto', 'Natale'],
      text: 'Solo questi cinque giorni sono equiparati alla domenica in tutta l’Argovia. Altri quattro li fissa il Consiglio di Stato per distretto, il promemoria cantonale elenca sei regimi.',
      source: 'agFeiertage',
    },
    {
      label: 'Altri quattro festivi per distretto',
      groups: [
        { title: 'Aarau, Brugg, Kulm, Lenzburg, Zofingen e Bergdietikon', items: ['San Bertoldo', 'Lunedì di Pasqua', 'Lunedì di Pentecoste', 'Santo Stefano'] },
        { title: 'Baden senza Bergdietikon', items: ['Lunedì di Pasqua', 'Lunedì di Pentecoste', 'Corpus Domini', 'Santo Stefano'] },
        { title: 'Bremgarten', items: ['Corpus Domini', 'Assunzione', 'Ognissanti', 'Santo Stefano'] },
        {
          title: 'Laufenburg, Muri e, nel distretto di Rheinfelden, Hellikon, Mumpf, Obermumpf, Schupfart, Stein, Wegenstetten',
          items: ['Corpus Domini', 'Assunzione', 'Ognissanti', 'Immacolata Concezione'],
        },
        {
          title: 'Resto del distretto di Rheinfelden: Kaiseraugst, Magden, Möhlin, Olsberg, Rheinfelden, Wallbach, Zeiningen, Zuzgen',
          items: ['Lunedì di Pasqua', 'Lunedì di Pentecoste', 'Ognissanti', 'Santo Stefano'],
        },
        { title: 'Zurzach', items: ['San Bertoldo', 'Corpus Domini', 'Ognissanti', 'Santo Stefano'] },
      ],
      source: 'agFeiertage',
    },
  ],
  faq: [
    {
      question: 'Lavorate anche ad Aarau, Baden o Lenzburg?',
      answer: 'Sì, in tutto il Cantone: ad Aarau, Lenzburg e Zofingen, a Baden e Wettingen, a Brugg e nel Fricktal, nel Freiamt e sul lago di Hallwil. Ovunque valgono le stesse condizioni, come a Lucerna, anche per la trasferta.',
    },
    {
      question: 'Pulite anche durante il lavoro a turni?',
      answer: 'Sì. Si pulisce durante le pause, tra un turno e l’altro o durante fermi pianificati, secondo le zone libere in quel momento.',
    },
    {
      question: 'Si possono pulire insieme anche locali di pausa e uffici dell’azienda?',
      answer: 'Sì. Spogliatoi, locali di pausa e uffici si pianificano insieme al capannone con un unico ritmo, come descritto alla voce [pulizia di uffici e studi](/leistungen/bueroreinigung).',
    },
    {
      question: 'Quali documenti aiutano prima del giro nel capannone?',
      answer: 'Una pianta del capannone con le zone, gli orari dei fermi e le Sue regole di sicurezza per le ditte esterne. Invii questi documenti per e-mail, così il giro si può preparare in modo mirato.',
    },
    {
      question: 'Abbiamo sedi in più distretti. Che cosa significa per i giorni festivi?',
      answer: 'Il piano di pulizia segue il distretto di ogni sede. Il lunedì di Pasqua, ad esempio, ad Aarau è festivo, a Muri è un normale giorno lavorativo; all’Assunzione è il contrario. I festivi per distretto sono elencati più in alto nel riquadro.',
    },
  ],
  menuText: menu.aargau.text,
}

const nidwalden: KantonPage = {
  name: 'Nidvaldo',
  kuerzel: 'NW',
  seo: {
    title: 'Impresa di pulizie nel Cantone di Nidvaldo',
    description:
      'Impresa di pulizie a Nidvaldo per proprietà per piani e abitazioni secondarie sul lago, da Hergiswil a Emmetten, con custodia. Offerta gratuita.',
  },
  h1: 'Impresa di pulizie a Nidvaldo per immobili sul lago',
  lead: [
    'Molti immobili nidvaldesi si trovano vicino al lago dei Quattro Cantoni, da Hergiswil a Beckenried. Non tutti i proprietari vi abitano, alcuni vengono solo poche settimane all’anno.',
    'Per le comunioni di proprietari per piani e le amministrazioni ci occupiamo di pulizia e custodia, anche quando i proprietari abitano lontano.',
  ],
  facts: [
    { label: 'Accesso', value: 'A2 via Lucerna' },
    { label: 'Priorità', value: 'Proprietà per piani e immobili sul lago' },
    { label: 'Abitazioni secondarie', value: 'Emmetten, quasi una su tre' },
    { label: 'Festivo proprio', value: '19 marzo, San Giuseppe' },
  ],
  regionen: [
    { title: 'Sul lago dei Quattro Cantoni', orte: ['Hergiswil', 'Stansstad', 'Ennetbürgen', 'Buochs', 'Beckenried'] },
    { title: 'Stans e dintorni', orte: ['Stans', 'Oberdorf', 'Ennetmoos'] },
    { title: 'Valle di Engelberg ed Emmetten', orte: ['Dallenwil', 'Wolfenschiessen', 'Emmetten'] },
  ],
  objekte: [
    {
      title: 'Proprietà per piani con proprietari non residenti',
      text: 'Se non tutti i proprietari abitano sul posto, la [custodia di stabili](/leistungen/hauswartung) si occupa dei passaggi regolari nello stabile e delle consegne degli appartamenti.',
    },
    {
      title: 'Abitazioni secondarie',
      text: 'Soprattutto a Emmetten molte abitazioni sono usate solo per una parte dell’anno. Le curiamo prima del Suo arrivo e dopo la Sua partenza, e tra un soggiorno e l’altro passiamo a controllare.',
    },
    {
      title: 'Ville e residenze sul lago',
      text: 'Per case con pietra naturale, parquet e grandi superfici vetrate sulla riva da Hergiswil a Beckenried c’è il settore [ville e immobili di pregio](/premium/luxusimmobilien).',
      premium: true,
    },
    {
      title: 'Barche e yacht a Nidvaldo',
      text: 'Motoscafi e yacht agli ormeggi di Stansstad, Buochs o Beckenried sono curati dalla nostra [pulizia di yacht](/premium/yacht).',
      premium: true,
    },
  ],
  leistungen: [
    { path: '/leistungen/hauswartung', text: 'Per comunioni di proprietari per piani e amministrazioni, concordata per iscritto.' },
    { path: '/premium/luxusimmobilien', title: 'Ville sul lago', text: 'Cura di immobili sul lago, anche quando Lei non è sul posto.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per grandi vetrate con vista sul lago e superfici vetrate.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Per giardino, vialetti e dintorni del Suo stabile.' },
    { path: '/premium/yacht', title: 'Yacht', text: 'Per barche e yacht sul lago dei Quattro Cantoni.' },
  ],
  planung: {
    title: 'Pianificazione per Comuni sul lago e abitazioni secondarie',
    paragraphs: [
      'Da Emmenbrücke la strada porta a Nidvaldo via Lucerna e l’autostrada A2. Una pulizia prima del Suo arrivo richiede un po’ di anticipo, perciò ci comunichi le date il prima possibile.',
      'Le abitazioni secondarie richiedono regole fisse per chiavi e allarme. Decida in anticipo chi viene informato se durante un giro di controllo si nota qualcosa: Lei stesso, l’amministrazione o una persona di fiducia nelle vicinanze.',
    ],
  },
  daten: [
    {
      label: 'Giorni di riposo',
      items: ['Capodanno', 'San Giuseppe (19 marzo)', 'Ascensione', 'Corpus Domini', '1° agosto', 'Assunzione', 'Ognissanti', 'Immacolata Concezione', 'Venerdì santo', 'Domenica di Pasqua', 'Domenica di Pentecoste', 'Digiuno federale', 'Natale'],
      text: 'Venerdì santo, domenica di Pasqua, domenica di Pentecoste, Digiuno federale e Natale sono alte festività. Tranne San Giuseppe, tutti i giorni dell’elenco sono equiparati alla domenica: otto secondo la legge sui giorni di riposo, il 1° agosto secondo il diritto federale (art. 20a LL), gli altri cadono comunque di domenica. I Comuni possono stabilire altri festivi con un regolamento.',
      source: ['nwRuhetage', 'arg'],
    },
    {
      label: 'Abitazioni secondarie',
      text: 'Emmetten 32,51 %. È l’unico Comune di Nidvaldo oltre il 20 per cento e sottostà quindi alle norme edilizie della legge sulle abitazioni secondarie.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'Vi occupate di abitazioni secondarie durante la nostra assenza?',
      answer: 'Sì. Puliamo prima del Suo arrivo e dopo la Sua partenza ed effettuiamo giri di controllo. Maggiori informazioni alla voce [immobili di pregio](/premium/luxusimmobilien).',
    },
    {
      question: 'Chi controlla lo stabile se i proprietari non abitano sul posto?',
      answer: 'Nei Comuni sul lago molte abitazioni appartengono a proprietari presenti solo a tratti. Spesso manca allora qualcuno che passi regolarmente. La [custodia di stabili](/leistungen/hauswartung) si occupa di giri di controllo, lavanderia, smaltimento e consegne degli appartamenti e segnala i difetti all’organo designato dalla comunione dei proprietari, ad esempio l’amministrazione.',
    },
    {
      question: 'Lavorate anche a Emmetten e nella valle di Engelberg?',
      answer: 'Sì, in tutti gli undici Comuni di Nidvaldo, da Hergiswil e Stansstad fino a Wolfenschiessen ed Emmetten, con tutti i servizi e alle stesse condizioni.',
    },
    {
      question: 'Curate anche barche agli ormeggi di Nidvaldo?',
      answer: 'Sì, yacht e motoscafi sul lago dei Quattro Cantoni, ad esempio a Stansstad, Buochs o Beckenried: interni, imbottiture, teak e gelcoat. Maggiori informazioni alla voce [yacht](/premium/yacht).',
    },
  ],
  menuText: menu.nidwalden.text,
}

const obwalden: KantonPage = {
  name: 'Obvaldo',
  kuerzel: 'OW',
  seo: {
    title: 'Impresa di pulizie a Obvaldo ed Engelberg',
    description:
      'Impresa di pulizie a Obvaldo per il Sarneraatal ed Engelberg: custodia di stabili, pulizie a fondo per alberghi e abitazioni. Offerta gratuita.',
  },
  h1: 'Impresa di pulizie a Obvaldo, dal Sarneraatal a Engelberg',
  lead: [
    'Obvaldo si compone di due parti: il Sarneraatal con il capoluogo Sarnen e l’alta valle di Engelberg, che si raggiunge passando da Nidvaldo.',
    'Le due parti richiedono una pianificazione diversa: nel Sarneraatal conta il ritmo fisso negli stabili abitativi e commerciali, a Engelberg gli interventi seguono stagione, arrivi e partenze.',
  ],
  facts: [
    { label: 'Accesso', value: 'A8, Engelberg per la sua valle' },
    { label: 'Termini di disdetta', value: 'Fine marzo, fine giugno, fine settembre' },
    { label: 'Festivo proprio', value: 'Festa di San Nicolao della Flüe, 25 settembre' },
    { label: 'Non offerto', value: 'Servizio invernale' },
  ],
  regionen: [
    { title: 'Sarneraatal', orte: ['Sarnen', 'Kerns', 'Sachseln', 'Alpnach'] },
    { title: 'Verso il Brünig', orte: ['Giswil', 'Lungern'] },
    { title: 'Alta valle', orte: ['Engelberg'] },
  ],
  objekte: [
    {
      title: 'Abitazioni secondarie a Engelberg',
      text: 'Molte abitazioni del villaggio abbaziale restano vuote tra un soggiorno e l’altro. Qui conta la pulizia tra due soggiorni più di un ritmo settimanale fisso, ed è ciò che prevede il nostro [settore Premium](/premium).',
      premium: true,
    },
    {
      title: 'Alberghi',
      text: 'Per gli alberghi ci occupiamo di pulizie a fondo e speciali, ad esempio prima di un’apertura, prima dell’inizio della stagione o dopo una ristrutturazione.',
    },
    {
      title: 'Stabili nel Sarneraatal',
      text: 'A Sarnen, Kerns, Sachseln e Alpnach puliamo vani scala, uffici e superfici commerciali e ci occupiamo della custodia di stabili abitativi e commerciali.',
    },
    {
      title: 'Cambio d’inquilino',
      text: 'Quando cambiano gli inquilini, puliamo prima della consegna su incarico dell’amministrazione o dei proprietari, con garanzia di consegna.',
    },
  ],
  leistungen: [
    { path: '/premium/luxusimmobilien', title: 'Case di vacanza', text: 'Pulizia tra due soggiorni a Engelberg e sul lago di Sarnen.' },
    { path: '/leistungen/sonderreinigungen', text: 'Pulizia a fondo per alberghi e appartamenti, ad esempio prima della stagione.' },
    { path: '/leistungen/baureinigung', text: 'Dopo trasformazioni e ristrutturazioni, fino alla consegna.' },
    { path: '/leistungen/hauswartung', text: 'Giri di controllo, lavanderia, smaltimento e consegne degli appartamenti.' },
    { path: '/leistungen/umzugsreinigung', text: 'Pulizia finale al cambio d’inquilino nel Sarneraatal, con garanzia di consegna.' },
  ],
  planung: {
    title: 'Stagione, accesso ed Engelberg',
    paragraphs: [
      'Nel Sarneraatal arriviamo da Emmenbrücke via Lucerna e l’autostrada A8. La strada per Engelberg passa per Nidvaldo e la valle di Engelberg.',
      'A Engelberg stabilisca accesso, parcheggio e consegna delle chiavi prima del primo intervento, soprattutto se Lei non è sul posto.',
      'Il servizio invernale non lo assumiamo, nemmeno a Engelberg. Affidi quindi lo sgombero della neve per accessi e piazzali separatamente, possibilmente prima dell’inizio della stagione.',
    ],
  },
  daten: [
    {
      label: 'Termini di disdetta',
      text: 'Salvo altro accordo nel contratto di locazione, un appartamento si può disdire per fine marzo, fine giugno o fine settembre. La disdetta deve poter essere recapitata al più tardi entro fine dicembre, fine marzo o fine giugno.',
      source: 'owSchlichtung',
    },
    {
      label: 'Giorni di riposo',
      items: ['Capodanno', 'Ascensione', 'Corpus Domini', '1° agosto', 'Assunzione', 'Festa di San Nicolao della Flüe (25 settembre)', 'Ognissanti', 'Immacolata Concezione', 'Venerdì santo', 'Domenica di Pasqua', 'Domenica di Pentecoste', 'Digiuno federale', 'Natale'],
      text: 'La festa di San Nicolao della Flüe non è equiparata alla domenica ai sensi della legge sul lavoro. Come giorno di riposo pubblico, però, anche in questo giorno il lavoro nelle aziende artigianali e commerciali è in linea di principio vietato (art. 3), le eccezioni sono all’art. 5. Ogni Comune può inoltre stabilire un festivo locale equiparato alla domenica.',
      source: 'owRuhetage',
    },
    {
      label: 'Abitazioni secondarie',
      text: 'Engelberg 55,87 %, unico Comune di Obvaldo oltre il 20 per cento. Lungern resta al di sotto con il 18,92 %.',
      source: 'are',
    },
  ],
  faq: [
    {
      question: 'Venite anche a Engelberg?',
      answer: 'Sì. Engelberg appartiene al Cantone di Obvaldo e quindi alla nostra zona d’intervento, con tutti i servizi e alle stesse condizioni.',
    },
    {
      question: 'Pulite il nostro appartamento di vacanza tra due soggiorni?',
      answer: 'Sì. Ci comunichi arrivo e partenza il prima possibile, così la pulizia cade tra i Suoi soggiorni e non nel primo giorno di vacanza.',
    },
    {
      question: 'Qual è il momento migliore per una pulizia a fondo in albergo?',
      answer: 'Quando in casa ci sono pochi ospiti: in bassa stagione, prima di un’apertura o dopo una ristrutturazione. Pianifichi la data per tempo, perché in quel periodo spesso lavorano anche gli artigiani. La pulizia viene per ultima, così non si forma nuova polvere. Maggiori informazioni alle voci [pulizie a fondo e speciali](/leistungen/sonderreinigungen) e [pulizia di cantiere](/leistungen/baureinigung).',
    },
    {
      question: 'Vi occupate della pulizia finale al cambio d’inquilino?',
      answer: 'Sì, su incarico dell’amministrazione o dei proprietari e con garanzia di consegna. Poiché a Obvaldo, salvo altro accordo, si disdice per fine marzo, giugno o settembre, le consegne si concentrano in queste date, vedi [pulizia di fine locazione](/leistungen/umzugsreinigung).',
    },
  ],
  menuText: menu.obwalden.text,
}

export const kantone: Dictionary['kantone']['seiten'] = { luzern, zug, aargau, nidwalden, obwalden }

export const kantonUi: Dictionary['kantone']['ui'] = {
  regionen: 'Regioni e località',
  objekte: 'Immobili tipici',
  leistungen: 'Servizi richiesti',
  planung: 'Pianificazione',
  weitere: 'Altri Cantoni',
  overview: 'Tutta la zona d’intervento',
  toCanton: 'Vai alla pagina del Cantone',
  seat: 'La nostra sede',
  daten: {
    title: 'Dati cantonali per la pianificazione',
    nav: 'Dati cantonali',
    intro: 'Regole cantonali e cifre ufficiali che contano per i piani di pulizia e i cambi d’inquilino, ciascuna con la sua fonte. Nel singolo caso fa fede il testo della fonte.',
    source: 'Fonte:',
    stand: 'Stato delle informazioni:',
  },
  datenStand: '2026-09-28',
  /** Quellen der Kantonsdaten, einmal je Sprache; Seiten verweisen per Schlüssel */
  quellen: quelle,
  gebiet: 'In tutta la nostra zona d’intervento, alle stesse condizioni',
  cta: {
    title: 'Sopralluogo e offerta',
    text: `Ci descriva l’immobile e la località. La contattiamo ${responseTime} e veniamo da Lei per il sopralluogo, gratuitamente e senza impegno.`,
  },
}

export const kantoneUebersicht: Dictionary['kantone']['uebersicht'] = {
  title: 'Il Suo Cantone nel dettaglio',
  text: 'Ogni Cantone ha una propria pagina: regioni e località, immobili tipici, pianificazione e dati cantonali con fonte, ad esempio su giorni festivi, termini di disdetta o abitazioni secondarie.',
}
