import { IframeMessageProxy } from 'iframe-message-proxy';
import type { GetCurrentLanguageResponse } from './types/getCurrentLanguage';

const getCurrentLanguage = async () => {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'getCurrentLanguage',
        })) as GetCurrentLanguageResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export default getCurrentLanguage;
