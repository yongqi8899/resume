import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import zhTrans from "@/locales/zh/global.json";
import enTrans from "@/locales/en/global.json";
import deTrans from "@/locales/de/global.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enTrans,
      },
      de: {
        translation: deTrans,
      },
      zh: {
        translation: zhTrans,
      },
    },
  });

export default i18n;
