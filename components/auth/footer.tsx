import { TFunction } from "i18next";
type fc = {
  t: TFunction<any, string>;
  lang: string;
};

const AuthFooter: React.FC<fc> = ({ t, lang }) => {
  return (
    <p>
      {t("authentication.sigin.private.message")}
      <a
        href={`https://support.google.com/chrome/answer/6130773?hl=${lang}`}
        rel="noreferrer noopener"
        target="_blank"
        className="text-blue-400"
      >
        {t("authentication.sigin.private.link")}
      </a>
    </p>
  );
};

export default AuthFooter;
