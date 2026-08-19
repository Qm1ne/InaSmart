import type { Metadata } from "next";
import TechnologyFlow from "@/components/request/TechnologyFlow";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  return {
    title:
      lang === "ar"
        ? "اطلب عرض سعر للتقنية | توريد وتوفير معدات في قطر — إينا سمارت"
        : "Request a Quote for Technology | Supply & Sourcing in Qatar | INA SMART",
    description:
      lang === "ar"
        ? "أرسل مواصفاتك واحصل على عرض سعر — توريد التقنية المتقدمة والمعدات من شبكات محلية ودولية في قطر، مع مراجعة فنية قبل الشراء."
        : "Send your specification and get a quote — advanced technology and equipment supply through local and international sourcing networks in Qatar, with an engineer's review before you order.",
    keywords: ["Advanced technology supplier Qatar", "Technology sourcing Qatar", "China technology sourcing Qatar", "Injection molding machine supplier Qatar", "Barcode system Qatar"],
    alternates: { canonical: `/${lang}/request/technology` },
  };
}

export default function RequestTechnologyPage({
  params,
  searchParams,
}: {
  params: { lang: string };
  searchParams: { product?: string };
}) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const initialProductIds = (searchParams.product ?? "").split(",").filter(Boolean);

  return <TechnologyFlow lang={lang} initialProductIds={initialProductIds} />;
}
