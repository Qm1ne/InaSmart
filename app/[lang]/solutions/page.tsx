import type { Metadata } from "next";
import { solutions, t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export const metadata: Metadata = { title: "Solutions — INASMART" };

export default function SolutionsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang).solutionsPage;

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
        <div className="mx-auto grid max-w-content grid-cols-1 gap-5 px-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <div key={s.id} id={s.id} className="rounded-card border border-hairline bg-white p-6 scroll-mt-24">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary-tint font-display text-sm font-bold text-primary">
                {s.mono}
              </div>
              <h3 className="mt-4 text-base font-bold">{lang === "ar" ? s.ar.title : s.en.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                {lang === "ar" ? s.ar.description : s.en.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
