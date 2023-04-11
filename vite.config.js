import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), istanbul({ cypress: true })],
    optimizeDeps: { exclude: ['blip-ds/loader'] },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    build: { sourcemap: true },
    server: { port: 3000 },
});
