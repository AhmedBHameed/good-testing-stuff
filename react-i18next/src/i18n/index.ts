import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json';
import de from './de.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'de',
    debug: false,
    resources: {
      de: {
        translation: de,
      },
      en: {
        translation: en,
      },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
