"use client";

import Image from "next/image";
import { useState } from "react";
import GalleryDialog from "./GalleryDialog";
import ModelDialog from "./ModelDialog";
import PlaceholderPhoto from "./PlaceholderPhoto";
import { t, type UseCase } from "@/lib/content";
import type { Lang } from "@/lib/locale";

/**
 * Cover cell for a use case row. Shows the real photo when one exists, and
 * becomes a button when there is something to open — an interactive 3D view if
 * the case has a GLB model, otherwise a photo gallery.
 */
export default function UseCaseCover({
  useCase,
  lang,
  className = "",
}: {
  useCase: UseCase;
  lang: Lang;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const copy = t(lang).useCasesPage;
  const data = lang === "ar" ? useCase.ar : useCase.en;

  const mode: "model" | "gallery" | null = useCase.model
    ? "model"
    : useCase.gallery && useCase.gallery.length > 0
      ? "gallery"
      : null;

  const cover = useCase.image ? (
    <Image
      src={useCase.image}
      alt={data.title}
      fill
      sizes="(max-width: 768px) 100vw, 300px"
      className="object-cover transition-transform duration-300 group-hover/cover:scale-[1.04] motion-reduce:transform-none"
    />
  ) : (
    <PlaceholderPhoto
      label={lang === "ar" ? `صورة ${data.title}` : `${data.title} photo`}
      className="absolute inset-0 h-full w-full"
    />
  );

  if (!mode) {
    return <div className={`relative overflow-hidden ${className}`}>{cover}</div>;
  }

  const actionLabel = mode === "model" ? copy.view3d : copy.viewGallery;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${data.title} — ${actionLabel}`}
        className={`group/cover relative overflow-hidden text-start focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary ${className}`}
      >
        {cover}
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(11,16,48,0.55),transparent_55%)] opacity-90" />
        <span className="pointer-events-none absolute bottom-3 start-3 inline-flex items-center gap-1.5 rounded-full bg-white/94 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-ink shadow-sm backdrop-blur transition-transform duration-200 group-hover/cover:scale-105 motion-reduce:transform-none">
          {mode === "model" ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
              <path d="M3 7l9 5 9-5M12 12v10" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          )}
          {actionLabel}
        </span>
      </button>

      {open && mode === "model" && useCase.model && (
        <ModelDialog src={useCase.model} title={data.title} lang={lang} onClose={() => setOpen(false)} />
      )}

      {open && mode === "gallery" && useCase.gallery && (
        <GalleryDialog
          images={useCase.gallery}
          title={data.title}
          description={data.long}
          items={useCase.equipment ? useCase.equipment[lang] : data.includes}
          lang={lang}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
