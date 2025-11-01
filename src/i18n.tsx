import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'tr',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

if (import.meta.hot) {
  import.meta.hot.on('locales-update', () => {
    i18n.reloadResources().then(() => {
      i18n.changeLanguage(i18n.language);
    });
  });
}

export default i18n;
