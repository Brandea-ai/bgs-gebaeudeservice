import LegalPage from "@/components/LegalPage";
import { metaFor } from "../../shared/seo";
import { datenschutz } from "../../content/de/recht";

export const metadata = metaFor("/datenschutz");

export default function Page() {
  return <LegalPage content={datenschutz} />;
}
