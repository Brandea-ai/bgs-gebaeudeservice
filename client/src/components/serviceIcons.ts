import {
  Airplane,
  BuildingOffice,
  Diamond,
  Factory,
  HardHat,
  House,
  Key,
  Sailboat,
  Sparkle,
  SquaresFour,
  StackSimple,
  TreeEvergreen,
  Wrench,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { PagePath } from "../../../shared/seo";

/**
 * Ein Symbol je Leistung (L03), Schlüssel ist die deutsche Adresse. Gemeinsam für
 * Mega-Menü, Übersichten und Karten (Factory-Norm S2). Dargestellt als Duotone
 * ohne Fläche dahinter (E80).
 */
export const serviceIcons: Partial<Record<PagePath, Icon>> = {
  "/leistungen/unterhaltsreinigung": House,
  "/leistungen/bueroreinigung": BuildingOffice,
  "/leistungen/sonderreinigungen": Sparkle,
  "/leistungen/baureinigung": HardHat,
  "/leistungen/fenster-und-fassadenreinigung": SquaresFour,
  "/leistungen/industrie-und-hallenreinigung": Factory,
  "/leistungen/hauswartung": Key,
  "/leistungen/aussen-und-gruenflaechenpflege": TreeEvergreen,
  "/leistungen/facility-services": StackSimple,
  "/leistungen": SquaresFour,
  "/premium": Diamond,
  "/premium/luxusimmobilien": Diamond,
  "/premium/privatjet": Airplane,
  "/premium/yacht": Sailboat,
};

export const iconFor = (path: PagePath): Icon => serviceIcons[path] ?? Wrench;
