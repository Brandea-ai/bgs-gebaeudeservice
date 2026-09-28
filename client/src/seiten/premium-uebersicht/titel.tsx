import type { ReactNode } from "react";

/** Abschnittstitel der Premium-Welt: Serifenschrift, Champagner-Haarlinie, optional Einleitung */
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
      {eyebrow && <p className="t-eyebrow mb-5 text-brass">{eyebrow}</p>}
      <h2 id={id} className="font-premium text-[clamp(2.1rem,1.4rem+2.4vw,3.75rem)] font-medium leading-[1.06] text-white">
        {title}
      </h2>
      <div className="premium-rule mt-6 max-w-[12rem]" />
      {intro && <div className="t-lead mt-6 max-w-[46ch] text-white/90">{intro}</div>}
    </div>
  );
}
