import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ibmPlexSans, ibmPlexSansArabic, spaceGrotesk } from "@/lib/fonts";
import { DEFAULT_LOCALE, LOCALES, dirFor, isValidLocale, type Lang } from "@/lib/locale";
import "../globals.css";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: "INASMART — Educational Technology Partner",
  description: "Complete learning environments, built for institutions. AI labs, STEM classrooms, and educational technology for schools and universities across Qatar & GCC.",
};

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang: Lang = isValidLocale(params.lang) ? params.lang : DEFAULT_LOCALE;
  const dir = dirFor(lang);
  const fontVars = `${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexSansArabic.variable}`;
  const fontStyle =
    lang === "ar"
      ? ({ "--font-display": "var(--font-arabic)", "--font-body": "var(--font-arabic)" } as React.CSSProperties)
      : ({ "--font-display": "var(--font-display-latin)", "--font-body": "var(--font-body-latin)" } as React.CSSProperties);

  return (
    <html lang={lang} dir={dir} className={fontVars}>
      <body style={fontStyle} className="flex min-h-screen flex-col font-body text-ink">
        <Header lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
