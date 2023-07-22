import isDev from '../lib/utils/isDev';
import productionConfig from './appsettings.json';

export type Config = typeof productionConfig;
let config: Config;

try {
  config = isDev
    ? (require('./appsettings.development.json') as Config)
    : productionConfig;
} catch (error) {
  config = productionConfig;
}

export default config;
