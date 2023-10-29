import Image from "next/image";
import Link from "next/link";
import Brand_Logo from "@/assests/images/logo.png";

type styles = {
  readonly [key: string]: string;
};
type fc = {
  lang: string;
  style: styles;
};

const BrandLogo: React.FC<fc> = ({ style, lang }) => {
  return (
    <div className={style.brand_logo} data-testid="navigation.header.logo">
      <Link href={`/${lang}`}>
        <Image src={Brand_Logo} alt="royal security services logo" />
      </Link>
    </div>
  );
};

export default BrandLogo;
