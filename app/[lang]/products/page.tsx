import type { Metadata } from "next";
import ProductsFilter from "@/components/ProductsFilter";
import { t } from "@/lib/content";
import { DEFAULT_LOCALE, isValidLocale, type Lang } from "@/lib/locale";

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  return {
    title:
      lang === "ar"
        ? "المنتجات: حقن البلاستيك والروبوتات والهولوغرام وSTEM | إينا سمارت قطر"
        : "Products: Injection Moulding, Robotics, Holographic & STEM | INA SMART Qatar",
    description:
      lang === "ar"
        ? "كتالوج إينا سمارت في قطر: ماكينات حقن ونفخ البلاستيك والقوالب وCNC، وروبوتات تعاونية وروبوتات متحركة ذاتية، ورفوف وسيور المستودعات، وشاشات هولوغرافية وأكشاك، ومعدات STEM والفصول الذكية."
        : "The INA SMART catalogue in Qatar — plastic injection and blow moulding, mould tooling and CNC, cobots and autonomous mobile robots, warehouse racking and conveyors, holographic displays and kiosks, plus STEM and smart classroom equipment.",
    keywords: [
      "Injection moulding machine Qatar",
      "Cobot Qatar",
      "Autonomous mobile robot Qatar",
      "Holographic display Qatar",
      "3D printer Qatar",
      "Laser cutter Qatar",
      "Warehouse racking Qatar",
      "Advanced technology supplier Qatar",
      "Technology sourcing Qatar",
      "STEM lab supplier Qatar",
    ],
    alternates: { canonical: `/${lang}/products` },
  };
}

export default function ProductsPage({ params }: { params: { lang: string } }) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const copy = t(lang).productsPage;

  return (
    <>
      <section className="border-b border-hairline-soft pb-9 pt-16">
        <div className="mx-auto max-w-content px-8">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{copy.kicker}</p>
          <h1 className="font-display text-[40px] font-bold text-ink">{copy.heading}</h1>
          <p className="mt-3.5 max-w-[660px] text-base leading-relaxed text-ink-muted">{copy.copy}</p>
        </div>
      </section>

      <section className="pb-22 pt-8">
        <div className="mx-auto max-w-content px-8">
          <ProductsFilter lang={lang} />
        </div>
      </section>
    </>
  );
}
