import LegalPage from "@/components/LegalPage";
import { metaFor } from "../../shared/seo";
import { impressum } from "../../content/de/recht";

export const metadata = metaFor("/impressum");

export default function Page() {
  return <LegalPage content={impressum} />;
}
