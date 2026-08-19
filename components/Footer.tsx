import Image from "next/image";
import Link from "next/link";
import { CALENDLY_URL, CONTACT_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_WHATSAPP_DISPLAY, t } from "@/lib/content";
import type { Lang } from "@/lib/locale";
import WhatsAppLink from "./WhatsAppLink";

export default function Footer({ lang }: { lang: Lang }) {
  const copy = t(lang);

  const exploreLinks = [
    { key: "useCases", href: "use-cases", label: copy.useCasesSection.kicker },
    { key: "solution", href: "request/solution", label: copy.nav.solutionTitle },
    { key: "technology", href: "request/technology", label: copy.nav.techTitle },
    { key: "products", href: "products", label: copy.productsPage.title },
    { key: "sectors", href: "sectors", label: copy.sectorsSection.title },
    { key: "about", href: "about", label: copy.aboutPage.title },
    { key: "contact", href: "contact", label: copy.contactPage.title },
  ];

  return (
    <footer className="mt-auto border-t border-hairline-soft bg-surface">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-11 px-8 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="block h-[34px] w-[34px] overflow-hidden rounded-[9px] bg-indigo-mid">
              <Image src="/logo-mark.jpg" alt="" width={34} height={34} className="h-[34px] w-[34px] scale-[1.35] object-cover" />
            </span>
            <span className="font-display text-lg font-bold text-ink">
              INA<span className="text-primary">SMART</span>
            </span>
          </div>
          <p className="mt-3.5 max-w-xs text-sm leading-relaxed text-ink-muted">{copy.footer.tagline}</p>
          <p className="mt-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.footer.motto}</p>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.footer.explore}</p>
          <div className="flex flex-col gap-2">
            {exploreLinks.map((item) => (
              <Link key={item.key} href={`/${lang}/${item.href}`} className="w-fit text-sm text-ink-soft transition-colors duration-200 hover:text-primary">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.footer.contact}</p>
          <div className="flex flex-col gap-2 text-sm text-ink-soft">
            <span dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }} className="w-fit">
              {CONTACT_EMAIL}
            </span>
            <span dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }} className="w-fit">
              {CONTACT_PHONE}
            </span>
            <WhatsAppLink className="w-fit transition-colors duration-200 hover:text-primary">
              {copy.whatsappNav}:{" "}
              <span dir="ltr" style={{ unicodeBidi: "isolate", display: "inline-block" }}>
                {CONTACT_WHATSAPP_DISPLAY}
              </span>
            </WhatsAppLink>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-fit transition-colors duration-200 hover:text-primary">
              {copy.nav.cta}
            </a>
            <span>{CONTACT_ADDRESS[lang]}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-hairline-soft py-5 text-center text-xs text-ink-faint">© 2026 INA SMART. {copy.footer.rights}</div>
    </footer>
  );
}
