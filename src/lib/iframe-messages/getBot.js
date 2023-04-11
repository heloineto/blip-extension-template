import { IframeMessageProxy } from 'iframe-message-proxy';

const PORTAL_URL = 'postmaster@portal.blip.ai';

const getBot = async (fullIdentity) => {
    try {
        const { response } = await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content: {
                destination: 'BlipService',
                command: {
                    method: 'get',
                    to: PORTAL_URL,
                    uri: `/applications/${fullIdentity}`,
                },
            },
        });

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export default getBot;
