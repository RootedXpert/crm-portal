import { TFunction } from "i18next";
import dynamic from "next/dynamic";

const CopyRightNotice = dynamic(
  () => import("@/components/navigation/footer/copyright/notice")
);
const GdprLinks = dynamic(
  () => import("@/components/navigation/footer/gdprlinks")
);

type styles = {
  readonly [key: string]: string;
};

type fc = {
  styles: styles;
  t: TFunction<any, string>;
};

const CopyRight: React.FC<fc> = ({ styles, t }) => {
  var d = new Date();
  return (
    <div className={styles.brand_row} data-testid="navigation.footer.row">
      <div className={styles.brand_row_CopyRight}>
        <CopyRightNotice t={t} styles={styles} />
        <GdprLinks t={t} styles={styles} />
      </div>
    </div>
  );
};

export default CopyRight;
