import { IframeMessageProxy } from 'iframe-message-proxy';
import React from 'react';
import App from './App';
import './index.css';
import track from './lib/iframe-messages/track';
import './lib/setup/blip-ds';
import './lib/setup/fonts';
import './lib/setup/i18n';
import root from './lib/setup/root';

IframeMessageProxy.listen();
void track('opened');

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
