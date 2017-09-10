module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { userController } = controllers;

    router.post('/currencies', userController.getUserCurrencies);
    router.post('/profile', userController.loadProfilePage);
    router.post('/update', userController.updateProfile);
    router.post('/sell', userController.sellCurrency);
    router.post('/buy', userController.buyCurrency);

    app.use('/user', router);
};
