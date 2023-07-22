import iframe from 'blip-iframe';
import track from '../../lib/utils/track';

iframe.imp.listen();

// The iframe's parent minimum height is 100%. By setting it's height to 0px,
// the extension will take 100% of the remaining height.
void iframe.heightChange(0);
void track('opened');
