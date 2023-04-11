import { IframeMessageProxy } from 'iframe-message-proxy';

const startLoading = async () => {
    await IframeMessageProxy.sendMessage({ action: 'startLoading' });
};

export default startLoading;
