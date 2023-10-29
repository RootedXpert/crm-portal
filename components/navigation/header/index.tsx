import dynamic from "next/dynamic";
import style from "./header.module.scss";

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
  lang: string;
};

const Navbar = async ({ lang }: componenet) => {
  return (
    <nav className={style.brand} data-testid="navigation.header">
      <Hamburger style={style} />
      <BrandLogo style={style} lang={lang} />
      <HeaderLinks style={style} lang={lang} />
    </nav>
  );
};

export default Navbar;
