import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import jsonEN from '../../assets/i18n/en.json';
import jsonBY from '../../assets/i18n/by.json';
import jsonRU from '../../assets/i18n/ru.json';

function getLanguage() {
  // eslint-disable-next-line no-undef
  const lng = window.location.pathname.split('/')[1];
  return lng || 'ru';
}

i18n
  // .use(LanguageDetector) // use to set basic language of user's browser language
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: jsonEN,
      },
      by: {
        translations: jsonBY,
      },
      ru: {
        translations: jsonRU,
      },
    },
    lng: getLanguage(),
    fallbackLng: 'ru',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    // keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
