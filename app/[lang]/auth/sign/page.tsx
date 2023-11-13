import dynamic from "next/dynamic";
import { Locale } from "@/i18n/settings";
const SignForm = dynamic(() => import("@/components/form"));

type page = {
  params: {
    lang: Locale;
  };
};

const SignPage = async ({ params: { lang } }: page) => {
  return (
    <section data-testid={"navigation.page.sigin"}>
      <SignForm lang={lang} />
    </section>
  );
};

export default SignPage;
