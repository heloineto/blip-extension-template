import enTranslation from '@/assets/locales/en/translation.json';
import esTranslation from '@/assets/locales/es/translation.json';
import ptTranslation from '@/assets/locales/pt/translation.json';

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
