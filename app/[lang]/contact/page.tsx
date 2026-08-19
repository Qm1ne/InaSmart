import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import WhatsAppLink from "@/components/WhatsAppLink";
import { CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP_DISPLAY, t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  return {
    title:
      lang === "ar"
        ? "تواصل معنا | إينا سمارت الدوحة، قطر — هاتف وواتساب وبريد"
        : "Contact INA SMART | Technology & System Integration Company, Doha Qatar",
    description:
      lang === "ar"
        ? "تواصل مع إينا سمارت في الدوحة، قطر عبر الهاتف أو واتساب أو البريد الإلكتروني — تكامل الأنظمة وتوريد التقنية المتقدمة والأتمتة والحلول الذكية."
        : "Contact INA SMART in Doha, Qatar by phone, WhatsApp or email — system integration, advanced technology sourcing, automation and smart solutions.",
    keywords: ["System integrator Qatar", "Technology sourcing Qatar", "ICT solutions Qatar", "AV solutions Qatar"],
    alternates: { canonical: `/${lang}/contact` },
  };
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang).contactPage;

  return (
    <section className="py-16 pb-22">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-8 lg:grid-cols-2">
        <div>
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.kicker}</p>
          <h1 className="font-display text-[34px] font-bold">{copy.title}</h1>
          <p className="mt-3.5 text-[15px] leading-relaxed text-ink-muted">{copy.copy}</p>
          <div className="mt-7 flex flex-col gap-3.5 text-sm">
            <div>
              <strong>{copy.email}</strong>
              <br />
              <span dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }}>
                {CONTACT_EMAIL}
              </span>
            </div>
            <div>
              <strong>{copy.phone}</strong>
              <br />
              <span dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }}>
                {CONTACT_PHONE}
              </span>
            </div>
            <div>
              <strong>{copy.whatsapp}</strong>
              <br />
              <WhatsAppLink className="font-semibold text-primary transition-opacity duration-200 hover:opacity-70">
                <span dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }}>
                  {CONTACT_WHATSAPP_DISPLAY}
                </span>
              </WhatsAppLink>
            </div>
            <div>
              <strong>{copy.address}</strong>
              <br />
              {lang === "ar" ? CONTACT_ADDRESS.ar : CONTACT_ADDRESS.en}
            </div>
          </div>
        </div>
        <ContactForm lang={lang} />
      </div>
    </section>
  );
}
