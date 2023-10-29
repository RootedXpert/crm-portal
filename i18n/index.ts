import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptionsLocal, getOptionsLocize } from "@/i18n/settings";
import Backend from "i18next-locize-backend";

type options = {
  keyPrefix?: string;
};

const initI18next = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(Backend) // Use the backend for translations
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/locales/${namespace}/${language}-translation.json`)
      )
    )
    .init(getOptionsLocal(lng, ns));
  return i18nInstance;
};

const createI18nInstance = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(Backend) // Use the backend for translations
    .use(initReactI18next)
    .init(getOptionsLocize(lng, ns));

  return i18nInstance;
};

const decideLocal_or_Locize = (lng: string, ns: string) => {
  const env = process.env.NODE_ENV;
  if (env === "production") return createI18nInstance(lng, ns);
  return initI18next(lng, ns);
};

export async function useTranslation(
  lng: string,
  ns: string,
  options: options = {}
) {
  const i18nextInstance = await decideLocal_or_Locize(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options?.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
