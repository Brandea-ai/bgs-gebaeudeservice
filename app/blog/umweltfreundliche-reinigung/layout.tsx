import type { ReactNode } from "react";
import { metaFor } from "../../../shared/seo";

// Metadaten für die Client-Seite in diesem Ordner (M16, Texte in shared/seo.ts).
export const metadata = metaFor("/blog/umweltfreundliche-reinigung");

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
