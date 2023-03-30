import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';

import './i18n-mock';

afterEach(() => {
    cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
    render(ui, {
        // Wrap provider(s) here if needed
        wrapper: ({ children }) => children,
        ...options
    });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
