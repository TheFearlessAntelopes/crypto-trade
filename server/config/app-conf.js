module.exports = () => {
    const config = require('./config');
    
    const app = require('./express-conf')();
    const express = require('express');
    const hashGenerator = require('../common/hash-generator');

    const loadedModels = require('../models')();

    return require('../database').connection(config.connectionString)
        .then((db) => {
            const data = require('../data')(db, loadedModels);
            const controllers = require('../controllers')(data, hashGenerator);
            
            const application = require('./auth-conf')(app, data,
                db, config.secretString, hashGenerator); //, hashGenerator);

            require('../routers')(application,
                express, controllers);

            // app.use((err, req, res, next) => {
            //     return res.
            //         render('page-not-found', { errorMessage: err.message });
            // });

            return Promise.resolve(application);
        });
};
