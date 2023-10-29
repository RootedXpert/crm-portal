export const defaultLocale = "en-IN";
export const locales = [defaultLocale, "en", "hi", "bn-IN", "mr-IN", "te-IN", "ta-IN"];
const defaultNS = "home-page";
export const cookieName = "i18next";

const locizeOptions = {
  projectId: "853d6082-2430-4955-807d-41600bf7afda",
  apiKey: "06e4252f-c0ea-48e0-85c4-abfe509e3607", // Replace with your actual Locize API key
};

export function getOptionsLocal(lng = defaultLocale, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: locales,
    defaultLocale,
    lng,
    fallbackNS: defaultNS,
    fallbackLng: defaultLocale,
    defaultNS,
    ns,
  };
}

export const getOptionsLocize = (lng = defaultLocale, ns = defaultNS) => {
  return {
    lng: lng,
    ns,
    fallbackNS: defaultNS,
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    defaultNS,
    defaultLocale,
    backend: locizeOptions,
    saveMissing: true,
  };
};
