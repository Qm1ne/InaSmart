import Link from "next/link";
import { CALENDLY_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP_DISPLAY, NAV, t } from "@/lib/content";
import type { Lang } from "@/lib/locale";
import WhatsAppLink from "./WhatsAppLink";

export default function Footer({ lang }: { lang: Lang }) {
  const copy = t(lang);
  const footerNav = [...NAV.filter((n) => n.key !== "home"), { key: "quote", href: "quote", en: "Request a Quote", ar: "طلب عرض سعر" }];

  return (
    <footer className="mt-auto border-t border-hairline bg-surface">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-8 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-bold">INASMART</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">{copy.footer.tagline}</p>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.footer.explore}</p>
          <div className="flex flex-col gap-2">
            {footerNav.map((item) => (
              <Link key={item.key} href={`/${lang}${item.href ? `/${item.href}` : ""}`} className="text-sm text-ink-soft">
                {lang === "ar" ? item.ar : item.en}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.footer.contact}</p>
          <div className="flex flex-col gap-2 text-sm text-ink-soft">
            <span>{CONTACT_EMAIL}</span>
            <span>{CONTACT_PHONE}</span>
            <WhatsAppLink className="w-fit">
              {copy.whatsappNav}: {CONTACT_WHATSAPP_DISPLAY}
            </WhatsAppLink>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-fit">
              {copy.ctaBand.call}
            </a>
            <span>Doha, Qatar</span>
          </div>
        </div>
      </div>
      <div className="border-t border-hairline py-5 text-center text-xs text-ink-faint">© 2026 Inasmart. {copy.footer.rights}</div>
    </footer>
  );
}
