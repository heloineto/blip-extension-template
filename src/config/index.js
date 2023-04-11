import developmentConfig from './appsettings.development.json';
import productionConfig from './appsettings.json';

const config = import.meta.env.DEV ? developmentConfig : productionConfig;

export default config;
