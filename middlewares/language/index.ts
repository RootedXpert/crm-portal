import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { defaultLocale, locales, cookieName } from "@/i18n/settings";

// Get the preferred locale, similar to the above or using a library
const getLocale = (request: NextRequest) => {
  if (request.cookies.has(cookieName))
    return request.cookies.get(cookieName)?.value.toString();
  const headers = {
    "accept-language": request.headers.get("accept-language")?.toString(),
  };
  const languages = new Negotiator({ headers: headers }).languages();
  return match(languages, locales, defaultLocale); // -> 'en-US'
};

const languageMiddleware = async (request: NextRequest) => {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-IN/products
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set(cookieName, locale!, {
    secure: true,
    maxAge: 60 * 60 * 24 * 365,
  });
  return response;
};

export default languageMiddleware;
