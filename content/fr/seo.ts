import { company, premiumLabel } from '../../shared/company'
import { cantonList } from './common'
import { kantone } from './kantone'

/**
 * Nom, titre et description de chaque page en français (M16, M60). Mêmes clés
 * que content/de/seo.ts (adresse allemande). Titres sans la marque, metaFor()
 * dans shared/seo.ts l’ajoute.
 */

const region = cantonList

export const pages = {
  '/': {
    label: 'Accueil',
    title: `${company.brand} | Entreprise de nettoyage et conciergerie à Lucerne`,
    description: 'Entreprise de nettoyage pour gérances et entreprises : nettoyage et conciergerie d’immeubles à Lucerne, Zoug et environs. Devis gratuit après une visite.',
  },
  // Titel und H1 mit dem Hauptbegriff (N8, keywords-mehrsprachig), Beschreibung mit Nutzen und Handlungsaufruf (T4)
  '/premium': {
    label: premiumLabel,
    title: 'Nettoyage premium : villas, jets, yachts',
    description: company.premiumBrand
      ? `${company.premiumBrand}, la ligne premium de ${company.brand} : nettoyage discret de villas, jets privés et yachts, avec une équipe fixe. Devis gratuit après une visite.`
      : 'Nettoyage premium de villas, jets privés et yachts sur les lacs des Quatre-Cantons et de Zoug, discret et avec une équipe fixe. Devis gratuit après une visite.',
  },
  '/premium/luxusimmobilien': {
    label: 'Biens de prestige',
    title: 'Nettoyage de villas et de biens de prestige',
    description: 'Nettoyage de villas à Lucerne, Zoug et environs : pierre naturelle, parquet et laque bien entretenus, même en votre absence. Devis gratuit après une visite.',
  },
  '/premium/privatjet': {
    label: 'Jet privé',
    title: 'Nettoyage de jet privé : cabine et office de bord',
    description: 'Nettoyage de jet privé pour la cabine, l’office de bord et les toilettes, avec les produits approuvés pour votre appareil. Devis gratuit après une visite.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Nettoyage de bateau et de yacht à Lucerne et Zoug',
    description: 'Nettoyage de bateau et de yacht au ponton, sur les lacs des Quatre-Cantons et de Zoug : teck, gelcoat, sellerie et carré. Devis gratuit après une visite.',
  },
  '/leistungen': {
    label: 'Prestations',
    title: 'Services de nettoyage et de conciergerie',
    description: 'Services de nettoyage et de conciergerie : dix prestations, un comparatif et un calendrier annuel. À Lucerne, Zoug et environs. Devis gratuit après une visite.',
  },
  '/leistungen/unterhaltsreinigung': {
    label: 'Nettoyage d’entretien',
    title: 'Nettoyage d’entretien, Lucerne et Zoug',
    description: 'Nettoyage d’entretien et de cages d’escalier, avec réapprovisionnement en consommables. À Lucerne, Zoug et environs. Devis gratuit après une visite.',
  },
  '/leistungen/bueroreinigung': {
    label: 'Nettoyage de bureaux et de cabinets',
    title: 'Nettoyage de bureaux à Lucerne et Zoug',
    description: 'Nettoyage de bureaux et de cabinets hors des heures de travail, avec cahier des charges à imprimer. Lucerne, Zoug et environs. Devis gratuit après une visite.',
  },
  '/leistungen/sonderreinigungen': {
    label: 'Nettoyages en profondeur et spéciaux',
    title: 'Nettoyage en profondeur, Lucerne et Zoug',
    description: 'Nettoyage en profondeur des sols, des joints et des sanitaires, selon le revêtement, à Lucerne, Zoug et environs. Devis gratuit après une visite.',
  },
  '/leistungen/umzugsreinigung': {
    label: 'Nettoyage de fin de bail',
    title: 'Nettoyage de fin de bail à Lucerne pour gérances',
    description: 'Nettoyage de fin de bail avec garantie de remise pour gérances, propriétaires et entreprises à Lucerne et Zoug. Devis gratuit après une visite.',
  },
  '/leistungen/baureinigung': {
    label: 'Nettoyage de chantier et de fin de chantier',
    title: 'Nettoyage de fin de chantier à Lucerne et Zoug',
    description: 'Nettoyage de fin de chantier à Lucerne, Zoug et environs, par étapes jusqu’à la réception, avec listes de contrôle à imprimer. Devis gratuit après une visite.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Nettoyage de vitres et de façades',
    title: 'Nettoyage de vitres et de façades à Lucerne',
    description: 'Nettoyage de vitres et de façades avec check-list et modèle d’avis aux locataires, à Lucerne, Zoug et environs. Devis gratuit après une visite.',
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Nettoyage industriel et de halles',
    title: 'Nettoyage industriel et de halles',
    description: 'Nettoyage industriel et de halles pour la production et l’entrepôt, planifié par zone et par équipe, avec des listes de contrôle. Devis gratuit après visite.',
  },
  '/leistungen/hauswartung': {
    label: 'Conciergerie',
    title: 'Conciergerie d’immeubles à Lucerne et Zoug',
    description: 'Conciergerie d’immeubles à Lucerne, Zoug et environs : rondes de contrôle, cage d’escalier, cahier des charges à imprimer. Devis gratuit après une visite.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    label: 'Entretien des extérieurs et des espaces verts',
    title: 'Entretien des espaces verts à Lucerne et Zoug',
    description: 'Entretien des espaces verts d’immeubles à Lucerne, Zoug et environs : gazon, haies en hiver, désherbage des chemins. Devis gratuit après une visite.',
  },
  '/leistungen/facility-services': {
    label: 'Facility services',
    title: 'Facility services à Lucerne et Zoug, un seul contrat',
    description: 'Facility services à Lucerne, Zoug et environs : nettoyage, conciergerie et entretien des abords dans un seul contrat. Devis gratuit après une visite.',
  },
  '/einzugsgebiet': {
    label: 'Zone d’intervention',
    title: 'Zone d’intervention : Suisse centrale',
    description: `Nettoyage et conciergerie depuis ${company.address.city} dans les cantons de ${region}, Engelberg compris. Devis gratuit après une visite.`,
  },
  '/einzugsgebiet/luzern': { label: 'Canton de Lucerne', ...kantone.luzern.seo },
  '/einzugsgebiet/zug': { label: 'Canton de Zoug', ...kantone.zug.seo },
  '/einzugsgebiet/aargau': { label: 'Canton d’Argovie', ...kantone.aargau.seo },
  '/einzugsgebiet/nidwalden': { label: 'Canton de Nidwald', ...kantone.nidwalden.seo },
  '/einzugsgebiet/obwalden': { label: 'Canton d’Obwald', ...kantone.obwalden.seo },
  '/blog': {
    label: 'Guide',
    title: 'Guide du nettoyage de bâtiments',
    description: `Le guide de ${company.brand} : les points à vérifier pour choisir une entreprise de nettoyage et ce qui détermine le coût d’un nettoyage d’entretien.`,
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Choisir une entreprise de nettoyage',
    title: 'Choisir une entreprise de nettoyage',
    description: 'Prestations, assurance, contrôle de la qualité, références et devis : les points à clarifier avant de mandater une entreprise de nettoyage.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Coût du nettoyage d’entretien',
    title: 'Que coûte un nettoyage d’entretien ?',
    description: 'Ce qui détermine le prix d’un nettoyage d’entretien : surface, fréquence, utilisation et horaires. Avec des conseils pour comparer les devis.',
  },
  '/ueber-uns': {
    label: 'À propos',
    title: 'À propos : nettoyage et conciergerie depuis 2006',
    description: 'Notre façon de travailler, à qui nous nous adressons et nos données à vérifier dans le registre IDE. Devis gratuit après une visite.',
  },
  '/kontakt': {
    label: 'Contact',
    title: 'Contact et devis',
    description: `Devis de nettoyage à Lucerne, Zoug et environs : réponse dans les 24 heures les jours ouvrables, visite gratuite. Appelez-nous au ${company.phone.display}.`,
  },
  '/impressum': {
    label: 'Mentions légales',
    title: 'Mentions légales',
    description: `Mentions légales de ${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city} : registre du commerce, numéro IDE et coordonnées.`,
  },
  '/datenschutz': {
    label: 'Protection des données',
    title: 'Déclaration de protection des données',
    description: `Comment ${company.legalName} traite vos données sur ce site web : hébergement, formulaire de contact, pas de cookies ni d’analyse, et vos droits.`,
  },
} satisfies Record<string, { label: string; title: string; description: string }>
