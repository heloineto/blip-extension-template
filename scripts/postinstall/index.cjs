const changePackageName = require('./changePackageName.cjs');
const changePrefix = require('./changePrefix.cjs');
const createDevSettings = require('./createDevSettings.cjs');
const fs = require('node:fs');
const path = require('node:path');

const DEV_SETTINGS_PATH = './src/config/appsettings.development.json';

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
