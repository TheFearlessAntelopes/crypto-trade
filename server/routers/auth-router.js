const passport = require('passport');

module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { authController } = controllers;

    router.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    router.post('/login', passport.authenticate('local',
        {
            successRedirect: '/',
            failureRedirect: '/auth/login',
            failureFlash: false,
        }));

    router.post('/register', authController.registerUser);
    app.use('/auth', router);
};

