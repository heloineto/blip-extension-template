import { IframeMessageProxy } from 'iframe-message-proxy';
import type { GetApplicationResponse } from './types/getApplication';

const getApplication = async (fullIdentity?: string) => {
    try {
        const { response } = (await IframeMessageProxy.sendMessage({
            action: 'getApplication',
            content: fullIdentity ?? null,
        })) as GetApplicationResponse;

        return { response, error: null };
    } catch (error) {
        return { response: null, error };
    }
};

export default getApplication;
