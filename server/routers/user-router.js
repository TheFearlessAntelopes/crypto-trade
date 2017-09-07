module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { userController } = controllers;

    router.get('/currencies', userController.getUserCurrencies);
    router.post('/profile', userController.loadProfilePage);
    router.post('/update', userController.updateProfile);

    app.use('/user', router);
};
