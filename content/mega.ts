import type { Locale } from '../shared/i18n'
import { mega as de, type MegaDictionary } from './de/mega'
import { mega as en } from './en/mega'
import { mega as fr } from './fr/mega'
import { mega as it } from './it/mega'

/** Zusatztexte des Mega-Menüs je Sprache, klein für den Browser (wie navigation.ts) */
export const megaDicts: Record<Locale, MegaDictionary> = { de, en, fr, it }
