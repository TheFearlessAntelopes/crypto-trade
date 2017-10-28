module.exports = () => {
    const config = require('./config');

    const app = require('./express-conf')();
    const express = require('express');
    const hashGenerator = require('../common/hash-generator');
    const validator = require('../common/validator');

    const loadedModels = require('../models')();

    return require('../database').connection(config.connectionString)
        .then((db) => {
            const data = require('../data')(db, loadedModels, validator);
            const controllers = require('../controllers')(data, hashGenerator);

            const application = require('./auth-conf')(app, data,
                db, config.secretString, hashGenerator);

            require('../routers')(application,
                express, controllers);

            return Promise.resolve(application);
        });
};
