import { TFunction } from "i18next";
import Link from "next/link";

type styles = {
  readonly [key: string]: string;
};

type fc = {
  styles: styles;
  t: TFunction<any, string>;
};

const Links = [
  {
    href: "/contact",
    title: "navigation.footer.links.contact",
  },
  {
    href: "/terms",
    title: "navigation.footer.links.terms",
  },
  {
    href: "/privacy",
    title: "navigation.footer.links.privacy",
  },
];

const GdprLinks: React.FC<fc> = ({ styles, t }) => {
  return (
    <div className={styles.brand_row_CopyRight_GDPR}>
      {Links.map((link) => {
        return (
          <Link
            className={styles.brand_row_CopyRight_GDPR_Text}
            href={link.href}
            key={link.title}
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
