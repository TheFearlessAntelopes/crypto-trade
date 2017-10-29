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

    // TO FIX ROUTING HERE!!!
    // JS - /tutorial static
    //app.use('/tutorial', express.static('ng2/views/app/tutorial'));
    // JS - /tutorial/chapter/* send index file 
    // app.all(/^\/currency$/, (req, res) => {
    //     res.redirect('/currency/');
    // });
    app.use('/', (req, res) => {
        res
            .status(200)
            .sendFile(path.join(__dirname, '/../../dist/index.html'));
    });

    // app
    //     // .get('/*', function (req, res) {
    //     //     res.redirect('/')
    //     // })
    //     .get('/', function (req, res) {
    //         console.log('Here 1');
    //         res
    //             .status(200)
    //             .sendFile(path.join(__dirname, '/../../dist/index.html'));
    //     });
};
