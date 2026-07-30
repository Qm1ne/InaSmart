import type { Metadata } from "next";
import { productCategories, t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export const metadata: Metadata = { title: "Products — INASMART" };

export default function ProductsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang).productsPage;

  return (
    <>
      <section className="pb-6 pt-16">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-accent">{copy.kicker}</p>
          <h1 className="font-display text-[38px] font-bold">{copy.title}</h1>
          <p className="mt-3.5 max-w-[640px] text-base leading-relaxed text-ink-muted">{copy.copy}</p>
        </div>
      </section>

      <section className="pb-22 pt-6">
        <div className="mx-auto flex max-w-content flex-col gap-10 px-8">
          {productCategories.map((cat) => (
            <div
              key={cat.id}
              className="grid grid-cols-1 gap-8 rounded-card-lg border border-hairline bg-white p-7 transition-shadow duration-200 hover:shadow-lg md:grid-cols-[280px_1fr]"
            >
              <div className="flex h-[180px] items-center justify-center rounded-xl bg-[repeating-linear-gradient(45deg,oklch(93%_0.03_195),oklch(93%_0.03_195)_10px,oklch(96%_0.02_195)_10px,oklch(96%_0.02_195)_20px)] font-mono text-[11px] text-accent/80">
                category photo
              </div>
              <div>
                <h2 className="font-display text-[22px] font-bold">{lang === "ar" ? cat.ar.title : cat.en.title}</h2>
                <p className="mt-2.5 max-w-[600px] text-sm leading-relaxed text-ink-muted">
                  {lang === "ar" ? cat.ar.description : cat.en.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(lang === "ar" ? cat.ar.subcategories : cat.en.subcategories).map((sub) => (
                    <span key={sub} className="rounded-full bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink-soft">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
