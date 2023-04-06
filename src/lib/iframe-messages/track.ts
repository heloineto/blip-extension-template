import config from '@/config';
import { IframeMessageProxy } from 'iframe-message-proxy';

const track = async (
    eventName: string,
    properties?: Record<string, unknown>
) => {
    if (import.meta.env.DEV) {
        return false;
    }

    const trackEvent = `${config.segment.prefix}-${eventName}`;
    const payload = { ...properties, environment: config.env };

    try {
        await IframeMessageProxy.sendMessage({
            action: 'segment',
            content: {
                method: 'createApplicationTrack',
                parameters: { trackEvent, payload },
            },
        });

        return true;
    } catch (error) {
        return false;
    }
};

export default track;
