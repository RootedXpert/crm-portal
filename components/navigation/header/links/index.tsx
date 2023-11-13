import dynamic from "next/dynamic";
import styles from "./header.module.scss";
import { Locale } from "@/i18n/settings";

const LanguageSelector = dynamic(() => import("@/components/languageselector"));

const NavigationLinks = dynamic(
  () => import("@/components/navigation/links/navigation")
);

type styles = {
  readonly [key: string]: string;
};
type componenet = {
  lang: Locale;
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
  {
    href: "auth/sign",
    title: "navigation.footer.links.sign",
  },
];

const HeaderLinks: React.FC<componenet> = ({ lang }) => {
  return (
    <div
      className={styles.brand_nav_links}
      data-testid="navigation.header.links"
    >
      <NavigationLinks lang={lang} links={links} />
      <LanguageSelector lang={lang} />
    </div>
  );
};

export default HeaderLinks;
