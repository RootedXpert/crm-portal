import dynamic from "next/dynamic";
import { useTranslation } from "@/i18n";
import { Locale } from "@/i18n/settings";

const Intro = dynamic(() => import("@/components/pages/home/intro"));
const Vertical = dynamic(() => import("@/components/pages/home/Verticals"));
const Sector = dynamic(() => import("@/components/pages/home/Sector"));
const Leadership = dynamic(() => import("@/components/pages/home/Leadership"));
const Question = dynamic(() => import("@/components/pages/home/Questions"));
const Contact = dynamic(() => import("@/components/pages/home/Contact"));
const About_Text = dynamic(
  () => import("@/components/pages/home/AboutText.tsx")
);

type page = {
  params: {
    lang: Locale;
  };
};

const Home = async ({ params: { lang } }: page) => {
  const { t } = await useTranslation(lang, "home-page");
  return (
    <section data-testid="pages.home" className="flex flex-col items-center">
      <Intro t={t} />
      <About_Text t={t} lang={lang} />
      <Vertical />
      <Sector />
      <Leadership />
      <Question />
      <Contact />
    </section>
  );
};

export default Home;
