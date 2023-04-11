import { IframeMessageProxy } from 'iframe-message-proxy';

const getApplication = async (fullIdentity) => {
    try {
        const { response } = await IframeMessageProxy.sendMessage({
            action: 'getApplication',
            content: fullIdentity ?? null,
        });

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export default getApplication;
