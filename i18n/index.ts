import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "@/i18n/settings";
import Backend from "i18next-locize-backend";

type options = {
  keyPrefix?: string;
};

const createI18nInstance = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(Backend) // Use the backend for translations
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/locales/${namespace}/${language}-translation.json`)
      )
    )
    .use(initReactI18next)
    .init(getOptions(lng, ns));

  return i18nInstance;
};

export async function useTranslation(
  lng: string,
  ns: string,
  options: options = {}
) {
  const i18nextInstance = await createI18nInstance(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
