import { IframeMessageProxy } from 'iframe-message-proxy';

const getCurrentLanguage = async () => {
    // TODO: Add a type for the response
    const response = await IframeMessageProxy.sendMessage({
        action: 'getCurrentLanguage',
    });

    return response;
};

export default getCurrentLanguage;
