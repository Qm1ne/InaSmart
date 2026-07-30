"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CALENDLY_URL, t } from "@/lib/content";
import type { Lang } from "@/lib/locale";

const SLIDES = ["/banner1.png", "/banner2.png", "/banner3.png", "/banner4.jpg"];
const SLIDE_COUNT = SLIDES.length;
const AUTOPLAY_MS = 5000;

export default function HeroBanner({ lang }: { lang: Lang }) {
  const [slide, setSlide] = useState(0);
  const copy = t(lang);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % SLIDE_COUNT), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-hero py-24 pb-16 text-white sm:py-28">
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <Image src={src} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
          </div>
        ))}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, oklch(15% 0.03 265 / 0.92) 0%, oklch(18% 0.03 265 / 0.75) 45%, oklch(18% 0.03 265 / 0.4) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-content px-8">
        <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-kicker">{copy.hero.kicker}</p>
        <h1 className="max-w-[760px] font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[56px]">
          {copy.hero.title}
        </h1>
        <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-white/85">{copy.hero.copy}</p>

        <div className="mt-9 flex flex-wrap gap-3.5">
          <Link
            href={`/${lang}/quote`}
            className="rounded-control bg-lime px-6 py-3.5 text-[15px] font-semibold text-hero-deep transition-opacity duration-200 hover:opacity-90"
          >
            {copy.hero.ctaQuote}
          </Link>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-control border border-hero-border px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            {copy.ctaBand.call}
          </a>
          <Link
            href={`/${lang}/solutions`}
            className="rounded-control px-6 py-3.5 text-[15px] font-semibold text-white/85 transition-colors duration-200 hover:text-white"
          >
            {copy.hero.ctaSolutions}
          </Link>
        </div>

        <div className="mt-11 flex gap-2">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: i === slide ? 28 : 14, background: i === slide ? "#fff" : "rgba(255,255,255,0.35)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
