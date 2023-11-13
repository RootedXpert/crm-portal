import dynamic from "next/dynamic";
import style from "./header.module.scss";
import { Locale } from "@/i18n/settings";

const Hamburger = dynamic(
  () => import("@/components/navigation/header/hamburger")
);
const BrandLogo = dynamic(
  () => import("@/components/navigation/header/brandlogo")
);
const HeaderLinks = dynamic(
  () => import("@/components/navigation/header/links")
);

type componenet = {
  lang: Locale;
};

const Navbar = async ({ lang }: componenet) => {
  return (
    <nav className={style.brand} data-testid="navigation.header">
      <Hamburger />
      <BrandLogo lang={lang} />
      <HeaderLinks lang={lang} />
    </nav>
  );
};

export default Navbar;
