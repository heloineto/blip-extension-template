import { defineConfig } from 'cypress';

export default defineConfig({
    component: {
        video: false,
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack',
        },
    },
});
