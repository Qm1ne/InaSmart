import type { Metadata } from "next";
import ProjectsFilter from "@/components/ProjectsFilter";
import { t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export const metadata: Metadata = { title: "Projects — INASMART" };

export default function ProjectsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang).projectsPage;

  return (
    <>
      <section className="pb-22 pt-16">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.kicker}</p>
          <h1 className="font-display text-[38px] font-bold">{copy.title}</h1>
          <ProjectsFilter lang={lang} />
        </div>
      </section>
    </>
  );
}
