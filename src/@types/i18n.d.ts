import enTranslation from '../assets/locales/en/translation.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translations: typeof enTranslation;
    };
  }
}
