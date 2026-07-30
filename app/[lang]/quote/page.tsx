import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import { CALENDLY_URL, t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export const metadata: Metadata = { title: "Request a Quote — INASMART" };

export default function QuotePage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang).quotePage;

  return (
    <section className="py-16 pb-22">
      <div className="mx-auto max-w-[760px] px-8">
        <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.kicker}</p>
        <h1 className="font-display text-[34px] font-bold">{copy.title}</h1>
        <p className="mb-7 mt-3.5 text-[15px] leading-relaxed text-ink-muted">{copy.copy}</p>

        <div className="mb-8 flex flex-wrap gap-2.5">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-control border border-primary px-4.5 py-2.5 text-[13px] font-bold text-primary transition-colors duration-200 hover:bg-primary-tint"
          >
            {copy.orCall}
          </a>
          <WhatsAppLink className="rounded-control border border-whatsapp-border bg-whatsapp-tint px-4.5 py-2.5 text-[13px] font-bold text-whatsapp transition-opacity duration-200 hover:opacity-80">
            {copy.orWhatsapp}
          </WhatsAppLink>
        </div>

        <QuoteForm lang={lang} />
      </div>
    </section>
  );
}
