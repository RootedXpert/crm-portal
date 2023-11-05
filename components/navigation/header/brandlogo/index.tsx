import Link from "next/link";
import style from "./header.module.scss";

import BrandLogoImage from "@/components/logos/brandlogo";

type fc = {
  lang: string;
};

const BrandLogo: React.FC<fc> = ({ lang }) => {
  return (
    <div className={style.brand_logo} data-testid="navigation.header.logo">
      <Link href={`/${lang}`}>
        <BrandLogoImage />
      </Link>
    </div>
  );
};

export default BrandLogo;
