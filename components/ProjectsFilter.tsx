"use client";

import { useState } from "react";
import { projectCategories, projects } from "@/lib/content";
import type { Lang } from "@/lib/locale";

export default function ProjectsFilter({ lang }: { lang: Lang }) {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {projectCategories.map((f) => {
          const isActive = f.id === active;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={`rounded-full border px-4.5 py-2.5 text-[13px] font-semibold ${
                isActive ? "border-transparent bg-primary text-white" : "border-input-border bg-white text-ink-soft"
              }`}
            >
              {lang === "ar" ? f.ar : f.en}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => {
          const category = projectCategories.find((c) => c.id === project.category);
          return (
            <div key={project.id} className="overflow-hidden rounded-card-lg border border-hairline bg-white">
              <div className="flex h-[150px] items-center justify-center bg-[repeating-linear-gradient(45deg,oklch(93%_0.02_265),oklch(93%_0.02_265)_10px,oklch(96%_0.01_265)_10px,oklch(96%_0.01_265)_20px)] font-mono text-[11px] text-primary/70">
                project photo
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
                  {category ? (lang === "ar" ? category.ar : category.en) : ""}
                </p>
                <h3 className="mt-2 text-base font-bold">{lang === "ar" ? project.ar.title : project.en.title}</h3>
                <p className="mt-2 text-[13px] text-ink-muted">{lang === "ar" ? project.ar.summary : project.en.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
