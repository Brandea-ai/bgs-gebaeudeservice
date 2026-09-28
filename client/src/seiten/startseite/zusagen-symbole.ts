import { FileText, Handshake, Leaf, MapTrifold, ShieldCheck, Translate } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";

/** Ein Duotone-Symbol je Zusage (E80), Schlüssel wie about.promises.items */
export const zusagenSymbole: Record<string, Icon> = {
  persoenlich: Handshake,
  offerte: FileText,
  gebiet: MapTrifold,
  versichert: ShieldCheck,
  sprachen: Translate,
  umwelt: Leaf,
};
