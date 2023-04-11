import { IframeMessageProxy } from 'iframe-message-proxy';
import type { GetUserResponse } from './types/getUser';

const getUser = async () => {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content: {
                command: {
                    method: 'get',
                    uri: '/account',
                },
                destination: 'BlipService',
            },
        })) as GetUserResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export default getUser;
