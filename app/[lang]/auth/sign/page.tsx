import { useTranslation } from "@/i18n";
import { Locale } from "@/i18n/settings";
import dynamic from "next/dynamic";

const SignForm = dynamic(() => import("@/components/form/sign"));

type page = {
  params: {
    lang: Locale;
  };
};

const SignPage = async ({ params: { lang } }: page) => {
  const { t } = await useTranslation(lang, "authentication");
  return <SignForm t={t} />;
};

export default SignPage;
