import { IframeMessageProxy } from 'iframe-message-proxy';

const getCurrentLanguage = async () => {
    try {
        const { response } = await IframeMessageProxy.sendMessage({
            action: 'getCurrentLanguage',
        });

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export default getCurrentLanguage;
