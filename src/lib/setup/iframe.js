import { IframeMessageProxy } from 'iframe-message-proxy';
import setHeight from '../iframe-messages/common/setHeight';
import track from '../iframe-messages/track';

IframeMessageProxy.listen();

// The iframe's parent minimum height is 100%. By setting it's height to 0px,
// the extension will take 100% of the remaining height.
void setHeight(0);
void track('opened');
