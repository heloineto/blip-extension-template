/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: { exclude: ['blip-ds/loader'] },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    server: { port: 3000 },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/lib/setup/tests.ts',
        coverage: {
            provider: 'c8',
            all: true,
            include: ['src'],
            reporter: ['text', 'html', 'clover', 'json', 'lcov']
        }
    }
});
