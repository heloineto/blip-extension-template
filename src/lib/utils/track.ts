import iframe from 'blip-iframe';
import config from '../../config';
import isDev from './isDev';

const track = async <TKey extends string>(
  eventName: string,
  properties?: Record<TKey, unknown>
) => {
  if (isDev) {
    return false;
  }

  const trackEvent = `${config.segment.prefix}-${eventName}`;
  const payload = { ...properties, environment: config.env };

  await iframe.segment({
    method: 'createApplicationTrack',
    parameters: { trackEvent, payload },
  });
};

export default track;
