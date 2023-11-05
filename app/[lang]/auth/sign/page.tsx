import dynamic from "next/dynamic";
import { useTranslation } from "@/i18n";
import { Locale } from "@/i18n/settings";
const SignForm = dynamic(() => import("@/components/form/sign"));

type page = {
  params: {
    lang: Locale;
  };
};

const SignPage = async ({ params: { lang } }: page) => {
  const { t } = await useTranslation(lang, "authentication");
  return (
    <section data-testid={"navigation.page.sigin"}>
      <SignForm t={t} />
    </section>
  );
};

export default SignPage;
