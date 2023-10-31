export const defaultLocale = "en-IN";

export const locales = [
  defaultLocale,
  "hi",
  "bn-IN",
  "mr-IN",
  "te-IN",
  "ta-IN",
];

export const supportedLngs = [...locales, "ta", "te", "mr", "bn"];

const defaultNS = "home-page";
export const cookieName = "i18next";

const locizeOptions = {
  projectId: process.env.projectId,
  apiKey: process.env.apiKey, // Replace with your actual Locize API key
  referenceLng: process.env.referenceLng, // Explicitly set the fallback language,
  version: process.env.version,
};

export const getOptions = (lng = defaultLocale, ns = defaultNS) => {
  const NODE_ENV = process.env.NODE_ENV;
  if (NODE_ENV === "production") return getOptionsLocize(lng, ns);
  return getOptionsLocal(lng, ns);
};

const getOptionsLocal = (lng = defaultLocale, ns = defaultNS) => {
  return {
    supportedLngs: supportedLngs,
    defaultLocale,
    lng,
    fallbackNS: defaultNS,
    fallbackLng: defaultLocale,
    defaultNS,
    ns,
  };
};

const getOptionsLocize = (lng = defaultLocale, ns = defaultNS) => {
  return {
    lng: lng,
    ns,
    fallbackNS: defaultNS,
    supportedLngs: supportedLngs,
    fallbackLng: defaultLocale,
    defaultNS,
    defaultLocale,
    backend: locizeOptions,
    saveMissing: true,
  };
};
