import type { HeroPath } from '../de/hero'

/**
 * Short hero line per page (E84): the benefit in one sentence, about 110 characters at most.
 * The full introduction sits directly below the hero (IntroBand).
 */
export const heroLines: Record<HeroPath, string> = {
  '/': 'Clean properties, offices and halls in Lucerne, Zug and the surrounding area. We quote after a site visit.',
  '/leistungen': 'Regular cleaning, one-off jobs or caretaking. We work out what fits during the site visit.',
  '/leistungen/unterhaltsreinigung': 'Stairwell, entrance and shared areas kept clean on a fixed schedule, without you having to organise it.',
  '/leistungen/bueroreinigung': 'Clean offices and practices at times that do not disrupt your work.',
  '/leistungen/sonderreinigungen': 'When regular cleaning is no longer enough: against limescale, grease and old layers on floors.',
  '/leistungen/umzugsreinigung': 'End-of-tenancy cleaning with a handover guarantee for property managers, owners and businesses.',
  '/leistungen/baureinigung': 'From construction dust to ready-to-move-in space, on time for the handover.',
  '/leistungen/fenster-und-fassadenreinigung': 'Clear windows and well-kept façades, one-off or regular, with the method that suits the material.',
  '/leistungen/industrie-und-hallenreinigung': 'Clean, safe floors and equipment in production and storage, planned around your shifts.',
  '/leistungen/hauswartung': 'Caretaking for property managers and owners in Lucerne, Zug and nearby, from inspections to minor upkeep.',
  '/leistungen/aussen-und-gruenflaechenpflege': 'Garden maintenance for property managers and businesses in Lucerne, Zug and nearby, from hedges to paths.',
  '/leistungen/facility-services': 'Cleaning, caretaking and grounds care with one contract and one contact person.',
  '/premium': 'For villas, residences, private jets and yachts, with a dedicated team and care suited to each material.',
  '/premium/luxusimmobilien': 'Natural stone, parquet and high-gloss surfaces in good hands, including while you are away.',
  '/premium/privatjet': 'Care for leather, wood and fine textiles, scheduled around your flights.',
  '/premium/yacht': 'Your boat cared for inside and out, on Lake Lucerne and Lake Zug.',
  '/einzugsgebiet': 'From Emmenbrücke across five cantons, with every service throughout the area.',
  '/einzugsgebiet/luzern': 'From Emmenbrücke across the whole canton, from the city of Lucerne to the Entlebuch.',
  '/einzugsgebiet/zug': 'Cleaning for residential and commercial properties throughout the canton of Zug, planned around your work.',
  '/einzugsgebiet/aargau': 'Cleaning for production, storage and trade throughout the canton of Aargau, planned around your processes.',
  '/einzugsgebiet/nidwalden': 'For residential and commercial buildings, second homes and villas, from the lakeshore to the Engelberg valley.',
  '/einzugsgebiet/obwalden': 'In the Sarneraatal and Engelberg, for properties, businesses, second homes and hotels.',
  '/ueber-uns': 'Cleaning and caretaking for property managers, owners and businesses, based in Emmenbrücke.',
  '/blog': 'Practical guides to caretaking, property handovers, floor care and cleaning costs.',
}
