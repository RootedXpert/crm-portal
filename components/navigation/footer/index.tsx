import { useTranslation } from "@/i18n";

import dynamic from "next/dynamic";

import styles from "./footer.module.scss";

const Navigation = dynamic(
  () => import("@/components/navigation/footer/navigation")
);
const CopyRight = dynamic(
  () => import("@/components/navigation/footer/copyright")
);
const SocialLinks = dynamic(
  () => import("@/components/navigation/footer/sociallinks")
);
const FooterStatement = dynamic(
  () => import("@/components/navigation/footer/statement")
);

type componenet = {
  lang: string;
};

const Footer = async ({ lang }: componenet) => {
  const { t } = await useTranslation(lang, "navigation");
  return (
    <footer className={styles.brand} data-testid="navigation.footer">
      <Navigation styles={styles} t={t} lang={lang} />
      <FooterStatement styles={styles} t={t} />
      <SocialLinks styles={styles} />
      <CopyRight styles={styles} t={t} lang={lang} />
    </footer>
  );
};

export default Footer;
