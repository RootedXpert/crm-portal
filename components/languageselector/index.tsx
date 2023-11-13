import Link from "next/link";
import { useTranslation } from "@/i18n";
import { Locale, locales } from "@/i18n/settings";

type fc = {
  lang: Locale;
};
const LanguageSelector: React.FC<fc> = async ({ lang }) => {
  const { t } = await useTranslation(lang, "navigation");
  return (
    <div className="relative inline-block text-left group">
      <svg
        viewBox="0 0 24 24"
        width={"24"}
        height={"24"}
        className="fill-white cursor-pointer"
      >
        <path d="m11.62965 16.61452c-1.13922-.692-3.111-2.36313-3.153-2.32718a28.32942 28.32942 0 0 1 -3.30095 2.26177c-.68823.39708-1.38892.49615-1.82064-.09139a.992.992 0 0 1 .26656-1.40406c.00852-.00391 2.44665-1.594 3.25973-2.29678a11.64387 11.64387 0 0 1 -2.23281-3.53521 1.07774 1.07774 0 0 1 .52716-1.36835c.52715-.22205 1.049-.12664 1.48663.61989a10.33341 10.33341 0 0 0 1.8143 2.89517 10.853 10.853 0 0 0 2.1563-4.3469l-7.63293-.02148v-2.00685h4.8124v-.99406a.98574.98574 0 1 1 1.9713 0v.99406h5.1703v2.00685h-2.08646a17.03869 17.03869 0 0 1 -2.64065 5.75689 15.88157 15.88157 0 0 0 2.30149 1.66068l2.3092-5.66617a1.162 1.162 0 0 1 2.1802.01591l3.01041 7.389 1.85638 4.385h-2.47393l-1.08252-2.53924h-4.84082l-.888 2.53924h-2.5993l.287-.69166zm4.31307-5.16715-1.67531 4.55419h3.35059z"></path>
      </svg>

      <div
        className="absolute p-3 md:group-hover:block md:hover:block hidden top-4 -left-10 z-10 gap-2 w-56 text-center mt-2  bg-primary  border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {locales.map((language) => (
          <Link
            className="block w-full p-4 text-sm text-primary"
            role="menuitem"
            key={language}
            lang={language}
            href={`/${language}`}
            data-testid={`navigation.header.languageselector.${language}`}
          >
            {t(`navigation.header.languageselector.${language}`)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
