import type { Metadata } from "next";
import Link from "next/link";
import { CALENDLY_URL, aboutContent, coreValues, differentiators, focusAreas, t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  return {
    title:
      lang === "ar"
        ? "عن إينا سمارت | شركة تكامل أنظمة وتقنية في الدوحة، قطر"
        : "About INA SMART | Technology & System Integration Company in Doha, Qatar",
    description:
      lang === "ar"
        ? "إينا سمارت شركة مقرها الدوحة لتكامل الأنظمة وتوريد التقنية المتقدمة والحلول الذكية العملية، وتدعم رؤية قطر الوطنية 2030 بالاختيار والتوريد والتنفيذ والربط والأتمتة."
        : "INA SMART is a Doha-based system integration and advanced technology company delivering practical smart solutions in Qatar, supporting Qatar National Vision 2030 through selection, sourcing, implementation, integration and automation.",
    keywords: [
      "System integrator Qatar",
      "Systems integrator Doha",
      "ICT solutions Qatar",
      "Smart technology solutions Qatar",
      "Digital transformation Qatar",
    ],
    alternates: { canonical: `/${lang}/about` },
  };
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang);
  const about = copy.aboutPage;

  return (
    <>
      <section className="border-b border-hairline-soft pb-12 pt-16">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{about.kicker}</p>
          <h1 className="mb-3 font-display text-[40px] font-bold text-ink">{about.title}</h1>
          <p className="max-w-[720px] text-base leading-relaxed text-ink-muted">{about.copy}</p>
          <p className="mt-6 font-display text-xl font-semibold text-primary">{copy.brand.positioning}</p>
        </div>
      </section>

      <section className="border-b border-hairline-soft bg-surface py-16">
        <div className="mx-auto max-w-content px-8">
          <h2 className="max-w-[760px] font-display text-[26px] font-bold leading-snug text-ink">{about.challengeTitle}</h2>
          <p className="mt-4 max-w-[820px] text-[15px] leading-relaxed text-ink-muted">{about.challengeCopy}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-8">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            {aboutContent.map((block, i) => (
              <div key={i} className="border-t-2 border-blue pt-4">
                <h3 className="text-base font-bold text-ink">{lang === "ar" ? block.ar.title : block.en.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{lang === "ar" ? block.ar.body : block.en.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-hairline-soft bg-surface py-16">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{about.valuesKicker}</p>
          <h2 className="mb-9 font-display text-[30px] font-bold text-ink">{about.valuesTitle}</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v) => {
              const data = lang === "ar" ? v.ar : v.en;
              return (
                <div key={v.id} className="rounded-card border border-hairline bg-white p-6">
                  <h3 className="font-display text-base font-bold text-ink">{data.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink-muted">{data.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{about.differentKicker}</p>
          <h2 className="mb-9 font-display text-[30px] font-bold text-ink">{about.differentTitle}</h2>
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {differentiators.map((d) => {
              const data = lang === "ar" ? d.ar : d.en;
              return (
                <div key={d.id} className="border-t-2 border-blue pt-4">
                  <h3 className="font-display text-lg font-bold text-ink">{data.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{data.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-hairline-soft bg-surface py-16">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{about.focusKicker}</p>
          <h2 className="mb-9 font-display text-[30px] font-bold text-ink">{about.focusTitle}</h2>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {focusAreas.map((f) => {
              const data = lang === "ar" ? f.ar : f.en;
              return (
                <div key={f.id} className="rounded-card-lg border border-hairline bg-white p-7">
                  <h3 className="font-display text-lg font-bold text-ink">{data.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{data.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {data.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-hairline bg-surface-soft px-3 py-1.5 text-xs text-ink-soft">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-indigo py-19 text-white">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-7 px-8">
          <div>
            <h2 className="font-display text-[30px] font-bold">{about.ctaTitle}</h2>
            <p className="mt-3 max-w-[560px] text-white/72">{about.ctaCopy}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${lang}/request/solution`}
              className="rounded-control bg-[linear-gradient(135deg,#25E0EF,#1E93E8)] px-6.5 py-4 text-[15px] font-bold text-on-gradient transition-opacity duration-200 hover:opacity-90"
            >
              {about.ctaSolution}
            </Link>
            <Link
              href={`/${lang}/products`}
              className="rounded-control border border-white/30 px-6.5 py-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              {about.ctaProducts}
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-control border border-white/30 px-6.5 py-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              {about.ctaCall}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
