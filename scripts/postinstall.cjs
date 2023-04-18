const fs = require('node:fs');
const prodSettings = require('../src/config/appsettings.json');

const DEV_SETTINGS_PATH = './src/config/appsettings.development.json';
const PROD_SETTINGS_PATH = './src/config/appsettings.json';
const INITIAL_PREFIX = 'blip-extension-template';

const changePrefix = () => {
    const currentPrefix = prodSettings.segment.prefix;
    const packageName = process.env.npm_package_name;

    if (currentPrefix === INITIAL_PREFIX) {
        const newProdSettings = {
            ...prodSettings,
            segment: { ...prodSettings.segment, prefix: packageName },
        };

        fs.writeFileSync(
            PROD_SETTINGS_PATH,
            JSON.stringify(newProdSettings, null, 4)
        );

        return packageName;
    }

    return currentPrefix;
};

const main = () => {
    if (fs.existsSync(DEV_SETTINGS_PATH)) {
        return;
    }

    const prefix = changePrefix();

    const devSettings = {
        ...prodSettings,
        segment: { ...prodSettings.segment, prefix },
        env: 'dev',
    };

    fs.writeFileSync(DEV_SETTINGS_PATH, JSON.stringify(devSettings, null, 4));
};

main();
