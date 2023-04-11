import config from '@/config';
import { IframeMessageProxy } from 'iframe-message-proxy';

const track = async (eventName, properties) => {
    if (import.meta.env.DEV) {
        return false;
    }

    const trackEvent = `${config.segment.prefix}-${eventName}`;
    const payload = { ...properties, environment: config.env };

    await IframeMessageProxy.sendMessage({
        action: 'segment',
        content: {
            method: 'createApplicationTrack',
            parameters: { trackEvent, payload },
        },
    });
};

export default track;
