import { IframeMessageProxy } from 'iframe-message-proxy';

const setHeight = async (height) => {
    await IframeMessageProxy.sendMessage({
        action: 'heightChange',
        content: height,
    });
};

export default setHeight;
