import enTranslation from 'assets/locales/en/translation.json';
import esTranslation from 'assets/locales/es/translation.json';
import ptTranslation from 'assets/locales/pt/translation.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import getCurrentLanguage from '../iframe-messages/getCurrentLanguage';

void i18n
    .use(initReactI18next)
    .use({
        type: 'languageDetector',
        async: true,
        detect: async (callback: (language: string) => void) => {
            const { response } = await getCurrentLanguage();

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

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: {
            translations:
                | typeof enTranslation
                | typeof esTranslation
                | typeof ptTranslation;
        };
    }
}

export default i18n;
