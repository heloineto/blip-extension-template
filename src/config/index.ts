import productionConfig from './appsettings.json';

export type Config = typeof productionConfig;

let config: Config;

try {
    const developmentConfig =
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('./appsettings.development.json') as Config;
    config = import.meta.env.DEV ? developmentConfig : productionConfig;
} catch (error) {
    config = productionConfig;
}

export default config;
