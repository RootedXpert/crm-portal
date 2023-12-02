import dynamic from "next/dynamic";
import { Locale } from "@/i18n/settings";
import { useTranslation } from "@/i18n";
const SignForm = dynamic(() => import("@/components/form"));
const AuthSignHeader = dynamic(() => import("@/components/auth/siginHeader"));
const AuthSignFooter = dynamic(() => import("@/components/auth/signFooter"));
type page = {
  params: {
    lang: Locale;
  };
};

const SignPage = async ({ params: { lang } }: page) => {
  const { t } = await useTranslation(lang, "authentication");

  return (
    <section data-testid={"navigation.page.auth.sigin"}>
      <AuthSignHeader t={t} />
      <SignForm lang={lang} />
      <AuthSignFooter lang={lang} />
    </section>
  );
};

export default SignPage;
