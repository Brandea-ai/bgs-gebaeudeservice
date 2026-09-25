import type { ReactNode } from "react";
import { metaFor } from "../../../shared/seo";

// Metadaten für die Client-Seite in diesem Ordner (M16, Texte in shared/seo.ts).
export const metadata = metaFor("/premium/privatjet");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
