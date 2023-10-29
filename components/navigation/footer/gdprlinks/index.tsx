import { TFunction } from "i18next";
import Link from "next/link";

type styles = {
  readonly [key: string]: string;
};

type fc = {
  styles: styles;
  t: TFunction<any, string>;
  lang: string;
};

const Links = [
  {
    href: "contact",
    title: "navigation.footer.links.contact",
  },
  {
    href: "terms",
    title: "navigation.footer.links.terms",
  },
  {
    href: "privacy",
    title: "navigation.footer.links.privacy",
  },
];

const GdprLinks: React.FC<fc> = ({ styles, t, lang }) => {
  return (
    <div className={styles.brand_row_CopyRight_GDPR}>
      {Links.map((link) => {
        return (
          <Link
            className={styles.brand_row_CopyRight_GDPR_Text}
            href={`/${lang}/${link.href}`}
            key={link.title}
            lang={lang}
            data-testid={link.title}
          >
            {t(link.title)}
          </Link>
        );
      })}
    </div>
  );
};

export default GdprLinks;
