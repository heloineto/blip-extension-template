import '@testing-library/jest-dom';
import '@webcomponents/webcomponentsjs';

import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';
await applyPolyfills().then(() => defineCustomElements(window));
