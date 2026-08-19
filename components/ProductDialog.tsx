"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";
import { productCategories, t, type Product } from "@/lib/content";
import type { Lang } from "@/lib/locale";

/**
 * Full-size view of a product card. Opens from the Products grid so the visitor
 * can read the whole photo and spec without leaving the catalogue.
 */
export default function ProductDialog({
  product,
  lang,
  onClose,
}: {
  product: Product;
  lang: Lang;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const copy = t(lang).productsPage;
  const data = lang === "ar" ? product.ar : product.en;
  const category = productCategories.find((c) => c.id === product.categoryId);
  const categoryTitle = category ? (lang === "ar" ? category.ar.title : category.en.title) : "";

  // Keep Tab inside the dialog while it is open, and close on Escape.
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.addEventListener("keydown", onKeyDown);

    // Lock background scroll without the layout shifting as the scrollbar goes.
    const { overflow, paddingInlineEnd } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingInlineEnd = `${scrollbar}px`;

    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingInlineEnd = paddingInlineEnd;
      previouslyFocused?.focus?.();
    };
  }, [onKeyDown]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-dialog-title"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[rgba(11,16,48,0.72)] p-4 backdrop-blur-sm animate-fade-in motion-reduce:animate-none sm:p-6"
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-[980px] overflow-hidden rounded-card-lg bg-white shadow-[0_40px_80px_-32px_rgba(11,16,48,0.6)] animate-zoom-in motion-reduce:animate-none"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={copy.close}
          className="absolute top-3 end-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-white/90 text-lg leading-none text-ink backdrop-blur transition-colors duration-200 hover:border-primary hover:text-primary"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-square w-full bg-surface-soft">
            <Image
              src={product.image}
              alt={data.name}
              fill
              sizes="(max-width: 768px) 100vw, 490px"
              priority
              className="object-contain"
            />
            {product.signature && (
              <span className="absolute top-4 start-4 rounded-full bg-indigo px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-light">
                {copy.signature}
              </span>
            )}
          </div>

          <div className="flex flex-col p-7 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary">{categoryTitle}</p>
            <h2 id="product-dialog-title" className="mt-2.5 font-display text-[26px] font-bold leading-tight text-ink">
              {data.name}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{data.spec}</p>

            <p className="mt-5 border-t border-hairline-soft pt-5 text-[13px] leading-relaxed text-ink-muted">{copy.dialogNote}</p>

            <div className="mt-auto flex flex-wrap gap-3 pt-7">
              <Link
                href={`/${lang}/request/technology?product=${product.id}`}
                className="rounded-control bg-[linear-gradient(135deg,#1E93E8,#1668C9)] px-5.5 py-3.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
              >
                {copy.cta}
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="rounded-control border border-input-border bg-white px-5.5 py-3.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                {copy.backToCatalogue}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
