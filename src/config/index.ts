import productionConfig from './appsettings.json';

// Note: you can add a `appsettings.development.json` file to the config folder
// to use different configuration in development mode
const developmentConfig = await import('./appsettings.development.json').catch(
    () => productionConfig
);

const config = import.meta.env.DEV ? developmentConfig : productionConfig;

export default config;
