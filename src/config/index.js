import isDev from '../lib/utils/isDev';
import productionConfig from './appsettings.json';

let config;

try {
    config = isDev
        ? require('./appsettings.development.json')
        : productionConfig;
} catch (error) {
    config = productionConfig;
}

export default config;
