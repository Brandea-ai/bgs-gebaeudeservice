import type { ReactNode } from "react";
import { premiumHeading } from "@/components/premiumStyles";

/**
 * Abschnittstitel der hellen Premium-Welt: Serifenschrift halbfett in Anthrazit,
 * feine Champagner-Linie, optional Kennzeile und Einleitung.
 */
export default function PremiumTitel({
  id,
  title,
  eyebrow,
  intro,
  className = "",
}: {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && <p className="t-eyebrow mb-5 text-brass-dark">{eyebrow}</p>}
      <h2 id={id} className={premiumHeading}>
        {title}
      </h2>
      <div className="premium-rule-light mt-7 max-w-[12rem]" aria-hidden="true" />
      {intro && <div className="t-lead mt-7 max-w-[46ch] text-ink-600">{intro}</div>}
    </div>
  );
}
