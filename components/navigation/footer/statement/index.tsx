import { TFunction } from "i18next";

type styles = {
  readonly [key: string]: string;
};

type fc = {
  styles: styles;
  t: TFunction<any, string>;
};

const FooterStatement: React.FC<fc> = ({ t, styles }) => {
  return (
    <div className={styles.brand_row} data-testid="navigation.footer.row">
      <p
        className={styles.brand_row_Disc_Title}
        data-testid="navigation.footer.statement.title"
      >
        {t("navigation.footer.statement.title")}
      </p>
      <p
        className={styles.brand_row_Disc_Text}
        data-testid="navigation.footer.statement.description"
      >
        {t("navigation.footer.statement.description")}
      </p>
    </div>
  );
};

export default FooterStatement;
