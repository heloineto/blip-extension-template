import fs from 'node:fs';
import prodSettings from '../src/config/appsettings.json' assert { type: 'json' };

const DEV_SETTINGS_PATH = './src/config/appsettings.development.json';

const main = () => {
    if (fs.existsSync(DEV_SETTINGS_PATH)) {
        return;
    }

    fs.writeFileSync(
        DEV_SETTINGS_PATH,
        JSON.stringify({ ...prodSettings, env: 'dev' }, null, 4)
    );
};

main();
