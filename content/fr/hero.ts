import type { HeroPath } from '../de/hero'

/**
 * Phrase courte du hero par page (E84): le bénéfice en une phrase, environ 110 caractères au plus.
 * L’introduction complète se trouve juste sous le hero (IntroBand).
 */
export const heroLines: Record<HeroPath, string> = {
  '/': 'Immeubles, bureaux et halles propres à Lucerne, Zoug et environs. L’offre suit la visite sur place.',
  '/leistungen': 'Nettoyage régulier, interventions ponctuelles ou conciergerie. La visite permet de préciser vos besoins.',
  '/leistungen/unterhaltsreinigung': 'Cage d’escalier, entrée et locaux communs propres à un rythme fixe, sans que vous ayez à vous en occuper.',
  '/leistungen/bueroreinigung': 'Des bureaux et cabinets propres, à des heures qui ne gênent pas votre activité.',
  '/leistungen/sonderreinigungen': 'Quand le nettoyage courant ne suffit plus : éliminer calcaire, graisse et anciennes couches sur les sols.',
  '/leistungen/umzugsreinigung': 'Nettoyage de fin de bail avec garantie de remise pour gérances, propriétaires et entreprises.',
  '/leistungen/baureinigung': 'De la poussière de chantier à des locaux prêts à l’emploi, à temps pour la remise.',
  '/leistungen/fenster-und-fassadenreinigung': 'Vitres et façades soignées, ponctuellement ou régulièrement, avec la méthode adaptée au matériau.',
  '/leistungen/industrie-und-hallenreinigung': 'Des sols et installations propres et sûrs en production et en stock, selon vos horaires d’équipe.',
  '/leistungen/hauswartung': 'Conciergerie pour gérances et propriétaires à Lucerne, Zoug et environs, des rondes au petit entretien.',
  '/leistungen/aussen-und-gruenflaechenpflege': 'Entretien des jardins pour gérances et entreprises à Lucerne, Zoug et environs, des haies aux chemins.',
  '/leistungen/facility-services': 'Nettoyage, conciergerie et entretien des extérieurs avec un seul contrat et un seul interlocuteur.',
  '/premium': 'Pour villas, résidences, jets privés et yachts, avec une équipe fixe et des soins adaptés aux matériaux.',
  '/premium/luxusimmobilien': 'Pierre naturelle, parquet et surfaces brillantes entre de bonnes mains, même pendant votre absence.',
  '/premium/privatjet': 'Du soin pour le cuir, le bois et les textiles fins, planifié selon vos vols.',
  '/premium/yacht': 'Votre bateau entretenu à l’intérieur et à l’extérieur, sur le lac des Quatre-Cantons et le lac de Zoug.',
  '/einzugsgebiet': 'Depuis Emmenbrücke dans cinq cantons, avec toutes nos prestations dans toute la région.',
  '/einzugsgebiet/luzern': 'Depuis Emmenbrücke dans tout le canton, de la ville de Lucerne jusqu’à l’Entlebuch.',
  '/einzugsgebiet/zug': 'Nettoyage des immeubles d’habitation et commerciaux dans tout le canton de Zoug, selon votre activité.',
  '/einzugsgebiet/aargau': 'Nettoyage pour la production, le stockage et l’artisanat dans tout le canton d’Argovie.',
  '/einzugsgebiet/nidwalden': 'Pour immeubles, résidences secondaires et villas, des rives du lac jusqu’à la vallée d’Engelberg.',
  '/einzugsgebiet/obwalden': 'Dans le Sarneraatal et à Engelberg, pour immeubles, entreprises, résidences secondaires et hôtels.',
  '/ueber-uns': 'Nettoyage et conciergerie pour gérances, propriétaires et entreprises, depuis Emmenbrücke.',
  '/blog': 'Guides pratiques sur la conciergerie, la remise d’un logement, les sols et les coûts du nettoyage.',
}
