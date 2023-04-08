import { IframeMessageProxy } from 'iframe-message-proxy';

const getApplication = async (fullIdentity?: string) => {
    try {
        // TODO: Add a type for the response
        const response = await IframeMessageProxy.sendMessage({
            action: 'getApplication',
            content: fullIdentity ?? null,
        });

        return response;
    } catch (error) {
        return null;
    }
};

export default getApplication;
