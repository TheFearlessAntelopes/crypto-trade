/* globals __dirname */

const path = require('path');
const fs = require('fs');

const collectionsModule = require('../database').collections;

module.exports = (db, loadedModels, validator) => {
    const data = {};
    fs.readdirSync(__dirname)
        .filter((file) => file.includes('-data.js'))
        .map((file) => path.join(__dirname, file))
        .forEach((modulePath) => {
            const normalizedName = normalizeModuleName(modulePath);
            
            const collectionToUse = collectionsModule(db, normalizedName);
            
            const loadedModule = require(modulePath)(collectionToUse,
                loadedModels, validator);

            data[normalizedName] = loadedModule;
        });
    
        
    return data;
};

const normalizeModuleName = (modulePath) => {
    const normalizedName =
     modulePath.replace(/.*data[\/\\](.*)-.*/, '$1') + 'Data';

    return normalizedName;
};
