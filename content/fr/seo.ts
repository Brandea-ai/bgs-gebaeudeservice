import { company, premiumLabel } from '../../shared/company'
import { cantonList } from './common'

/**
 * Nom, titre et description de chaque page en français (M16, M60). Mêmes clés
 * que content/de/seo.ts (adresse allemande). Titres sans la marque, metaFor()
 * dans shared/seo.ts l’ajoute.
 */

const region = cantonList

export const pages = {
  '/': {
    label: 'Accueil',
    title: `${company.brand} – Nettoyage et conciergerie à Lucerne et Zoug`,
    description: `Nettoyage de bâtiments, conciergerie et facility services pour entreprises et immeubles à ${region}, et nettoyage premium.`,
  },
  '/premium': {
    label: premiumLabel,
    title: 'Premium : nettoyage pour des exigences élevées',
    description: company.premiumBrand
      ? `${company.premiumBrand}, la ligne premium de ${company.brand} : nettoyage discret pour villas, résidences secondaires, hôtels, family offices, jets privés et yachts.`
      : 'Nettoyage discret pour villas, résidences secondaires, hôtels, family offices, jets privés et yachts, au bord des lacs des Quatre-Cantons et de Zoug.',
  },
  '/premium/luxusimmobilien': {
    label: 'Biens de prestige',
    title: 'Nettoyage de villas et de biens de prestige',
    description: 'Nettoyage et entretien discrets de villas, lofts et résidences au bord des lacs des Quatre-Cantons et de Zoug. Équipes fixes, devis sur place.',
  },
  '/premium/privatjet': {
    label: 'Jet privé',
    title: 'Nettoyage de jets privés',
    description: 'Nettoyage de cabine pour jets privés, dans le respect des matériaux haut de gamme. Discret, selon entente et avec des équipes fixes.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Nettoyage de yachts et de bateaux',
    description: 'Nettoyage de yachts et de bateaux à moteur sur le lac des Quatre-Cantons et le lac de Zoug : intérieur, sellerie, teck et gelcoat. Discret et selon entente.',
  },
  '/leistungen': {
    label: 'Prestations',
    title: 'Prestations : nettoyage et conciergerie',
    description: `Nettoyage d’entretien, de bureaux, spécial, de chantier, de vitres et industriel, conciergerie et facility services de ${company.brand} à Lucerne et Zoug.`,
  },
  '/leistungen/unterhaltsreinigung': {
    label: 'Nettoyage d’entretien',
    title: 'Nettoyage d’entretien à Lucerne et Zoug',
    description: `Nettoyage régulier d’immeubles, de cages d’escalier et de surfaces commerciales, avec réapprovisionnement. Cantons de ${region}.`,
  },
  '/leistungen/bueroreinigung': {
    label: 'Bureaux et cabinets',
    title: 'Nettoyage de bureaux et de cabinets à Lucerne',
    description: `Nettoyage de bureaux et de cabinets, adapté à vos horaires de travail. Devis gratuit sur place, dans les cantons de ${region}.`,
  },
  '/leistungen/sonderreinigungen': {
    label: 'Nettoyages spéciaux',
    title: 'Nettoyages spéciaux : en profondeur et fin de bail',
    description: 'Nettoyage en profondeur et nettoyage de fin de bail avec garantie de remise, pour gérances, propriétaires et entreprises à Lucerne, Zoug et environs.',
  },
  '/leistungen/baureinigung': {
    label: 'Nettoyage de chantier',
    title: 'Nettoyage de chantier et de fin de chantier',
    description: 'Nettoyage pendant et après les travaux de construction ou de transformation, jusqu’à la remise. Pour maîtres d’ouvrage, architectes et gérances.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Vitres et façades',
    title: 'Nettoyage de vitres et de façades',
    description: `Nettoyage de fenêtres, vitrages et façades, aussi à haute pression, pour entreprises et immeubles. Cantons de ${region}.`,
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Industrie et halles',
    title: 'Nettoyage industriel et de halles',
    description: `Nettoyage des halles de production, entrepôts, machines et installations, adapté à votre exploitation. Cantons de ${region}.`,
  },
  '/leistungen/hauswartung': {
    label: 'Conciergerie',
    title: 'Conciergerie d’immeubles à Lucerne et Zoug',
    description: 'Conciergerie pour votre immeuble : rondes de contrôle, escaliers, buanderie, petites réparations, technique, états des lieux, déchets et abords.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    label: 'Extérieurs et espaces verts',
    title: 'Entretien des extérieurs et des espaces verts',
    description: `Entretien des abords et des espaces verts de votre immeuble, seul ou avec la conciergerie. Cantons de ${region}.`,
  },
  '/leistungen/facility-services': {
    label: 'Facility services',
    title: 'Facility services : un seul prestataire',
    description: 'Nettoyage, conciergerie et entretien des abords dans un seul contrat, avec un seul interlocuteur. Pour gérances et entreprises à Lucerne et Zoug.',
  },
  '/einzugsgebiet': {
    label: 'Zone d’intervention',
    title: 'Zone d’intervention : Suisse centrale et Argovie',
    description: `Depuis ${company.address.city}, dans les cantons de ${region}, y compris au bord des lacs et à Engelberg. Toutes les prestations partout.`,
  },
  '/blog': {
    label: 'Conseils',
    title: 'Conseils en nettoyage de bâtiments',
    description: `Les conseils de ${company.brand} : les points à vérifier pour choisir une entreprise de nettoyage et ce qui détermine le coût d’un nettoyage d’entretien.`,
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Choisir une entreprise de nettoyage',
    title: 'Choisir une entreprise de nettoyage : critères',
    description: 'Prestations, assurance, contrôle de la qualité, références et devis : les points à clarifier avant de mandater une entreprise de nettoyage.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Coût du nettoyage d’entretien',
    title: 'Combien coûte un nettoyage d’entretien ?',
    description: 'Ce qui détermine le prix d’un nettoyage d’entretien : surface, fréquence, utilisation et horaires. Avec des conseils pour comparer les devis.',
  },
  '/ueber-uns': {
    label: 'À propos',
    title: 'À propos de nous',
    description: `${company.legalName}, ${company.address.city} : depuis 2006, plus de 50 collaborateurs, plus de 120 clients, conseil en allemand, anglais, français et italien.`,
  },
  '/kontakt': {
    label: 'Contact',
    title: 'Contact et devis',
    description: `Appelez-nous au ${company.phone.display} ou écrivez-nous. Visite et devis gratuits sur place, réponse dans les 24 heures les jours ouvrables.`,
  },
  '/impressum': {
    label: 'Mentions légales',
    title: 'Mentions légales',
    description: `Mentions légales de ${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city} : registre du commerce, numéro IDE et coordonnées.`,
  },
  '/datenschutz': {
    label: 'Protection des données',
    title: 'Politique de confidentialité',
    description: `Comment ${company.legalName} traite les données personnelles sur ce site web, à qui elles sont transmises et quels droits vous pouvez exercer.`,
  },
} satisfies Record<string, { label: string; title: string; description: string }>
