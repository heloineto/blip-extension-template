import { IframeMessageProxy } from 'iframe-message-proxy';

const getUser = async () => {
    try {
        const { response } = await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content: {
                command: {
                    method: 'get',
                    uri: '/account',
                },
                destination: 'BlipService',
            },
        });

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export default getUser;
