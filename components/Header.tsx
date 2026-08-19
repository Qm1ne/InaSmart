"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CALENDLY_URL, NAV, t } from "@/lib/content";
import { otherLocale, type Lang } from "@/lib/locale";
import WhatsAppLink from "./WhatsAppLink";

export default function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [reqOpen, setReqOpen] = useState(false);
  const copy = t(lang);
  const segments = pathname.split("/").filter(Boolean);
  const currentHref = segments.slice(1).join("/");

  const nextLocale = otherLocale(lang);
  const restOfPath = segments.slice(1).join("/");
  const langToggleHref = `/${nextLocale}${restOfPath ? `/${restOfPath}` : ""}`;

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-content items-center justify-between gap-5 px-8">
        <Link href={`/${lang}`} className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
          <span className="block h-[38px] w-[38px] overflow-hidden rounded-[10px] bg-indigo-mid">
            <Image
              src="/logo-mark.jpg"
              alt="INA SMART"
              width={38}
              height={38}
              className="h-[38px] w-[38px] scale-[1.35] object-cover"
              priority
            />
          </span>
          INA<span className="text-primary">SMART</span>
        </Link>

        <nav className="relative hidden items-center gap-4 whitespace-nowrap md:flex min-[1260px]:gap-5">
          <div className="relative">
            <button
              type="button"
              onClick={() => setReqOpen((open) => !open)}
              className="cursor-pointer border-0 bg-transparent p-0 text-sm font-bold text-primary"
            >
              {copy.nav.requestOpen}
            </button>
            {reqOpen && (
              <div className="absolute top-[34px] start-[-14px] z-[60] w-[290px] overflow-hidden rounded-card border border-hairline bg-white shadow-[0_26px_50px_-26px_rgba(20,18,58,0.5)]">
                <Link
                  href={`/${lang}/request/solution`}
                  onClick={() => setReqOpen(false)}
                  className="block w-full border-b border-hairline-soft p-4 text-start"
                >
                  <span className="block text-sm font-bold text-ink">{copy.nav.solutionTitle}</span>
                  <span className="mt-0.5 block text-xs text-ink-muted">{copy.nav.solutionDesc}</span>
                </Link>
                <Link
                  href={`/${lang}/request/technology`}
                  onClick={() => setReqOpen(false)}
                  className="block w-full p-4 text-start"
                >
                  <span className="block text-sm font-bold text-ink">{copy.nav.techTitle}</span>
                  <span className="mt-0.5 block text-xs text-ink-muted">{copy.nav.techDesc}</span>
                </Link>
              </div>
            )}
          </div>
          {NAV.map((item) => {
            const isActive = currentHref === item.href;
            return (
              <Link
                key={item.key}
                href={`/${lang}${item.href ? `/${item.href}` : ""}`}
                className={`text-sm font-semibold transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-ink-soft"}`}
              >
                {lang === "ar" ? item.ar : item.en}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-none items-center gap-2.5">
          <Link
            href={langToggleHref}
            className="rounded-full border border-input-border bg-white px-3.5 py-2 text-xs font-semibold text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            {copy.nav.langToggle}
          </Link>
          <WhatsAppLink className="hidden items-center gap-1.5 rounded-control border border-whatsapp-border bg-whatsapp-tint px-4 py-2.5 text-sm font-semibold text-whatsapp transition-opacity duration-200 hover:opacity-80 min-[1240px]:inline-flex">
            {copy.whatsappNav}
          </WhatsAppLink>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden flex-none whitespace-nowrap rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5 py-[11px] text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 sm:inline-flex"
          >
            {copy.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-control border border-hairline transition-colors duration-200 hover:border-primary md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="h-0.5 w-4 bg-ink" />
              <span className="h-0.5 w-4 bg-ink" />
              <span className="h-0.5 w-4 bg-ink" />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-hairline bg-bg px-8 py-4 md:hidden">
          <Link
            href={`/${lang}/request/solution`}
            onClick={() => setMenuOpen(false)}
            className="py-2 text-sm font-bold text-primary"
          >
            {copy.nav.solutionTitle}
          </Link>
          <Link
            href={`/${lang}/request/technology`}
            onClick={() => setMenuOpen(false)}
            className="py-2 text-sm font-bold text-primary"
          >
            {copy.nav.techTitle}
          </Link>
          {NAV.map((item) => {
            const isActive = currentHref === item.href;
            return (
              <Link
                key={item.key}
                href={`/${lang}${item.href ? `/${item.href}` : ""}`}
                onClick={() => setMenuOpen(false)}
                className={`py-2 text-sm font-semibold transition-colors duration-200 hover:text-primary ${isActive ? "text-primary" : "text-ink-soft"}`}
              >
                {lang === "ar" ? item.ar : item.en}
              </Link>
            );
          })}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex w-fit rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5 py-[11px] text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            {copy.nav.cta}
          </a>
          <WhatsAppLink className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-control border border-whatsapp-border bg-whatsapp-tint px-4 py-2.5 text-sm font-semibold text-whatsapp transition-opacity duration-200 hover:opacity-80">
            {copy.whatsappNav}
          </WhatsAppLink>
        </nav>
      )}
    </header>
  );
}
