const fs = require('node:fs');

const INITIAL_PACKAGE_NAME = 'blip-extension-template';

const changePackageName = (name) => {
    const packageJson = require('../../package.json');

    if (packageJson.name !== INITIAL_PACKAGE_NAME) {
        return packageJson.name;
    }

    fs.writeFileSync(
        './package.json',
        JSON.stringify({ ...packageJson, name }, null, 4)
    );

    return name;
};

module.exports = changePackageName;
