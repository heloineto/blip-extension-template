import productionConfig from './appsettings.json';

const isDevelopment = import.meta.env.MODE === 'development';

// Note: you can add a `appsettings.development.json` file to the config folder
// to use different configuration in development mode
const developmentConfig = await import('./appsettings.development.json').catch(
    () => productionConfig
);

const config = isDevelopment ? developmentConfig : productionConfig;

export default config;
