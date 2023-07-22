import coverageTask from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  component: {
    video: false,
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    setupNodeEvents: (on, config) => {
      coverageTask(on, config);

      return config;
    },
  },
});
