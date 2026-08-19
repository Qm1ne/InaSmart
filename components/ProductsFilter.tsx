"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import ProductDialog from "./ProductDialog";
import { productCategories, products, t, type Product } from "@/lib/content";
import type { Lang } from "@/lib/locale";

export default function ProductsFilter({ lang }: { lang: Lang }) {
  const copy = t(lang).productsPage;
  const [catId, setCatId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (catId && p.categoryId !== catId) return false;
      if (!q) return true;
      const data = lang === "ar" ? p.ar : p.en;
      const category = productCategories.find((c) => c.id === p.categoryId);
      const categoryTitle = category ? (lang === "ar" ? category.ar.title : category.en.title) : "";
      return `${data.name} ${data.spec} ${categoryTitle}`.toLowerCase().includes(q);
    });
  }, [catId, query, lang]);

  const chipClass = (on: boolean) =>
    `whitespace-nowrap rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-colors duration-200 ${
      on ? "border-indigo bg-indigo text-white" : "border-input-border bg-white text-ink-soft hover:border-primary hover:text-primary"
    }`;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => setCatId(null)} className={chipClass(catId === null)}>
            {copy.allCategories}
          </button>
          {productCategories.map((cat) => (
            <button key={cat.id} type="button" onClick={() => setCatId(cat.id)} className={chipClass(catId === cat.id)}>
              {lang === "ar" ? cat.ar.title : cat.en.title}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={copy.search}
          aria-label={copy.search}
          className="w-full rounded-control border border-input-border bg-white px-3.5 py-2.5 text-sm text-ink transition-colors duration-200 focus:border-primary focus:outline-none sm:w-[260px]"
        />
      </div>

      <p className="mt-5.5 text-[13px] font-semibold text-ink-muted">
        {filtered.length} {copy.countSuffix}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-5 rounded-card border border-dashed border-[oklch(84%_0.02_265)] bg-surface-soft p-9 text-center text-sm text-ink-muted">
          {copy.noResults}
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => {
            const data = lang === "ar" ? p.ar : p.en;
            const category = productCategories.find((c) => c.id === p.categoryId);
            return (
              <div
                key={p.id}
                className="group flex flex-col overflow-hidden rounded-card border border-hairline bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue hover:shadow-[0_18px_40px_-24px_rgba(20,18,58,0.35)]"
              >
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  aria-label={`${data.name} — ${copy.viewDetails}`}
                  className="flex flex-1 flex-col text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="relative block h-[190px] w-full overflow-hidden bg-surface-soft">
                    <Image
                      src={p.image}
                      alt={data.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      /* signature cards are wide layouts with a text panel on the right — anchor left so the product stays in frame */
                      className={`object-cover transition-transform duration-300 group-hover:scale-[1.04] motion-reduce:transform-none ${p.signature ? "object-left" : "object-center"}`}
                    />
                    {p.signature && (
                      <span className="absolute top-3 start-3 rounded-full bg-indigo px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-light">
                        {copy.signature}
                      </span>
                    )}
                    <span className="absolute bottom-3 end-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-semibold text-ink opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
                      {copy.viewDetails}
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col p-4.5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
                      {category ? (lang === "ar" ? category.ar.title : category.en.title) : ""}
                    </span>
                    <span className="mt-2 block text-[15px] font-bold text-ink">{data.name}</span>
                    <span className="mt-1.5 block flex-1 text-[13px] leading-relaxed text-ink-muted">{data.spec}</span>
                  </span>
                </button>
                <div className="px-4.5 pb-4.5">
                  <Link
                    href={`/${lang}/request/technology?product=${p.id}`}
                    className="block rounded-[9px] border border-input-border bg-white px-3.5 py-2.5 text-center text-[13px] font-semibold text-ink transition-colors duration-200 hover:border-primary hover:text-primary"
                  >
                    {copy.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-7 rounded-card border border-dashed border-[oklch(84%_0.02_265)] bg-surface-soft p-5.5 text-sm leading-relaxed text-[oklch(40%_0.015_265)]">
        {copy.pending}
      </div>

      {active && <ProductDialog product={active} lang={lang} onClose={() => setActive(null)} />}
    </>
  );
}
