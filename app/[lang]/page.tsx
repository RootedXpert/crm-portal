import dynamic from "next/dynamic";
import { useTranslation } from "@/i18n";
const Intro = dynamic(() => import("@/components/pages/home/intro"));

type page = {
  params: {
    lang: string;
  };
};

const Home = async ({ params: { lang } }: page) => {
  const { t } = await useTranslation(lang, "home-page");
  return (
    <section data-testid="pages.home" className="flex flex-col items-center">
      <Intro t={t} />
    </section>
  );
};

export default Home;
