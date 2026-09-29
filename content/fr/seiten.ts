import { company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Step } from '../types'
import type { Dictionary } from '../de'
import { answers, cantonList, languageList, premiumLine, register, responseTime, steps, ui } from './common'

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
  { value: 'Plus de 50', label: 'Collaboratrices et collaborateurs' },
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

export const home: Seiten['home'] = {
  h1: 'Entreprise de nettoyage et conciergerie à Lucerne, Zoug et environs',
  // Phrase de profil citable (T5), la première phrase seulement avec NEW_BRAND, la seconde comme sur la page À propos
  profile: {
    title: 'En bref',
    brand: company.premiumBrand
      ? `${company.brand} est la marque de ${company.legalName}, dont le siège est à ${company.seat} (LU).`
      : null,
    text: `Depuis 2006, nous sommes actifs dans le nettoyage et la conciergerie. Aujourd’hui, plus de 50 collaboratrices et collaborateurs s’occupent de plus de 120 clients dans les cantons de ${cantonList}, en ${languageList}.`,
    facts: [
      { key: 'register', label: 'Registre du commerce', value: `Canton de Lucerne, IDE ${company.uid}` },
      { key: 'persoenlich', label: 'Votre demande', value: 'Une réponse avec les prochaines étapes' },
      { key: 'umwelt', label: 'Produits de nettoyage', value: 'Respectueux de l’environnement sur demande' },
    ],
  },
  services: {
    title: 'Nos prestations',
    intro: 'Dix prestations en trois groupes : ce qui revient régulièrement, ce qui demande une intervention en profondeur et ce dont un immeuble entier a besoin.',
    all: 'Toutes les prestations en bref',
    swipe: 'Faire défiler',
    cards: {
      '/leistungen/unterhaltsreinigung': 'Cage d’escalier, entrée et ascenseur restent propres sans que personne dans l’immeuble ne s’en charge. Nous réapprovisionnons savon et papier.',
      '/leistungen/bueroreinigung': 'Postes de travail, salles de réunion, cuisinettes et salles de consultation, nettoyés à des horaires adaptés à votre activité.',
      '/leistungen/hauswartung': 'Rondes de contrôle, petites réparations, élimination des déchets et participation aux états des lieux.',
      '/leistungen/aussen-und-gruenflaechenpflege': 'Des abords soignés toute l’année, de la première tonte aux feuilles d’automne.',
      '/leistungen/facility-services': 'Plusieurs de nos prestations réunies, avec un seul contrat et un seul interlocuteur.',
    },
    premium: {
      title: premiumLabel,
      text: 'Une ligne à part pour les villas, lofts et résidences, les jets privés et les yachts, ainsi que les hôtels et les family offices. Discrète, avec des équipes fixes.',
      link: 'Vers l’offre Premium',
    },
  },
  audiences: {
    title: 'Pour qui nous travaillons',
    intro: 'Une gérance n’a pas les mêmes besoins qu’une entreprise ou qu’une villa. Choisissez votre groupe.',
    items: [
      {
        key: 'verwaltungen',
        short: 'Gérances',
        title: 'Gérances et communautés de propriétaires par étages',
        text: 'Vous gérez des immeubles d’habitation ou commerciaux pour des propriétaires ou une communauté. Sur place, il faut quelqu’un qui passe régulièrement et signale ce qu’il remarque.',
        points: [
          'Cage d’escalier, buanderie et abords selon une fréquence fixe',
          'Rondes de contrôle régulières, les défauts vous sont signalés directement',
          'Nettoyage final lors d’un changement de locataire, avec garantie de remise',
        ],
        link: { path: '/leistungen/hauswartung', hash: 'pflichtenheft', text: 'Modèle de cahier des charges pour la conciergerie' },
      },
      {
        key: 'unternehmen',
        short: 'Entreprises',
        title: 'Entreprises',
        text: 'Bureaux, cabinets, commerces et production. Le nettoyage s’adapte à votre organisation, et non l’inverse.',
        points: [
          'Horaires d’intervention adaptés à vos heures de travail et d’ouverture',
          'Service de réapprovisionnement des consommables',
          'Halles et machines à des horaires coordonnés avec la production',
        ],
        link: { path: '/leistungen/bueroreinigung', hash: 'leistungsverzeichnis', text: 'Descriptif des prestations pour votre bureau' },
      },
      {
        key: 'premium',
        short: 'Premium',
        title: 'Villas, jets, yachts et hôtels',
        text: 'La pierre naturelle, le parquet, le cuir et les bois précieux ne pardonnent pas un mauvais produit. Pour les entretenir, il faut une équipe qui connaît les matériaux et travaille avec discrétion.',
        points: [
          'Une équipe fixe qui connaît votre maison',
          'Un accord de confidentialité si vous le souhaitez',
          'Dans les hôtels, nettoyage avant l’ouverture et après une rénovation',
        ],
        link: { path: '/premium/luxusimmobilien', hash: 'materialkunde', text: 'Guide des matériaux pour pierre naturelle, parquet et surfaces brillantes' },
      },
    ],
  },
  agreed: {
    title: 'Clairement réglé avant de commencer',
    intro: 'Avant la première intervention, l’essentiel est mis par écrit. Ainsi, la gérance, les propriétaires et notre équipe savent ce qui s’applique.',
    written: {
      title: 'Ce que vous recevez par écrit',
      items: [
        { title: 'Devis', text: 'après la visite, avec l’étendue et le prix' },
        { title: 'Étendue', text: 'quels locaux et quelles tâches sont compris, à quelle fréquence et à quels horaires' },
        { title: 'Conciergerie', text: 'à quelle fréquence nous passons et à qui nous signalons les défauts' },
        { title: 'Réapprovisionnement', text: 'quels articles sont compris et qui les achète' },
        { title: 'Nettoyage de fin de bail', text: 'la garantie de remise et ses modalités' },
      ],
      note: 'Si une surface s’ajoute plus tard, nous complétons la convention par écrit.',
    },
    limits: {
      title: 'Ce que nous ne prenons pas en charge',
      intro: 'Pour que vous ne perdiez pas de temps, nous le disons tout de suite.',
      items: [
        'Service hivernal et déneigement',
        'Un service de piquet joignable jour et nuit pour les urgences',
        'Les nettoyages de fin de bail commandés par les locataires d’appartements individuels',
        'Les ménages privés ordinaires. Nous nous occupons des villas, résidences et résidences secondaires dans notre [offre Premium](/premium).',
        'L’entretien du chauffage, de la ventilation, des ascenseurs et de la protection incendie, les grosses réparations, l’aménagement paysager et les nouvelles plantations',
      ],
    },
  },
  area: {
    title: 'Notre zone d’intervention',
    text: `Depuis ${company.address.city}, nous intervenons dans l’ensemble de cinq cantons, pour toutes nos prestations. Pour chaque canton, vous trouvez des localités, des objets typiques et des conseils de planification.`,
    link: 'Vers la zone d’intervention',
  },
  faq: [
    {
      question: 'Combien coûte une entreprise de nettoyage à l’heure ?',
      answer:
        'Sans connaître le bien, il est impossible de répondre sérieusement. Ce qui compte, c’est le volume de travail : la taille des surfaces, les types de sols, l’intensité d’utilisation, la fréquence et les horaires du nettoyage, et qui fournit les consommables. Le guide [Coûts du nettoyage en Suisse](/blog/reinigungskosten-schweiz) explique l’effet de ces facteurs.',
    },
    {
      question: 'Ai-je besoin d’un nettoyage d’entretien ou d’une conciergerie ?',
      answer:
        'S’il s’agit uniquement de nettoyer, le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) suffit : cage d’escalier, sols et locaux communs selon une fréquence fixe. La [conciergerie](/leistungen/hauswartung) s’occupe en plus de l’immeuble lui-même, avec des rondes de contrôle, de petites réparations, l’élimination des déchets et la participation aux états des lieux.',
    },
    {
      question: 'Quelle prestation convient à mon bien ?',
      answer:
        'Le [guide de notre aperçu des prestations](/leistungen#wegweiser) vous l’indique : il associe dix situations typiques à la prestation adaptée. Sur la même page, un tableau compare les quatre prestations que l’on confond le plus souvent. Si aucune situation ne correspond exactement, décrivez votre bien dans le formulaire ci-dessous.',
    },
    {
      question: 'Puis-je vous confier une intervention unique ?',
      answer:
        'Oui, par exemple un [nettoyage en profondeur](/leistungen/sonderreinigungen), un [nettoyage de fin de bail](/leistungen/umzugsreinigung) avant une remise, un [nettoyage de chantier](/leistungen/baureinigung) après une construction ou une transformation, ou un [nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung). Un contrat de nettoyage régulier n’est pas nécessaire pour cela.',
    },
    {
      question: 'Dois-je commander plusieurs prestations ensemble ?',
      answer:
        'Non. Vous pouvez commander chaque prestation séparément, par exemple uniquement le nettoyage des vitres ou uniquement l’entretien des extérieurs. Si vous en avez besoin de plusieurs pour le même immeuble, elles peuvent être regroupées en [facility services](/leistungen/facility-services) : un seul contrat au lieu de plusieurs.',
    },
    {
      question: 'À quoi faut-il veiller en choisissant une entreprise de nettoyage ?',
      answer:
        'Avant tout, à des devis réellement comparables. Ce n’est possible que si chaque prestataire a vu le bien et se base sur les mêmes locaux, la même fréquence et les mêmes horaires. Les autres questions à poser, de l’assurance jusqu’au contrat, figurent dans le guide [Comment trouver la bonne entreprise de nettoyage ?](/blog/richtige-reinigungsfirma-finden).',
    },
  ],
  cta: {
    title: 'Un devis pour votre bien',
    text: 'Décrivez brièvement le bien, le lieu et votre besoin. Nous convenons ensuite avec vous de la date de la visite.',
  },
}

const uidRegister = `https://www.uid.admin.ch/Detail.aspx?uid_id=${company.uid.replace(/[-.]/g, '')}&lang=fr`
const legalNameText = company.legalName.replace(' - ', '\u00a0-\u2060\u00a0')

export const about = {
  h1: 'À propos : nettoyage et conciergerie d’immeubles depuis 2006',
  lead: `Nous nettoyons et entretenons des immeubles, des bureaux, des cabinets et des halles dans les cantons de ${cantonList}.`,
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
          'Nous répondons à votre demande concernant votre bien et les prochaines étapes.',
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

/** Kontakt (E80, Audit Inhalt 9, Audit visuell /kontakt), Übersetzung von content/de/seiten.ts */
export const contact = {
  h1: 'Contact et devis',
  lead: `Par téléphone, e-mail ou formulaire. Vous recevez une réponse ${responseTime}.`,
  channels: {
    title: 'Comment nous joindre',
    phone: { title: 'Téléphone', mobile: 'Mobile', hint: 'Pour vos questions et pour convenir du rendez-vous de visite.', action: 'Appeler' },
    email: { title: 'E-mail', hint: 'Pour les demandes avec documents, comme plans, listes de surfaces ou photos.', action: 'Écrire un e-mail' },
    address: { title: 'Adresse', hint: 'C’est notre adresse professionnelle. La visite a lieu chez vous, sur place.', action: 'Vers la carte' },
  },
  brief: {
    title: 'Ce qu’il faut indiquer dans la demande',
    items: [
      { key: 'rolle' as const, title: 'Qui demande', text: 'gérance, communauté de PPE, propriétaire, entreprise ou particulier avec villa, résidence secondaire, yacht ou jet.' },
      { key: 'objekt' as const, title: 'Bien', text: 'bureau, cabinet, immeuble locatif, halle ou villa.' },
      { key: 'ort' as const, title: 'Lieu', text: 'adresse ou NPA.' },
      { key: 'groesse' as const, title: 'Taille', text: 'surface en m², nombre d’appartements, d’étages ou d’immeubles.' },
      { key: 'leistung' as const, title: 'Prestation', text: 'par exemple nettoyage d’entretien, conciergerie ou nettoyage ponctuel.' },
      { key: 'rhythmus' as const, title: 'Fréquence ou occasion', text: 'une intervention ponctuelle ou un nettoyage régulier, avec les horaires souhaités.' },
      { key: 'start' as const, title: 'Date souhaitée', text: 'date du nettoyage ou début de l’entretien régulier, ainsi que la date de remise pour un chantier ou une fin de bail.' },
      { key: 'zugang' as const, title: 'Accès et particularités', text: 'clé ou badge, sols délicats, grandes surfaces vitrées.' },
    ],
  },
  steps: {
    title: 'Ce qui se passe après l’envoi',
    items: [
      { title: 'Réponse', text: 'Nous vous recontactons pour préciser les détails et convenir d’une date de visite.' },
      { title: 'Visite', text: 'Avec vous ou votre personne de contact, nous parcourons toutes les pièces et surfaces concernées. Nous voyons ainsi leur état, les matériaux et l’accès.' },
      { title: 'Devis', text: 'Nous vous envoyons le devis par écrit. Il indique les pièces et les tâches, à quelle fréquence nous les effectuons et à quels horaires.' },
      { title: 'Début', text: 'Dès votre accord, la date de la première intervention est fixée. Les horaires et l’accès au bien sont alors convenus avec vous.' },
    ] satisfies Step[] as Step[],
  },
  visit: {
    title: 'Préparer la visite',
    intro: 'À préparer pour le rendez-vous sur place :',
    items: [
      'L’accès à toutes les pièces à nettoyer ou à entretenir, y compris cave, galetas, buanderie et locaux techniques',
      'Des plans ou une liste des surfaces, s’il y en a',
      'Le cahier des charges ou le descriptif des prestations actuel, si une entreprise travaille déjà chez vous',
      'Les horaires souhaités et la date de nettoyage ou de remise',
      'Une personne de contact qui peut répondre aux questions sur l’utilisation et l’accès',
    ],
  },
  map: {
    title: 'Comment nous trouver',
    text: `Notre adresse professionnelle se trouve à ${company.address.city}, dans la commune d’${company.seat}. De là, nous nous rendons à votre bien, dans toute notre zone d’intervention.`,
  },
  faq: [
    { question: 'Comment le devis est-il établi ?', answer: 'Nous convenons d’abord avec vous de la date de la visite. Nous rédigeons ensuite le devis sur la base de ce que nous avons vu sur place.' },
    { question: 'Combien me coûte la visite ?', answer: 'Rien. Vous ne payez ni la visite ni le devis, et le devis ne vous engage à rien.' },
    { question: 'Intervenez-vous aussi hors de Lucerne ?', answer: `Oui. Notre zone comprend cinq cantons entiers : ${cantonList}. Toutes les prestations y sont proposées aux mêmes conditions. Les lieux et la carte figurent sur la page [Zone d’intervention](/einzugsgebiet).` },
    { question: 'Avez-vous une assurance responsabilité civile d’entreprise ?', answer: 'Oui, avec une somme d’assurance de CHF 10 millions.' },
    { question: 'Travaillez-vous avec des produits écologiques ?', answer: 'Sur demande, oui. Le mieux est de l’indiquer dès votre demande, sous « Bien et demande ».' },
    { question: 'Dans quelle langue puis-je faire ma demande ?', answer: 'En allemand, anglais, français ou italien. Nous vous conseillons dans votre langue.' },
    { question: 'Est-ce possible à court terme ?', answer: 'Dans ce cas, appelez-nous plutôt que d’écrire. C’est par téléphone que vous saurez le plus vite si une intervention est possible, et quand.' },
  ],
  cta: {
    title: 'Demander un devis de nettoyage',
    text: 'Ces indications nous servent à établir le devis. Laissez vide ce que vous ne savez pas encore.',
  },
}

export const area = {
  h1: 'Zone d’intervention : Suisse centrale et Argovie',
  lead: `Notre zone d’intervention couvre l’ensemble des cantons de ${cantonList}. Toutes nos prestations sont proposées partout, pour les gérances et les entreprises comme dans notre offre Premium.`,
  cantonsTitle: 'Cantons',
  cantonLabels: ['Canton de Lucerne', 'Canton de Zoug', 'Canton d’Argovie', 'Canton de Nidwald', 'Canton d’Obwald'],
  // Localités par canton (S06) : mêmes localités que places.groups, regroupées ; clés comme company.cantons
  cantonPlaces: {
    Luzern: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Eich'],
    Zug: ['Zoug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'],
    Aargau: ['Meisterschwanden', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'],
    Nidwalden: ['Hergiswil', 'Stansstad', 'Ennetbürgen'],
    Obwalden: ['Engelberg'],
  },
  seatTitle: 'Siège et contact',
  seatText: 'Le déplacement depuis Emmenbrücke se fait partout aux mêmes conditions, que ce soit vers Sursee, Baar, Muri ou Engelberg.',
  // Élément 6.1 : uniquement des données qui figurent avec leur source sur les pages cantonales
  vergleich: {
    nav: 'Comparaison',
    title: 'Les cinq cantons en comparaison',
    intro: 'Prestations et conditions sont les mêmes partout, déplacement compris. Les différences portent sur les termes de résiliation sans autre accord dans le bail, les jours fériés et les résidences secondaires, et elles comptent pour le plan de nettoyage.',
    columns: ['Canton', 'Priorité', 'Termes de résiliation', 'Jours fériés : particularité', 'Résidences secondaires > 20 %'],
    rows: [
      ['[Lucerne](/einzugsgebiet/luzern)', 'Habitat, bureaux, cabinets', 'Selon le bail, sinon usage local (art. 266c CO)', 'Saint-Étienne fériée, Saint-Joseph selon commune', 'Flühli, Vitznau, Weggis'],
      ['[Zoug](/einzugsgebiet/zug)', 'Bureaux et sièges', '31.3, 30.6, 30.9', 'Quatre jours assimilés', 'Aucune'],
      ['[Argovie](/einzugsgebiet/aargau)', 'Halles, entrepôts, habitat', 'Selon le bail, sinon usage local (art. 266c CO)', 'Six régimes (districts)', 'Aucune'],
      ['[Nidwald](/einzugsgebiet/nidwalden)', 'Biens au bord du lac, PPE', 'Selon le bail, sinon usage local (art. 266c CO)', 'Saint-Joseph, 19 mars', 'Emmetten'],
      ['[Obwald](/einzugsgebiet/obwalden)', 'Sarneraatal, hôtels à Engelberg', '31.3, 30.6, 30.9', 'Nicolas de Flüe (25.9)', 'Engelberg'],
    ],
    note: 'Les communes n’ont pas l’obligation de déclarer les résidences secondaires comme telles dans le registre des bâtiments. Selon l’ARE, les proportions ne peuvent donc pas être comparées entre communes.',
    sources: ['zgMietrecht', 'owSchlichtung', 'orMiete', 'luRuhetage', 'zgFeiertagsaehnlich', 'agFeiertage', 'nwRuhetage', 'owRuhetage', 'are'] as const,
  },
  places: {
    title: 'Rives des lacs et lieux de villégiature',
    text: 'Selon l’inventaire des logements, plus de la moitié des logements de Flühli avec Sörenberg et d’Engelberg ne sont pas des résidences principales, et près d’un sur trois à Emmetten et à Vitznau. Ce qui compte là-bas, c’est moins un rythme hebdomadaire fixe que le nettoyage avant l’arrivée et après le départ, avec des rondes de contrôle entre-temps. Ces biens relèvent de notre [offre Premium](/premium).',
    sources: ['are'] as const,
    groups: [
      { title: 'Lac des Quatre-Cantons', items: ['Lucerne', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Hergiswil', 'Stansstad', 'Ennetbürgen'] },
      { title: 'Au bord des lacs de Zoug et d’Ägeri', items: ['Zoug', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'] },
      { title: 'Au bord des lacs de Sempach et de Hallwil', items: ['Eich', 'Meisterschwanden'] },
      { title: 'Stations de montagne', items: ['Sörenberg', 'Emmetten', 'Engelberg'] },
    ],
  },
  cta: {
    title: 'Votre bien se trouve-t-il dans notre zone ?',
    text: `Indiquez-nous l’adresse et le type de bien. S’il se trouve dans l’un des cinq cantons, nous vous répondons ${responseTime} et convenons de la visite, gratuitement et sans engagement.`,
  },
}

export const servicesOverview = {
  h1: 'Services de nettoyage et de conciergerie pour immeubles, bureaux et commerces',
  lead: 'Dix prestations pour les gérances, les propriétaires et les entreprises, classées selon le besoin. Vous voyez ici à quoi sert chacune, en quoi des prestations proches se distinguent et ce qui est à faire à quel moment de l’année.',
  groups: [
    {
      title: 'Nettoyage régulier',
      text: 'Un nettoyage récurrent dont la fréquence dépend de l’utilisation.',
      items: [
        {
          title: 'Nettoyage d’entretien',
          path: '/leistungen/unterhaltsreinigung',
          text: 'Pour les immeubles locatifs, les immeubles d’habitation et commerciaux et les surfaces commerciales : nous nettoyons la cage d’escalier, les sols et les locaux annexes, généralement plusieurs fois par semaine, et réapprovisionnons les consommables.',
        },
        {
          title: 'Nettoyage de bureaux et de cabinets',
          path: '/leistungen/bueroreinigung',
          text: 'Bureaux, administrations et cabinets, nettoyés à des horaires qui tiennent compte de vos réunions et de vos heures de consultation.',
        },
      ],
    },
    {
      title: 'Nettoyage ponctuel et spécial',
      text: 'Des interventions liées à une occasion précise, par exemple une remise, la fin d’un chantier ou un arrêt de production.',
      items: [
        {
          title: 'Nettoyages en profondeur et spéciaux',
          path: '/leistungen/sonderreinigungen',
          text: 'Contre le calcaire, la graisse, la saleté dans les joints et les anciennes couches d’entretien que le nettoyage courant des logements, bureaux et surfaces commerciales n’élimine plus.',
        },
        {
          title: 'Nettoyage de fin de bail',
          path: '/leistungen/umzugsreinigung',
          text: 'Nettoyage final d’appartements et de surfaces commerciales avant l’état des lieux, sur mandat de gérances, de propriétaires et d’entreprises. Avec garantie de remise.',
        },
        {
          title: 'Nettoyage de chantier et de fin de chantier',
          path: '/leistungen/baureinigung',
          text: 'Nettoyage pendant les travaux et nettoyage de fin de chantier avant la remise aux locataires, aux acheteurs ou à votre équipe.',
        },
        {
          title: 'Nettoyage de vitres et de façades',
          path: '/leistungen/fenster-und-fassadenreinigung',
          text: 'Fenêtres, vitrines et autres surfaces vitrées, ainsi que façades, au besoin à haute pression. En mandat unique ou à un rythme fixe.',
        },
        {
          title: 'Nettoyage industriel et de halles',
          path: '/leistungen/industrie-und-hallenreinigung',
          text: 'Sols, halles, machines et installations en production et en stockage, en coordination avec les équipes et les arrêts.',
        },
      ],
    },
    {
      title: 'Suivi d’immeubles',
      text: 'Quand quelqu’un doit veiller régulièrement sur l’ensemble de l’immeuble, à l’intérieur comme à l’extérieur.',
      items: [
        {
          title: 'Conciergerie',
          path: '/leistungen/hauswartung',
          text: 'Rondes de contrôle avec rapport à la gérance, cage d’escalier et buanderie, petites réparations, élimination des déchets et états des lieux. Les tâches dépendent de votre immeuble.',
        },
        {
          title: 'Entretien des extérieurs et des espaces verts',
          path: '/leistungen/aussen-und-gruenflaechenpflege',
          text: 'Gazon, haies, plates-bandes, chemins et places, confiés seuls ou avec la conciergerie.',
        },
        {
          title: 'Facility services',
          path: '/leistungen/facility-services',
          text: 'Nettoyage, conciergerie et abords dans un seul contrat. Les installations techniques comme le chauffage, la ventilation ou les ascenseurs n’en font pas partie.',
        },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  carousel: { previous: 'Prestation précédente', next: 'Prestation suivante' },
  guide: {
    show: 'Trouver la bonne prestation',
    hide: 'Masquer les situations',
    title: 'Quelle prestation vous convient ?',
    intro: 'Dix situations fréquentes et la prestation qui y répond.',
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
      { situation: 'Au lieu de plusieurs entreprises, une seule doit tout prendre en charge.', path: '/leistungen/facility-services' },
    ] satisfies { situation: string; path: PagePath }[] as { situation: string; path: PagePath }[],
  },
  toolNav: { vergleich: 'Comparatif', jahresplan: 'Calendrier annuel' },
  tools: [
    {
      kind: 'table',
      id: 'vergleich',
      title: 'Nettoyage, nettoyage en profondeur, conciergerie ou tout ensemble ?',
      intro: 'Quatre prestations faciles à confondre, comparées côte à côte.',
      columns: ['Prestation', 'Quoi', 'Fréquence', 'Occasion typique', 'Non compris'],
      rows: [
        [
          '[Nettoyage d’entretien](/leistungen/unterhaltsreinigung)',
          'Nettoyage selon une fréquence fixe, avec réapprovisionnement',
          'Généralement plusieurs fois par semaine',
          'La cage d’escalier, les parties communes ou la surface commerciale doivent rester propres en permanence',
          'Bureaux et cabinets, nettoyage en profondeur, fenêtres à l’extérieur et façades',
        ],
        [
          '[Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen)',
          'Une intervention approfondie contre le calcaire, la graisse et les anciennes couches',
          'Ponctuel, au besoin renouvelé à de longs intervalles',
          'Avant une relocation ou après une utilisation intensive',
          'Nettoyage courant. Le nettoyage final avant une remise relève du nettoyage de fin de bail',
        ],
        [
          '[Conciergerie](/leistungen/hauswartung)',
          'Suivi de l’immeuble : rondes de contrôle, petites réparations, signalements',
          'Aussi souvent que prévu dans le cahier des charges',
          'Le concierge actuel arrête, ou un immeuble est repris',
          'Service hivernal, piquet jour et nuit, grosses réparations',
        ],
        [
          '[Facility services](/leistungen/facility-services)',
          'Plusieurs de nos prestations dans un seul contrat',
          'Selon la prestation',
          'Plusieurs entreprises doivent être remplacées par une seule',
          'Facility management technique, service hivernal, intermédiation d’artisans',
        ],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'jahresplan',
      title: 'Quel travail à quel moment',
      intro: 'Beaucoup de travaux sur un immeuble ont leur saison. Voici comment ils se répartissent en général sur l’année :',
      entries: [
        {
          label: 'Janvier à mars',
          text: 'Nettoyage en profondeur des bureaux et surfaces commerciales pendant les semaines calmes. Tailler maintenant haies et arbustes : la Station ornithologique de Sempach conseille de tailler les ligneux hors de la période de nidification, idéalement entre novembre et mars.',
        },
        {
          label: 'Avril à juin',
          text: 'Nettoyer fenêtres et vitrages après l’hiver et le pollen. Débarrasser chemins et places de la saleté de l’hiver, tondre le gazon pour la première fois. Ce qui suit au jardin jusqu’à l’automne figure dans le [calendrier d’entretien des extérieurs](/leistungen/aussen-und-gruenflaechenpflege#pflegekalender).',
        },
        {
          label: 'Juillet et août',
          text: 'Nettoyage en profondeur pendant les vacances d’entreprise, halles et machines lors des arrêts planifiés. Enlever les mauvaises herbes dans les joints et sur les places à la main ou avec des appareils, car les herbicides sont interdits sur et le long des chemins et des places. La page [Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege#spritzmittelverbot) montre où les produits de traitement sont interdits et ce qui agit à la place.',
        },
        {
          label: 'Septembre à novembre',
          text: 'Ramasser les feuilles sur les chemins, les places et le gazon, préparer les plates-bandes pour l’hiver et nettoyer les fenêtres avant la saison sombre. En novembre commence la période de taille des haies.',
        },
        {
          label: 'Avant la première neige',
          text: 'Le déneigement et le salage ne font pas partie de notre offre. Confiez à temps le service hivernal à une entreprise qui l’assure.',
        },
        {
          label: 'Autour des termes de résiliation',
          text: 'Le CO prévoit pour les logements un délai de congé de trois mois, pour les locaux commerciaux de six mois, chaque fois pour le terme fixé par l’usage local ou, à défaut, pour la fin d’un trimestre de bail. Le bail peut prévoir des délais plus longs ou d’autres termes. Planifiez le nettoyage final avec la date de remise ; les [termes par canton](/leistungen/umzugsreinigung#kuendigungstermine) figurent sur la page du nettoyage de fin de bail.',
        },
      ],
      note: 'Les mois sont indicatifs. Ce qui est à faire chez vous dépend de l’utilisation, de la situation et du contrat.',
      sources: [
        {
          label: 'Station ornithologique suisse : taille des arbustes et des haies en zone bâtie (en allemand)',
          href: 'https://www.vogelwarte.ch/de/ratgeber/schnitt-von-straeuchern-und-hecken-in-siedlungen-wann-und-wie/',
        },
        { label: 'OFEV : protection des végétaux dans la commune (en allemand)', href: 'https://www.bafu.admin.ch/de/pflanzenschutz-in-der-gemeinde' },
        { label: 'Code des obligations, art. 266a, 266c et 266d (Fedlex)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_266_c' },
      ],
    },
  ] satisfies Seiten['servicesOverview']['tools'] as Seiten['servicesOverview']['tools'],
  principles: {
    title: 'Identique pour chaque prestation',
    items: [
      {
        title: 'Étendue par écrit',
        text: 'Locaux, tâches, fréquence et horaires sont fixés avant de commencer. Si un bureau est transformé ou utilisé autrement, nous adaptons la convention.',
      },
      {
        title: 'Des limites claires',
        text: 'Chaque page de prestation indique aussi ce qui n’est pas compris, par exemple le service hivernal ou l’entretien des installations techniques.',
      },
    ] satisfies Card[] as Card[],
  },
  faq: [
    {
      question: 'De quoi dépendent les coûts des différentes prestations ?',
      answer:
        'Chaque prestation a ses propres facteurs de coût. Pour le nettoyage d’entretien, ce sont la surface, la fréquence, les horaires et les consommables. Pour le nettoyage en profondeur, comptent l’état, le revêtement de sol et la quantité de mobilier à déplacer. La conciergerie dépend des tâches et du nombre de rondes de contrôle, le nettoyage de vitres de la surface vitrée, de la hauteur et de l’accès. Vous recevez donc le prix après la visite, par écrit.',
    },
    {
      question: 'Quelle différence entre nettoyage d’entretien et nettoyage de bureaux ?',
      answer:
        'Le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) s’occupe des surfaces communes d’un immeuble, comme la cage d’escalier, l’entrée, l’ascenseur et la buanderie. Le [nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung) nettoie les locaux où l’on travaille et s’adapte aux heures de travail et d’ouverture. Dans un immeuble commercial, les deux se combinent souvent.',
    },
    {
      question: 'Le nettoyage des vitres fait-il partie du nettoyage d’entretien ?',
      answer:
        'En partie. Les vitrages de l’entrée, par exemple les portes vitrées, en font partie. Les fenêtres à l’extérieur et les façades relèvent du [nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung), ponctuel ou à intervalles fixes.',
    },
    {
      question: 'Que comprennent vos facility services ?',
      answer:
        'Nos propres prestations, réunies selon vos besoins : nettoyage, conciergerie, extérieurs, vitres, nettoyage en profondeur et industriel. Il y a un seul contrat avec un seul interlocuteur. Nous n’entretenons ni chauffage, ni ventilation, ni ascenseurs, et nous ne servons pas d’intermédiaire pour des artisans.',
    },
    {
      question: 'Nettoyez-vous aussi les cabinets médicaux et de thérapie ?',
      answer:
        'Oui, les cabinets font partie du [nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung). Les horaires d’intervention suivent vos heures de consultation. Le retraitement des instruments et des dispositifs médicaux reste l’affaire de votre équipe.',
    },
    {
      question: 'Quand faut-il un nettoyage en profondeur, et quand un nettoyage de fin de bail ?',
      answer:
        'C’est l’occasion qui décide. Le [nettoyage de fin de bail](/leistungen/umzugsreinigung) prépare un appartement ou une surface commerciale à l’état des lieux lors de sa remise, avec garantie de remise. Le [nettoyage en profondeur](/leistungen/sonderreinigungen) ramène sols, joints et sanitaires à un état que le nettoyage courant peut de nouveau maintenir, y compris dans des locaux qui restent utilisés.',
    },
  ] as { question: string; answer: string }[],
  premium: {
    title: 'Villas, jets privés ou yachts ?',
    text: 'Pour une clientèle privée exigeante et pour les hôtels, il existe une ligne à part.',
    detail: 'Villas et résidences, cabines de jets privés, yachts sur le lac des Quatre-Cantons et le lac de Zoug. Avec des équipes fixes qui savent traiter les matériaux délicats.',
    link: 'Vers l’offre Premium',
  },
  cta: {
    title: 'Vous ne savez pas exactement ce dont vous avez besoin ?',
    text: 'Écrivez-nous en quelques phrases de quoi il s’agit. Nous examinons le bien et vous proposons la prestation qui convient.',
  },
}

// Mêmes clés et même ordre que la liste allemande (les six façons de travailler confirmées, E41)
const promises: Seiten['premiumOverview']['promises'] = [
  { key: 'diskret', title: 'Discrétion', text: 'Nous signons un accord de confidentialité si vous le souhaitez.' },
  { key: 'teams', title: 'Des équipes fixes', text: 'Une équipe fixe s’occupe de votre maison, de votre bateau ou de votre cabine.' },
  { key: 'personal', title: 'Du personnel vérifié', text: 'Personne ne travaille chez vous sans avoir été vérifié par nos soins.' },
  { key: 'schluessel', title: 'Clés et alarme', text: 'Remise, conservation et système d’alarme selon des règles convenues avec vous.' },
  { key: 'zeiten', title: 'À vos horaires', text: 'Des interventions aussi le soir, le week-end ou pendant vos voyages.' },
  { key: 'material', title: 'Connaissance des matériaux', text: 'Pierre naturelle, parquet et surfaces laquées brillantes, pour les bateaux teck, gelcoat et sellerie.' },
]

export const premiumOverview: Seiten['premiumOverview'] = {
  line: premiumLine,
  h1: 'Nettoyage premium pour des exigences particulières',
  lead: 'Faire nettoyer une maison, un yacht ou la cabine d’un jet privé, c’est confier ses clés, son agenda et sa vie privée. C’est pourquoi nous travaillons chez vous selon des règles que vous contribuez à fixer.',
  nameMeaning: company.premiumBrand
    ? `Le nom ${company.premiumBrand} vient du latin « clavis », la clé. Vous nous confiez votre maison, nous en prenons soin comme si c’était la nôtre.`
    : null,
  firstMessage: {
    title: 'Cela suffit pour un premier message',
    items: [
      'Maison, bateau ou cabine, avec le lieu ou la place d’amarrage',
      'L’occasion ou le rythme souhaité',
      'À partir de quand vous avez besoin de nous',
      'Les matériaux délicats et les œuvres d’art dont nous devons tenir compte',
    ],
  },
  nav: {
    bereiche: 'Prestations',
    diskretion: 'Discrétion',
    zusagen: 'Méthode',
    ablauf: 'Déroulement',
    fragen: 'Questions',
    orte: 'Lieux',
  },
  offersTitle: 'Maison, cabine ou bateau',
  offers: [
    {
      title: 'Villas et résidences',
      name: 'Nettoyage de villas et de biens de prestige',
      link: 'Voir le nettoyage de villas',
      path: '/premium/luxusimmobilien',
      text: 'Villas, lofts, résidences et résidences secondaires, régulièrement ou avant un événement.',
      detail: 'Pour les demeures avec pierre naturelle, parquet, surfaces brillantes et œuvres d’art. Nous nettoyons régulièrement ou avant une fête ou une vente.',
      notIncluded: 'Non compris : les restaurations, par exemple de tableaux ou de meubles anciens.',
    },
    {
      title: 'Cabines de jets privés',
      name: 'Nettoyage de jets privés',
      link: 'Voir le nettoyage de jets privés',
      path: '/premium/privatjet',
      text: 'La cabine entre deux vols, planifiée avec votre exploitant.',
      detail: 'Cuir, bois laqué, surfaces brillantes et textiles fins se côtoient sur quelques mètres carrés, et souvent seul le temps entre deux vols est disponible. Vous décidez avec votre exploitant quels produits sont autorisés à bord.',
      notIncluded: 'Non compris : le nettoyage extérieur de l’avion.',
    },
    {
      title: 'Yachts et bateaux à moteur',
      name: 'Nettoyage de yachts et de bateaux',
      link: 'Voir le nettoyage de yachts',
      path: '/premium/yacht',
      text: 'L’intérieur et le pont, à la place d’amarrage sur les lacs des Quatre-Cantons et de Zoug.',
      detail: 'L’eau douce, le pollen et les fientes d’oiseaux agissent autrement sur un bateau de lac que le sel en mer. Nous nettoyons le teck, le gelcoat et la sellerie à la place d’amarrage, chaque matériau selon sa propre méthode.',
      notIncluded: 'Non compris : les travaux sur la carène et le moteur.',
    },
  ],
  moreTitle: 'Également pour',
  more: [
    { title: 'Résidences secondaires et résidences de standing', text: 'Nettoyées avant votre arrivée, remises en ordre après votre départ, avec des rondes de contrôle entre-temps au rythme convenu.' },
    { title: 'Hôtels', text: 'Nettoyages spéciaux et en profondeur avant une ouverture et après une rénovation. En savoir plus sur les [nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).' },
    { title: 'Bureaux et family offices', text: 'Des pièces confidentielles, nettoyées en dehors de vos heures de travail. En savoir plus sur le [nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).' },
    { title: 'Pièces abritant des œuvres d’art et des antiquités', text: 'Nous nettoyons les pièces avec soin, les tableaux, sculptures et autres œuvres d’art uniquement avec votre accord exprès.' },
    { title: 'Événements privés', text: 'Tout est prêt avant l’événement et remis en ordre après, même s’il tombe un week-end.' },
    { title: 'Courtiers et gérances', text: 'Nettoyage à bref délai avant une vente, une séance photo ou une remise.' },
  ],
  discretion: {
    title: 'La discrétion, noir sur blanc',
    paragraphs: [
      'Qui nettoie chez vous en apprend plus qu’un devis n’en dit. Ce qui reste confidentiel, et pour combien de temps, peut être fixé dans un accord de confidentialité.',
    ],
  },
  // Ce qu’un tel accord règle en général, pas le contenu d’un modèle propre ; sans peine conventionnelle (non confirmée).
  // Art. 11 CO lu le 28.09.2026 sur fedlex.admin.ch, sans conseil juridique.
  nda: {
    kind: 'checklist',
    id: 'geheimhaltung',
    title: 'Ce qu’un accord de confidentialité devrait régler',
    intro: 'La liste montre ce qu’un tel accord règle en général et vous aide à vérifier un texte.',
    groups: [
      {
        title: 'Qui et quoi',
        items: [
          'Qui est lié : l’entreprise et toutes les personnes qui travaillent chez vous',
          'Ce qui est confidentiel : adresse, absences, invités, pièces, aménagement et documents',
          'Aucune photo dans la maison, à bord ou dans la cabine, et aucune information sur les réseaux sociaux',
        ],
      },
      {
        title: 'Durée et fin',
        items: [
          'Combien de temps l’obligation s’applique, y compris après la fin du mandat',
          'Comment les clés et les badges sont restitués et les codes modifiés',
          'Ce qu’il advient à la fin des documents tels que plans d’étage ou schémas d’alarme : restitution ou destruction',
        ],
      },
    ],
    note: 'Le CO n’exige aucune forme particulière pour un tel accord (art. 11 CO), mais une version signée facilite la preuve. Clarifiez les détails de votre cas avec votre conseil juridique.',
    sources: [
      { label: 'Code des obligations, art. 11 : forme des contrats', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_11' },
    ],
    printable: true,
    updated: '2026-09-28',
  },
  promisesTitle: 'Ce qui vaut pour chaque mandat premium',
  promises,
  stepsTitle: 'Le déroulement d’une demande premium',
  steps: [
    {
      title: 'Votre demande',
      text: 'Après votre appel ou votre message, nous convenons avec vous d’une date pour le tour des lieux.',
    },
    {
      title: 'Tour des lieux et devis',
      text: 'Dans la maison, à la place d’amarrage ou dans la cabine, nous examinons avec vous les pièces, les matériaux et les accès, pour un jet privé en accord avec votre exploitant. Sur cette base, nous établissons votre devis écrit.',
    },
    {
      title: 'Des règles fixées avant le début',
      text: 'Avant de commencer, il est établi quand nous venons, comment les clés et le système d’alarme sont gérés et quelles œuvres d’art ou quels objets nous ne touchons qu’avec votre accord.',
    },
    {
      title: 'Votre équipe fixe',
      text: 'Votre équipe fixe connaît les règles fixées avant la première intervention.',
    },
  ],
  faq: [
    {
      question: 'Comment ma demande reste-t-elle confidentielle ?',
      answer: 'Si vous souhaitez un accord de confidentialité, mentionnez-le de préférence dès votre premier message. Décrivez d’abord uniquement le bien et la prestation souhaitée.',
    },
    {
      question: 'Un courtier ou une gérance peut-il faire la demande pour le propriétaire ?',
      answer: 'Oui. Indiquez-nous dans la demande qui accompagnera le tour des lieux et qui recevra le devis.',
    },
    {
      question: 'Dois-je confier un mandat régulier ?',
      answer: 'Non. Vous pouvez aussi nous confier une intervention unique, par exemple avant un événement privé.',
    },
    {
      question: 'Travaillez-vous aussi quand personne n’est à la maison ?',
      answer: 'Oui, y compris pendant vos voyages. La manière d’entrer dans la maison et d’utiliser le système d’alarme est convenue au préalable.',
    },
    {
      question: 'De quoi dépend le prix d’un nettoyage premium ?',
      answer: 'Pour une maison, de la surface, des matériaux et des œuvres d’art ; pour un bateau, de sa taille, du pont et de la place d’amarrage ; pour un jet, de la cabine et du créneau horaire. S’y ajoutent le rythme et les interventions le soir ou le week-end. C’est pourquoi seul le devis établi après le tour des lieux indique un prix.',
    },
    {
      question: 'Pouvons-nous faire la demande en anglais, en français ou en italien ?',
      answer: 'Oui. Nous communiquons avec vous en allemand, en anglais, en français ou en italien. Écrivez-nous dans la langue que vous préférez.',
    },
  ],
  places: {
    title: 'Où nous sommes à votre service',
    text: `Au bord du lac des Quatre-Cantons, de Lucerne et Meggen jusqu’à Weggis, Vitznau, Hergiswil et Ennetbürgen, au bord des lacs de Zoug et d’Ägeri, de Zoug et Walchwil jusqu’à Oberägeri, à Engelberg et dans l’ensemble des cantons de ${cantonList}.`,
  },
  cta: {
    title: 'Demandez en toute discrétion',
    text: 'Un appel ou quelques lignes via le formulaire suffisent pour commencer.',
  },
}
