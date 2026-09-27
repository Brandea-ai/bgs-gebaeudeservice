import type { Locale } from '../shared/i18n'
import { nav as de, type NavDictionary } from './de/navigation'
import { nav as en } from './en/navigation'
import { nav as fr } from './fr/navigation'
import { nav as it } from './it/navigation'

/**
 * Texte für Menü, Footer und Formular. Diese Komponenten laufen im Browser,
 * darum laden sie nur diesen kleinen Teil der Wörterbücher (M25).
 */
export const navDicts: Record<Locale, NavDictionary> = { de, en, fr, it }
