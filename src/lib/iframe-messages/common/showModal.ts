import { IframeMessageProxy } from 'iframe-message-proxy';

interface Parameters {
    body: string;
    title?: string;
    confirm?: string;
    cancel?: string;
}

const showModal = ({
    title,
    body,
    confirm = 'ok',
    cancel = 'cancel',
}: Parameters) => {
    return IframeMessageProxy.sendMessage({
        action: 'showModal',
        content: {
            title,
            body,
            confirm,
            cancel,
        },
    });
};

export default showModal;
