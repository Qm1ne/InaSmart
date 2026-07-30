export type Lang = "en" | "ar";

export const LOCALES: Lang[] = ["en", "ar"];
export const DEFAULT_LOCALE: Lang = "en";

export function isValidLocale(value: string): value is Lang {
  return (LOCALES as string[]).includes(value);
}

export function dirFor(lang: Lang): "ltr" | "rtl" {
  return lang === "ar" ? "rtl" : "ltr";
}

export function otherLocale(lang: Lang): Lang {
  return lang === "ar" ? "en" : "ar";
}
