/* eslint-disable @typescript-eslint/no-empty-function */

vi.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {})
            }
        };
    },
    Trans: ({ i18nKey }: { i18nKey: string }) => i18nKey
}));

export {};
