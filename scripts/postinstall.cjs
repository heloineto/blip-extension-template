const fs = require('node:fs');
const path = require('node:path');
const prodSettings = require('../src/config/appsettings.json');

const DEV_SETTINGS_PATH = './src/config/appsettings.development.json';
const PROD_SETTINGS_PATH = './src/config/appsettings.json';
const INITIAL_PREFIX = 'extension-template';
const INITIAL_PACKAGE_NAME = 'blip-extension-template';

const changePackageName = (name) => {
    const packageJson = require('../package.json');

    if (packageJson.name !== INITIAL_PACKAGE_NAME) {
        return packageJson.name;
    }

    fs.writeFileSync(
        './package.json',
        JSON.stringify({ ...packageJson, name }, null, 4)
    );

    return name;
};

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

const createDevSettings = (prefix) => {
    const devSettings = {
        ...prodSettings,
        segment: { ...prodSettings.segment, prefix },
        env: 'dev',
    };

    fs.writeFileSync(DEV_SETTINGS_PATH, JSON.stringify(devSettings, null, 4));
};

const postinstall = () => {
    if (fs.existsSync(DEV_SETTINGS_PATH)) {
        return;
    }

    const folderName = path.basename(path.resolve(process.cwd()));
    const packageName = changePackageName(folderName);

    const newPrefix = packageName.startsWith('blip-')
        ? packageName.replace('blip-', '')
        : packageName;

    const prefix = changePrefix(newPrefix);
    createDevSettings(prefix);
};

postinstall();
