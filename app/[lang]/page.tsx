import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import { CALENDLY_URL, productCategories, projects, solutions, t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang);

  return (
    <>
      <HeroBanner lang={lang} />

      <section className="border-b border-hairline bg-surface py-7">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-6 px-8">
          <p className="text-[13px] font-semibold text-ink-faint">{copy.trust}</p>
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex h-9 w-[110px] items-center justify-center rounded-lg font-mono text-[10px] text-ink-muted"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, oklch(90% 0.006 260), oklch(90% 0.006 260) 6px, oklch(94% 0.006 260) 6px, oklch(94% 0.006 260) 12px)",
                }}
              >
                partner logo
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22">
        <div className="mx-auto max-w-content px-8">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.solutionsSection.kicker}</p>
              <h2 className="font-display text-[32px] font-bold">{copy.solutionsSection.title}</h2>
            </div>
            <Link
              href={`/${lang}/solutions`}
              className="text-sm font-semibold text-primary transition-opacity duration-200 hover:opacity-70"
            >
              {copy.solutionsSection.link}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.slice(0, 4).map((s) => (
              <div
                key={s.id}
                className="rounded-card border border-hairline bg-white p-5.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-8.5 w-8.5 items-center justify-center rounded-[9px] bg-primary-tint font-display text-[13px] font-bold text-primary">
                  {s.mono}
                </div>
                <h3 className="mt-3.5 text-[15px] font-bold">{lang === "ar" ? s.ar.title : s.en.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                  {lang === "ar" ? s.ar.description : s.en.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-22">
        <div className="mx-auto max-w-content px-8">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-accent">{copy.productsSection.kicker}</p>
              <h2 className="font-display text-[32px] font-bold">{copy.productsSection.title}</h2>
            </div>
            <Link
              href={`/${lang}/products`}
              className="text-sm font-semibold text-accent transition-opacity duration-200 hover:opacity-70"
            >
              {copy.productsSection.link}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className="overflow-hidden rounded-2xl border border-hairline bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-[120px] items-center justify-center bg-[repeating-linear-gradient(45deg,#FBE4CE,#FBE4CE_10px,#FDF0DE_10px,#FDF0DE_20px)] font-mono text-[11px] text-[#8A4415]">
                  product photo
                </div>
                <div className="p-5.5">
                  <h3 className="font-display text-lg font-bold">{lang === "ar" ? cat.ar.title : cat.en.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                    {lang === "ar" ? cat.ar.description : cat.en.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-22">
        <div className="mx-auto max-w-content px-8">
          <div className="mb-11">
            <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.projectsSection.kicker}</p>
            <h2 className="font-display text-[32px] font-bold">{copy.projectsSection.title}</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => {
              const category = p.category;
              return (
                <Link
                  key={p.id}
                  href={`/${lang}/projects`}
                  className="block overflow-hidden rounded-2xl border border-hairline bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-[140px] items-center justify-center bg-[repeating-linear-gradient(45deg,#F7DCE7,#F7DCE7_10px,#FBEEF3_10px,#FBEEF3_20px)] font-mono text-[11px] text-[#8A1F49]">
                    project photo
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary">{category}</p>
                    <h3 className="mt-2 text-base font-bold">{lang === "ar" ? p.ar.title : p.en.title}</h3>
                    <p className="mt-2 text-[13px] text-ink-muted">{lang === "ar" ? p.ar.summary : p.en.summary}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-6 px-8">
          <div>
            <h2 className="font-display text-[30px] font-bold">{copy.ctaBand.title}</h2>
            <p className="mt-3 max-w-[520px] text-[#F2C9DA]">{copy.ctaBand.copy}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${lang}/quote`}
              className="rounded-control bg-white px-6 py-3.5 text-[15px] font-bold text-primary transition-opacity duration-200 hover:opacity-90"
            >
              {copy.ctaBand.quote}
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-control border border-primary-border px-6 py-3.5 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-white/10"
            >
              {copy.ctaBand.call}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
