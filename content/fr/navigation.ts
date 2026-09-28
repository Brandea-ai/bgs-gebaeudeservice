import { company, premiumLabel } from '../../shared/company'
import type { NavDictionary } from '../de/navigation'
import { cantonList, responseTime } from './common'

/**
 * Textes du menu, du pied de page, du formulaire de contact et de la page 404
 * en français (M60). Les adresses (path) et les valeurs du formulaire restent
 * en allemand, seuls les libellés sont traduits.
 */
export const nav: NavDictionary = {
  serviceGroups: [
    {
      title: 'Nettoyage',
      links: [
        { path: '/leistungen/unterhaltsreinigung', label: 'Nettoyage d’entretien' },
        { path: '/leistungen/bueroreinigung', label: 'Nettoyage de bureaux et de cabinets' },
        { path: '/leistungen/sonderreinigungen', label: 'Nettoyages spéciaux' },
        { path: '/leistungen/baureinigung', label: 'Nettoyage de chantier et de fin de chantier' },
        { path: '/leistungen/fenster-und-fassadenreinigung', label: 'Vitres et façades' },
        { path: '/leistungen/industrie-und-hallenreinigung', label: 'Industrie et halles' },
      ],
    },
    {
      title: 'Conciergerie et entretien',
      links: [
        { path: '/leistungen/hauswartung', label: 'Conciergerie' },
        { path: '/leistungen/aussen-und-gruenflaechenpflege', label: 'Entretien des extérieurs et des espaces verts' },
        { path: '/leistungen/facility-services', label: 'Facility services' },
        { path: '/leistungen', label: 'Toutes les prestations' },
      ],
    },
    {
      title: premiumLabel,
      links: [
        { path: '/premium', label: 'L’offre Premium en bref' },
        { path: '/premium/luxusimmobilien', label: 'Biens de prestige' },
        { path: '/premium/privatjet', label: 'Nettoyage de jets privés' },
        { path: '/premium/yacht', label: 'Nettoyage de yachts' },
      ],
    },
  ],
  menu: {
    home: { path: '/', label: 'Accueil' },
    services: 'Prestations',
    after: [
      { path: '/einzugsgebiet', label: 'Zone d’intervention' },
      { path: '/ueber-uns', label: 'À propos' },
      { path: '/blog', label: 'Guide' },
    ],
    cta: { href: '#kontakt-formular', label: 'Demander un devis' },
    open: 'Ouvrir le menu',
    close: 'Fermer le menu',
    label: 'Menu principal',
  },
  footer: {
    newBrandLine: `Une marque de ${company.legalName}`,
    about: `Nettoyage et conciergerie pour les entreprises et une clientèle privée exigeante. Siège à ${company.address.city}, actifs dans les cantons de ${cantonList}.`,
    companyLinks: [
      { path: '/ueber-uns', label: 'À propos' },
      { path: '/kontakt', label: 'Contact' },
      { path: '/blog', label: 'Guide' },
    ],
    areaTitle: 'Entreprise',
    areaLink: { path: '/einzugsgebiet', label: 'Zone d’intervention' },
    rights: `${company.legalName}. Tous droits réservés.`,
    legal: [
      { path: '/impressum', label: 'Mentions légales' },
      { path: '/datenschutz', label: 'Protection des données' },
    ],
  },
  contactForm: {
    title: 'Demander un devis',
    intro: `Décrivez-nous le bien et votre demande. Nous vous répondons ${responseTime} et convenons de la visite, gratuitement et sans engagement.`,
    choose: 'Veuillez choisir…',
    fields: {
      name: { label: 'Nom *', placeholder: 'Vos prénom et nom' },
      email: { label: 'E-mail *', placeholder: 'nom@entreprise.ch' },
      phone: { label: 'Téléphone', placeholder: 'Votre numéro de téléphone' },
      service: { label: 'Prestation souhaitée' },
      location: { label: 'Lieu ou NPA du bien', placeholder: 'p. ex. 6300 Zoug' },
      frequency: { label: 'Fréquence souhaitée' },
      message: { label: 'Bien et demande *', placeholder: 'Par exemple : type de bien, surface approximative ou nombre d’appartements, fréquence souhaitée et date de début' },
    },
    serviceOptions: [
      {
        group: 'Nettoyage et conciergerie',
        options: [
          { value: 'Unterhaltsreinigung', label: 'Nettoyage d’entretien' },
          { value: 'Büroreinigung', label: 'Nettoyage de bureaux et de cabinets' },
          { value: 'Sonderreinigungen', label: 'Nettoyages spéciaux (en profondeur, de fin de bail)' },
          { value: 'Baureinigung', label: 'Nettoyage de chantier et de fin de chantier' },
          { value: 'Fenster- und Fassadenreinigung', label: 'Nettoyage de vitres et de façades' },
          { value: 'Industrie- und Hallenreinigung', label: 'Nettoyage industriel, de halles et de machines' },
          { value: 'Hauswartung', label: 'Conciergerie' },
          { value: 'Aussen- und Grünflächenpflege', label: 'Entretien des extérieurs et des espaces verts' },
          { value: 'Facility Services', label: 'Facility services (plusieurs prestations)' },
        ],
      },
      {
        group: 'Premium',
        options: [
          { value: 'Luxusimmobilien', label: 'Biens de prestige (villas, lofts)' },
          { value: 'Privatjet-Reinigung', label: 'Nettoyage de jets privés' },
          { value: 'Yacht-Reinigung', label: 'Nettoyage de yachts' },
          { value: 'Zweitwohnungen und Residences', label: 'Résidences secondaires et résidences de standing' },
          { value: 'Hotels', label: 'Hôtels' },
        ],
      },
      {
        group: 'Autres',
        options: [
          { value: 'Beratung', label: 'Conseil' },
          { value: 'Andere', label: 'Autre' },
        ],
      },
    ],
    frequencyOptions: ['Une seule fois', 'Chaque semaine', 'Plusieurs fois par semaine', 'Chaque jour', 'Encore à définir'],
    consentBefore: 'J’ai pris connaissance de la',
    consentLink: 'déclaration de protection des données',
    consentAfter: 'et j’accepte que mes données soient utilisées pour traiter ma demande. *',
    required: '* Champs obligatoires',
    submit: 'Envoyer la demande',
    sending: 'Envoi en cours…',
    success: `Merci, nous avons bien reçu votre demande. Nous vous répondons ${responseTime} et convenons avec vous d’une date pour la visite. En cas d’urgence, vous nous joignez au ${company.phone.display}.`,
    successTitle: 'Demande reçue',
    errors: {
      required: 'Veuillez remplir ce champ.',
      email: 'Veuillez saisir une adresse e-mail valable.',
      consent: 'Veuillez confirmer la déclaration de protection des données afin que nous puissions traiter votre demande.',
      summary: 'Veuillez vérifier les champs signalés.',
    },
    error: `Votre demande n’a pas pu être envoyée. Veuillez nous appeler (${company.phone.display}) ou nous écrire à ${company.email}.`,
  },
  notFound: {
    title: 'Page introuvable',
    text: 'Cette page n’existe pas ou plus. L’un de ces liens vous aidera peut-être.',
    links: [
      { path: '/', label: 'Vers la page d’accueil' },
      { path: '/leistungen', label: 'Toutes les prestations' },
      { path: '/kontakt', label: 'Contact et devis' },
    ],
  },
  languageSwitch: 'Langue',
  languageSwitchFooter: 'Langue en pied de page',
  chrome: {
    skip: 'Aller au contenu',
    answer: `Réponse ${responseTime}`,
    seat: `Siège à ${company.address.city}`,
    megaTitle: 'Devis sur place',
    megaText: 'Nous visitons votre bien et établissons un devis écrit, gratuit et sans engagement.',
    premiumTeaser: 'Nettoyage et entretien discrets pour villas, jets privés et yachts.',
    heroLanguages: 'Conseil dans votre langue',
    phone: 'Téléphone',
    email: 'E-mail',
    address: 'Adresse',
    contactEyebrow: 'Contact',
    trust: [
      { key: 'seit', label: 'Depuis 2006', text: 'Nettoyage et conciergerie' },
      { key: 'versichert', label: 'CHF 10 millions', text: 'Responsabilité civile' },
      { key: 'register', label: 'Inscrite', text: 'Registre du commerce de Lucerne' },
      { key: 'sprachen', label: 'Quatre langues', text: 'Allemand, anglais, français, italien' },
      { key: 'antwort', label: '24 heures', text: 'Réponse les jours ouvrables' },
      { key: 'offerte', label: 'Gratuit', text: 'Devis après visite' },
    ],
    mobileCta: 'Demander un devis',
    scrollHint: 'Défiler',
  },
  errorPage: { title: 'Désolés, une erreur s’est produite.', reload: 'Recharger la page' },
}
