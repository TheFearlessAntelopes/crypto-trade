const passport = require('passport');

module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { authController } = controllers;

    router.get('/logout', authController.logoutUser);
    router.post('/login', passport.authenticate('local'), authController.loginUser);
    router.post('/register', authController.registerUser);

    app.use('/api/auth', router);
};

