import type { HeroPath } from '../de/hero'

/**
 * Phrase courte du hero par page (E84): le bénéfice en une phrase, environ 110 caractères au plus.
 * L’introduction complète se trouve juste sous le hero (IntroBand).
 */
export const heroLines: Record<HeroPath, string> = {
  '/': 'Immeubles, bureaux et halles propres à Lucerne, Zoug et environs. L’offre suit la visite sur place.',
  '/leistungen': 'Nettoyage régulier, interventions ponctuelles ou conciergerie. Nous clarifions ce qui convient lors de la visite.',
  '/leistungen/unterhaltsreinigung': 'Cage d’escalier, entrée et locaux communs propres à un rythme fixe, sans que vous ayez à vous en occuper.',
  '/leistungen/bueroreinigung': 'Des bureaux et cabinets propres, à des heures qui ne gênent pas votre activité.',
  '/leistungen/sonderreinigungen': 'Quand le nettoyage courant ne suffit plus: contre le calcaire, la graisse et les anciennes couches sur les sols.',
  '/leistungen/umzugsreinigung': 'Nettoyage final pour la date de remise. Si la gérance conteste, nous repassons gratuitement.',
  '/leistungen/baureinigung': 'De la poussière de chantier à des locaux prêts à l’emploi, à temps pour la remise.',
  '/leistungen/fenster-und-fassadenreinigung': 'Des vitres claires et des façades soignées, ponctuellement ou régulièrement, avec la méthode adaptée au matériau.',
  '/leistungen/industrie-und-hallenreinigung': 'Des sols et installations propres et sûrs en production et en stock, selon vos horaires d’équipe.',
  '/leistungen/hauswartung': 'Quelqu’un qui passe régulièrement, répare les petits dégâts et signale les défauts.',
  '/leistungen/aussen-und-gruenflaechenpflege': 'Espaces verts soignés, chemins et places propres. La première impression de votre immeuble.',
  '/leistungen/facility-services': 'Nettoyage, conciergerie et entretien des extérieurs avec un seul contrat et un seul interlocuteur.',
  '/premium': 'Pour villas, résidences, jets privés et yachts. Toujours la même équipe, discrète et dans votre langue.',
  '/premium/luxusimmobilien': 'Pierre naturelle, parquet et surfaces brillantes entre de bonnes mains, toujours avec la même équipe de confiance.',
  '/premium/privatjet': 'Du soin pour le cuir, le bois et les textiles fins, planifié selon vos vols.',
  '/premium/yacht': 'Votre bateau entretenu à l’intérieur et à l’extérieur, sur le lac des Quatre-Cantons et le lac de Zoug.',
  '/einzugsgebiet': 'Depuis Emmenbrücke dans cinq cantons, avec toutes nos prestations dans toute la région.',
  '/einzugsgebiet/luzern': 'Depuis Emmenbrücke dans tout le canton, de la ville de Lucerne jusqu’à l’Entlebuch.',
  '/einzugsgebiet/zug': 'Un nettoyage adapté à votre activité, aussi en anglais, en français et en italien.',
  '/einzugsgebiet/aargau': 'Nettoyage pour la production, le stockage et l’artisanat, selon vos équipes et vos processus.',
  '/einzugsgebiet/nidwalden': 'Pour immeubles, résidences secondaires et villas, des rives du lac jusqu’à la vallée d’Engelberg.',
  '/einzugsgebiet/obwalden': 'Dans le Sarneraatal et à Engelberg, pour immeubles, entreprises, résidences secondaires et hôtels.',
  '/ueber-uns': 'Plus de 50 collaborateurs s’occupent de plus de 120 clients dans cinq cantons, en quatre langues.',
  '/blog': 'Réponses sur l’attribution, les coûts et le déroulement d’un nettoyage de bâtiment.',
}
