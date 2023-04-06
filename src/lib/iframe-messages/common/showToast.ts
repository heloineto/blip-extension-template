import { IframeMessageProxy } from 'iframe-message-proxy';

export type ToastTypes = 'info' | 'success' | 'warning' | 'danger' | 'refresh';

const showToast = async (toast: {
    type: ToastTypes;
    message: string;
    title?: string;
    duration?: number;
}) => {
    await IframeMessageProxy.sendMessage({
        action: 'toast',
        content: toast,
    });
};

export default showToast;
