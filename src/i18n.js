import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['ar', 'en', 'tr', 'hi'],
    interpolation: {
      escapeValue: false,
    },
    direction: {
      ar: 'rtl',
      en: 'ltr',
      tr: 'ltr',
      hi: 'ltr'
    }
  });

export default i18n;