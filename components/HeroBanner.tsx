"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AuditSticker from "./AuditSticker";
import { t } from "@/lib/content";
import type { Lang } from "@/lib/locale";

const SLIDES = ["/banner1.png", "/banner2.png", "/banner3.png", "/banner4.jpg"];
const SLIDE_COUNT = SLIDES.length;
const AUTOPLAY_MS = 5000;

export default function HeroBanner({ lang }: { lang: Lang }) {
  const [slide, setSlide] = useState(0);
  const copy = t(lang);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setSlide((s) => (s + 1) % SLIDE_COUNT), AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function showSlide(i: number) {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setSlide((s) => (s + 1) % SLIDE_COUNT), AUTOPLAY_MS);
    setSlide(i);
  }

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg,#1B1259 0%,#241C6E 55%,#123A82 100%)" }}
    >
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-[opacity,transform] duration-[1400ms,6000ms] ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === slide ? 0.3 : 0,
              transform: i === slide ? "scale(1.06)" : "scale(1)",
            }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(100deg, rgba(20,16,70,0.86) 0%, rgba(27,18,89,0.62) 48%, rgba(18,58,130,0.42) 100%)",
          }}
        />
      </div>
      <div
        className="absolute -top-[140px] end-[-120px] h-[420px] w-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,224,239,0.35), rgba(37,224,239,0) 68%)" }}
      />

      <div className="relative mx-auto max-w-content px-8 pb-24 pt-[104px] min-[1150px]:pe-[190px]">
        <p className="mb-4.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-cyan-light">{copy.hero.kicker}</p>
        <h1 className="max-w-[860px] font-display text-[46px] font-bold leading-[1.07] tracking-[-0.02em] sm:text-[58px]">
          {copy.hero.title}
        </h1>
        <p className="mt-5 font-display text-xl font-semibold text-cyan-light">{copy.brand.positioning}</p>
        <p className="mt-4 max-w-[600px] text-lg leading-relaxed text-white/82">{copy.hero.copy}</p>

        <div className="mt-9.5 flex flex-wrap gap-3.5">
          <Link
            href={`/${lang}/request/solution`}
            className="whitespace-nowrap rounded-control bg-[linear-gradient(135deg,#25E0EF,#1E93E8)] px-6.5 py-4 text-[15px] font-bold text-on-gradient transition-opacity duration-200 hover:opacity-90"
          >
            {copy.hero.cta1}
          </Link>
          <Link
            href={`/${lang}/request/technology`}
            className="whitespace-nowrap rounded-control border border-hero-border px-6.5 py-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            {copy.hero.cta2}
          </Link>
        </div>

        <div className="hidden min-[1150px]:block">
          <AuditSticker label={copy.audit.sticker} className="absolute top-[78px] end-9" />
        </div>

        <div className="mt-10 flex gap-2">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => showSlide(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: i === slide ? 30 : 14, background: i === slide ? "#5CE1F2" : "rgba(255,255,255,0.3)" }}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-9 border-t border-white/14 pt-6">
          {copy.hero.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-[26px] font-bold text-white">{s.value}</p>
              <p className="mt-1 text-[13px] text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
