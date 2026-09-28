import { company, premiumLabel } from '../../shared/company'
import type { NavDictionary, NavLink } from '../de/navigation'
import { cantonListIt, responseTime } from './common'

/**
 * Testi di menu, piè di pagina, modulo di contatto e pagina 404 in italiano
 * (M54, E61, M60). Gli indirizzi restano le chiavi tedesche.
 */

const serviceGroups: NavDictionary['serviceGroups'] = [
  {
    title: 'Pulizia',
    links: [
      { path: '/leistungen/unterhaltsreinigung', label: 'Pulizia di manutenzione' },
      { path: '/leistungen/bueroreinigung', label: 'Pulizia di uffici e studi' },
      { path: '/leistungen/sonderreinigungen', label: 'Pulizie a fondo e speciali' },
      { path: '/leistungen/umzugsreinigung', label: 'Pulizia di fine locazione' },
      { path: '/leistungen/baureinigung', label: 'Pulizia di cantiere e di fine cantiere' },
      { path: '/leistungen/fenster-und-fassadenreinigung', label: 'Vetri e facciate' },
      { path: '/leistungen/industrie-und-hallenreinigung', label: 'Industria e capannoni' },
    ],
  },
  {
    title: 'Custodia e manutenzione',
    links: [
      { path: '/leistungen/hauswartung', label: 'Custodia di stabili' },
      { path: '/leistungen/aussen-und-gruenflaechenpflege', label: 'Manutenzione delle aree esterne e verdi' },
      { path: '/leistungen/facility-services', label: 'Facility services' },
      { path: '/leistungen', label: 'Tutti i servizi' },
    ],
  },
  {
    title: premiumLabel,
    links: [
      { path: '/premium', label: 'Premium in sintesi' },
      { path: '/premium/luxusimmobilien', label: 'Immobili di pregio' },
      { path: '/premium/privatjet', label: 'Pulizia di jet privati' },
      { path: '/premium/yacht', label: 'Pulizia di yacht' },
    ],
  },
]

const menu: NavDictionary['menu'] = {
  home: { path: '/', label: 'Home' } satisfies NavLink,
  services: 'Servizi',
  after: [
    { path: '/einzugsgebiet', label: 'Zona d’intervento' },
    { path: '/ueber-uns', label: 'Chi siamo' },
    { path: '/blog', label: 'Guida' },
  ],
  cta: { href: '#kontakt-formular', label: 'Richiedere un’offerta' },
  open: 'Apri il menu',
  close: 'Chiudi il menu',
  label: 'Menu principale',
}

const footer: NavDictionary['footer'] = {
  newBrandLine: `Un marchio della ${company.legalName}`,
  about: `Pulizia e custodia di stabili per aziende e clienti privati esigenti. Sede a ${company.address.city}, attivi nei Cantoni di ${cantonListIt}.`,
  companyLinks: [
    { path: '/ueber-uns', label: 'Chi siamo' },
    { path: '/kontakt', label: 'Contatto' },
    { path: '/blog', label: 'Guida' },
  ],
  areaTitle: 'Azienda',
  areaLink: { path: '/einzugsgebiet', label: 'Zona d’intervento' },
  rights: `${company.legalName}. Tutti i diritti riservati.`,
  legal: [
    { path: '/impressum', label: 'Note legali' },
    { path: '/datenschutz', label: 'Protezione dei dati' },
  ],
}

/** Modulo di contatto nel piè di pagina. I valori (value) restano in tedesco per l’e-mail. */
const contactForm: NavDictionary['contactForm'] = {
  title: 'Richiedere un’offerta',
  intro: `Ci descriva l’immobile e la Sua richiesta. La contattiamo ${responseTime} e fissiamo il sopralluogo, gratuitamente e senza impegno.`,
  choose: 'Selezioni...',
  fields: {
    name: { label: 'Nome *', placeholder: 'Nome e cognome' },
    email: { label: 'E-mail *', placeholder: 'nome@azienda.ch' },
    phone: { label: 'Telefono', placeholder: 'Il Suo numero di telefono' },
    service: { label: 'Servizio desiderato' },
    location: { label: 'Luogo dell’intervento (località o NPA)', placeholder: 'ad es. 6300 Zugo' },
    frequency: { label: 'Cadenza desiderata' },
    message: { label: 'Immobile e richiesta *', placeholder: 'Ad esempio: tipo di immobile, superficie approssimativa o numero di appartamenti, cadenza desiderata e data di inizio' },
  },
  serviceOptions: [
    {
      group: 'Pulizia e custodia',
      options: [
        { value: 'Unterhaltsreinigung', label: 'Pulizia di manutenzione' },
        { value: 'Büroreinigung', label: 'Pulizia di uffici e studi' },
        { value: 'Sonderreinigungen', label: 'Pulizie a fondo e speciali' },
        { value: 'Umzugsreinigung', label: 'Pulizia di fine locazione con garanzia di consegna' },
        { value: 'Baureinigung', label: 'Pulizia di cantiere e di fine cantiere' },
        { value: 'Fenster- und Fassadenreinigung', label: 'Pulizia di vetri e facciate' },
        { value: 'Industrie- und Hallenreinigung', label: 'Pulizia industriale, di capannoni e macchinari' },
        { value: 'Hauswartung', label: 'Custodia di stabili' },
        { value: 'Aussen- und Grünflächenpflege', label: 'Manutenzione delle aree esterne e verdi' },
        { value: 'Facility Services', label: 'Facility services (più servizi)' },
      ],
    },
    {
      group: 'Premium',
      options: [
        { value: 'Luxusimmobilien', label: 'Immobili di pregio (ville, loft)' },
        { value: 'Privatjet-Reinigung', label: 'Pulizia di jet privati' },
        { value: 'Yacht-Reinigung', label: 'Pulizia di yacht' },
        { value: 'Zweitwohnungen und Residences', label: 'Abitazioni secondarie e residence' },
        { value: 'Hotels', label: 'Alberghi' },
      ],
    },
    {
      group: 'Altro',
      options: [
        { value: 'Beratung', label: 'Consulenza' },
        { value: 'Andere', label: 'Altra richiesta' },
      ],
    },
  ],
  frequencyOptions: ['Una tantum', 'Settimanale', 'Più volte alla settimana', 'Giornaliera', 'Ancora da definire'],
  consentBefore: 'Ho preso atto della',
  consentLink: 'dichiarazione sulla protezione dei dati',
  consentAfter: 'e acconsento che i miei dati siano utilizzati per evadere la mia richiesta. *',
  required: '* Campi obbligatori',
  submit: 'Invia richiesta',
  sending: 'Invio in corso...',
  success: `Grazie, la Sua richiesta ci è pervenuta. La contattiamo ${responseTime} e fissiamo con Lei una data per il sopralluogo. Se ha urgenza, ci raggiunge al numero ${company.phone.display}.`,
  successTitle: 'Richiesta ricevuta',
  errors: {
    required: 'Compili questo campo.',
    email: 'Inserisca un indirizzo e-mail valido.',
    consent: 'Confermi l’informativa sulla protezione dei dati affinché possiamo trattare la Sua richiesta.',
    summary: 'Verifichi i campi evidenziati.',
  },
  error: `Non è stato possibile inviare la Sua richiesta. La preghiamo di telefonarci (${company.phone.display}) o di scriverci all’indirizzo ${company.email}.`,
}

const notFound: NavDictionary['notFound'] = {
  title: 'Pagina non trovata',
  text: 'Questa pagina non esiste o non esiste più. Forse uno di questi link Le sarà utile.',
  links: [
    { path: '/', label: 'Alla pagina iniziale' },
    { path: '/leistungen', label: 'Tutti i servizi' },
    { path: '/kontakt', label: 'Contatto e offerta' },
  ],
}

export const nav: NavDictionary = {
  serviceGroups,
  menu,
  footer,
  contactForm,
  notFound,
  languageSwitch: 'Lingua',
  languageSwitchFooter: 'Lingua nel piè di pagina',
  chrome: {
    skip: 'Vai al contenuto',
    answer: `Risposta ${responseTime}`,
    seat: `Sede a ${company.address.city}`,
    megaTitle: 'Offerta sul posto',
    megaText: 'Visitiamo il vostro immobile e allestiamo un’offerta scritta, gratuita e senza impegno.',
    premiumTeaser: 'Pulizia e cura discrete per ville, jet privati e yacht.',
    heroLanguages: 'Consulenza nella Sua lingua',
    phone: 'Telefono',
    email: 'E-mail',
    address: 'Indirizzo',
    contactEyebrow: 'Contatto',
    trust: [
      { key: 'seit', label: 'Dal 2006', text: 'Pulizia e custodia di stabili' },
      { key: 'versichert', label: 'CHF 10 milioni', text: 'Responsabilità civile' },
      { key: 'register', label: 'Iscritta', text: 'Registro di commercio di Lucerna' },
      { key: 'sprachen', label: 'Quattro lingue', text: 'Tedesco, inglese, francese, italiano' },
      { key: 'antwort', label: '24 ore', text: 'Risposta nei giorni feriali' },
      { key: 'offerte', label: 'Gratuita', text: 'Offerta dopo il sopralluogo' },
    ],
    mobileCta: 'Richiedere un’offerta',
    scrollHint: 'Scorri',
  },
  errorPage: { title: 'Siamo spiacenti, si è verificato un errore.', reload: 'Ricarica la pagina' },
}
