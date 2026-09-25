import HomeClient from "./_home/HomeClient";
import { metaFor } from "../shared/seo";

// Server-Hülle, damit die Startseite eigene Metadaten hat (M16).
export const metadata = metaFor("/");

export default function Page() {
  return <HomeClient />;
}
