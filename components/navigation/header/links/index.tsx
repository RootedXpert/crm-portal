import dynamic from "next/dynamic";

const LanguageSelector = dynamic(() => import("@/components/languageselector"));
const NavigationLinks = dynamic(
  () => import("@/components/navigation/links/navigation")
);

type styles = {
  readonly [key: string]: string;
};
type componenet = {
  lang: string;
  style: styles;
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
const HeaderLinks: React.FC<componenet> = ({ style, lang }) => {
  return (
    <div
      className={style.brand_nav_links}
      data-testid="navigation.header.links"
    >
      <NavigationLinks lang={lang} links={links} />
      <LanguageSelector />
    </div>
  );
};

export default HeaderLinks;
