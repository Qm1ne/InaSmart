"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { t } from "@/lib/content";
import type { Lang } from "@/lib/locale";

/**
 * Photo-based counterpart to ModelDialog: a sliding gallery plus the
 * description and equipment list for a use case that has no 3D model.
 */
export default function GalleryDialog({
  images,
  title,
  description,
  items,
  lang,
  onClose,
}: {
  images: string[];
  title: string;
  description: string;
  items: string[];
  lang: Lang;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [index, setIndex] = useState(0);
  const copy = t(lang).useCasesPage;
  const count = images.length;

  const go = useCallback((next: number) => setIndex((next + count) % count), [count]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Arrow keys follow reading order, so they flip in RTL.
      if (e.key === "ArrowRight") {
        setIndex((i) => (lang === "ar" ? i - 1 + count : i + 1) % count);
        return;
      }
      if (e.key === "ArrowLeft") {
        setIndex((i) => (lang === "ar" ? i + 1 : i - 1 + count) % count);
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
    [onClose, count, lang]
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.addEventListener("keydown", onKeyDown);
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

  const arrowClass =
    "flex h-10 w-10 flex-none items-center justify-center rounded-full border border-hairline bg-white/92 text-ink shadow-sm backdrop-blur transition-colors duration-200 hover:border-primary hover:text-primary";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — ${copy.viewGallery}`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[rgba(11,16,48,0.82)] p-3 backdrop-blur-sm animate-fade-in motion-reduce:animate-none sm:p-6"
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-[1120px] overflow-hidden rounded-card-lg bg-white shadow-[0_40px_80px_-32px_rgba(11,16,48,0.6)] animate-zoom-in motion-reduce:animate-none"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline px-6 py-4">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">{copy.viewGallery}</p>
            <h2 className="mt-1 font-display text-xl font-bold text-ink">{title}</h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={copy.close}
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-hairline bg-white text-lg leading-none text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px]">
          {/* ---- slider ---- */}
          <div className="flex flex-col">
            <div className="relative h-[42vh] min-h-[280px] w-full overflow-hidden bg-surface-soft lg:h-[54vh]">
              {images.map((src, i) => (
                <div
                  key={src}
                  aria-hidden={i !== index}
                  className={`absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none ${
                    i === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${title} — ${i + 1}/${count}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    priority={i === 0}
                    className="object-cover"
                  />
                </div>
              ))}

              {count > 1 && (
                <>
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
                    <button
                      type="button"
                      onClick={() => go(index - 1)}
                      aria-label={copy.prevImage}
                      className={`pointer-events-auto ${arrowClass}`}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => go(index + 1)}
                      aria-label={copy.nextImage}
                      className={`pointer-events-auto ${arrowClass}`}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>

                  <span className="pointer-events-none absolute top-3 end-3 rounded-full bg-indigo/90 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-cyan-light">
                    {index + 1} / {count}
                  </span>

                  <div className="absolute bottom-3 start-1/2 flex -translate-x-1/2 gap-2 rtl:translate-x-1/2">
                    {images.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={`${copy.goToImage} ${i + 1}`}
                        aria-current={i === index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === index ? "w-7 bg-white" : "w-3 bg-white/55 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {count > 1 && (
              <div className="flex gap-2 overflow-x-auto border-t border-hairline p-3">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`${copy.goToImage} ${i + 1}`}
                    className={`relative h-14 w-20 flex-none overflow-hidden rounded-[8px] border-2 transition-colors duration-200 ${
                      i === index ? "border-primary" : "border-transparent hover:border-hairline"
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ---- description + items ---- */}
          <div className="flex max-h-[46vh] flex-col overflow-y-auto border-t border-hairline p-6 lg:max-h-[62vh] lg:border-s lg:border-t-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">{copy.whatItDoes}</p>
            <p className="mt-2.5 text-[14px] leading-relaxed text-ink-muted">{description}</p>

            {items.length > 0 && (
              <>
                <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                  {copy.whatsIncluded} <span className="text-ink-muted">({items.length})</span>
                </p>
                <ul className="mt-2.5 flex flex-col gap-2">
                  {items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-ink">
                      <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <p className="border-t border-hairline px-6 py-3.5 text-[13px] text-ink-muted">{copy.galleryHint}</p>
      </div>
    </div>
  );
}
