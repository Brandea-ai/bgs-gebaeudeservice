import { company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Step } from '../types'
import type { Dictionary } from '../de'
import { answers, cantonList, premiumLine, register, responseTime, steps, ui } from './common'

/**
 * Textes de la page d’accueil, de « À propos », du contact, de la zone
 * d’intervention et des deux aperçus en français (M60). Traduction fidèle de
 * content/de/seiten.ts, uniquement des affirmations attestées (E18).
 */

type Card = { title: string; text: string }
type LinkCard = Card & { path: PagePath }
type Seiten = Dictionary['seiten']

/** Chiffres attestés (E18, état septembre 2026) */
export const proof = [
  { value: 'Depuis 2006', label: 'Expérience en nettoyage et en conciergerie' },
  { value: 'Plus de 120', label: 'Clients' },
  { value: 'Plus de 50', label: 'Collaboratrices et collaborateurs, quatre langues' },
  { value: 'CHF 10 millions', label: 'Responsabilité civile d’entreprise' },
]

/** Déroulement jusqu’à la première intervention, identique sur l’accueil et le contact (quatre étapes, une vidéo chacune) */
const offerSteps: Step[] = [
  steps.anfrage,
  steps.besichtigung,
  {
    title: 'Accord',
    text: 'Vous examinez le devis en toute tranquillité. Avec votre accord, il est établi quelles prestations nous fournissons, à quelle fréquence et à quels horaires.',
  },
  {
    title: 'Début',
    text: 'Nous fixons la première intervention et convenons avec vous des horaires et de l’accès, par exemple avec une clé ou un badge.',
  },
]

/** Questions identiques sur l’accueil et le contact (E18) */
const faq = {
  schnell: {
    question: 'En combien de temps vais-je recevoir un devis ?',
    answer: `Nous vous répondons ${responseTime} et convenons d’un rendez-vous pour la visite. Vous recevez ensuite le devis par écrit.`,
  },
  kosten: {
    question: 'Combien coûte le nettoyage ?',
    answer: `${answers.kosten} Plus d’informations dans notre guide : [Ce qui détermine le coût d’un nettoyage d’entretien](/blog/reinigungskosten-schweiz).`,
  },
  gebiet: { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  versichert: { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  kurzfristig: {
    question: 'Acceptez-vous aussi des interventions à bref délai ?',
    answer: 'Appelez-nous. Nous voyons avec vous ce qui est possible à bref délai.',
  },
}

export const home = {
  eyebrow: `Nettoyage et conciergerie depuis ${company.address.city}`,
  h1: 'Nettoyage de bâtiments et conciergerie à Lucerne, Zoug et environs',
  lead: 'Des immeubles, des bureaux et des halles propres et entretenus, sans que vous ayez à vous en occuper. Pour les entreprises, les gérances et une clientèle privée exigeante. Nous examinons votre bien et vous remettons un devis écrit.',
  proofTitle: 'En bref',
  services: {
    title: 'Nos prestations',
    intro: 'Nettoyage régulier, interventions ponctuelles et suivi d’immeubles entiers. Choisissez selon votre besoin, nous précisons l’étendue lors de la visite.',
    all: 'Toutes les prestations en bref',
    premium: {
      title: premiumLabel,
      text: 'Des nettoyages pour des exigences particulières, en toute discrétion et dans votre langue : villas, lofts et résidences, jets privés et yachts, ainsi qu’hôtels et family offices.',
      link: 'Vers l’offre Premium',
    },
  },
  audiences: {
    title: 'Pour qui nous travaillons',
    intro: 'Quatre groupes de clients aux attentes différentes. Voici ce que vous y gagnez concrètement.',
    items: [
      {
        key: 'verwaltungen' as const,
        title: 'Gérances et propriétaires par étages',
        text: 'Vous gérez des immeubles et avez besoin de quelqu’un sur place pour veiller à tout.',
        points: [
          'Cage d’escalier, entrée et abords entretenus selon une fréquence fixe',
          'Rondes de contrôle au cours desquelles nous vous signalons les défauts',
          'Nettoyage de fin de bail avec garantie de remise lors d’un changement de locataire',
        ],
        link: { path: '/leistungen/hauswartung' as PagePath, text: 'Vers la conciergerie' },
      },
      {
        key: 'unternehmen' as const,
        title: 'Entreprises',
        text: 'Bureaux, cabinets, commerces et production restent propres, sans que le nettoyage perturbe votre activité.',
        points: [
          'Horaires d’intervention adaptés à vos heures de travail et d’ouverture',
          'Service de réapprovisionnement des consommables',
          'Sur demande, nettoyage, conciergerie et abords dans un seul contrat',
        ],
        link: { path: '/leistungen/bueroreinigung' as PagePath, text: 'Vers le nettoyage de bureaux' },
      },
      {
        key: 'privat' as const,
        title: 'Propriétaires privés',
        text: 'Pour les villas, lofts, résidences et résidences secondaires. Nous ne prenons pas en charge les ménages privés ordinaires.',
        points: [
          'Chez vous, c’est toujours la même équipe qui travaille',
          'Pierre naturelle, parquet et surfaces laquées brillantes, nettoyés dans le respect des matériaux',
          'Clés et alarme selon des règles convenues avec vous',
        ],
        link: { path: '/premium/luxusimmobilien' as PagePath, text: 'Vers les biens de prestige' },
      },
      {
        key: 'premium' as const,
        title: 'Jets privés, yachts et hôtels',
        text: 'Pour des cabines, des ponts et des pièces aux matériaux de grande qualité, qui demandent un soin particulier.',
        points: [
          'Sur demande, avec un accord de confidentialité',
          'Aussi le soir, le week-end et pendant votre absence',
          'Dans les hôtels, interventions avant une ouverture et après une rénovation',
        ],
        link: { path: '/premium' as PagePath, text: 'Vers l’offre Premium' },
      },
    ],
  },
  steps: {
    title: 'Comment obtenir votre devis',
    intro: 'Du premier appel à la première intervention. La visite et le devis sont gratuits et sans engagement.',
    items: offerSteps,
  },
  area: {
    title: 'Notre zone d’intervention',
    text: `Depuis notre siège à ${company.address.city}, nous intervenons dans les cantons de ${cantonList}. Nous proposons toutes nos prestations dans toute la zone, partout aux mêmes conditions.`,
    link: 'Vers la zone d’intervention',
  },
  faq: [
    { question: 'Combien coûte une entreprise de nettoyage à l’heure ?', answer: answers.kostenFaktoren },
    faq.schnell,
    {
      question: 'Ai-je besoin d’un nettoyage d’entretien ou d’une conciergerie ?',
      answer:
        'Le nettoyage d’entretien se fait selon une fréquence fixe. La conciergerie va plus loin : rondes de contrôle, petites réparations, technique du bâtiment, élimination des déchets, états des lieux et entretien des abords. Si vous n’avez besoin que du nettoyage, le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) vous convient.',
    },
    {
      question: 'Nettoyez-vous aussi chez les particuliers ?',
      answer: 'Pas les ménages privés ordinaires. Pour les villas, lofts, résidences et résidences secondaires, nous proposons notre [offre Premium](/premium).',
    },
    faq.kurzfristig,
    { question: 'Nettoyez-vous avec des produits respectueux de l’environnement ?', answer: answers.mittel },
  ],
  cta: {
    title: 'Un devis pour votre bien',
    text: `Décrivez-nous brièvement le bien et votre demande. Nous vous répondons ${responseTime} et passons pour la visite.`,
  },
}

const uidRegister = `https://www.uid.admin.ch/Detail.aspx?uid_id=${company.uid.replace(/[-.]/g, '')}&lang=fr`
const legalNameText = company.legalName.replace(' - ', '\u00a0-\u2060\u00a0')

export const about = {
  h1: 'À propos : nettoyage et conciergerie d’immeubles depuis 2006',
  lead: `Nous nettoyons et entretenons des immeubles, des bureaux, des cabinets et des halles dans les cantons de ${cantonList}.`,
  promises: {
    title: 'Ce sur quoi vous pouvez compter',
    items: [
      { key: 'persoenlich' as const, title: 'Un suivi personnel', text: 'Notre directeur traite personnellement votre demande.' },
      { key: 'offerte' as const, title: 'Un devis après visite', text: 'Nous n’indiquons un prix qu’après avoir vu votre bien. La visite et le devis sont gratuits et sans engagement.' },
      { key: 'gebiet' as const, title: 'Dans toute la zone', text: `Toutes nos prestations dans les cantons de ${cantonList}, partout aux mêmes conditions.` },
      { key: 'versichert' as const, title: 'Assurés', text: answers.versicherung.replace('Oui. ', '') },
      { key: 'sprachen' as const, title: 'Quatre langues', text: answers.sprachen },
      { key: 'umwelt' as const, title: 'Produits respectueux de l’environnement', text: 'Sur demande, nous nettoyons avec des produits respectueux de l’environnement.' },
    ],
  },
  profile: {
    title: 'Profil de l’entreprise',
    items: [
      { value: 'Depuis 2006', label: 'Expérience' },
      { value: 'Plus\u00a0de 50', label: 'Collaboratrices et collaborateurs' },
      // « Plus de » reste groupé ; le montant garde son unité (mesuré à 360, 390, 1024 et 1440 px)
      { value: 'Plus\u00a0de 120', label: 'Clients' },
      { value: 'CHF 10\u00a0mio', label: 'Couverture de la responsabilité civile d’entreprise' },
    ],
    note: 'État : septembre 2026',
  },
  fit: {
    title: 'Quand nous sommes le bon partenaire, et quand nous ne le sommes pas',
    intro: 'Nous préférons le dire avant le premier rendez-vous. Ainsi, personne ne perd de temps avec une demande qui ne nous correspond pas.',
    yesTitle: 'Nous sommes le bon partenaire si vous',
    yes: [
      'faites nettoyer ou entretenir un immeuble en tant que gérance, propriétaire ou communauté de PPE, avec la [conciergerie](/leistungen/hauswartung) et le [nettoyage d’entretien](/leistungen/unterhaltsreinigung)',
      'faites nettoyer des bureaux, des cabinets, des surfaces commerciales ou des halles plusieurs fois par semaine : [nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung), [nettoyage industriel et de halles](/leistungen/industrie-und-hallenreinigung)',
      'souhaitez regrouper nettoyage, conciergerie et entretien des extérieurs dans un seul contrat, sous forme de [facility services](/leistungen/facility-services)',
      'prévoyez une intervention unique, par exemple un [nettoyage en profondeur](/leistungen/sonderreinigungen), le [nettoyage de fin de chantier](/leistungen/baureinigung) avant la remise ou le [nettoyage de fin de bail](/leistungen/umzugsreinigung) entre deux locations',
      `faites entretenir à titre privé une villa, une résidence secondaire ou un yacht, ou nettoyer la cabine de votre jet privé : c’est le rôle de [${premiumLabel}](/premium)`,
    ],
    noTitle: 'Nous ne sommes pas le bon partenaire pour',
    no: [
      'le service hivernal et le déneigement',
      'un service de piquet 24 heures sur 24',
      'le nettoyage de fin de bail d’un seul appartement sur mandat de la locataire ou du locataire',
      'le nettoyage de ménages privés ordinaires',
      'l’aménagement paysager et les nouveaux jardins',
    ],
    note: `Ce qu’une prestation ne comprend pas figure sur sa page, sous [Prestations](/leistungen), dans la rubrique « ${ui.notIncluded} ».`,
  },
  work: {
    title: 'Notre façon de travailler',
    intro: 'Quatre principes qui guident notre façon d’aborder un mandat.',
    items: [
      {
        title: 'D’abord le bien, ensuite le prix',
        paragraphs: [
          'Le travail qu’exige un nettoyage ne se voit que sur place : revêtements de sol et surfaces vitrées, utilisation des locaux, trajets et accès.',
          'Un prix donné au téléphone serait donc souvent inexact, faute de visite. Nous n’en donnons pas.',
          'Le devis suit ce rendez-vous, par écrit et sans frais pour vous.',
        ],
      },
      {
        title: 'Étendue et limites par écrit',
        paragraphs: [
          'Le devis indique les pièces et les tâches, la fréquence et les horaires d’intervention. Avec votre accord, il devient la convention, y compris la manière dont nous accédons au bâtiment, par exemple avec une clé ou un badge.',
          'Ce qui n’est pas compris, nous le disons tout aussi clairement, avec la prestation qui convient.',
          'Le [nettoyage de fin de bail](/leistungen/umzugsreinigung) est assorti de notre garantie de remise : si la gérance émet une réclamation sur notre nettoyage lors de l’état des lieux, nous repassons gratuitement. Le devis précise ce que couvre la garantie.',
        ],
      },
      {
        title: 'Des échanges directs',
        paragraphs: [
          'Notre directeur traite personnellement votre demande.',
          'Si vous regroupez plusieurs prestations sous forme de [facility services](/leistungen/facility-services), vous avez chez nous un seul interlocuteur pour l’ensemble.',
        ],
      },
      {
        title: 'Adapté au matériau',
        paragraphs: [
          'Le marbre et le calcaire ne supportent pas les nettoyants acides, le parquet huilé seulement peu d’eau. Les produits et les appareils dépendent donc du revêtement, pas de l’habitude.',
          'Lors du nettoyage courant, nous réapprovisionnons le papier, le savon et les autres consommables. Qui achète le matériel, vous ou nous, est fixé dans la convention.',
          'Nous utilisons des produits respectueux de l’environnement si vous le souhaitez.',
        ],
      },
    ],
  },
  check: {
    kind: 'table' as const,
    id: 'firmenangaben',
    title: 'Données de l’entreprise à vérifier',
    intro: `${company.premiumBrand ? `${company.brand} est la marque de ${legalNameText}. ` : ''}Pour votre dossier fournisseur : vous trouvez chaque donnée ci-dessous dans le [registre IDE](${uidRegister}) de l’Office fédéral de la statistique, avec le champ où elle figure.`,
    columns: ['Donnée', 'Inscription', 'Champ du registre IDE'],
    rows: [
      ['Raison de commerce', company.legalName, '« Nom »'],
      ['Siège et adresse', `Siège ${company.seat} LU. L’adresse ${company.address.street}, ${company.address.postalCode} ${company.address.city} se trouve dans la commune d’${company.seat}.`, '« Commune » et adresse du siège'],
      ['Numéro du registre du commerce', `${company.registerNumber}, ${register}`, '« Numéro de référence » sous Données du registre du commerce'],
      ['IDE (numéro d’identification des entreprises)', company.uid, '« IDE » sous Caractères clés'],
      // Suffixe TVA comme dans le registre IDE en français et dans les mentions légales (ESTV : MWST, TVA ou IVA)
      ['Numéro TVA', `${company.uid} TVA`, '« Numéro TVA » sous Données TVA'],
    ],
    note: 'Pour contrôler devis et factures : le CO prévoit que la raison de commerce inscrite au registre du commerce figure de manière complète et inchangée dans la correspondance et sur les factures (art. 954a CO). Des abréviations, des logos et des noms commerciaux peuvent s’y ajouter. Selon la loi sur la TVA, une facture mentionne en règle générale aussi le numéro sous lequel l’entreprise est inscrite au registre des assujettis (art. 26 LTVA).',
    sources: [
      { label: `Registre IDE, ${company.uid}`, href: uidRegister },
      { label: 'Art. 954a Code des obligations (CO)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_954_a' },
      { label: 'Art. 26 Loi sur la TVA (LTVA)', href: 'https://www.fedlex.admin.ch/eli/cc/2009/615/fr#art_26' },
    ],
    printable: true,
    updated: '2026-09-28',
  },
  languages: {
    title: 'Quatre langues',
    text: 'Vous pouvez nous poser vos questions et convenir des détails en allemand, anglais, français ou italien. Cela aide les entreprises internationales, les propriétaires domiciliés à l’étranger et les locataires qui préfèrent poser leur question dans leur langue.',
    switchLabel: 'Cette page en',
  },
  region: {
    title: 'Cinq cantons, les mêmes conditions',
    text: `Depuis ${company.address.city}, nous proposons chaque prestation dans toute la zone, aux mêmes conditions de déplacement.`,
    listLabel: 'Les cantons en détail',
    link: 'Zone d’intervention avec carte',
  },
  cta: {
    title: 'Convenir d’une visite',
    text: 'Indiquez-nous le bien, le lieu et la prestation souhaitée. La visite et le devis sont gratuits et sans engagement.',
  },
}

export const contact = {
  h1: 'Contact et devis',
  lead: `Appelez-nous ou écrivez-nous. Nous vous répondons ${responseTime}.`,
  channels: {
    title: 'Comment nous joindre',
    phone: { title: 'Téléphone', hint: 'Pour vos questions et pour convenir d’un rendez-vous de visite.', action: 'Appeler' },
    mobile: { title: 'Mobile', hint: 'Notre numéro mobile, en plus du fixe.', action: 'Appeler' },
    email: { title: 'E-mail', hint: 'Pour les demandes avec documents, par exemple plans, listes de surfaces ou photos.', action: 'Écrire un e-mail' },
    form: { title: 'Formulaire', value: 'Demander un devis', hint: 'Les informations essentielles en quelques champs, la prestation se choisit dans une liste.', action: 'Vers le formulaire' },
    address: { title: 'Adresse', hint: 'Notre siège. La visite a lieu chez vous, sur place.', action: 'Vers la carte' },
  },
  brief: {
    title: 'Ce que votre demande devrait contenir',
    intro: 'Plus vos indications sont précises, mieux nous préparons la visite. S’il manque quelque chose, nous le clarifions ensemble.',
    items: [
      { key: 'objekt' as const, title: 'Bien', text: 'Type de bien, par exemple bureau, cabinet, immeuble locatif, halle ou villa.' },
      { key: 'ort' as const, title: 'Lieu', text: 'Adresse ou numéro postal du bien.' },
      { key: 'groesse' as const, title: 'Taille', text: 'Surface approximative, nombre de pièces, d’appartements ou d’étages.' },
      { key: 'leistung' as const, title: 'Prestation', text: 'Ce qu’il faut faire, par exemple nettoyage d’entretien, conciergerie ou nettoyage ponctuel.' },
      { key: 'rhythmus' as const, title: 'Fréquence et horaires', text: 'À quelle fréquence et quand, par exemple avant le début du travail, le soir ou le week-end.' },
      { key: 'start' as const, title: 'Début', text: 'À partir de quand vous avez besoin de la prestation, pour un nettoyage de chantier ou de fin de bail la date de remise.' },
      { key: 'zugang' as const, title: 'Accès et particularités', text: 'Clé ou badge, sols et matériaux délicats, grandes surfaces vitrées.' },
    ],
    note: 'Vous pouvez nous envoyer plans, listes de surfaces ou photos par e-mail.',
  },
  steps: { title: 'De la demande à la première intervention', items: offerSteps },
  map: {
    title: 'Comment nous trouver',
    text: `Siège à ${company.address.city}. Nous intervenons dans les cantons de ${cantonList}.`,
  },
  faq: [faq.schnell, faq.kosten, faq.gebiet, faq.versichert, faq.kurzfristig],
  cta: {
    title: 'Décrivez-nous votre bien',
    text: `Le bien et votre demande dans le formulaire ci-dessous suffisent. Nous vous répondons ${responseTime} et convenons de la visite.`,
  },
}

export const area = {
  h1: 'Zone d’intervention : Suisse centrale et Argovie',
  lead: `Depuis notre siège à ${company.address.city}, nous intervenons dans les cantons de ${cantonList}. Nous proposons toutes nos prestations dans toute la zone, aux entreprises comme à une clientèle privée exigeante.`,
  cantonsTitle: 'Cantons',
  cantonLabels: ['Canton de Lucerne', 'Canton de Zoug', 'Canton d’Argovie', 'Canton de Nidwald', 'Canton d’Obwald'],
  // Localités par canton (S06) : mêmes localités que places.groups, regroupées ; clés comme company.cantons
  cantonPlaces: {
    Luzern: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Eich'],
    Zug: ['Zoug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'],
    Aargau: ['Meisterschwanden', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'],
    Nidwalden: ['Hergiswil', 'Stansstad', 'Ennetbürgen'],
    Obwalden: ['Engelberg'],
  },
  seatTitle: 'Siège et contact',
  places: {
    title: 'Rives des lacs et lieux de villégiature',
    text: 'Nous sommes aussi à votre service sur les rives des lacs et dans les lieux de villégiature de la région, par exemple pour des villas, des résidences secondaires et des hôtels. Pour des exigences particulières, nous proposons notre [offre Premium](/premium).',
    groups: [
      { title: 'Au bord du lac des Quatre-Cantons', items: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Hergiswil', 'Stansstad', 'Ennetbürgen'] },
      { title: 'Au bord des lacs de Zoug et d’Ägeri', items: ['Zoug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'] },
      { title: 'Au bord des lacs de Sempach et de Hallwil', items: ['Eich', 'Meisterschwanden'] },
      { title: 'Région de Baden et du Mutschellen', items: ['Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
      { title: 'À la montagne', items: ['Engelberg'] },
    ],
  },
  cta: {
    title: 'Votre bien se trouve-t-il dans notre zone ?',
    text: `Décrivez-nous le bien et le lieu. Nous vous répondons ${responseTime} et passons pour la visite, gratuitement et sans engagement.`,
  },
}

export const servicesOverview = {
  h1: 'Nettoyage et conciergerie pour immeubles, bureaux et commerces',
  lead: `Nettoyage régulier, interventions ponctuelles ou suivi d’immeubles entiers : choisissez selon votre besoin. Pour les entreprises, les gérances et les propriétaires des cantons de ${cantonList}. Vous hésitez ? Nous clarifions cela lors de la visite.`,
  groups: [
    {
      title: 'Nettoyage régulier',
      text: 'Pour immeubles, bureaux et surfaces commerciales, selon une fréquence fixe.',
      items: [
        { title: 'Nettoyage d’entretien', path: '/leistungen/unterhaltsreinigung', text: 'Nettoyage régulier d’immeubles et de surfaces commerciales, service de réapprovisionnement compris.' },
        { title: 'Nettoyage de bureaux et de cabinets', path: '/leistungen/bueroreinigung', text: 'Nettoyage de bureaux et de cabinets, en fonction de vos horaires de travail.' },
      ],
    },
    {
      title: 'Nettoyage ponctuel et spécial',
      text: 'Pour la construction, le déménagement, les surfaces vitrées et la production.',
      items: [
        { title: 'Nettoyages en profondeur et spéciaux', path: '/leistungen/sonderreinigungen', text: 'Nettoyage en profondeur de logements, de bureaux et de surfaces commerciales, ponctuel ou à intervalles plus espacés.' },
        { title: 'Nettoyage de fin de bail', path: '/leistungen/umzugsreinigung', text: 'Nettoyage final avant la remise d’un appartement ou d’une surface commerciale, avec garantie de remise.' },
        { title: 'Nettoyage de chantier et de fin de chantier', path: '/leistungen/baureinigung', text: 'Nettoyage pendant et après des travaux de construction ou de transformation.' },
        { title: 'Nettoyage de vitres et de façades', path: '/leistungen/fenster-und-fassadenreinigung', text: 'Fenêtres, surfaces vitrées et façades, aussi à haute pression.' },
        { title: 'Nettoyage industriel et de halles', path: '/leistungen/industrie-und-hallenreinigung', text: 'Halles de production et entrepôts, machines et installations.' },
      ],
    },
    {
      title: 'Suivi d’immeubles',
      text: 'Pour les gérances, les propriétaires et les entreprises qui souhaitent tout confier à un seul prestataire.',
      items: [
        { title: 'Conciergerie', path: '/leistungen/hauswartung', text: 'Rondes de contrôle, cage d’escalier, buanderie, petites réparations, technique du bâtiment, états des lieux, élimination des déchets et abords.' },
        { title: 'Entretien des extérieurs et des espaces verts', path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Entretien des abords et des espaces verts de votre immeuble.' },
        { title: 'Facility services', path: '/leistungen/facility-services', text: 'Plusieurs prestations dans un seul contrat, avec un seul interlocuteur.' },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  guide: {
    title: 'Quelle prestation vous convient ?',
    intro: 'Des situations fréquentes et la prestation qui y répond. Vous hésitez ? Nous clarifions cela lors de la visite.',
    items: [
      { situation: 'La cage d’escalier et les locaux communs doivent être propres en permanence.', path: '/leistungen/unterhaltsreinigung' },
      { situation: 'Le bureau ou le cabinet doit être nettoyé sans perturber l’activité.', path: '/leistungen/bueroreinigung' },
      { situation: 'Un appartement ou une surface commerciale va être remis.', path: '/leistungen/umzugsreinigung' },
      { situation: 'Les sols, les joints et les sanitaires ont besoin d’un nettoyage minutieux.', path: '/leistungen/sonderreinigungen' },
      { situation: 'Une construction neuve ou une transformation arrive à la remise.', path: '/leistungen/baureinigung' },
      { situation: 'Les fenêtres, les vitrines ou la façade sont sales.', path: '/leistungen/fenster-und-fassadenreinigung' },
      { situation: 'Une halle, un entrepôt ou des machines doivent être nettoyés.', path: '/leistungen/industrie-und-hallenreinigung' },
      { situation: 'L’immeuble a besoin de quelqu’un qui vérifie régulièrement que tout est en ordre.', path: '/leistungen/hauswartung' },
      { situation: 'Le gazon, les haies, les chemins et les places doivent être entretenus.', path: '/leistungen/aussen-und-gruenflaechenpflege' },
      { situation: 'Le nettoyage, la conciergerie et les abords doivent venir d’un seul prestataire.', path: '/leistungen/facility-services' },
    ] satisfies { situation: string; path: PagePath }[] as { situation: string; path: PagePath }[],
  },
  principles: {
    title: 'Identique pour chaque prestation',
    items: [
      { title: 'Visite avant le devis', text: 'Nous examinons le bien avant d’indiquer un prix. La visite et le devis sont gratuits et sans engagement.' },
      { title: 'Étendue par écrit', text: 'Ce que nous prenons en charge et à quelle fréquence, nous le fixons dans le devis.' },
      { title: 'Demande personnelle', text: `Notre directeur traite personnellement votre demande, vous recevez une réponse ${responseTime}.` },
      { title: 'Fréquence selon l’utilisation', text: 'La fréquence de nos passages dépend de l’utilisation de votre bien. Si elle change, nous adaptons avec vous l’étendue et la fréquence.' },
      { title: 'Écologique sur demande', text: 'Sur demande, nous nettoyons avec des produits respectueux de l’environnement.' },
      { title: 'Des limites claires', text: 'Chaque page de prestation indique aussi ce qui n’est pas compris, par exemple le service hivernal ou l’entretien des installations techniques.' },
    ] satisfies Card[] as Card[],
  },
  faq: [
    { question: 'Combien coûtent vos prestations ?', answer: answers.kosten },
    {
      question: 'Puis-je combiner plusieurs prestations ?',
      answer: 'Oui. Avec les [facility services](/leistungen/facility-services), le nettoyage, la conciergerie et l’entretien des abords figurent dans un seul contrat, avec un seul interlocuteur.',
    },
    {
      question: 'Nettoyez-vous aussi chez les particuliers ?',
      answer: 'Les ménages privés uniquement dans le cadre de notre [offre Premium](/premium), pour les villas, les lofts et les résidences.',
    },
    { question: 'Proposez-vous un service hivernal ?', answer: 'Non. Le service hivernal ne fait pas partie de notre offre.' },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  ] as { question: string; answer: string }[],
  premium: {
    title: 'Villas, jets privés ou yachts ?',
    text: 'Pour des exigences particulières, nous proposons notre offre Premium.',
    detail: 'Villas et résidences, cabines de jets privés, yachts sur le lac des Quatre-Cantons et le lac de Zoug. Toujours la même équipe, en toute discrétion et avec la connaissance des matériaux délicats.',
    link: 'Vers l’offre Premium',
  },
  cta: {
    title: 'Vous ne savez pas exactement ce dont vous avez besoin ?',
    text: `Décrivez-nous le bien et votre demande. Nous passons chez vous, clarifions l’étendue avec vous et vous répondons ${responseTime}.`,
  },
}

const promises: Seiten['premiumOverview']['promises'] = [
  { key: 'persoenlich', title: 'Un suivi personnel', text: 'Notre directeur traite personnellement votre demande.' },
  { key: 'diskret', title: 'Discrétion', text: 'Sur demande, nous signons un accord de confidentialité.' },
  { key: 'teams', title: 'Des équipes fixes', text: 'Chez vous, c’est toujours la même équipe qui travaille.' },
  { key: 'personal', title: 'Du personnel vérifié', text: 'Les personnes qui interviennent chez vous ont été vérifiées par nos soins.' },
  { key: 'schluessel', title: 'Clés et alarme', text: 'Selon des règles fixes, convenues avec vous.' },
  { key: 'zeiten', title: 'À vos horaires', text: 'Aussi le soir, le week-end et pendant votre absence.' },
  { key: 'material', title: 'Connaissance des matériaux', text: 'Pierre naturelle, parquet et surfaces laquées brillantes, pour les bateaux teck, gelcoat et sellerie.' },
  { key: 'sprachen', title: 'Quatre langues', text: 'Allemand, anglais, français et italien.' },
  { key: 'versichert', title: 'Assurés', text: 'Responsabilité civile d’entreprise avec une couverture de CHF 10 millions.' },
  { key: 'offerte', title: 'Devis sur place', text: 'Gratuit et sans engagement, après une visite.' },
]

export const premiumOverview = {
  line: premiumLine,
  h1: 'Des nettoyages pour des exigences particulières',
  lead: 'Pour les villas et les résidences, les résidences secondaires, les hôtels aux souhaits particuliers, les family offices, les jets privés et les yachts. Toujours la même équipe, en toute discrétion, avec la connaissance des matériaux délicats et dans votre langue.',
  nameMeaning: company.premiumBrand
    ? `Le nom ${company.premiumBrand} vient du latin « clavis », la clé. Vous nous confiez votre maison, nous en prenons soin comme si c’était la nôtre.`
    : null,
  offers: [
    { title: 'Biens de prestige', path: '/premium/luxusimmobilien', text: 'Villas, lofts et résidences, régulièrement ou avant des événements particuliers, avec l’entretien des matériaux délicats.' },
    { title: 'Jet privé', path: '/premium/privatjet', text: 'Nettoyage de cabine dans le respect des matériaux haut de gamme, en accord avec vous.' },
    { title: 'Yacht', path: '/premium/yacht', text: 'Nettoyage de bateaux et de yachts sur le lac des Quatre-Cantons et le lac de Zoug.' },
  ] satisfies LinkCard[],
  moreTitle: 'Également pour',
  more: [
    { title: 'Résidences secondaires et résidences de standing', text: 'Nettoyage avant votre arrivée et après votre départ, rondes de contrôle pendant votre absence.' },
    { title: 'Hôtels', text: 'Nettoyages spéciaux et en profondeur, interventions avant une ouverture et après des rénovations.' },
    { title: 'Bureaux et family offices', text: 'En toute confidentialité, en dehors de vos heures de travail, avec des équipes fixes.' },
    { title: 'Pièces abritant des œuvres d’art et des antiquités', text: 'Nettoyage soigneux des pièces, les œuvres d’art uniquement avec votre accord.' },
    { title: 'Événements privés', text: 'Nettoyage avant et après l’événement, aussi le week-end.' },
    { title: 'Courtiers et gérances', text: 'Nettoyage à bref délai avant une vente, une séance photo ou une remise.' },
  ] satisfies Card[],
  discretion: {
    title: 'La discrétion dès le premier message',
    paragraphs: [
      'Notre directeur traite personnellement votre demande. Sur demande, nous signons un accord de confidentialité.',
      'Chez vous, c’est toujours la même équipe qui travaille, vérifiée par nos soins. Elle connaît votre maison, vos souhaits et les règles pour les clés et le système d’alarme que nous convenons avec vous.',
      'Nous ne nettoyons les œuvres d’art qu’avec votre accord. Les horaires s’adaptent à vous, aussi le soir, le week-end ou pendant votre absence.',
    ],
  },
  promisesTitle: 'Ce sur quoi vous pouvez compter',
  promises,
  places: {
    title: 'Où nous sommes à votre service',
    text: `Au bord du lac des Quatre-Cantons, de Lucerne et Meggen jusqu’à Weggis, Vitznau, Hergiswil et Ennetbürgen, au bord des lacs de Zoug et d’Ägeri, de Zoug et Walchwil jusqu’à Oberägeri, à Engelberg et dans l’ensemble des cantons de ${cantonList}.`,
  },
  cta: {
    title: 'Demandez en toute discrétion',
    text: 'Appelez-nous ou écrivez-nous. Notre directeur traite personnellement votre demande, en toute confidentialité si vous le souhaitez.',
  },
}
