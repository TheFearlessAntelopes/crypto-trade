module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { userController } = controllers;

    router.get('/currencies', userController.getUserCurrencies);

    app.use('/user', router);
};
