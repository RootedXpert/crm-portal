import Image from "next/image";
import Link from "next/link";
import Brand_Logo from "@/assests/images/logo.png";
import style from "./header.module.scss";

type styles = {
  readonly [key: string]: string;
};
type fc = {
  lang: string;
};

const BrandLogo: React.FC<fc> = ({ lang }) => {
  return (
    <div className={style.brand_logo} data-testid="navigation.header.logo">
      <Link href={`/${lang}`}>
        <Image src={Brand_Logo} alt="royal security services logo" />
      </Link>
    </div>
  );
};

export default BrandLogo;
