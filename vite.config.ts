/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        exclude: ['blip-ds/loader']
    },
    server: { port: 3000 },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/lib/setup/tests.ts'
    }
});
