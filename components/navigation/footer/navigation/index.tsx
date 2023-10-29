import { TFunction } from "i18next";
import Image from "next/image";
import dynamic from "next/dynamic";
import footerlogo from "@/assests/images/logo.png";
import Link from "next/link";

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
  lang: string;
};

const Navigation: React.FC<fc> = ({ styles, t, lang }) => {
  return (
    <div className={styles.brand_row} data-testid="navigation.footer.row">
      <Image src={footerlogo} className={styles.brand_row_Image} alt="footer" />
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
          <Link href="/auth/sign">{t("navigation.footer.links.sign")}</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
