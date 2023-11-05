"use server";

import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptionsLocize, getOptionsLocal, Locale } from "@/i18n/settings";
import Backend from "i18next-locize-backend";

type options = {
  keyPrefix?: string;
};

const createI18nInstance = async (lng: Locale, ns: string) => {
  const NODE_ENV = process.env.NODE_ENV;
  if (NODE_ENV == "production") {
    return createI18nInstanceLocize(lng, ns);
  }
  return createI18nInstanceLocal(lng, ns);
};

const createI18nInstanceLocize = async (lng: string, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(Backend) // Use the backend for translations
    .use(initReactI18next)
    .init(getOptionsLocize(lng, ns));

  return i18nInstance;
};

const createI18nInstanceLocal = async (lng: Locale, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: Locale, namespace: string) =>
          import(`@/locales/${namespace}/${language}-translation.json`)
      )
    )
    .init(getOptionsLocal(lng, ns));

  return i18nInstance;
};

export async function useTranslation(
  lng: Locale,
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
