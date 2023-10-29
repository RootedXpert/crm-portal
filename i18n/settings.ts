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
  projectId: "853d6082-2430-4955-807d-41600bf7afda",
  apiKey: "06e4252f-c0ea-48e0-85c4-abfe509e3607", // Replace with your actual Locize API key
  referenceLng: "en-IN", // Explicitly set the fallback language,
  version: "latest",
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
