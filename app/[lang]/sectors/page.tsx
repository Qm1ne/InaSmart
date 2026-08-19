import type { Metadata } from "next";
import Link from "next/link";
import SectorCover from "@/components/SectorCover";
import { sectors, sectorUseCases, t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  return {
    title:
      lang === "ar"
        ? "حلول القطاعات: تعليم وشركات وصناعة ولوجستيات | إينا سمارت قطر"
        : "Sector Solutions: Education, Corporate, Industrial & Logistics | INA SMART Qatar",
    description:
      lang === "ar"
        ? "تكامل أنظمة وحلول ذكية عبر التعليم والشركات والصناعة والخدمات اللوجستية في قطر — فصول ذكية وقاعات اجتماعات وأتمتة صناعية وتتبع مستودعات ولوحات ذكية."
        : "System integration and smart solutions across education, corporate offices, manufacturing and logistics in Qatar — smart classrooms, meeting room AV, industrial automation, warehouse tracking and smart dashboards.",
    keywords: [
      "System integrator Qatar",
      "Industrial automation Qatar",
      "Warehouse management system Qatar",
      "Barcode system Qatar",
      "RFID tracking Qatar",
      "Smart classroom Qatar",
      "Meeting room AV Qatar",
    ],
    alternates: { canonical: `/${lang}/sectors` },
  };
}

export default function SectorsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang);

  return (
    <>
      <section className="border-b border-hairline-soft pb-10 pt-16">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.sectorsPage.kicker}</p>
          <h1 className="font-display text-[40px] font-bold text-ink">{copy.sectorsPage.title}</h1>
          <p className="mt-3.5 max-w-[660px] text-base leading-relaxed text-ink-muted">{copy.sectorsPage.copy}</p>
        </div>
      </section>

      <section className="pb-22 pt-14">
        <div className="mx-auto flex max-w-content flex-col gap-5 px-8">
          {sectors.map((s) => {
            const data = lang === "ar" ? s.ar : s.en;
            const related = sectorUseCases(s.id);
            return (
              <div
                key={s.id}
                id={s.id}
                className="grid scroll-mt-24 grid-cols-1 overflow-hidden rounded-card-lg border border-hairline bg-white md:grid-cols-[300px_1fr]"
              >
                <SectorCover sector={s} lang={lang} className="min-h-[220px] w-full" />
                <div className="p-6 md:p-7">
                  <h2 className="font-display text-[22px] font-bold text-ink">{data.title}</h2>
                  <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-ink-muted">{data.long}</p>

                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-card border border-hairline bg-surface-soft p-4">
                      <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">{copy.sectorsPage.trigger}</p>
                      <p className="text-[13px] leading-relaxed text-ink-muted">{data.trigger}</p>
                    </div>
                    <div className="rounded-card border border-blue-hairline bg-panel-blue p-4">
                      <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary">{copy.sectorsPage.constraint}</p>
                      <p className="text-[13px] leading-relaxed text-ink-muted">{data.constraint}</p>
                    </div>
                  </div>

                  <p className="mb-1.5 mt-5 text-xs font-bold uppercase tracking-[0.14em] text-primary">{copy.sectorsPage.typicalWork}</p>
                  <div className="flex flex-wrap gap-2">
                    {data.work.map((w) => (
                      <span key={w} className="rounded-full border border-hairline bg-surface-soft px-3 py-1.5 text-xs text-ink-soft">
                        {w}
                      </span>
                    ))}
                  </div>

                  {related.length > 0 && (
                    <>
                      <p className="mb-1.5 mt-5 text-xs font-bold uppercase tracking-[0.14em] text-primary">{copy.sectorsPage.related}</p>
                      <div className="flex flex-wrap gap-2">
                        {related.map((u) => (
                          <Link
                            key={u.id}
                            href={`/${lang}/use-cases#${u.id}`}
                            className="rounded-full border border-input-border bg-white px-3.5 py-2 text-xs font-semibold text-ink-soft transition-colors duration-200 hover:border-primary hover:text-primary"
                          >
                            {lang === "ar" ? `${u.ar.title} ←` : `${u.en.title} →`}
                          </Link>
                        ))}
                      </div>
                    </>
                  )}

                  <Link
                    href={`/${lang}/request/solution?sector=${s.id}`}
                    className="mt-5.5 inline-block rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                  >
                    {copy.sectorsPage.ctaPrefix} {data.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
