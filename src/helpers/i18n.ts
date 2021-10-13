import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "src/locales/en";
import es from "src/locales/es";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_EN,
  LANGUAGE_ES,
} from "src/commons/commons";

const resources: any = { en, es };
const LANGUAGE =
  typeof window !== "undefined" && window.localStorage?.getItem("i18nextLng");

const LANGUAGE_DEFAULT = LANGUAGE || DEFAULT_LANGUAGE;

console.log(LANGUAGE_DEFAULT);
// import Backend from 'i18next-locize-backend';

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

  .use(LanguageDetector)

  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // fallbackLng: DEFAULT_LANGUAGE,
    debug: false,
    fallbackLng: [LANGUAGE_EN, LANGUAGE_ES],
    // saveMissing: true,
    lng: LANGUAGE_DEFAULT,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      [LANGUAGE_DEFAULT]: {
        translation: resources[LANGUAGE_DEFAULT],
      },
    },
    // backend: locizeOptions,
    react: {
      bindI18n: "languageChanged editorSaved",
      useSuspense: false,
    },
  });

export default i18n;

export const transKeys = resources[i18n.language];
