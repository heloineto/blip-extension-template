import iframe from 'blip-iframe';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../../assets/locales/en/translation.json';
import esTranslation from '../../assets/locales/es/translation.json';
import ptTranslation from '../../assets/locales/pt/translation.json';

void i18n
  .use(initReactI18next)
  .use({
    type: 'languageDetector',
    async: true,
    detect: async (callback) => {
      const { response } = await iframe.getCurrentLanguage();

      const fallback = 'pt';
      const language = response ?? fallback;
      const isSupported = ['en', 'es', 'pt'].includes(language);

      callback(isSupported ? language : fallback);
    },
  })
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
      pt: { translation: ptTranslation },
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
