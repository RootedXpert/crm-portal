import Image from "next/image";
import Brand_Logo from "@/assests/images/logo.png";

const BrandLogoImage = () => {
  return (
    <Image
      src={Brand_Logo}
      priority={true}
      alt="royal security services logo"
      width={50}
      height={50}
    />
  );
};

export default BrandLogoImage;
