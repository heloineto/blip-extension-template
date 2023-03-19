import 'i18next';
import type translations from '../../public/locales/pt/translation.json';

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: {
            translations: typeof translations;
        };
    }
}
