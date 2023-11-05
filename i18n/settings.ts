export const defaultLocale = "en-IN";

export const locales = [
  defaultLocale,
  "hi-IN",
  "bn-IN",
  "mr-IN",
  "te-IN",
  "ta-IN",
];

export type Locale = (typeof locales)[number];

export const namespaces = ["authentication", "home-page", "navigation"];

export const supportedLngs = [...locales];

export const defaultNS = "home-page";
export const cookieName = "i18next";

const locizeOptions = {
  projectId: process.env.projectId,
  apiKey: process.env.apiKey, // Replace with your actual Locize API key
  referenceLng: process.env.referenceLng, // Explicitly set the fallback language,
  version: process.env.version,
};

export const getOptionsLocal = (lng = defaultLocale, ns = defaultNS) => {
  return {
    supportedLngs: supportedLngs,
    defaultLocale,
    lng,
    fallbackNS: defaultNS,
    fallbackLng: defaultLocale,
    defaultNS,
    debug: process.env.NODE_ENV === "development",
    ns,
  };
};

export const getOptionsLocize = (lng = defaultLocale, ns = defaultNS) => {
  return {
    lng,
    ns,
    fallbackNS: defaultNS,
    debug: process.env.NODE_ENV === "development",
    supportedLngs: supportedLngs,
    fallbackLng: defaultLocale,
    defaultNS,
    defaultLocale,
    backend: locizeOptions,
    saveMissing: true,
  };
};
