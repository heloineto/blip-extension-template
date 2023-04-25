const fs = require('node:fs');
const prodSettings = require('../../src/config/appsettings.json');

const PROD_SETTINGS_PATH = './src/config/appsettings.json';
const INITIAL_PREFIX = 'blip-extension-template';

const changePrefix = (prefix) => {
    const currentPrefix = prodSettings.segment.prefix;

    if (currentPrefix !== INITIAL_PREFIX) {
        return currentPrefix;
    }

    const newProdSettings = {
        ...prodSettings,
        segment: { ...prodSettings.segment, prefix },
    };

    fs.writeFileSync(
        PROD_SETTINGS_PATH,
        JSON.stringify(newProdSettings, null, 4)
    );

    return prefix;
};

module.exports = changePrefix;
