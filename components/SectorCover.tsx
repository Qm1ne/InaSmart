import Image from "next/image";
import type { Sector } from "@/lib/content";
import type { Lang } from "@/lib/locale";

/**
 * Cover cell for a sector card. Uses the real photo when the sector has one and
 * otherwise renders a branded panel rather than the striped PlaceholderPhoto —
 * a sector card is a credibility surface, and a stripe labelled "photo" reads as
 * unfinished. Swap in a photo by setting `image` on the sector in lib/content.
 */
export default function SectorCover({ sector, lang, className = "" }: { sector: Sector; lang: Lang; className?: string }) {
  const data = lang === "ar" ? sector.ar : sector.en;

  if (sector.image) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={sector.image} alt={data.title} fill sizes="(max-width: 768px) 100vw, 300px" className="object-cover" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: "linear-gradient(135deg,#1B1259 0%,#241C6E 55%,#123A82 100%)" }}
    >
      <span
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "linear-gradient(#5CE1F2 1px, transparent 1px), linear-gradient(90deg, #5CE1F2 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <span className="relative font-display text-[44px] font-bold tracking-[0.06em] text-white/85">{sector.mono}</span>
    </div>
  );
}
