"use client";

import { I18nextProvider } from "react-i18next";
import { ReactNode, useEffect, useState } from "react";

import { i18n as i18nInterface } from "i18next";
import { createI18nInstance } from "@/i18n";
import { defaultNS } from "@/i18n/settings";

let i18n: i18nInterface;

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
}: {
  children: ReactNode;
  locale: string;
  namespaces: string;
}) {
  const [instance, setInstance] = useState(i18n);

  useEffect(() => {
    const init = async () => {
      if (!i18n) {
        const newInstance = await createI18nInstance(locale, namespaces);
        i18n = newInstance;
        setInstance(newInstance);
      } else {
        if (i18n.language !== locale) {
          i18n.changeLanguage(locale);
        }
      }
    };

    init();
  }, [locale, namespaces]);

  if (!instance) {
    return null;
  }

  return (
    <I18nextProvider i18n={instance} defaultNS={defaultNS}>
      {children}
    </I18nextProvider>
  );
}
