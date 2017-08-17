/* globals __dirname */

const path = require('path');
const fs = require('fs');

module.exports = (data, hashGenerator) => {
    const controllers = {};

    fs.readdirSync(__dirname)
        .filter((file) => file.includes('-controller.js'))
        .map((file) => path.join(__dirname, file))
        .forEach((modulePath) => {
            const normalizedName = normalizeModuleName(modulePath);
            const loadedModule = require(modulePath)(data, hashGenerator);

            controllers[normalizedName] = loadedModule;
        });

    return controllers;
};

const normalizeModuleName = (modulePath) => {
    const normalizedName =
     modulePath.replace(/.*controllers[\/\\](.*)-.*/, '$1') + 'Controller';

    return normalizedName;
};
