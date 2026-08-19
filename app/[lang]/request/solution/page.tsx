import type { Metadata } from "next";
import SolutionFlow from "@/components/request/SolutionFlow";
import { sectors, useCases } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  return {
    title:
      lang === "ar"
        ? "اطلب حلاً ذكياً | أتمتة وتكامل أنظمة في قطر — إينا سمارت"
        : "Request a Smart Solution | Automation & System Integration Qatar | INA SMART",
    description:
      lang === "ar"
        ? "صِف التحدي وسنعود بمفهوم حل وميزانية تقديرية — أتمتة صناعية وذكاء اصطناعي وتكامل أنظمة ولوحات ذكية في قطر."
        : "Describe the challenge and we reply with a solution concept and indicative budget — industrial automation, AI, system integration and smart dashboards in Qatar.",
    keywords: ["System integrator Qatar", "Industrial automation Qatar", "Automation solutions Qatar", "Digital transformation Qatar", "Smart dashboards Qatar"],
    alternates: { canonical: `/${lang}/request/solution` },
  };
}

export default function RequestSolutionPage({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams: { solutions?: string; sector?: string };
}) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;

  // `?sector=<id>` (from the sectors page) pre-selects the sector chip and every
  // use case tagged with that sector. Resolved by id rather than by index so the
  // links keep working as use cases are added.
  const sector = sectors.find((s) => s.id === searchParams.sector);
  const sectorSolPicks = sector
    ? useCases.map((u, i) => (u.sectors.includes(sector.id) ? i : -1)).filter((i) => i > -1)
    : [];

  const explicitSolPicks = (searchParams.solutions ?? "")
    .split(",")
    .map((v) => Number.parseInt(v, 10))
    .filter((v) => Number.isInteger(v) && v >= 0 && v < useCases.length);

  const initialSolPicks = explicitSolPicks.length > 0 ? explicitSolPicks : sectorSolPicks;

  return <SolutionFlow lang={lang} initialSolPicks={initialSolPicks} initialSectorIdx={sector ? sector.chipIndex : -1} />;
}
