const passport = require('passport');

module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { userController } = controllers;

    router.get('/profile', userController.loadProfilePage);
    router.post('/profile', passport.authenticate('local'), userController.updateProfile);

    app.use('/api/auth', router);
};
