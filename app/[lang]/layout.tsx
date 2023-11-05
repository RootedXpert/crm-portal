import { Viewport } from "next";
import dynamic from "next/dynamic";
import { dir } from "i18next";
import { Roboto } from "next/font/google";
import { Locale, locales } from "@/i18n/settings";
const Header = dynamic(() => import("@/components/navigation/header"));
const Footer = dynamic(() => import("@/components/navigation/footer"));

type params = {
  lang: Locale;
};

type layout = {
  children: React.ReactNode;
  params: params;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
});

export const generateStaticParams = async () => {
  return locales.map((lang) => ({ lang }));
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    {
      color: "var(--brand-primary-color)",
      media: "(prefers-color-scheme: dark)",
    },
    {
      color: "var(--brand-primary-color)",
      media: "(prefers-color-scheme: light)",
    },
  ],
};

const LanguageLayout = ({ children, params: { lang } }: layout) => {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={`${roboto.className} flex flex-col justify-between`}>
        <Header lang={lang} />
        <section data-testid="rootlayout.wrapper">{children}</section>
        <Footer lang={lang} />
      </body>
    </html>
  );
};

export default LanguageLayout;
