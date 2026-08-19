import Link from "next/link";
import HeroBanner from "@/components/HeroBanner";
import SectorCover from "@/components/SectorCover";
import { CALENDLY_URL, deliveryModels, sectors, t, useCases } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export default function HomePage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang);

  return (
    <>
      <HeroBanner lang={lang} />

      <section className="border-b border-hairline-soft bg-surface py-6">
        <div className="mx-auto flex max-w-content flex-wrap items-center gap-x-3 gap-y-2 px-8">
          <p className="me-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.brand.themesTitle}</p>
          {copy.brand.themes.map((theme) => (
            <span key={theme} className="rounded-full border border-hairline bg-white px-3 py-1.5 text-xs font-semibold text-ink-soft">
              {theme}
            </span>
          ))}
        </div>
      </section>

      <section className="pt-8">
        <div className="mx-auto max-w-content px-8">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-blue-hairline bg-[linear-gradient(120deg,#F2FBFD,#EEF4FE)] p-7">
            <div>
              <span className="inline-flex rounded-full bg-indigo px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-light">
                {copy.audit.badge}
              </span>
              <h2 className="mt-3 font-display text-[22px] font-bold text-ink">{copy.audit.title}</h2>
              <p className="mt-2 max-w-[620px] text-sm leading-relaxed text-ink-muted">{copy.audit.copy}</p>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none whitespace-nowrap rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5.5 py-3.5 text-[15px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
            >
              {copy.audit.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="pb-6 pt-14">
        <div className="mx-auto max-w-content px-8">
          <div className="max-w-[620px]">
            <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.help.kicker}</p>
            <h2 className="font-display text-[34px] font-bold text-ink">{copy.help.title}</h2>
            <p className="mt-3.5 text-base leading-relaxed text-ink-muted">{copy.help.copy}</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col rounded-card-lg border border-hairline bg-white p-8.5 transition-all duration-200 hover:border-blue hover:shadow-[0_18px_40px_-24px_rgba(20,18,58,0.35)]">
              <span className="w-fit rounded-full bg-primary-tint px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-badge-ink">
                {copy.help.pathA.tag}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">{copy.help.pathA.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{copy.help.pathA.copy}</p>
              <div className="mt-5.5 flex flex-col gap-2.5">
                {copy.help.pathA.steps.map((s) => (
                  <div key={s.n} className="flex items-baseline gap-2.5 text-sm text-ink">
                    <span className="font-display text-xs font-bold text-primary">{s.n}</span>
                    <span>{s.text}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`/${lang}/request/solution`}
                className="mt-7 w-fit rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5.5 py-3.5 text-[15px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
              >
                {copy.help.pathA.cta}
              </Link>
            </div>
            <div className="flex flex-col rounded-card-lg border border-hairline bg-white p-8.5 transition-all duration-200 hover:border-blue hover:shadow-[0_18px_40px_-24px_rgba(20,18,58,0.35)]">
              <span className="w-fit rounded-full bg-surface px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
                {copy.help.pathB.tag}
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-ink">{copy.help.pathB.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{copy.help.pathB.copy}</p>
              <div className="mt-5.5 flex flex-col gap-2.5">
                {copy.help.pathB.steps.map((s) => (
                  <div key={s.n} className="flex items-baseline gap-2.5 text-sm text-ink">
                    <span className="font-display text-xs font-bold text-primary">{s.n}</span>
                    <span>{s.text}</span>
                  </div>
                ))}
              </div>
              <Link
                href={`/${lang}/request/technology`}
                className="mt-7 w-fit rounded-control border border-input-border bg-white px-5.5 py-3.5 text-[15px] font-semibold text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                {copy.help.pathB.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-18">
        <div className="mx-auto max-w-content px-8">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.useCasesSection.kicker}</p>
              <h2 className="font-display text-[32px] font-bold text-ink">{copy.useCasesSection.title}</h2>
            </div>
            <Link href={`/${lang}/use-cases`} className="text-sm font-semibold text-primary transition-opacity duration-200 hover:opacity-70">
              {copy.useCasesSection.link}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {useCases.map((u) => (
              <div
                key={u.id}
                className="rounded-card border border-hairline bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue"
              >
                <div className="flex h-8.5 w-8.5 items-center justify-center rounded-[9px] bg-[linear-gradient(135deg,#CDF3FB,#E6F0FD)] font-display text-xs font-bold text-badge-ink-deep">
                  {u.mono}
                </div>
                <h3 className="mt-3.5 text-[15px] font-bold text-ink">{lang === "ar" ? u.ar.title : u.en.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{lang === "ar" ? u.ar.short : u.en.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-hairline-soft bg-surface py-20">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.process.kicker}</p>
          <h2 className="font-display text-[32px] font-bold text-ink">{copy.process.title}</h2>
          <p className="mb-10 mt-3.5 max-w-[660px] text-base leading-relaxed text-ink-muted">{copy.process.copy}</p>
          <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {copy.process.steps.map((p) => (
              <div key={p.n} className="border-t-2 border-blue pt-4">
                <p className="font-display text-xs font-bold text-primary">{p.n}</p>
                <h3 className="mt-2 text-base font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.deliverySection.kicker}</p>
          <h2 className="font-display text-[32px] font-bold text-ink">{copy.deliverySection.title}</h2>
          <p className="mb-10 mt-3.5 max-w-[660px] text-base leading-relaxed text-ink-muted">{copy.deliverySection.copy}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {deliveryModels.map((m) => {
              const data = lang === "ar" ? m.ar : m.en;
              return (
                <div
                  key={m.id}
                  className="rounded-card border border-hairline bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue"
                >
                  <p className="font-display text-xs font-bold text-primary">{data.n}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-ink">{data.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-ink-soft">{data.lead}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{data.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-content px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[32px] font-bold text-ink">{copy.sectorsSection.title}</h2>
            <Link href={`/${lang}/sectors`} className="text-sm font-semibold text-primary transition-opacity duration-200 hover:opacity-70">
              {copy.sectorsSection.link}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s) => (
              <Link
                key={s.id}
                href={`/${lang}/sectors#${s.id}`}
                className="group overflow-hidden rounded-2xl border border-hairline bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue"
              >
                <SectorCover sector={s} lang={lang} className="h-[104px] w-full" />
                <div className="p-5">
                  <h3 className="text-base font-bold text-ink transition-colors duration-200 group-hover:text-primary">
                    {lang === "ar" ? s.ar.title : s.en.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">{lang === "ar" ? s.ar.short : s.en.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo py-19 text-white">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-7 px-8">
          <div>
            <h2 className="font-display text-[30px] font-bold">{copy.ctaBand.title}</h2>
            <p className="mt-3 max-w-[560px] text-white/72">{copy.ctaBand.copy}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${lang}/request/solution`}
              className="rounded-control bg-[linear-gradient(135deg,#25E0EF,#1E93E8)] px-6.5 py-4 text-[15px] font-bold text-on-gradient transition-opacity duration-200 hover:opacity-90"
            >
              {copy.ctaBand.cta1}
            </Link>
            <Link
              href={`/${lang}/request/technology`}
              className="rounded-control border border-white/30 px-6.5 py-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              {copy.ctaBand.cta2}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
