import { IframeMessageProxy } from 'iframe-message-proxy';

const PORTAL_URL = 'postmaster@portal.blip.ai';

const getBot = async (identity: string) => {
    try {
        // TODO: Add a type for the response
        const response = await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content: {
                destination: 'BlipService',
                command: {
                    method: 'get',
                    to: PORTAL_URL,
                    uri: `/applications/${identity}`,
                },
            },
        });

        return response;
    } catch (error) {
        return false;
    }
};

export default getBot;
