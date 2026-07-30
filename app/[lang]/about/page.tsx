import type { Metadata } from "next";
import { aboutContent, t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export const metadata: Metadata = { title: "About — INASMART" };

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang).aboutPage;

  return (
    <section className="py-16 pb-22">
      <div className="mx-auto max-w-content px-8">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.kicker}</p>
        <h1 className="mb-11 font-display text-[38px] font-bold">{copy.title}</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {aboutContent.map((block, i) => (
            <div key={i} className="border-t-2 border-primary pt-4">
              <h3 className="text-base font-bold">{lang === "ar" ? block.ar.title : block.en.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                {lang === "ar" ? block.ar.body : block.en.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
