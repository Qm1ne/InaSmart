import type { Metadata } from "next";
import { brands, t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export const metadata: Metadata = { title: "Brands — INASMART" };

export default function BrandsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang).brandsPage;

  return (
    <>
      <section className="pb-6 pt-16">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.kicker}</p>
          <h1 className="font-display text-[38px] font-bold">{copy.title}</h1>
          <p className="mt-3.5 max-w-[640px] text-base leading-relaxed text-ink-muted">{copy.copy}</p>
        </div>
      </section>

      <section className="pb-22 pt-6">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-5 px-8 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b, i) => (
            <div key={i} className="flex items-center justify-center rounded-card border border-hairline bg-white p-9">
              <span className="font-mono text-xs text-ink-muted">{lang === "ar" ? b.ar : b.en}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
