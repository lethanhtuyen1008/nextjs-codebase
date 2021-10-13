import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE,
  LANGUAGE_EN,
  LANGUAGE_ES,
} from "src/commons/commons";
import translationEN from "src/locales/en-US.json";
import translationVN from "src/locales/es.json";

const LANGUAGE_DEFAULT =
  (typeof window !== "undefined" && window.localStorage.getItem(LANGUAGE)) ||
  DEFAULT_LANGUAGE;

const extractResourceNamespace = (resource: any) => {
  const resourceExtracted: any = {};
  for (const key in resource) {
    const [namespace, translateKey] = key.split(":");

    if (!resourceExtracted[namespace]) {
      resourceExtracted[namespace] = {};
    }

    resourceExtracted[namespace][translateKey] = resource[key];
  }

  return resourceExtracted;
};

// OPTIONAL IF YOU LIKE TO SEE ALL (LOGIN TO TRANSLATION MANAGEMENT EDITOR)
// 1) signup at https://locize.com/register and login
// 2) create a new project
// 3) copy/paste your projectId, apiKey below
// 4) add de as additional language
// 5a) import en from: http://api.locize.io/ce0cf818-32e5-44a5-b7f0-4ea9e840d962/latest/en/translation
// 5b) import de from: http://api.locize.io/ce0cf818-32e5-44a5-b7f0-4ea9e840d962/latest/de/translation
// const locizeOptions = {
//   projectId: process.env.LOCIZE_PROJECT_ID,
//   apiKey: process.env.LOCIZE_API_KEY, // YOU should not expose your apps API key to production!!!
//   referenceLng: DEFAULT_LANGUAGE
// };

i18n
  // i18next-locize-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  // .use(Backend)
  // locize-lastused
  // sets a timestamp of last access on every translation segment on locize
  // -> safely remove the ones not being touched for weeks/months
  // https://github.com/locize/locize-lastused
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    // debug: Boolean(process.env.DEBUG),
    // saveMissing: true,
    lng: LANGUAGE_DEFAULT,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // backend: locizeOptions,
    resources: {
      [LANGUAGE_EN]: {
        translation: translationEN,
        ...extractResourceNamespace(translationEN),
      },
      [LANGUAGE_ES]: {
        translation: translationVN,
        ...extractResourceNamespace(translationVN),
      },
    },
    react: {
      bindI18n: "languageChanged editorSaved",
    },
  });

export default i18n;
