import type { Metadata } from "next";
import Link from "next/link";
import AuditSticker from "@/components/AuditSticker";
import UseCaseCover from "@/components/UseCaseCover";
import { CALENDLY_URL, t, useCases } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  return {
    title:
      lang === "ar"
        ? "مختبرات الروبوتات والفصول الذكية وقاعات الاجتماعات | إينا سمارت قطر"
        : "Robotics Labs, Smart Classrooms & Meeting Room AV in Qatar | INA SMART",
    description:
      lang === "ar"
        ? "حلول جاهزة قابلة للتخصيص في قطر: مختبرات روبوتات ومختبرات STEM والذكاء الاصطناعي، وفصول ذكية بشاشات تفاعلية، ومصانع ذكية، وقاعات اجتماعات بأنظمة صوتية ومرئية."
        : "Prebuilt solutions ready to adapt in Qatar — robotics lab setup, STEM and AI labs, smart classrooms with interactive displays, smart factory monitoring, and meeting room AV with video conferencing.",
    keywords: [
      "Robotics lab setup Qatar",
      "Smart classroom Qatar",
      "Interactive display Qatar",
      "Smart board Qatar",
      "Meeting room AV Qatar",
      "Conference room solutions Qatar",
      "Smart factory solutions Qatar",
      "STEM lab supplier Qatar",
    ],
    alternates: { canonical: `/${lang}/use-cases` },
  };
}

export default function UseCasesPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang);

  return (
    <>
      <section className="border-b border-hairline-soft pb-10 pt-16">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.useCasesSection.kicker}</p>
          <h1 className="font-display text-[40px] font-bold text-ink">{copy.useCasesPage.title}</h1>
          <p className="mt-3.5 max-w-[660px] text-base leading-relaxed text-ink-muted">{copy.useCasesPage.copy}</p>
        </div>
      </section>

      <section className="pb-6 pt-14">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.useCasesPage.sectionOne}</p>
          <h2 className="mb-2 font-display text-[26px] font-bold text-ink">{copy.useCasesPage.prebuiltTitle}</h2>
          <p className="mb-8 max-w-[620px] text-[15px] leading-relaxed text-ink-muted">{copy.useCasesPage.prebuiltCopy}</p>

          <div className="flex flex-col gap-5">
            {useCases.map((u, i) => {
              const data = lang === "ar" ? u.ar : u.en;
              return (
                <div
                  key={u.id}
                  id={u.id}
                  className="grid scroll-mt-24 grid-cols-1 overflow-hidden rounded-card-lg border border-hairline bg-white md:grid-cols-[300px_1fr]"
                >
                  <UseCaseCover useCase={u} lang={lang} className="min-h-[220px] w-full" />
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,#CDF3FB,#E6F0FD)] font-display text-xs font-bold text-badge-ink-deep">
                        {u.mono}
                      </span>
                      <h3 className="font-display text-[22px] font-bold text-ink">{data.title}</h3>
                    </div>
                    <p className="mt-3.5 max-w-[620px] text-[15px] leading-relaxed text-ink-muted">{data.long}</p>
                    <div className="mt-4.5 flex flex-wrap gap-2">
                      {data.includes.map((tag) => (
                        <span key={tag} className="rounded-full border border-hairline bg-surface-soft px-3 py-1.5 text-xs text-ink-soft">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5.5 flex flex-wrap gap-5 text-[13px] text-ink-muted">
                      <span>
                        <strong className="text-ink">{copy.useCasesPage.leadTime}</strong> {data.lead}
                      </span>
                      <span>
                        <strong className="text-ink">{copy.useCasesPage.fitFor}</strong> {data.fit}
                      </span>
                    </div>
                    <Link
                      href={`/${lang}/request/solution?solutions=${i}`}
                      className="mt-5.5 inline-block rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
                    >
                      {copy.useCasesPage.cardCta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pt-8">
        <div className="mx-auto max-w-content px-8">
          <div className="grid grid-cols-1 overflow-hidden rounded-card-lg border border-blue-hairline bg-[linear-gradient(120deg,#F2FBFD,#EEF4FE)] md:grid-cols-[300px_1fr]">
            <div className="flex min-h-[200px] items-center justify-center">
              <AuditSticker label={copy.audit.sticker} size={132} />
            </div>
            <div className="p-6 md:p-8">
              <span className="inline-flex rounded-full bg-indigo px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-light">
                {copy.audit.useTag}
              </span>
              <h3 className="mt-3.5 font-display text-[22px] font-bold text-ink">{copy.audit.useTitle}</h3>
              <p className="mt-3 max-w-[620px] text-[15px] leading-relaxed text-ink-muted">{copy.audit.useCopy}</p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
              >
                {copy.audit.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-22 pt-8">
        <div className="mx-auto max-w-content px-8">
          <div className="rounded-card-lg border border-dashed border-[oklch(84%_0.02_265)] bg-surface-soft p-9">
            <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.useCasesPage.sectionTwo}</p>
            <h2 className="font-display text-[26px] font-bold text-ink">{copy.useCasesPage.customTitle}</h2>
            <p className="mt-3 max-w-[640px] text-[15px] leading-relaxed text-ink-muted">{copy.useCasesPage.customCopy}</p>
            <div className="mt-5.5 flex flex-wrap gap-3">
              <Link
                href={`/${lang}/request/solution`}
                className="rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5.5 py-3.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
              >
                {copy.help.pathA.cta}
              </Link>
              <Link
                href={`/${lang}/request/technology`}
                className="rounded-control border border-input-border bg-white px-5.5 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                {copy.help.pathB.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
