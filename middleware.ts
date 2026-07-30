import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "./lib/locale";

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|logo.png|.*\\..*).*)"],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (hasLocale) return NextResponse.next();

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.toLowerCase().includes("ar") ? "ar" : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}
