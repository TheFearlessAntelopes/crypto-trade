const config = require('./config/config');
const app = require('./config')();

app.then((application) => {
    application.listen(config.port, () =>
        console.log('Express server listening on port ' + config.port)
    );
});
