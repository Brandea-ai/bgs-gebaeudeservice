import Image from "next/image";
import { images, type ImageKey } from "../../../shared/images";
import type { FigureKey } from "../../../content/types";

export type Figure = { image: ImageKey } | { video: FigureKey };

/**
 * Bühne (E80, E85): je Schritt ein Remotion-Video ohne Schrift oder ein Bild
 * aus dem Register, gestapelt; sichtbar ist die Figur des aktiven Schritts
 * (CSS über data-active), abgespielt wird nur dessen Video (ProcessSection),
 * und nur, wenn die Bühne überhaupt zu sehen ist. Ohne JavaScript oder mit
 * reduced motion steht die erste Figur mit ihrem Standbild.
 */
export default function Stage({
  figures,
  lux,
}: {
  figures: Figure[];
  lux: boolean;
}) {
  return (
    <div
      className={`process-stage relative aspect-[4/3] overflow-hidden rounded-[3px] ${
        lux
          ? "bg-ivory shadow-[0_1px_0_rgba(125,98,49,0.12),0_36px_70px_-38px_rgba(90,68,30,0.5)] ring-1 ring-brass-dark/30"
          : "bg-stone shadow-[0_1px_0_rgba(14,17,22,0.04),0_28px_60px_-36px_rgba(14,17,22,0.45)] ring-1 ring-ink/10"
      }`}
    >
      {figures.map((figure, i) => {
        const cls = `pv pv-${i + 1} absolute inset-0 h-full w-full`;
        if ("image" in figure) {
          return (
            <div key={i} className={cls}>
              <Image
                src={images[figure.image].src}
                alt=""
                fill
                sizes="(min-width: 1024px) 55vw, 1px"
                className="object-cover"
              />
            </div>
          );
        }
        // Standbild als träges Bild unter dem Video statt poster: bei ausgeblendeter Bühne (Handy) lädt nichts
        return (
          <div key={i} className={cls}>
            <Image
              src={`/video/ablauf/${figure.video}-poster.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 55vw, 1px"
              className="object-cover"
            />
            <video
              data-step-video={i + 1}
              className="absolute inset-0 h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              tabIndex={-1}
            >
              <source
                src={`/video/ablauf/${figure.video}.webm`}
                type="video/webm"
              />
              <source
                src={`/video/ablauf/${figure.video}.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        );
      })}
    </div>
  );
}
