import dynamic from "next/dynamic";

const BrandLogoImage = dynamic(() => import("@/components/logos/brandlogo"));

type fc = {};

const AuthHeader: React.FC<fc> = () => {
  return (
    <section className="flex flex-col items-center gap-3">
      <BrandLogoImage />
    </section>
  );
};

export default AuthHeader;
