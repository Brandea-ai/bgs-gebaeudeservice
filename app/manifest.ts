import type { MetadataRoute } from 'next'
import { cantonList, company } from '../shared/company'

// Manifest mit dem Namen, der gerade gilt (E38). Keine Icons, bis das Logo von
// Brandea vorliegt (M35, E49): Das bisherige Bild zeigte «SWISS REINIGUNG» mit
// Kreuz im Schild (GLOBAL-014, GLOBAL-020, E24). Farbe wie --primary (E24).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.brand,
    short_name: company.brand,
    description: `Reinigung, Hauswartung und Facility Services in den Kantonen ${cantonList}`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#dc2828',
    lang: 'de-CH',
  }
}
