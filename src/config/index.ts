import productionConfig from './appsettings.json';

export type Config = typeof productionConfig;

let config: Config;

try {
    if (import.meta.env.DEV) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        config = require('./appsettings.development.json') as Config;
    } else {
        config = productionConfig;
    }
} catch (error) {
    config = productionConfig;
}

export default config;
