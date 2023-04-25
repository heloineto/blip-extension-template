const fs = require('node:fs');
const prodSettings = require('../../src/config/appsettings.json');

const DEV_SETTINGS_PATH = './src/config/appsettings.development.json';

const createDevSettings = (prefix) => {
    const devSettings = {
        ...prodSettings,
        segment: { ...prodSettings.segment, prefix },
        env: 'dev',
    };

    fs.writeFileSync(DEV_SETTINGS_PATH, JSON.stringify(devSettings, null, 4));
};

module.exports = createDevSettings;
