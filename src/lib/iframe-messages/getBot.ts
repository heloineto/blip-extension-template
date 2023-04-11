import { IframeMessageProxy } from 'iframe-message-proxy';
import type { GetBotResponse } from './types/getBot';

const PORTAL_URL = 'postmaster@portal.blip.ai';

const getBot = async (fullIdentity: string) => {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content: {
                destination: 'BlipService',
                command: {
                    method: 'get',
                    to: PORTAL_URL,
                    uri: `/applications/${fullIdentity}`,
                },
            },
        })) as GetBotResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export default getBot;
