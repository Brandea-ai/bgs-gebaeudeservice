import { company, premiumLabel } from '../../shared/company'
import type { NavDictionary, NavLink } from '../de/navigation'
import { responseTime } from './common'

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
      { path: '/leistungen/sonderreinigungen', label: 'Pulizie speciali' },
      { path: '/leistungen/baureinigung', label: 'Pulizia di cantiere e di fine cantiere' },
      { path: '/leistungen/fenster-und-fassadenreinigung', label: 'Finestre e facciate' },
      { path: '/leistungen/industrie-und-hallenreinigung', label: 'Industria e capannoni' },
    ],
  },
  {
    title: 'Custodia e cura',
    links: [
      { path: '/leistungen/hauswartung', label: 'Custodia di stabili' },
      { path: '/leistungen/aussen-und-gruenflaechenpflege', label: 'Cura delle aree esterne e verdi' },
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
  about: `Pulizia e custodia di stabili per aziende e clienti privati esigenti. Sede a ${company.address.city}.`,
  companyLinks: [
    { path: '/ueber-uns', label: 'Chi siamo' },
    { path: '/kontakt', label: 'Contatto' },
    { path: '/blog', label: 'Guida' },
  ],
  areaTitle: 'Zona d’intervento',
  areaLink: { path: '/einzugsgebiet', label: 'Lucerna, Zugo, Argovia, Nidvaldo e Obvaldo' },
  rights: `${company.legalName}. Tutti i diritti riservati.`,
  legal: [
    { path: '/impressum', label: 'Note legali' },
    { path: '/datenschutz', label: 'Protezione dei dati' },
  ],
}

/** Modulo di contatto nel piè di pagina. I valori (value) restano in tedesco per l’e-mail. */
const contactForm: NavDictionary['contactForm'] = {
  title: 'Contattateci ora',
  intro: `Richieda un’offerta senza impegno. La contattiamo ${responseTime}.`,
  choose: 'Selezioni...',
  fields: {
    name: { label: 'Nome *', placeholder: 'Nome e cognome' },
    email: { label: 'E-mail *', placeholder: 'nome@azienda.ch' },
    phone: { label: 'Telefono', placeholder: 'Il Suo numero di telefono' },
    service: { label: 'Servizio desiderato' },
    location: { label: 'Località o NPA dell’oggetto', placeholder: 'ad es. 6300 Zugo' },
    frequency: { label: 'Cadenza' },
    message: { label: 'Il Suo messaggio *', placeholder: 'Descriva la Sua richiesta...' },
  },
  serviceOptions: [
    {
      group: 'Premium',
      options: [
        { value: 'Luxusimmobilien', label: 'Immobili di pregio (ville, loft)' },
        { value: 'Privatjet-Reinigung', label: 'Pulizia di jet privati' },
        { value: 'Yacht-Reinigung', label: 'Pulizia di yacht' },
        { value: 'Zweitwohnungen und Residences', label: 'Residenze secondarie e residences' },
        { value: 'Hotels', label: 'Alberghi' },
      ],
    },
    {
      group: 'Pulizia e custodia',
      options: [
        { value: 'Unterhaltsreinigung', label: 'Pulizia di manutenzione' },
        { value: 'Büroreinigung', label: 'Pulizia di uffici e studi' },
        { value: 'Sonderreinigungen', label: 'Pulizie speciali (a fondo, di fine locazione)' },
        { value: 'Baureinigung', label: 'Pulizia di cantiere e di fine cantiere' },
        { value: 'Fenster- und Fassadenreinigung', label: 'Pulizia di finestre e facciate' },
        { value: 'Industrie- und Hallenreinigung', label: 'Pulizia industriale, di capannoni e macchinari' },
        { value: 'Hauswartung', label: 'Custodia di stabili' },
        { value: 'Aussen- und Grünflächenpflege', label: 'Cura delle aree esterne e verdi' },
        { value: 'Facility Services', label: 'Facility services (più servizi)' },
      ],
    },
    {
      group: 'Altro',
      options: [
        { value: 'Beratung', label: 'Consulenza' },
        { value: 'Andere', label: 'Altro' },
      ],
    },
  ],
  frequencyOptions: ['Una tantum', 'Settimanale', 'Più volte alla settimana', 'Giornaliera', 'Ancora da definire'],
  consentBefore: 'Ho preso conoscenza della',
  consentLink: 'informativa sulla protezione dei dati',
  consentAfter: 'e acconsento che i miei dati siano utilizzati per il trattamento della mia richiesta. *',
  required: '* Campi obbligatori',
  submit: 'Invia messaggio',
  sending: 'Invio in corso...',
  success: `Grazie mille! Il Suo messaggio è stato inviato. La contattiamo ${responseTime}.`,
  error: `Non è stato possibile inviare il Suo messaggio. La preghiamo di telefonarci (${company.phone.display}) o di scrivere a ${company.email}.`,
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
}
