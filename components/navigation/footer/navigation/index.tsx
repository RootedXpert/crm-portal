import { TFunction } from "i18next";
import dynamic from "next/dynamic";
import BrandLogoImage from "@/components/logos/brandlogo";
import Link from "next/link";
import { Locale } from "@/i18n/settings";

const NavigationLinks = dynamic(
  () => import("@/components/navigation/links/navigation")
);

type styles = {
  readonly [key: string]: string;
};

const links = [
  {
    href: "",
    title: "navigation.footer.links.home",
  },
  {
    href: "about",
    title: "navigation.footer.links.about",
  },
  {
    href: "services",
    title: "navigation.footer.links.services",
  },
  {
    href: "contact",
    title: "navigation.footer.links.contact",
  },
];

type fc = {
  styles: styles;
  t: TFunction<any, string>;
  lang: Locale;
};

const Navigation: React.FC<fc> = ({ styles, t, lang }) => {
  return (
    <div className={styles.brand_row} data-testid="navigation.footer.row">
      <BrandLogoImage />
      <div className={styles.brand_row_subrow}>
        <div className={styles.brand_row_subrow_Link}>
          <p data-testid="navigation.footer.title.navigation">
            {t("navigation.footer.title.navigation")}
          </p>
          <NavigationLinks lang={lang} links={links} />
        </div>
        <div className={styles.brand_row_subrow_Link}>
          <p data-testid="navigation.footer.title.account">
            {t("navigation.footer.title.account")}
          </p>
          <Link href={`/${lang}/auth/sign`}>
            {t("navigation.footer.links.sign")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
