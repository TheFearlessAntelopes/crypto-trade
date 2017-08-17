/* globals __dirname */

const path = require('path');
const fs = require('fs');

module.exports = (app, express, controllers) => {
    fs.readdirSync(__dirname)
        .filter((file) => file.includes('-router.js'))
        .map((file) => path.join(__dirname, file))
        .forEach((modulePath) => {
            require(modulePath)({ app, express, controllers });
        });

    app
        .get('*', function (req, res) {
            res
                .status(200)
                .sendFile(path.join(__dirname, '/../../dist/index.html'));
        });
};
