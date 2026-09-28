import FaqBlock from "@/components/FaqBlock";
import { premiumKontext, type PremiumProps } from "./kontext";

/** Fragen aus den Unterseiten in der hellen Premium-Welt (E82), ohne «Wo sind Sie tätig?» */
export default function PremiumFragen(props: PremiumProps) {
  const { dict, ui } = premiumKontext(props);
  const faq = dict.premium.luxusimmobilien.faq.filter(item => item.answer !== dict.answers.gebiet).slice(0, 7);
  return <FaqBlock title={ui.faq} items={faq} image="detail-premium-luxusimmobilien" lang={props.lang} tone="premium" />;
}
