import config from '@/config';
import { IframeMessageProxy } from 'iframe-message-proxy';
import isDev from '../utils/isDev';

const track = async (
    eventName: string,
    properties?: Record<string, unknown>
) => {
    if (isDev) {
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
