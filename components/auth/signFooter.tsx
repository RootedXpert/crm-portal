import { Locale } from "@/i18n/settings";
import Link from "next/link";

type fc = {
  lang: Locale;
};
const AuthSignFooter: React.FC<fc> = ({ lang }) => {
  return (
    <section className="flex flex-col items-center gap-3">
      <Link href={`/${lang}/auth/reset`}>Reset</Link>
    </section>
  );
};

export default AuthSignFooter;
