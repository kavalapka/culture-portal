import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import jsonEN from '../../assets/i18n/en.json';
import jsonBE from '../../assets/i18n/be.json';
import jsonRU from '../../assets/i18n/ru.json';

function getLanguage() {
  const lng = window.location.pathname.split('/')[1];
  console.log(`DETECTED: ${lng}`);
  return lng;
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
      be: {
        translations: jsonBE,
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
