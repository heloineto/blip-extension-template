import { IframeMessageProxy } from 'iframe-message-proxy';

const getUser = async () => {
    // TODO: Add a type for the response
    const response = await IframeMessageProxy.sendMessage({
        action: 'sendCommand',
        content: {
            command: {
                method: 'get',
                uri: '/account',
            },
            destination: 'BlipService',
        },
    });

    return response;
};

export default getUser;
