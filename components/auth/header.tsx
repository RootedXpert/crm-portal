import dynamic from "next/dynamic";
import { TFunction } from "i18next";
const BrandLogoImage = dynamic(() => import("@/components/logos/brandlogo"));

type fc = {
  t: TFunction<any, string>;
};

const AuthHeader: React.FC<fc> = ({ t }) => {
  return (
    <section className="flex flex-col items-center gap-3">
      <BrandLogoImage />
      <h2>{t("authentication.sigin.title")}</h2>
      <p>{t("authentication.sigin.message")}</p>
    </section>
  );
};

export default AuthHeader;
