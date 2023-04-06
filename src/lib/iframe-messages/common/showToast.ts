import { IframeMessageProxy } from 'iframe-message-proxy';

export type ToastTypes = 'info' | 'success' | 'warning' | 'danger' | 'refresh';
interface Parameters {
    type: ToastTypes;
    message: string;
    title?: string;
    duration?: number;
}

const showToast = async (toast: Parameters) => {
    await IframeMessageProxy.sendMessage({
        action: 'toast',
        content: toast,
    });
};

export default showToast;
