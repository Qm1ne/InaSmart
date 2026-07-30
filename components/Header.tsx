"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, t } from "@/lib/content";
import { otherLocale, type Lang } from "@/lib/locale";
import WhatsAppLink from "./WhatsAppLink";

export default function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = t(lang);
  const segments = pathname.split("/").filter(Boolean);
  const currentHref = segments.slice(1).join("/");

  const nextLocale = otherLocale(lang);
  const restOfPath = segments.slice(1).join("/");
  const langToggleHref = `/${nextLocale}${restOfPath ? `/${restOfPath}` : ""}`;

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-content items-center justify-between gap-6 px-8">
        <Link href={`/${lang}`} className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
          <Image src="/logo.png" alt="INASMART" width={34} height={34} className="h-[34px] w-auto" priority />
          INASMART
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => {
            const isActive = currentHref === item.href;
            return (
              <Link
                key={item.key}
                href={`/${lang}${item.href ? `/${item.href}` : ""}`}
                className={`text-sm font-semibold ${isActive ? "text-primary" : "text-ink-soft"}`}
              >
                {lang === "ar" ? item.ar : item.en}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href={langToggleHref}
            className="rounded-full border border-input-border bg-white px-3.5 py-2 text-xs font-semibold text-ink"
          >
            {lang === "ar" ? "EN" : "AR"}
          </Link>
          <WhatsAppLink className="hidden items-center gap-1.5 rounded-control border border-whatsapp-border bg-whatsapp-tint px-4 py-2.5 text-sm font-semibold text-whatsapp sm:inline-flex">
            {copy.whatsappNav}
          </WhatsAppLink>
          <Link
            href={`/${lang}/quote`}
            className="hidden rounded-control bg-primary px-5 py-[11px] text-sm font-semibold text-white sm:inline-flex"
          >
            {copy.quoteCta}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-control border border-hairline md:hidden"
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
          {NAV.map((item) => {
            const isActive = currentHref === item.href;
            return (
              <Link
                key={item.key}
                href={`/${lang}${item.href ? `/${item.href}` : ""}`}
                onClick={() => setMenuOpen(false)}
                className={`py-2 text-sm font-semibold ${isActive ? "text-primary" : "text-ink-soft"}`}
              >
                {lang === "ar" ? item.ar : item.en}
              </Link>
            );
          })}
          <Link
            href={`/${lang}/quote`}
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex w-fit rounded-control bg-primary px-5 py-[11px] text-sm font-semibold text-white"
          >
            {copy.quoteCta}
          </Link>
          <WhatsAppLink className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-control border border-whatsapp-border bg-whatsapp-tint px-4 py-2.5 text-sm font-semibold text-whatsapp">
            {copy.whatsappNav}
          </WhatsAppLink>
        </nav>
      )}
    </header>
  );
}
