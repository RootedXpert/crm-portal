import { TFunction } from "i18next";

type styles = {
  readonly [key: string]: string;
};

type fc = {
  styles: styles;
  t: TFunction<any, string>;
};

const CopyRightNotice: React.FC<fc> = ({ styles, t }) => {
  var d = new Date();
  return (
    <div className={styles.brand_row_CopyRight_Year}>
      <p
        className={styles.brand_row_CopyRight_Year__Text}
        data-testid="navigation.footer.title.copyright"
      >
        {t("navigation.footer.title.copyright", {
          year: d.getFullYear(),
        })}
      </p>
    </div>
  );
};

export default CopyRightNotice;
