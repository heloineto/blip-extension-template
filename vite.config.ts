import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: { exclude: ['blip-ds/loader'] },
    server: { port: 3000 },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
});
