import type { Locale } from '../shared/i18n'
import { de, type Dictionary } from './de'
import { en } from './en'
import { fr } from './fr'
import { it } from './it'

/** Texte je Sprache (M60). Englisch, Französisch und Italienisch sind Entwürfe zur Prüfung durch Brandea (E50). */
const dictionaries: Record<Locale, Dictionary> = { de, en, fr, it }

export function getDict(lang: Locale): Dictionary {
  return dictionaries[lang]
}

export type { Dictionary }
