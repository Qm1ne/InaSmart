import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_URL,
  WHATSAPP_URL,
  focusAreas,
  productCategories,
  products,
} from "@/lib/content";
import type { Lang } from "@/lib/locale";

/**
 * Organization + LocalBusiness schema. Helps Google associate the site with a
 * Qatar-based business and surface it for local "… Qatar / … Doha" queries.
 * Only claims that are verifiable from the site itself are included — no
 * certifications, ratings or approvals are asserted here.
 */
export default function JsonLd({ lang }: { lang: Lang }) {
  const name = lang === "ar" ? "إينا سمارت" : "INA SMART";
  const description =
    lang === "ar"
      ? "شركة تكامل أنظمة وتوريد تقنية متقدمة في الدوحة، قطر: حلول صوتية ومرئية وفصول ذكية ومختبرات روبوتات وأتمتة صناعية وتتبع مستودعات ولوحات ذكية."
      : "Doha-based system integrator and advanced technology supplier in Qatar — AV and meeting room solutions, smart classrooms, STEM and robotics labs, industrial automation, warehouse tracking and smart dashboards.";

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name,
        alternateName: "INASMART",
        url: `${SITE_URL}/${lang}`,
        description,
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        address: {
          "@type": "PostalAddress",
          addressLocality: lang === "ar" ? "الدوحة" : "Doha",
          addressCountry: "QA",
        },
        areaServed: [
          { "@type": "Country", name: "Qatar" },
          { "@type": "Place", name: "GCC" },
        ],
        sameAs: [WHATSAPP_URL],
        slogan: lang === "ar" ? "ابتكار • تكامل • أتمتة" : "Innovate • Integrate • Automate",
        knowsAbout: [
          "System integration",
          "Audio visual solutions",
          "Smart classrooms",
          "STEM and robotics labs",
          "Industrial automation",
          "Warehouse tracking",
          "IoT",
          "Smart dashboards",
          "Technology sourcing",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: lang === "ar" ? "مجالات التركيز" : "Focus areas",
          itemListElement: focusAreas.map((area) => {
            const a = lang === "ar" ? area.ar : area.en;
            return {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: a.title, description: a.body },
            };
          }),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/${lang}/products#catalogue`,
        name: lang === "ar" ? "كتالوج المنتجات" : "Product catalogue",
        numberOfItems: products.length,
        itemListElement: products.map((p, i) => {
          const d = lang === "ar" ? p.ar : p.en;
          return {
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Product",
              name: d.name,
              description: d.spec,
              image: `${SITE_URL}${p.image}`,
              category: productCategories.find((c) => c.id === p.categoryId)?.[lang].title,
              brand: { "@id": `${SITE_URL}/#organization` },
            },
          };
        }),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/${lang}`,
        name,
        inLanguage: lang === "ar" ? "ar-QA" : "en-QA",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
