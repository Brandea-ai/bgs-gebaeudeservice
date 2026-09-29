import { company, premiumLabel } from '../../shared/company'
import type { NavDictionary } from '../de/navigation'
import { cantonList, responseTime } from './common'

/**
 * Textes du menu, du pied de page, du formulaire de contact et de la page 404
 * en français (M60). Les adresses (path) et les valeurs du formulaire restent
 * en allemand, seuls les libellés sont traduits.
 */
const areaMenu: NavDictionary['areaMenu'] = {
  label: 'Zone d’intervention',
  cantonsTitle: 'Cantons',
  cantons: {
    luzern: { label: 'Lucerne', text: 'Notre siège : ville, agglomération et rives du lac' },
    zug: { label: 'Zoug', text: 'Bureaux, sièges d’entreprise et habitat au bord du lac' },
    aargau: { label: 'Argovie', text: 'Industrie, halles, entrepôts et immeubles' },
    nidwalden: { label: 'Nidwald', text: 'Rives du lac, résidences secondaires et conciergerie' },
    obwalden: { label: 'Obwald', text: 'Sarnen, Engelberg, résidences secondaires et hôtels' },
  },
  overview: { path: '/einzugsgebiet', label: 'Toute la zone d’intervention' },
  overviewText: 'Carte, localités au bord des lacs et tous les cantons en bref',
  seatTitle: 'Notre siège',
  seatText: 'D’ici, nous intervenons dans cinq cantons, avec toutes nos prestations et partout aux mêmes conditions.',
}

export const nav: NavDictionary = {
  serviceGroups: [
    {
      title: 'Nettoyage',
      links: [
        { path: '/leistungen/unterhaltsreinigung', label: 'Nettoyage d’entretien' },
        { path: '/leistungen/bueroreinigung', label: 'Nettoyage de bureaux et de cabinets' },
        { path: '/leistungen/sonderreinigungen', label: 'Nettoyages en profondeur et spéciaux' },
        { path: '/leistungen/umzugsreinigung', label: 'Nettoyage de fin de bail' },
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
      { path: '/ueber-uns', label: 'À propos' },
      { path: '/blog', label: 'Guide' },
    ],
    cta: { href: '#kontakt-formular', label: 'Demander un devis' },
    open: 'Ouvrir le menu',
    close: 'Fermer le menu',
    label: 'Menu principal',
  },
  areaMenu,
  footer: {
    newBrandLine: `Une marque de ${company.legalName}`,
    about: `Nettoyage et conciergerie pour les entreprises et une clientèle privée exigeante. Siège à ${company.seat} LU, actifs dans les cantons de ${cantonList}.`,
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
    intro: 'Décrivez-nous le bien et votre demande. Ces indications nous permettent de préparer la visite.',
    premiumIntro: 'Indiquez-nous le bien, son emplacement et l’intervention souhaitée. Ces indications nous permettent de comprendre votre demande.',
    additionalDetails: 'Informations complémentaires (facultatif)',
    choose: 'Veuillez choisir…',
    fields: {
      role: { label: 'Vous êtes *' },
      name: { label: 'Nom *', placeholder: 'Vos prénom et nom' },
      email: { label: 'E-mail *', placeholder: 'nom@entreprise.ch' },
      phone: { label: 'Téléphone', placeholder: 'Votre numéro de téléphone' },
      service: { label: 'Prestation souhaitée' },
      size: { label: 'Taille du bien', placeholder: 'p. ex. 12 appartements ou 800 m²' },
      location: { label: 'Lieu ou NPA du bien', placeholder: 'p. ex. 6300 Zoug' },
      frequency: { label: 'Fréquence souhaitée' },
      message: {
        label: 'Bien et demande *',
        placeholder: 'Par exemple : cage d’escalier et buanderie de deux immeubles locatifs, chaque semaine, dès janvier',
        hint: 'Le plus simple pour les plans, listes de surfaces ou photos est de nous les envoyer par e-mail à',
      },
    },
    roleOptions: {
      Verwaltung: 'Gérance',
      Stockwerkeigentümerschaft: 'Communauté de PPE',
      Eigentümer: 'Propriétaire',
      Unternehmen: 'Entreprise',
      'Premium-Privatkunde': 'Particulier (villa, résidence secondaire, yacht ou jet)',
    },
    premiumPlaceholders: {
      '/premium': {
        size: 'p. ex. villa, 400 m² habitables',
        message: 'Par exemple : résidence secondaire au bord du lac, entretien pendant votre absence, premier rendez-vous au printemps',
      },
      '/premium/luxusimmobilien': {
        size: 'p. ex. villa, 400 m² sur 3 niveaux',
        message: 'Par exemple : villa au bord du lac de Zoug, parquet et pierre naturelle, chaque semaine pendant votre absence',
      },
      '/premium/privatjet': {
        size: 'p. ex. modèle, longueur de cabine',
        message: 'Par exemple : cabine et galley après chaque vol, lieu de stationnement de l’avion, horaires souhaités',
      },
      '/premium/yacht': {
        size: 'p. ex. yacht à moteur de 14 m',
        message: 'Par exemple : place d’amarrage sur le lac des Quatre-Cantons, nettoyage avant le début de la saison et après des événements à bord',
      },
    },
    oneOffTitle: 'Date de l’intervention',
    oneOffHint: 'Veuillez indiquer dans votre demande la date de nettoyage souhaitée ou celle de la remise.',
    oneOffPlaceholders: {
      'Sonderreinigungen': {
        size: 'p. ex. 180 m² de sol en pierre naturelle',
        message: 'Par exemple\u202f: traces de calcaire sur la pierre naturelle de l’entrée, environ 180 m², nettoyage avant la réouverture le 15 octobre',
      },
      'Umzugsreinigung': {
        size: 'p. ex. 4 appartements de 80 m² chacun',
        message: 'Par exemple\u202f: nettoyage final de quatre appartements pour une gérance, remise le 30 novembre, nettoyage la semaine précédente',
      },
      'Baureinigung': {
        size: 'p. ex. 600 m² sur 2 niveaux',
        message: 'Par exemple\u202f: nettoyage de fin de chantier de bureaux après l’aménagement, travaux terminés le 10 octobre, remise le 16 octobre',
      },
    },
    serviceOptions: [
      {
        group: 'Nettoyage et conciergerie',
        options: [
          { value: 'Unterhaltsreinigung', label: 'Nettoyage d’entretien' },
          { value: 'Büroreinigung', label: 'Nettoyage de bureaux et de cabinets' },
          { value: 'Sonderreinigungen', label: 'Nettoyages en profondeur et spéciaux' },
          { value: 'Umzugsreinigung', label: 'Nettoyage de fin de bail avec garantie de remise' },
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
    success: `Merci, votre demande a été transmise. Nous vous répondrons. En cas d’urgence, vous nous joignez au ${company.phone.display}.`,
    nextTitle: "La suite",
    nextSteps: [`Nous vous répondons ${responseTime}.`, 'Nous visitons le bien sur place, gratuitement.', 'Vous recevez un devis écrit.'],
    nextStepPlain: 'Nous vous répondons et convenons du rendez-vous.',
    premiumVisitStep: 'Nous précisons avec vous les besoins d’entretien, le lieu et l’accès.',
    band: {
      title: 'Des questions ou un devis ?',
      text: 'Appelez-nous, écrivez-nous ou utilisez le formulaire de la page de contact.',
      action: 'Vers le formulaire',
    },
    mapLink: 'Vers la carte',
    successTitle: 'Demande reçue',
    errors: {
      required: 'Veuillez remplir ce champ.',
      role: 'Veuillez indiquer qui fait la demande.',
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
    answer: 'Conseil en quatre langues',
    seat: `Siège à ${company.seat} LU`,
    megaTitle: 'Devis sur place',
    megaText: 'Nous visitons votre bien et établissons un devis écrit, gratuit et sans engagement.',
    premiumTeaser: 'Nettoyage et entretien discrets pour villas, jets privés et yachts.',
    heroLanguages: 'Conseil dans votre langue',
    faqMore: 'Votre question n’y figure pas ? Appelez-nous ou écrivez-nous.',
    phone: 'Téléphone',
    email: 'E-mail',
    address: 'Adresse',
    mobile: 'Mobile',
    hours: 'Horaires',
    hoursValue: 'Lun au ven 8 h à 19 h, sam 9 h à 17 h',
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
