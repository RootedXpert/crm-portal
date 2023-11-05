import dynamic from "next/dynamic";
import { useTranslation } from "@/i18n";
import { Locale } from "@/i18n/settings";

const AuthFooter = dynamic(() => import("@/components/auth/footer"));
const AuthHeader = dynamic(() => import("@/components/auth/header"));

type layout = {
  params: {
    lang: Locale;
  };
  children: React.ReactNode;
};

const AuthLayout = async ({ params: { lang }, children }: layout) => {
  const { t } = await useTranslation(lang, "authentication");
  return (
    <section className="flex justify-center items-center  py-20">
      <section className="h-auto min-h-[500px] px-12 py-8 min-w-[100%]  md:min-w-[500px] max-w-[90%] md:max-w-[500px] rounded-lg md:shadow-brand  md:border flex  flex-col ">
        <AuthHeader t={t} />
        {children}
        <AuthFooter t={t} lang={lang} />
      </section>
    </section>
  );
};

export default AuthLayout;
