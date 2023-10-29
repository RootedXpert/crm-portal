import { useTranslation } from "@/i18n";
import Link from "next/link";

type link = {
  href: string;
  title: string;
};
type componenet = {
  lang: string;
  links: link[];
};

const NavigationLinks = async ({ lang, links }: componenet) => {
  const { t } = await useTranslation(lang, "navigation");
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            href={`${lang}/${link.href}`}
            lang={lang}
            key={link.title}
            data-testid={link.title}
            className="px-2"
          >
            {t(link.title)}
          </Link>
        );
      })}
    </>
  );
};

export default NavigationLinks;
